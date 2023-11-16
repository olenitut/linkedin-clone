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
      <div className='flex items-center gap-8'>
        <Logo />
        <Link
          href='/'
          className={buttonVariants({
            intent: ButtonVariant.Ghost,
            size: ButtonSize.Medium,
            className: 'block h-full text-lg text-red-800 opacity-70',
          })}
        >
          Home
        </Link>
      </div>

      <div className='flex items-center space-x-4'>
        <Link
          href='/signup'
          className={buttonVariants({
            intent: ButtonVariant.Ghost,
            size: ButtonSize.Medium,
            className: 'block h-full text-lg text-red-800 opacity-70',
          })}
        >
          Sign Up
        </Link>
        <Link
          href='/signin'
          className={buttonVariants({
            intent: ButtonVariant.Secondary,
            size: ButtonSize.Medium,
            className: 'block h-full text-lg text-red-800 opacity-70',
          })}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
