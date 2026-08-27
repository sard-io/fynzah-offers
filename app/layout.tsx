import type { Metadata } from 'next';
import { Manrope, Geist_Mono } from 'next/font/google';
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
    '15 рабочих pay-in и payout офферов для Gambling, Betting и Exchange по России, СНГ, Кавказу и Азии.',
  openGraph: {
    title: 'Fynzah — платежные офферы без границ',
    description:
      '15 рабочих pay-in и payout офферов · August 2026.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fynzah — платежные офферы без границ',
    description:
      '15 рабочих pay-in и payout офферов · August 2026.',
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
