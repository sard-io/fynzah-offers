import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://fynzah-active-offers-aug-26.quantumsoragenerate.chatgpt.site',
  ),
  title: 'Fynzah — активные платежные направления · August 2026',
  description:
    'Актуальные pay-in и payout решения для Gambling, Betting и Exchange по России, СНГ, Кавказу и Азии.',
  openGraph: {
    title: 'Fynzah — активные платежные направления',
    description:
      '15 актуальных pay-in и payout офферов · August 2026.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fynzah — активные платежные направления',
    description:
      '15 актуальных pay-in и payout офферов · August 2026.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
