import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const d = await req.json();
    console.log(d);
    return NextResponse.json({ message: 'OK' }, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}
