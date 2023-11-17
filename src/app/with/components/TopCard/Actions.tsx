import { Button, ButtonSize, ButtonVariant } from '@/components/ui/buttons';

export function Actions() {
  return (
    <div className='flex items-center gap-4'>
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Small}>
        Open to
      </Button>
      <Button variant={ButtonVariant.Secondary} size={ButtonSize.Small}>
        Add to profile
      </Button>
      <Button variant={ButtonVariant.Ghost} size={ButtonSize.Small} className='hidden mobile:block'>
        More
      </Button>
    </div>
  );
}
