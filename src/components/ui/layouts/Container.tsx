import React from 'react';

import { mergeClasses } from '@/lib';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={mergeClasses('w-full mx-auto px-5 max-w-screen-xl', className)}>{children}</div>
  );
}
