import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';

import LogoSVG from 'public/assets/icons/logo.svg';

export function Logo({ className }: { className: string }) {
  return (
    <Link href='/' className={clsx('flex pb-[10px]', className)}>
      <Image
        priority
        src={LogoSVG}
        alt='Logo'
        height={40}
        width={160}
        style={{ height: 40, width: 160 }}
      />
    </Link>
  );
}
