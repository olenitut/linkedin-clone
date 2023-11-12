import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { Header } from '@/components/ui/layouts';
import AuthProvider from '@/providers/AuthProvider';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorkWave',
  description: 'Suggesting a wave of professional activity and connections.',
  icons: {
    icon: '/images/favicons/icon.png',
    apple: '/images/favicons/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/images/favicons/favicon-16x16.png',
      },
      {
        rel: 'android-icon',
        url: '/images/favicons/android-icon.png',
      },
      {
        rel: 'android-192-icon',
        url: '/images/favicons/android-192-icon.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
