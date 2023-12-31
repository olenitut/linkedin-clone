import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { IconButton, IconName } from '@/components/ui/buttons';

type ModalProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export function Modal({ title, children, isOpen, handleClose, description = '' }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div
            className='fixed inset-0 bg-white-opacity backdrop-blur-sm'
            aria-hidden='true'
            onClick={handleClose}
          />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='flex w-full max-w-md transform flex-col gap-6 rounded-2xl border border-gray-150 bg-white-full p-6 text-left align-middle shadow-modal transition-all'>
                <IconButton
                  iconName={IconName.close}
                  className='absolute right-0 top-0 -translate-y-[110%]'
                  onClick={handleClose}
                />
                <Dialog.Title as='h3' className='text-gray-900 text-lg font-medium leading-6'>
                  {title}
                </Dialog.Title>
                {description && (
                  <Dialog.Description className='mt-2 text-sm text-gray-500'>
                    {description}
                  </Dialog.Description>
                )}

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
