'use client';

import { useState } from 'react';
import { Bars2Icon } from '@heroicons/react/24/solid';

import { SignOutLink, LinksList, Logo, BurgerMenu } from './components';

export function ProtectedNavbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />
      <div className='hidden items-center gap-5 sm:flex md:gap-10'>
        <LinksList />
      </div>
      <div className='hidden sm:block'>
        <SignOutLink />
      </div>

      <button
        onClick={() => setIsBurgerOpen((prevState) => !prevState)}
        type='button'
        className='sm:hidden'
      >
        <Bars2Icon className='w-10 sm:hidden' />
      </button>

      <BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
    </div>
  );
}
