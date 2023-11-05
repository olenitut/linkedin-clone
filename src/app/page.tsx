import { Button } from '@/components/ui/button';
import { ButtonSize, ButtonVariant } from '@/components/ui/button/button-variants';
import { Typography } from '@/components/ui/typography';
import { TypographyVariant } from '@/components/ui/typography/typography-variants';

export default function Home() {
  return (
    <main>
      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Large} variant={ButtonVariant.Primary}>
          Large
        </Button>
        <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
          Medium
        </Button>
        <Button variant={ButtonVariant.Primary} size={ButtonSize.Small}>
          Small
        </Button>
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Medium}>
          Secondary
        </Button>
      </div>

      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='share'>
          Share
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='job'>
          Job
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='article'>
          Write article
        </Button>
      </div>
      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='like'>
          Like
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='comment'>
          Comment
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='repost'>
          Repost
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='send'>
          Send
        </Button>
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          id='follow'
          className='!text-red-700'
        >
          Follow
        </Button>
      </div>
      <div className='flex wrap gap-4 m-4'>
        <Button variant={ButtonVariant.Circle} id='control' />
        <Button variant={ButtonVariant.Circle} id='close' />
        <Button variant={ButtonVariant.Circle} id='plus' />
        <Button variant={ButtonVariant.Circle} id='smile' />
        <Button variant={ButtonVariant.Circle} id='star' />

        <Button variant={ButtonVariant.Circle} id='controlMini' className='!w-10 !h-10' />
        <Button variant={ButtonVariant.Circle} id='pencil' className='!w-10 !h-10' />
        <Button variant={ButtonVariant.Circle} id='up' className='!w-10 !h-10' />
        <Button variant={ButtonVariant.Circle} id='down' className='!w-10 !h-10' />
      </div>
      <div>
        <Typography>
          You may need full control over your StyleSheet output. Your job might require you to use a
          framework such as Tailwind CSS. You might just prefer writing your own CSS.
        </Typography>
      </div>
    </main>
  );
}
