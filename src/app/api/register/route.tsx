import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/userSchema';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants';

export async function POST(req: Request) {
  try {
    const { password, email, firstName, lastName } = await req.json();
    const hashedPass = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const doesExist = await User.findOne({ email }).select('_id');

    if (doesExist) {
      return NextResponse.json(
        { status: 'error', message: 'User with this email already exists' },
        // 409 - status for conflict
        { status: 409 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Email is invalid',
          data: {
            details: `The local part (before the '@' symbol) should be between 1 and 30 characters and not contain spaces or the '@' symbol.
            The domain part (after the '@' symbol and before the '.') should be between 1 and 20 characters and not contain spaces or the '@' symbol.
            The top-level domain (after the dot) should be between 1 and 20 characters and not contain spaces or the '@' symbol.`,
          },
        },

        { status: 400 }
      );
    }

    if (!PASSWORD_REGEX.test(password)) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Password is invalid',
          data: {
            details: `Contains at least one uppercase letter.
            Contains at least one lowercase letter.
            Contains at least one digit.
            Contains at least one of the specified special characters.
            Is at least 8 characters long and no longer than 50 characters.`,
          },
        },

        { status: 400 }
      );
    }

    const user = await User.create({ email, firstName, lastName, password: hashedPass });

    return NextResponse.json(
      { status: 'success', message: 'USer created successfully', data: { user } },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 'error', message: 'Server Error' }, { status: 500 });
  }
}
