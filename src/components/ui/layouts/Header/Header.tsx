import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/components/ui/layouts/Container';

import { PublicNavbar } from './PublicNavbar';
import { ProtectedNavbar } from './ProtectedNavbar';

export function Header() {
  const isSignedIn = true;

  return (
    <nav className='w-full h-16 inset-x-0 top-0 sticky z-30 border-b border-gray-200 bg-white-opacity backdrop-blur-lg transition-all'>
      <Container>{!isSignedIn ? <PublicNavbar /> : <ProtectedNavbar />} </Container>
    </nav>
  );
}
