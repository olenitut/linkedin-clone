'use client';
import { useId } from 'react';
import { clsx } from 'clsx';

type InputProps = {
  name?: string;
  type?: string;
  className?: string;
  label?: string;
  placeholder?: string;
};

export function CustomInput({
  placeholder,
  name,
  label,
  className,
  type = 'text',
  ...delegated
}: InputProps) {
  const classes = clsx(
    'px-4 py-3 bg-red-50 rounded shadow-red-900 placeholder:text-red-950 placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-200 ring-offset-1 text-red-950',
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
        placeholder={placeholder}
        {...delegated}
      />
    </div>
  );
}
