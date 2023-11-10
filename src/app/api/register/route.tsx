import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/userSchema';

export async function POST(req: Request) {
  try {
    const { password, email, firstName, lastName } = await req.json();
    const hashedPass = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ email, firstName, lastName, password: hashedPass });

    return NextResponse.json({ message: 'OK' }, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}
