import Link from 'next/link';
import Image from 'next/image';

import { ButtonSize, ButtonVariant, buttonVariants } from '@/components/ui/button/button-variants';

import { Logo } from './Logo';

export function ProtectedNavbar() {
  return (
    <div className='flex h-14 items-center justify-between'>
      <Logo />
      <div className='flex items-center space-x-4'>
        <Link
          href='/auth/signout'
          className={buttonVariants({
            intent: ButtonVariant.Ghost,
            size: ButtonSize.Medium,
          })}
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
}
