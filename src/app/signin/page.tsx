import Link from 'next/link';

import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Container } from '@/components/ui/layouts';

export default function SignIn() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center mt-10 gap-4'>
        <Typography variant={TypographyVariant.h2}>Sign In</Typography>

        <div className='flex gap-2 items-center justify-center'>
          <Typography variant={TypographyVariant.Base}>Don&apos;t have an account?</Typography>
          <Link href='signup' className='text-red-900'>
            Sign Up
          </Link>
        </div>
      </div>
    </Container>
  );
}
