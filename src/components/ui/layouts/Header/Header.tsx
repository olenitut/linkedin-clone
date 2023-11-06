import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/components/ui/layouts/Container';

import { PublicNavbar, ProtectedNavbar } from './components';

export function Header() {
  const isSignedIn = false;

  return (
    <nav className='w-full h-14 inset-x-0 top-0 sticky z-30 border-b border-gray-200 bg-white-opacity backdrop-blur-lg transition-all'>
      <Container>{!isSignedIn ? <PublicNavbar /> : <ProtectedNavbar />} </Container>
    </nav>
  );
}
