import { cva } from 'class-variance-authority';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
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
    'justify-between',
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
          'hover:bg-gray-50',
        ],
      },
      size: {
        [ButtonSize.Small]: ['text-sm', 'py-1', 'px-4', 'rounded-sm', 'h-9'],
        [ButtonSize.Medium]: ['text-base', 'py-2', 'px-4', 'h-12'],
        [ButtonSize.Large]: ['text-base', 'py-2', 'px-7', 'h-14', 'uppercase'],
      },
    },
    compoundVariants: [
      {
        intent: ButtonVariant.Primary,
        size: ButtonSize.Medium,
      },
    ],
    defaultVariants: {
      intent: ButtonVariant.Primary,
      size: ButtonSize.Medium,
    },
  }
);
