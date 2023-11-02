import { Button } from '@/components/ui/button';
import { ButtonSize, ButtonVariant } from '@/components/ui/button/button-variants';

export default function Home() {
  return (
    <main>
      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Large}>Large</Button>
        <Button>Medium</Button>
        <Button variant={ButtonVariant.Primary} size={ButtonSize.Small}>
          Small
        </Button>
        <Button variant={ButtonVariant.Secondary}>Secondary</Button>
      </div>

      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='share'>
          Share
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost} id='job'>
          Job
        </Button>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Ghost}>
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
          style={{ color: '#d42a5b' }}
          size={ButtonSize.Medium}
          variant={ButtonVariant.Ghost}
          id='follow'
        >
          Follow
        </Button>
      </div>
      <div className='flex wrap gap-4 m-4'>
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Circle} id='control' />
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Circle} id='close' />
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Circle} id='plus' />
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Circle} id='smile' />
        <Button size={ButtonSize.Medium} variant={ButtonVariant.Circle} id='star' />
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Circle}
          id='controlMini'
          style={{ width: '40px', height: '40px' }}
        />
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Circle}
          id='pencil'
          style={{ width: '40px', height: '40px' }}
        />
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Circle}
          id='up'
          style={{ width: '40px', height: '40px' }}
        />
        <Button
          size={ButtonSize.Medium}
          variant={ButtonVariant.Circle}
          id='down'
          style={{ width: '40px', height: '40px' }}
        />
      </div>
    </main>
  );
}
