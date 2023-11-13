import React from 'react';

import { ButtonVariant, ButtonSize, buttonVariants } from './button-variants';
import { icons } from './icons';

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({
  variant,
  size,
  onClick,
  children,
  id,
  className,
  type = 'button',
}: Props) {
  const classes = buttonVariants({ intent: variant, size, className });

  return (
    <button className={classes} onClick={onClick} type={type}>
      {id && icons[id]}
      {children}
    </button>
  );
}
