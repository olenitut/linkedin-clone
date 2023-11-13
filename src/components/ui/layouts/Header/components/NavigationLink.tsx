'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  ChatBubbleLeftEllipsisIcon,
  UserCircleIcon,
  ArrowUpOnSquareStackIcon,
} from '@heroicons/react/24/solid';
import { clsx } from 'clsx';

type NavigationLinkProps = {
  children: string;
  href: string;
  id: string;
};

type Icon = {
  [key: string]: React.ReactNode;
};
const iconsClasses =
  'h-6 w-6 text-gray-500 group-hover:text-red-950 transition-colors duration-300 group-[.active]:text-red-950 hidden sm:block';

const icons: Icon = {
  home: <HomeIcon className={iconsClasses} />,
  network: <UsersIcon className={iconsClasses} />,
  jobs: <BriefcaseIcon className={iconsClasses} />,
  chat: <ChatBubbleLeftEllipsisIcon className={iconsClasses} />,
  user: <UserCircleIcon className={iconsClasses} />,
  post: <ArrowUpOnSquareStackIcon className={iconsClasses} />,
};

export function NavigationLink({ children, href, id }: NavigationLinkProps) {
  const pathName = usePathname();
  const activeLink = pathName === href;

  return (
    <Link
      href={href}
      className={clsx(
        'group relative flex h-[40px] w-full flex-col items-center justify-center gap-0.5 text-gray-500 transition-colors duration-300 hover:text-red-950 sm:h-auto sm:w-auto',
        { 'active !text-red-950': activeLink }
      )}
    >
      {icons[id]}
      <span className='text-base font-medium sm:text-sm sm:font-normal'>{children}</span>
      {activeLink && (
        <span
          className='absolute -bottom-2 hidden h-0.5 w-[70px] animate-fadeIn rounded-t-lg bg-red-950 md:block'
          aria-hidden='true'
        />
      )}
    </Link>
  );
}
