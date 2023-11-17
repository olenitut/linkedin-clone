import Image from 'next/image';

import SidePanelImage from 'public/assets/images/side-panel.webp';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { Typography, TypographyVariant } from '@/components/ui/typography';

export function SidePanel() {
  return (
    <div className='hidden h-[1000px] w-[300px] rounded-md border border-gray-150 shadow-lg lg:block'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex w-full flex-col items-center justify-center bg-gray-400'>
          <Image
            src={SidePanelImage}
            alt='side-panel'
            height={229}
            width={229}
            style={{ width: 'auto', objectFit: 'cover' }}
          />
          <a href='https://storyset.com/online' className='mb-2 text-[10px]'>
            Online illustrations by Storyset
          </a>
        </div>

        <div className='flex flex-col items-center justify-center gap-5 px-3'>
          <Button variant={ButtonVariant.Secondary} size={ButtonSize.Small}>
            Share your ideas
          </Button>
          <Typography variant={TypographyVariant.Small} className='mt-5 text-center'>
            Help us to be better for you.
          </Typography>
        </div>
      </div>
    </div>
  );
}
