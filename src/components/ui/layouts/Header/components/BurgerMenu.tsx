'use client';
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import { ButtonVariant } from '@/components/ui/button/button-variants';

import { SignOutLink } from './SignOutLink';
import { LinksList } from './LinksList';

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className='sm:hidden z-30 py-2 px-4 fixed inset-0 flex w-screen items-center justify-start flex-col animate-fadeIn animate-slideIn'
      >
        <div
          className='inset-0 absolute bg-white-full backdrop-blur-sm'
          aria-hidden='true'
          onClick={onClose}
        />
        <button className='!self-end relative grid place-content-center'>
          <XCircleIcon className='w-12 text-red-950' />
        </button>

        <div className='flex flex-col gap-4 items-center relative pt-5'>
          <LinksList />
        </div>
        <Dialog.Panel className='flex items-center justify-center mt-6 relative bo'>
          <SignOutLink />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
