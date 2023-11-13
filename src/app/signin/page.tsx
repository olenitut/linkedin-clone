import Link from 'next/link';

import { Typography } from '@/components/ui/typography';
import { TypographyVariant } from '@/components/ui/typography/typography-variants';

export default function SignIn() {
  return (
    <>
      <Typography variant={TypographyVariant.h2}>Sign In</Typography>
      <Link href='signup'>Sign Up</Link>;
    </>
  );
}
