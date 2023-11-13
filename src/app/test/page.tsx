'use client';

import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import { signup } from '@/actions/signup';
import { CustomInput } from '@/components/ui/inputs';
import { ButtonSize, ButtonVariant } from '@/components/ui/buttons/main/button-variants';
import { getIssues } from '@/lib';
import { Typography } from '@/components/ui/typography';
import { TypographyVariant } from '@/components/ui/typography/typography-variants';

import { Button } from '../../components/ui/buttons';

const initialState = {
  issues: null,
  error: null,
};

const toastId = 'sign-up-error';

function TestPage() {
  const session = useSession();

  const [state, formAction] = useFormState(signup, initialState);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const signupIssues = getIssues(state);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('credentials', { email: loginEmail, password: loginPass, redirect: false });
  };

  const notify = () => {
    toast.error(state.error, { toastId });
  };

  return (
    <div className='mt-10'>
      <Typography variant={TypographyVariant.h2} className='mb-4 text-center'>
        Sign Up
      </Typography>
      <form action={formAction} className='mx-auto flex w-[400px] flex-col gap-4'>
        <CustomInput placeholder='First Name' name='firstName' isRequired />
        <CustomInput placeholder='Last Name' name='lastName' isRequired />

        <CustomInput placeholder='Email' name='email' isRequired error={signupIssues?.email} />

        <CustomInput
          placeholder='Password'
          name='password'
          isRequired
          error={signupIssues?.password}
        />

        <Button type='submit' variant={ButtonVariant.Primary} size={ButtonSize.Full}>
          submit
        </Button>
      </form>

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

      {/* LOGOUT */}
      <Button
        onClick={() => signOut()}
        variant={ButtonVariant.Secondary}
        size={ButtonSize.Medium}
        className='mx-auto my-8 w-[150px]'
      >
        LOGOUT
      </Button>

      {state.error && notify()}
    </div>
  );
}
export default TestPage;
