import { Container } from '@/components/ui/layouts';
import { Typography, TypographyVariant } from '@/components/ui/typography';
import { SignUpForm } from '@/app/signup/components';

export default function SignUp() {
  return (
    <div className='relative mx-auto flex h-[calc(100vh-64px)] min-h-[600px] w-full max-w-7xl items-center justify-center overflow-hidden md:min-h-[780px]'>
      <Container className='max-w-[420px]'>
        <div className='-ml-[80px] flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-red-200 px-10 pb-12 pt-8'>
          <Typography variant={TypographyVariant.h4} as='h1' className='font-normal opacity-80'>
            Sign Up
          </Typography>

          <SignUpForm />
        </div>
        <a
          href='https://storyset.com/user'
          className='-ml-[80px] mt-1 block flex w-full justify-center text-xs '
        >
          User illustrations by Storyset
        </a>
      </Container>
      <div className='absolute inset-0 -z-[1] hidden h-full overflow-hidden bg-signup-pattern bg-cover bg-center bg-no-repeat md:block' />
    </div>
  );
}
