'use server';

import axios from 'axios';

export async function registerUser(data: FormData) {
  const { password, email, firstName, lastName } = Object.fromEntries(data);

  const res = await axios.post('http://localhost:3000//api/register', {
    password,
    email,
    firstName,
    lastName,
  });
}
