'use client';

import { FormEvent, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import { CustomInput } from '@/components/ui/inputs';
import { ButtonSize, ButtonVariant } from '@/components/ui/buttons/main/button-variants';
import { Typography } from '@/components/ui/typography';
import { TypographyVariant } from '@/components/ui/typography/typography-variants';

import { Button } from '../../components/ui/buttons';

function TestPage() {
  const session = useSession();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('credentials', { email: loginEmail, password: loginPass, redirect: false });
  };

  return (
    <div className='mt-10'>
      <Typography variant={TypographyVariant.h2} as='h3' className='my-8 text-center'>
        Sign In
      </Typography>
      <form onSubmit={handleLogin} className='mx-auto flex w-[400px] flex-col gap-4'>
        <CustomInput
          placeholder='Email'
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <CustomInput
          placeholder='Password'
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        />
        <Button type='submit' variant={ButtonVariant.Primary} size={ButtonSize.Full}>
          LOGIN
        </Button>
      </form>

      <p>{session?.data?.user?.name}</p>
      <p>{session?.data?.user?.email}</p>

      <Button
        onClick={() => signOut()}
        variant={ButtonVariant.Secondary}
        size={ButtonSize.Medium}
        className='mx-auto my-8 w-[150px]'
      >
        LOGOUT
      </Button>
    </div>
  );
}
export default TestPage;
