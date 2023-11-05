import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WorkWave',
  description: 'Suggesting a wave of professional activity and connections.',
  icons: {
    icon: '/images/icon.png',
    apple: '/images/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/images/favicon-16x16.png',
      },
      {
        rel: 'android-icon',
        url: '/images/android-icon.png',
      },
      {
        rel: 'android-192-icon',
        url: '/images/android-192-icon.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
