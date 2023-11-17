import { Typography, TypographyVariant } from '@/components/ui/typography';
import { MemberData } from '@/app/api/member';

import { ContactInfo } from './ContactInfo';
import { ExtraInfo } from './ExtraInfo';
import { Actions } from './Actions';
import { Images } from './Images';

export function TopCard({ member }: { member: MemberData }) {
  return (
    <section className='relative max-w-[900px] rounded-md border border-gray-150 shadow-lg'>
      <Images member={member} />

      <div className='flex flex-col items-baseline justify-between gap-4 p-5 md:flex-row'>
        <div className='flex basis-2/3 flex-col gap-4'>
          <Typography variant={TypographyVariant.h3}>{member.name}</Typography>
          <Typography variant={TypographyVariant.Large} className='text-base sm:text-lg'>
            {member.bio}
          </Typography>

          <ContactInfo member={member} />

          <ExtraInfo member={member} className='md:hidden' />

          <Typography variant={TypographyVariant.Small} className='font-medium text-red-700'>
            {member.connections}+ connections
          </Typography>

          <Actions />
        </div>

        <ExtraInfo member={member} className='hidden md:flex' />
      </div>
    </section>
  );
}
