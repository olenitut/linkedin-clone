'use client';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { Container } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { CustomInput } from '@/components/ui/inputs';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { signup } from '@/actions/signup';
import { getIssues } from '@/lib';
import { Spinner } from '@/components/ui/spinner';
import { Modal } from '@/components/ui/modals';

const initialState = {
  issues: null,
  error: null,
  success: null,
};

const toastId = 'sign-up-error';

export default function SignUp() {
  const [state, formAction] = useFormState(signup, initialState);
  const { pending } = useFormStatus();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(state);

  const signupIssues = getIssues(state);

  const notify = () => {
    toast.error(state.error, { toastId });
  };

  return (
    <div className='relative flex items-center justify-center w-full overflow-hidden h-[calc(100vh-64px)] md:min-h-[780px] min-h-[600px] max-w-7xl mx-auto'>
      <Container className='max-w-[420px]'>
        <div className='flex flex-col items-center justify-center gap-6 rounded-xl bg-red-200 px-10 pt-8 pb-12 w-full'>
          <Typography variant={TypographyVariant.h4} as='h1' className='font-normal opacity-80'>
            Sign Up
          </Typography>
          <form action={formAction} className='flex flex-col gap-7 w-full'>
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

            <div className='flex gap-2 items-center justify-center'>
              <Typography variant={TypographyVariant.Small} className='opacity-70'>
                Already a member?
              </Typography>
              <Link
                href='/signin'
                className='hover:text-red-700 text-red-900 transition-colors delay-150'
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
              className='tracking-wide disabled:opacity-50 disabled:cursor-default'
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
      <div className='absolute inset-0 left-[60px] bg-signup-pattern bg-cover bg-center bg-no-repeat h-full -z-[1] overflow-hidden hidden md:block' />
      {state.error && notify()}

      <Spinner isLoading={pending} />
      <Modal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        title='Welcome to Your Professional Network!'
        description="Congratulations! Your account on WorkWave has been successfully created. You're now part of a global community of professionals."
      >
        <Link href='/signin'>
          <Button variant={ButtonVariant.Primary} size={ButtonSize.Small}>
            Sign In
          </Button>
        </Link>
      </Modal>
    </div>
  );
}
