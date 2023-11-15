import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/userSchema';

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

    const user = await User.create({ email, firstName, lastName, password: hashedPass });

    return NextResponse.json(
      { status: 'success', message: 'User created successfully', data: { user } },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ status: 'error', message: 'Server Error' }, { status: 500 });
  }
}
