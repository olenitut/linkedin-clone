'use client';

import { toast } from 'react-toastify';

import { Container } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { CustomInput } from '@/components/ui/inputs';
import { BackButton, Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';

export default function ForgotPassword() {
  return (
    <div className='relative mx-auto flex h-[calc(100vh-64px)] min-h-[600px] w-full max-w-7xl items-center justify-center overflow-hidden md:min-h-[780px]'>
      <Container className='max-w-[620px]'>
        <div className='flex flex-col items-center gap-4'>
          <BackButton className='self-start' />

          <div className='flex w-full max-w-[620px] flex-col items-center justify-center gap-6 rounded-md bg-red-200 px-10 pb-12 pt-8'>
            <Typography variant={TypographyVariant.h4} as='h1' className='font-normal opacity-80'>
              Forgot Password?
            </Typography>
            <Typography variant={TypographyVariant.Base}>
              Please provide the email address associated with your account. We will send you
              detailed instructions on how to reset your password.
            </Typography>
            <form className='flex w-full flex-col items-center gap-7'>
              <CustomInput placeholder='Email' isRequired />
              <Button
                type='submit'
                variant={ButtonVariant.Primary}
                size={ButtonSize.Medium}
                onClick={() => toast("Isn't implemented yet")}
              >
                Reset Password
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
