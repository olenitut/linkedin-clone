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
  style?: React.CSSProperties;
};

export function Button({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  onClick,
  children,
  id,
  style,
}: Props) {
  const classes = buttonVariants({ intent: variant, size });

  return (
    <button className={classes} onClick={onClick} style={style}>
      {id && icons[id]}
      {children}
    </button>
  );
}
