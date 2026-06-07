import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Chatbot from '@/components/Chatbot';
import { SITE } from '@/lib/constants';
import { getAyarlar } from '@/lib/cms';

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const ayarlar = await getAyarlar();
  const logoUrl = ayarlar?.logo_url || null;
  const siteName = ayarlar?.site_adi || SITE.name;
  const tagline = ayarlar?.tagline || SITE.tagline;

  return (
    <html lang="tr">
      <body>
        <TopBar />
        <Header logoUrl={logoUrl} siteName={siteName} tagline={tagline} />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <Chatbot />
      </body>
    </html>
  );
}
