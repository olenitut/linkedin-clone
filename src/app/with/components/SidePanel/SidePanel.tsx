import Image from 'next/image';

import SidePanelImage from 'public/assets/images/side-panel.webp';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';
import { Typography, TypographyVariant } from '@/components/ui/typography';

export function SidePanel() {
  return (
    <div className='h-[565px] h-full w-[300px] rounded-md border border-gray-150 shadow-lg'>
      <div className='hidden flex-col items-center justify-center lg:flex'>
        <Image
          src={SidePanelImage}
          alt='side-panel'
          height={229}
          width={229}
          style={{ width: 'auto' }}
        />
        <a href='https://storyset.com/online' className='mb-10 text-[10px]'>
          Online illustrations by Storyset
        </a>

        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Small}>
          Share your ideas
        </Button>

        <Typography variant={TypographyVariant.Small} className='mt-5'>
          Help us to be better for you.
        </Typography>
      </div>
    </div>
  );
}
