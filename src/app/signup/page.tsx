'use client';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { Container } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { CustomInput } from '@/components/ui/inputs';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { signup } from '@/actions/signup';
import { getIssues } from '@/lib';

const initialState = {
  issues: null,
  error: null,
};

const toastId = 'sign-up-error';

export default function SignUp() {
  const [state, formAction] = useFormState(signup, initialState);

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
          <form action={formAction} className='flex flex-col gap-6 w-full'>
            <CustomInput placeholder='First Name' name='firstName' isRequired />
            <CustomInput placeholder='Last Name' name='lastName' isRequired />

            <CustomInput placeholder='Email' name='email' isRequired error={signupIssues?.email} />

            <CustomInput
              placeholder='Password'
              name='password'
              isRequired
              error={signupIssues?.password}
            />

            <div className='flex gap-2 items-center justify-center'>
              <Typography variant={TypographyVariant.Small} className='opacity-70'>
                Already a member?
              </Typography>
              <Link href='/signin'>
                <Typography variant={TypographyVariant.Small} className='text-red-900'>
                  Sign In
                </Typography>
              </Link>
            </div>

            <Button
              type='submit'
              variant={ButtonVariant.Primary}
              size={ButtonSize.Full}
              className='tracking-wide'
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
      <div className='absolute inset-0 left-[60px] bg-signup-pattern bg-cover bg-center bg-no-repeat h-full -z-[1] overflow-hidden hidden md:block' />
      {state.error && notify()}
    </div>
  );
}