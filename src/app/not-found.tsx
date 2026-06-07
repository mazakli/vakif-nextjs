import Link from 'next/link';
import { IconSearch, IconArrowRight } from '@/components/Icons';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream-light)', textAlign: 'center', padding: '40px 24px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconSearch size={36} color="#012116" />
          </div>
        </div>
        <h1 style={{ color: '#012116', fontSize: '4rem', fontWeight: 900, marginBottom: '8px', lineHeight: 1 }}>404</h1>
        <h2 style={{ color: '#444', fontSize: '1.3rem', marginBottom: '16px' }}>Sayfa Bulunamadı</h2>
        <p style={{ color: '#666', marginBottom: '32px', maxWidth: '400px', lineHeight: 1.7, margin: '0 auto 32px' }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '12px 28px', background: '#012116', color: 'var(--cream)', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Ana Sayfa <IconArrowRight size={15} color="var(--cream)" />
          </Link>
          <Link href="/iletisim" style={{ padding: '12px 28px', background: 'transparent', color: '#012116', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', border: '2px solid #012116' }}>
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
