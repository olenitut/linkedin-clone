import Image from 'next/image';
import Link from 'next/link';

import LogoSVG from 'public/assets/icons/logo.svg';

export function Logo() {
  return (
    <Link href='/' className='flex'>
      <Image
        priority
        src={LogoSVG}
        alt='Logo'
        height={15}
        width={125}
        style={{ height: 15, width: 125 }}
      />
    </Link>
  );
}
