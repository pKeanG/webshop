import type { Metadata } from 'next';
import { Inter, Noto_Sans_Thai } from 'next/font/google';
import { Header } from '@/components/Header';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-thai',
});

export const metadata: Metadata = {
  title: 'Webshop GameFi — KUB Chain × Playpark',
  description:
    'เลือกเกมที่คุณรัก · ซื้อ-ขายไอเทมจริงๆ ของคุณ — PlayID ใบเดียว เล่นได้ทุกเกม จ่ายด้วย USDT หรือเงินบาท',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={cn(inter.variable, notoThai.variable)}>
      <body className="min-h-screen bg-surface font-sans antialiased">
        <Header />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
      </body>
    </html>
  );
}
