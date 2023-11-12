'use client';

import axios from 'axios';
import { FormEvent, useRef, useState } from 'react';

const TestPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };

    const res = await axios.post(`/api/register`, data);

    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};
export default TestPage;
