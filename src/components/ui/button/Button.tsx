import React from 'react';
import { ButtonVariant, ButtonSize, buttonVariants } from './button-variants';

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: string | React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
};

export function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  onClick,
  children,
  icon,
}: Props) {
  const classes = buttonVariants({ intent: variant, size });

  return (
    <button className={classes} onClick={onClick}>
      {icon && icon}
      {children}
    </button>
  );
}
