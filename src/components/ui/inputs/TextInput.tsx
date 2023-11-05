'use client';
import { useId } from 'react';
import { clsx } from 'clsx';

type TextInputProps = {
  name?: string;
  type?: string;
  className?: string;
  label: string;
  id: string;
  placeholder?: string;
};

export function TextInput({
  placeholder,
  name,
  label,
  className,
  id,
  type = 'text',
  ...delegated
}: TextInputProps) {
  const classes = clsx(
    'px-4 py-3 bg-red-50 rounded shadow-red-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-200 ring-offset-1 text-red-950',
    className
  );

  const ID = useId();
  const inputId = `${id}-${ID}`;

  return (
    <div className='w-full relative'>
      <label htmlFor={inputId} className='text-sm text-red-950 block mb-1'>
        {label}
      </label>
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
