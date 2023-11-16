'use client';

import { useSession } from 'next-auth/react';

import { Container } from '@/components/ui/layouts/Container';

import { PublicNavbar } from './PublicNavbar';
import { ProtectedNavbar } from './ProtectedNavbar';

export function Header() {
  const { data: session, status } = useSession();

  const navbar = () => {
    if (status === 'loading') {
      return null;
    }
    return session ? <ProtectedNavbar /> : <PublicNavbar />;
  };

  return (
    <nav className='sticky inset-x-0 top-0 z-30 h-16 w-full border-b border-gray-200 bg-white-opacity backdrop-blur-lg transition-all'>
      <Container>{navbar()} </Container>
    </nav>
  );
}
