import { signOut } from 'next-auth/react';

import {
  ButtonSize,
  ButtonVariant,
  buttonVariants,
} from '@/components/ui/buttons/main/button-variants';
import { Button } from '@/components/ui/buttons';

export function SignOutLink() {
  return (
    <Button
      size={ButtonSize.Medium}
      variant={ButtonVariant.Ghost}
      onClick={() => signOut({ callbackUrl: '/signin' })}
      className='font-normal text-gray-500 sm:font-medium sm:text-red-950'
    >
      Sign Out
    </Button>
  );
}
