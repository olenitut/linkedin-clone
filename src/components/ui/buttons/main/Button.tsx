import React from 'react';

import { ButtonVariant, ButtonSize, buttonVariants } from './button-variants';
import { IconName, icons } from '../extra/icons';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  iconName?: IconName;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
};

export function Button({
  variant,
  size,
  onClick,
  children,
  className,
  iconName,
  type = 'button',
  isDisabled = false,
  ...delegated
}: ButtonProps) {
  const classes = buttonVariants({ intent: variant, size, className });

  return (
    <button className={classes} onClick={onClick} type={type} disabled={isDisabled} {...delegated}>
      {iconName && icons[iconName]}
      {children}
    </button>
  );
}
