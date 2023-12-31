import { cva } from 'class-variance-authority';

export enum TypographyVariant {
  Base = 'Base',
  Small = 'Small',
  Large = 'Large',
  ExtraLarge = 'ExtraLarge',
  Error = 'Error',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

export const typographyVariants = cva('font-sans', {
  variants: {
    intent: {
      [TypographyVariant.Base]: ['text-base'],
      [TypographyVariant.Small]: ['text-sm'],
      [TypographyVariant.Large]: ['text-base', 'md:text-lg'],
      [TypographyVariant.ExtraLarge]: ['text-xl'],
      [TypographyVariant.Error]: ['text-[11px]', 'text-red-600'],
      [TypographyVariant.h1]: ['text-4xl', 'md-5xl', 'font-semibold'],
      [TypographyVariant.h2]: ['text-3xl', 'md:text-4xl', 'font-semibold'],
      [TypographyVariant.h3]: ['text-2xl', 'md:text-3xl', 'font-medium'],
      [TypographyVariant.h4]: ['text-xl', 'md:text-2xl', 'font-medium'],
    },
  },

  defaultVariants: {
    intent: TypographyVariant.Base,
  },
});
