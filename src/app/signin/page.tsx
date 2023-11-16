import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Container } from '@/components/ui/layouts';

import { SignInForm } from './components';

export default function SignIn() {
  return (
    <div className='relative mx-auto flex h-[calc(100vh-64px)] min-h-[600px] w-full max-w-7xl justify-center overflow-hidden pt-[40px] sm:pt-[80px] md:min-h-[780px] md:pt-[120px]'>
      <Container className='max-w-[940px]'>
        <div className='flex flex-col items-center md:items-end'>
          <div className='flex w-full max-w-[420px] flex-col items-center justify-center gap-6 rounded-xl bg-red-200 px-10 pb-12 pt-8'>
            <Typography variant={TypographyVariant.h3} as='h1' className='font-normal opacity-80'>
              Sign In
            </Typography>

            <SignInForm />
          </div>
          <a
            href='https://storyset.com/user'
            className='mt-1 block flex w-full max-w-[420px] justify-center text-xs'
          >
            User illustrations by Storyset
          </a>
        </div>
      </Container>
      <div className='absolute inset-0 -z-[1] hidden h-full overflow-hidden bg-signin-pattern bg-cover bg-center bg-no-repeat md:block' />
    </div>
  );
}
