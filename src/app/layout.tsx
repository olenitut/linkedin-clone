import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkWave",
  description: "Suggesting a wave of professional activity and connections.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon-16x16.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
