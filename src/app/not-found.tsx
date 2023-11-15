import Link from 'next/link';

import { Typography, TypographyVariant } from '@/components/ui/typography';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';

export default function NotFound() {
  return (
    <div className='h-full w-full'>
      <div className='absolute inset-0 left-[50%] top-[50%] flex w-[90%] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center gap-10 rounded-md bg-red-50 p-8 sm:w-auto'>
        <Typography variant={TypographyVariant.h2} className='text-center'>
          Not Found
        </Typography>
        <Typography variant={TypographyVariant.Large} className='text-center'>
          Could not find requested resource
        </Typography>
        <Link href='/'>
          <Button variant={ButtonVariant.Secondary} size={ButtonSize.Large}>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
