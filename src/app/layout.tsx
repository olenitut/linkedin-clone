import React from 'react';
import type { Metadata } from 'next';
// import { Space_Grotesk } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import { Header } from '@/components/ui/layouts';
import { AuthProvider } from '@/providers';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

import '../css/globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-space-grotesk',
// });

export const metadata: Metadata = {
  title: 'WorkWave',
  description: 'Suggesting a wave of professional activity and connections.',
  icons: {
    icon: '/assets/favicons/icon.png',
    apple: '/assets/favicons/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/assets/favicons/favicon-16x16.png',
      },
      {
        rel: 'android-icon',
        url: '/assets/favicons/android-icon.png',
      },
      {
        rel: 'android-192-icon',
        url: '/assets/favicons/android-192-icon.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
            <div id='overlay' />
            <div className='flex flex-col'>
              <Header />
              {children}
              <ToastContainer position='bottom-center' autoClose={2200} />
            </div>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
