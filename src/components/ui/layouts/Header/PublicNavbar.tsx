import Link from 'next/link';

import {
  ButtonSize,
  ButtonVariant,
  buttonVariants,
} from '@/components/ui/buttons/main/button-variants';

import { Logo } from './components';

export function PublicNavbar() {
  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />

      <div className='flex items-center space-x-4'>
        <Link
          href='/signin'
          className={buttonVariants({
            intent: ButtonVariant.Ghost,
            size: ButtonSize.Medium,
          })}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
