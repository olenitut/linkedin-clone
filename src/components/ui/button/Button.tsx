import React from 'react';
import buttonVariants, { IButtonSizes, IButtonVariants } from './button-variants';

type Props = {
  variant?: IButtonVariants;
  size?: IButtonSizes;
  children: string | React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  variant = IButtonVariants.PRIMARY,
  size = IButtonSizes.MEDIUM,
  onClick,
  children,
}: Props) {
  const classes = buttonVariants({ intent: variant, size });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
