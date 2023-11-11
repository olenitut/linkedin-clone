import Link from 'next/link';

import { ButtonSize, ButtonVariant, buttonVariants } from '@/components/ui/button/button-variants';

export function SignOutLink() {
  return (
    <Link
      href='/'
      className={buttonVariants({
        intent: ButtonVariant.Ghost,
        size: ButtonSize.Medium,
      })}
    >
      <span className='text-gray-500 sm:text-red-950 font-normal sm:font-medium'>Sign Out</span>
    </Link>
  );
}
