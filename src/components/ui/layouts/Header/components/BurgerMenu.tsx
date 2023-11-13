'use client';
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

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
        className='fixed inset-0 z-30 flex w-screen animate-fadeIn animate-slideIn flex-col items-center justify-start px-4 py-2 sm:hidden'
      >
        <div
          className='absolute inset-0 bg-white-full backdrop-blur-sm'
          aria-hidden='true'
          onClick={onClose}
        />
        <button className='relative grid place-content-center !self-end'>
          <XCircleIcon className='w-12 text-red-950' />
        </button>

        <div className='relative flex flex-col items-center gap-4 pt-5'>
          <LinksList />
        </div>
        <Dialog.Panel className='bo relative mt-6 flex items-center justify-center'>
          <SignOutLink />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
