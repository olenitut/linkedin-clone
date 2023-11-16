import React from 'react';

import { TypographyVariant, typographyVariants } from './typography-variants';

type TypographyProps = {
  children: string | React.ReactNode;
  variant?: TypographyVariant;
  as?: React.ElementType;
  className?: string;
};

export function Typography({
  children,
  className,
  as = 'p',
  variant = TypographyVariant.Base,
}: TypographyProps) {
  const classes = typographyVariants({ intent: variant, className });

  const Component = as;
  return <Component className={classes}>{children}</Component>;
}
