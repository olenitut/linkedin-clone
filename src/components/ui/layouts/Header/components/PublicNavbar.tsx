import Link from 'next/link';
import Image from 'next/image';

import { ButtonSize, ButtonVariant, buttonVariants } from '@/components/ui/button/button-variants';

import { Logo } from './Logo';

export function PublicNavbar() {
  return (
    <div className='flex h-14 items-center justify-between'>
      <Logo />

      <div className='flex items-center space-x-4'>
        <Link
          href='/auth/signin'
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
