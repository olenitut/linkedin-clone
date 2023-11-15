import React from 'react';

import { mergeClasses } from '@/lib';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={mergeClasses('mx-auto w-full max-w-screen-xl px-5', className)}>{children}</div>
  );
}
