'use client';

import axios from 'axios';
import { FormEvent, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const TestPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //LOGIN

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const session = useSession();
  console.log(session.data?.user);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };

    const res = await axios.post(`/api/register`, data);

    console.log(res);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('credentials', { email: loginEmail, password: loginPass, redirect: false });

    //if errror, we can set it as state and whow in ui
    //if no errro, we can redirect to the main page
  };

  return (
    <div>
      {/* REGISTER */}
      <form onSubmit={handleRegister}>
        <input
          placeholder='firstName'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder='lastName'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>submit</button>
      </form>

      <hr />
      {/* LOGIN */}
      <form onSubmit={handleLogin}>
        <input
          placeholder='email'
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          placeholder='password'
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        />
        <button>LOGIN</button>
      </form>

      <p>{session?.data?.user?.name}</p>
      <p>{session?.data?.user?.email}</p>

      {/* LOGOUT */}
      <button onClick={() => signOut()}>LOGOUT</button>
    </div>
  );
};
export default TestPage;
