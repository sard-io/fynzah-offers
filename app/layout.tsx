import type { Metadata } from 'next';
import { Manrope, Geist_Mono } from 'next/font/google';
import { offerCount } from './offers';
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
  title: 'Fynzah — платежные офферы без границ · October 2026',
  description:
    `${offerCount} платежных офферов для Gambling, Betting и Exchange — СНГ и Worldwide.`,
  openGraph: {
    title: 'Fynzah — платежные офферы без границ',
    description:
      `${offerCount} платежных офферов · October 2026.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fynzah — платежные офферы без границ',
    description:
      `${offerCount} платежных офферов · October 2026.`,
    images: ['/opengraph-image'],
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
