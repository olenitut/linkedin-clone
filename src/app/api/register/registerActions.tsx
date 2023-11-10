'use server';

import axios from 'axios';

export async function registerUser(data: FormData) {
  const { password, email, firstName, lastName } = Object.fromEntries(data);

  const res = await axios.post(`${process.env.BASE_URL}/api/register`, {
    password,
    email,
    firstName,
    lastName,
  });
}
