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
          id='share'
        >
          Share
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} onClick={() => {}} id='job'>
          Job
        </Button>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          onClick={() => {}}
          id='article'
        >
          Write article
        </Button>
      </div>
      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} onClick={() => {}} id='like'>
          Like
        </Button>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          onClick={() => {}}
          id='comment'
        >
          Comment
        </Button>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          onClick={() => {}}
          id='repost'
        >
          Repost
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} onClick={() => {}} id='send'>
          Send
        </Button>
      </div>
    </main>
  );
}
