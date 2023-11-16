'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

import { IconButton, IconName } from '../buttons/extra';
import { CustomInput, InputProps } from './CustomInput';

type PasswordInputProps = InputProps & {
  hasLabel?: boolean;
};

export function PasswordInput({ hasLabel = false, ...delegated }: PasswordInputProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className='relative w-full'>
      <CustomInput type={isRevealed ? 'text' : 'password'} {...delegated} />
      <div className={clsx('absolute right-0', { 'top-[40%]': hasLabel, 'top-[8px]': !hasLabel })}>
        <IconButton
          height='mini'
          iconName={isRevealed ? IconName.eyeClosed : IconName.eye}
          onClick={() => setIsRevealed(!isRevealed)}
        />
      </div>
    </div>
  );
}
