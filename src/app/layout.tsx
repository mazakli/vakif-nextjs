import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Chatbot from '@/components/Chatbot';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: ['vakıf', 'bağış', 'yardım', 'insani yardım', 'hayır', 'sosyal sorumluluk'],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <Chatbot />
      </body>
    </html>
  );
}
