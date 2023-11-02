'use client';
import { Button } from '@/components/ui/button';
import { ButtonSize, ButtonVariant } from '@/components/ui/button/button-variants';
import { BriefcaseIcon, PhotoIcon, NewspaperIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <main>
      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Large} onClick={() => {}}>
          Large
        </Button>
        <Button onClick={() => {}}>Medium</Button>
        <Button variant={ButtonVariant.Primary} size={ButtonSize.Small} onClick={() => {}}>
          Small
        </Button>
        <Button variant={ButtonVariant.Secondary} onClick={() => {}}>
          Secondary
        </Button>
      </div>

      <div className='flex wrap gap-4 m-4'>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          onClick={() => {}}
          icon={<PhotoIcon className={'h-6 w-6 text-blue-500'} />}
        >
          Share
        </Button>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          onClick={() => {}}
          icon={<BriefcaseIcon className={'h-6 w-6 text-purple-500'} />}
        >
          Job
        </Button>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          onClick={() => {}}
          icon={<NewspaperIcon className={'h-6 w-6 text-orange-500'} />}
        >
          Write article
        </Button>
      </div>
    </main>
  );
}
