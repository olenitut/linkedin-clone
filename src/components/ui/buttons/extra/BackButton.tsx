'use client';

import { useRouter } from 'next/navigation';
import { clsx } from 'clsx';

import { IconButton } from './IconButton';
import { IconName } from './icons';

export function BackButton({ className = '' }: { className?: string }) {
  const router = useRouter();

  return (
    <IconButton
      iconName={IconName.left}
      onClick={() => router.back()}
      className={clsx(
        'rounded-[3px] !border border-gray-150 shadow-md hover:bg-[transparent] hover:shadow-modal',
        className
      )}
    />
  );
}
