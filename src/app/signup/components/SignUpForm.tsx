'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { CustomInput } from '@/components/ui/inputs';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { Spinner } from '@/components/ui/spinner';
import { signup } from '@/actions/signup';
import { getIssues } from '@/lib';
import { SuccessModal } from '@/app/signup/components/SuccessModal';

const initialState = {
  issues: null,
  error: null,
  success: null,
};

const toastId = 'sign-up-error';

export function SignUpForm() {
  const [state, formAction] = useFormState(signup, initialState);
  const { pending } = useFormStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (state.success) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [state]);

  const signupIssues = getIssues(state);

  const notify = () => {
    toast.error(state.error, { toastId });
  };

  return (
    <>
      <form action={formAction} className='flex w-full flex-col gap-7'>
        <CustomInput placeholder='First Name' name='firstName' isRequired />
        <CustomInput placeholder='Last Name' name='lastName' isRequired />

        <CustomInput placeholder='Email' name='email' isRequired error={signupIssues?.email} />

        <CustomInput
          type='password'
          placeholder='Password'
          name='password'
          isRequired
          error={signupIssues?.password}
        />

        <div className='flex items-center justify-center gap-2'>
          <Typography variant={TypographyVariant.Small} className='opacity-70'>
            Already a member?
          </Typography>
          <Link
            href='/signin'
            className='text-red-900 transition-colors delay-150 hover:text-red-700'
          >
            <Typography variant={TypographyVariant.Small}>Sign In</Typography>
          </Link>
        </div>

        <Button
          isDisabled={pending}
          aria-disabled={pending}
          type='submit'
          variant={ButtonVariant.Primary}
          size={ButtonSize.Full}
          className='tracking-wide disabled:cursor-default disabled:opacity-50'
        >
          Register
        </Button>
      </form>

      {state.error && notify()}

      <Spinner isLoading={pending} />

      <SuccessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
