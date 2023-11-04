import { cva } from 'class-variance-authority';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
  Circle = 'circle',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export const buttonVariants = cva(
  [
    'font-medium',
    'border',
    'rounded',
    'w-max',
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
          'bg-rose-500',
          'text-rose-50',
          'border-rose-500',
          'hover:bg-rose-600',
          'shadow-sm',
          'shadow-rose-700',
        ],
        [ButtonVariant.Secondary]: [
          'bg-rose-50',
          'text-rose-900',
          'border-rose-900',
          'hover:bg-rose-100',
        ],
        [ButtonVariant.Ghost]: [
          'bg-transparent',
          'text-gray-600',
          'border-0',
          'gap-2',
          'hover:bg-rose-50',
        ],
        [ButtonVariant.Circle]: [
          'bg-transparent',
          'text-gray-600',
          'border-0',
          'hover:bg-rose-50',
          'rounded-full',
          'h-12',
          'w-12',
        ],
      },
      size: {
        [ButtonSize.Small]: ['text-sm', 'p-2', 'rounded-sm', 'h-10'],
        [ButtonSize.Medium]: ['text-base', 'py-2', 'px-3', 'h-12'],
        [ButtonSize.Large]: ['text-base', 'py-2', 'px-7', 'h-14', 'uppercase'],
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
