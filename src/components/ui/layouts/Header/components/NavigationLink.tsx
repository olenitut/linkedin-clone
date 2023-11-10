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
        'w-full sm:w-auto group flex flex-col items-center justify-center gap-0.5 text-gray-500 hover:text-red-950 transition-colors duration-300 relative h-[40px] sm:h-auto',
        { 'active !text-red-950': activeLink }
      )}
    >
      {icons[id]}
      <span className='text-base sm:text-sm font-medium sm:font-normal'>{children}</span>
      {activeLink && (
        <span
          className='hidden md:block absolute w-[70px] h-0.5 -bottom-2 bg-red-950 rounded-t-lg animate-fadeIn'
          aria-hidden='true'
        />
      )}
    </Link>
  );
}
