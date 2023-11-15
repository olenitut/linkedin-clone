import { ButtonSize, ButtonVariant } from '@/components/ui/buttons/main/button-variants';
import { Container } from '@/components/ui/layouts';

import { Button, IconButton, IconName } from '../components/ui/buttons';

export default function Home() {
  return (
    <Container>
      <main className='flex flex-col items-center justify-center'>
        <div className='wrap m-20 flex gap-4'>
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

        <div className='wrap m-4 flex gap-4'>
          <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} iconName={IconName.share}>
            Share
          </Button>
          <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} iconName={IconName.job}>
            Job
          </Button>
          <Button
            size={ButtonSize.Medium}
            variant={ButtonVariant.Ghost}
            iconName={IconName.article}
          >
            Write article
          </Button>
        </div>
        <div className='wrap m-4 flex gap-4'>
          <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} iconName={IconName.like}>
            Like
          </Button>
          <Button
            size={ButtonSize.Medium}
            variant={ButtonVariant.Ghost}
            iconName={IconName.comment}
          >
            Comment
          </Button>
          <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} iconName={IconName.repost}>
            Repost
          </Button>
          <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} iconName={IconName.send}>
            Send
          </Button>
          <Button
            size={ButtonSize.Medium}
            variant={ButtonVariant.Ghost}
            iconName={IconName.follow}
            className='!text-red-700'
          >
            Follow
          </Button>
        </div>
        <div className='wrap m-4 flex gap-4'>
          <IconButton iconName={IconName.control} />
          <IconButton iconName={IconName.close} />
          <IconButton iconName={IconName.plus} />
          <IconButton iconName={IconName.smile} />
          <IconButton iconName={IconName.star} />

          <IconButton iconName={IconName.controlMini} height='mini' />
          <IconButton iconName={IconName.pencil} height='mini' />
          <IconButton iconName={IconName.up} height='mini' />
          <IconButton iconName={IconName.down} height='mini' />
        </div>
      </main>
    </Container>
  );
}
