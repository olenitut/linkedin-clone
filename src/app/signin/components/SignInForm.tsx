'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { CustomInput } from '@/components/ui/inputs';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';

export function SignInForm() {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signinResponse = await signIn('credentials', {
      email: loginEmail,
      password: loginPass,
      redirect: false,
      callbackUrl: '/feed',
    });

    if (signinResponse?.error) {
      toast.error(
        'Incorrect email or password. Please double-check your credentials and try again.'
      );
    }

    if (signinResponse?.url) {
      router.push(signinResponse.url);
      toast.success('You are successfully signed in.');
    }
  };

  return (
    <form className='flex w-full flex-col gap-7' onSubmit={handleLogin}>
      <CustomInput
        isRequired
        label='Email'
        placeholder='Email'
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <div className='flex flex-col items-center gap-1'>
        <CustomInput
          isRequired
          type='password'
          placeholder='Password'
          label='Password'
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        />

        <Link href='/forgot-password' className='self-end'>
          <Typography variant={TypographyVariant.Small} className='text-black-backdrop'>
            Forgot?
          </Typography>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <Typography variant={TypographyVariant.Small} className='opacity-70'>
          Don&apos;t have an account?
        </Typography>
        <Link
          href='/signup'
          className='text-red-900 transition-colors delay-150 hover:text-red-700 '
        >
          <Typography variant={TypographyVariant.Small}>Sign Up</Typography>
        </Link>
      </div>

      <Button
        type='submit'
        variant={ButtonVariant.Primary}
        size={ButtonSize.Full}
        className='tracking-wide disabled:cursor-default disabled:opacity-50'
      >
        Login
      </Button>
    </form>
  );
}
