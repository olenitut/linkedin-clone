import Image from 'next/image';
import Link from 'next/link';

import LogoSVG from 'public/images/icons/logo.svg';

export function Logo() {
  return (
    <Link href='/' className='flex'>
      <Image src={LogoSVG} alt='Logo' height={15} width={125} />
    </Link>
  );
}
