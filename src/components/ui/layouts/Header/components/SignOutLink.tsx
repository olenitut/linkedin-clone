import Link from 'next/link';

import {
  ButtonSize,
  ButtonVariant,
  buttonVariants,
} from '@/components/ui/buttons/main/button-variants';

export function SignOutLink() {
  return (
    <Link
      href='/'
      className={buttonVariants({
        intent: ButtonVariant.Ghost,
        size: ButtonSize.Medium,
      })}
    >
      <span className='font-normal text-gray-500 sm:font-medium sm:text-red-950'>Sign Out</span>
    </Link>
  );
}
