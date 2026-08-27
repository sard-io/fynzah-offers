import type { Metadata } from 'next';
import { Manrope, Geist_Mono } from 'next/font/google';
import 'flag-icons/css/flag-icons.min.css';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://fynzah-offers.vercel.app',
  ),
  title: 'Fynzah — платежные офферы без границ · August 2026',
  description:
    '11 актуальных pay-in офферов для Gambling, Betting и Exchange по России и cross-border направлениям.',
  openGraph: {
    title: 'Fynzah — платежные офферы без границ',
    description:
      '11 актуальных pay-in офферов · August 2026.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fynzah — платежные офферы без границ',
    description:
      '11 актуальных pay-in офферов · August 2026.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
