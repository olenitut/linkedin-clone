'use client';
import React, { useId } from 'react';
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
  value?: string;
  onChange?: () => void;
};

export function CustomInput({
  placeholder,
  name,
  label,
  className,
  isRequired,
  value,
  onChange,
  error = '',
  type = 'text',
  ...delegated
}: InputProps) {
  const classes = clsx(
    'px-4 py-3 bg-red-50 rounded shadow-red-900 placeholder:text-red-950 placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-200 ring-offset-1 text-red-950 w-full border-[1.5px] border-transparent',
    { 'border-red-500': error },
    className
  );

  const inputId = useId();

  return (
    <div className='relative w-full'>
      {label && (
        <label htmlFor={inputId} className='mb-0.5 block text-sm text-red-950 opacity-60'>
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
        value={value}
        onChange={onChange && onChange}
        {...delegated}
      />
      {error && (
        <Typography variant={TypographyVariant.Error} className='absolute -bottom-[18px] right-0'>
          {error}
        </Typography>
      )}
    </div>
  );
}
