import { AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';

import { Typography, TypographyVariant } from '@/components/ui/typography';
import { MemberData } from '@/app/api/member';

export function ExtraInfo({ member, className = '' }: { member: MemberData; className?: string }) {
  return (
    <div className={clsx('flex basis-1/3 flex-col gap-2 md:gap-6', className)}>
      {member.company && (
        <div className='flex items-start gap-2'>
          <BuildingOfficeIcon className='h-6 w-6 shrink-0 text-gray-300' />
          <Typography
            variant={TypographyVariant.Base}
            className='text-sm font-medium text-red-950 sm:text-base'
          >
            {member.company}
          </Typography>
        </div>
      )}
      {member.education && (
        <div className='flex items-start gap-2'>
          <AcademicCapIcon className='h-6 w-6 shrink-0 text-gray-300' />
          <Typography
            variant={TypographyVariant.Base}
            className='text-sm font-medium text-red-950 sm:text-base'
          >
            {member.education}
          </Typography>
        </div>
      )}
    </div>
  );
}
