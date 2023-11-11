'use client';
import { useState } from 'react';
import { Bars2Icon } from '@heroicons/react/24/solid';

import { SignOutLink, LinksList, Logo, BurgerMenu } from './components';

export function ProtectedNavbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className='flex h-16 items-center justify-between'>
      <Logo />
      <div className='items-center gap-5 md:gap-10 hidden sm:flex'>
        <LinksList />
      </div>
      <div className='hidden sm:block'>
        <SignOutLink />
      </div>

      <button onClick={() => setIsBurgerOpen((prevState) => !prevState)}>
        <Bars2Icon className='w-10 sm:hidden' />
      </button>

      <BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
    </div>
  );
}
