'use client';
import { Button } from '@/components/ui/button';
import { IButtonSizes, IButtonVariants } from '@/components/ui/button/button-variants';

export default function Home() {
  return (
    <main>
      <Button onClick={() => {}}>Primary Medium</Button>
      <Button variant={IButtonVariants.PRIMARY} size={IButtonSizes.SMALL} onClick={() => {}}>
        Secondary Small
      </Button>
    </main>
  );
}
