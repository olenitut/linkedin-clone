import { JSX } from 'react';

import { Typography, TypographyVariant } from '@/components/ui/typography';

export function AboutSection({ about }: { about: JSX.Element | null }) {
  return (
    <section className='max-w-[900px] rounded-md border border-gray-150 p-5 shadow-lg'>
      <Typography variant={TypographyVariant.h4} as='p' className='mb-4'>
        About
      </Typography>
      {about}
    </section>
  );
}
