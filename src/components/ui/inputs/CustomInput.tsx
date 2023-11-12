'use client';
import { useId } from 'react';
import { clsx } from 'clsx';

import { TypographyVariant } from '@/components/ui/typography/typography-variants';
import { Typography } from '@/components/ui/typography';

type InputProps = {
  name?: string;
  type?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  error?: string;
};

export function CustomInput({
  placeholder,
  name,
  label,
  className,
  isRequired,
  error = '',
  type = 'text',
  ...delegated
}: InputProps) {
  const classes = clsx(
    'px-4 py-3 bg-red-50 rounded shadow-red-900 placeholder:text-red-950 placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-200 ring-offset-1 text-red-950 w-full',
    className
  );

  const inputId = useId();

  return (
    <div className='w-full relative'>
      {label && (
        <label htmlFor={inputId} className='text-sm text-red-950 block mb-0.5 opacity-60'>
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        className={classes}
        required={isRequired}
        placeholder={placeholder}
        {...delegated}
      />
      {error && (
        <Typography variant={TypographyVariant.Error} className='mt-1.5'>
          {error}
        </Typography>
      )}
    </div>
  );
}
