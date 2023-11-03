import React from 'react';
import { clsx } from 'clsx';
import { ButtonVariant, ButtonSize, buttonVariants } from './button-variants';
import { icons } from './icons';

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  extraClasses?: string;
};

export function Button({ variant, size, onClick, children, id, extraClasses }: Props) {
  const classes = clsx(buttonVariants({ intent: variant, size }), extraClasses);

  return (
    <button className={classes} onClick={onClick}>
      {id && icons[id]}
      {children}
    </button>
  );
}
