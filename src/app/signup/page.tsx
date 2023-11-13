'use client';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { Container } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { CustomInput } from '@/components/ui/inputs';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { signup } from '@/actions/signup';
import { getIssues } from '@/lib';
import { Spinner } from '@/components/ui/spinner';
import { Modal } from '@/components/ui/modals';
import { SignUpForm } from '@/app/signup/components';

export default function SignUp() {
  return (
    <div className='relative flex items-center justify-center w-full overflow-hidden h-[calc(100vh-64px)] md:min-h-[780px] min-h-[600px] max-w-7xl mx-auto'>
      <Container className='max-w-[420px]'>
        <div className='flex flex-col items-center justify-center gap-6 rounded-xl bg-red-200 px-10 pt-8 pb-12 w-full'>
          <Typography variant={TypographyVariant.h4} as='h1' className='font-normal opacity-80'>
            Sign Up
          </Typography>

          <SignUpForm />
        </div>
      </Container>
      <div className='absolute inset-0 left-[60px] bg-signup-pattern bg-cover bg-center bg-no-repeat h-full -z-[1] overflow-hidden hidden md:block' />
    </div>
  );
}
