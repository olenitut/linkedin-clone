import { cva } from 'class-variance-authority';

export enum ITypographyVariants {
  P = 'p',
  H1 = 'h1',
  // ADD MORE
}

const buttonVariants = cva(['font-semibold'], {
  variants: {
    intent: {
      [ITypographyVariants.P]: ['text-sm'],
      [ITypographyVariants.H1]: ['text-lg', 'font-bold'],
    },
  },

  defaultVariants: {
    intent: ITypographyVariants.P,
  },
});

export default buttonVariants;
