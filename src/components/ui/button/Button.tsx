import React from 'react';
import { ButtonVariant, ButtonSize, buttonVariants } from './button-variants';
import { icons } from './icons';

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: string | React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
};

export function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  onClick,
  children,
  id,
}: Props) {
  const classes = buttonVariants({ intent: variant, size });

  return (
    <button className={classes} onClick={onClick}>
      {id && icons[id]}
      {children}
    </button>
  );
}
