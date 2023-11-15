import { cva } from 'class-variance-authority';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
  Circle = 'circle',
  CircleMini = 'circleMini',
}

export enum ButtonSize {
  Full = 'full',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export const buttonVariants = cva(
  [
    'font-medium',
    'border',
    'rounded',
    'cursor-pointer',
    'flex',
    'justify-center',
    'items-center',
    'duration-300',
    'transition',
  ],
  {
    variants: {
      intent: {
        [ButtonVariant.Primary]: [
          'bg-red-700',
          'text-red-50',
          'border-red-700',
          'hover:bg-red-800',
          'hover:border-red-800',
          'shadow-sm',
          'shadow-red-900',
          'w-max',
        ],
        [ButtonVariant.Secondary]: [
          'w-max',
          'bg-red-50',
          'text-red-900',
          'border-red-900',
          'hover:bg-red-100',
        ],
        [ButtonVariant.Ghost]: [
          'w-max',
          'bg-transparent',
          'text-red-950',
          'border-0',
          'gap-2',
          'hover:bg-red-50',
        ],
        [ButtonVariant.Circle]: [
          'bg-transparent',
          'text-red-950',
          'border-0',
          'hover:bg-red-50',
          'rounded-full',
          'h-12',
          'w-12',
          'focus:outline-red-100',
        ],
        [ButtonVariant.CircleMini]: [
          'bg-transparent',
          'text-red-950',
          'border-0',
          'hover:bg-red-50',
          'rounded-full',
          'h-10',
          'w-10',
        ],
      },
      size: {
        [ButtonSize.Small]: ['text-sm', 'px-5', 'rounded-sm', 'h-10'],
        [ButtonSize.Medium]: ['text-base', 'py-2', 'px-3', 'h-11'],
        [ButtonSize.Large]: [
          'text-sm',
          'py-2',
          'px-4',
          'sm:px-5',
          'h-10',
          'sm:h-[50px]',
          'uppercase',
        ],
        [ButtonSize.Full]: ['!w-full', 'uppercase', 'h-12'],
      },
    },
    compoundVariants: [
      {
        intent: ButtonVariant.Primary,
        size: ButtonSize.Medium,
      },
    ],
  }
);
