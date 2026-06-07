'use client';
import Link from 'next/link';
import { SITE, FOOTER_LINKS } from '@/lib/constants';
import {
  IconPhone, IconMail, IconMapPin, IconHeart, IconArrowRight,
  IconFood, IconWater, IconEducation, IconHealth, IconHouse, IconOrphan,
  IconChevronRight,
} from './Icons';

const SECTORS = [
  { label: 'Gıda Yardımı',    desc: 'Aç kalmasın',        Icon: IconFood },
  { label: 'Temiz Su',        desc: 'Su hakkı herkese',   Icon: IconWater },
  { label: 'Eğitim',         desc: 'Gelecek inşa',        Icon: IconEducation },
  { label: 'Sağlık',         desc: 'Sağlıklı yaşam',     Icon: IconHealth },
  { label: 'Barınma',        desc: 'Güvenli ev',          Icon: IconHouse },
  { label: 'Yetim Desteği',  desc: 'Umut ol',             Icon: IconOrphan },
];

const SOCIAL_LINKS = [
  {
    href: SITE.social.instagram, label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: SITE.social.facebook, label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    href: SITE.social.twitter, label: 'X / Twitter',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4"/>
      </svg>
    ),
  },
  {
    href: SITE.social.youtube, label: 'YouTube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#010e09', color: 'var(--cream)' }}>

      {/* ── Hizmet Alanlarımız ── tam genişlik, footer'ın içinde */}
      <div style={{ background: 'var(--dark-green)', borderBottom: '1px solid rgba(244,233,216,.06)', padding: '64px 0' }}>
        <div className="container">
          {/* Başlık */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(200,169,110,.12)',
              border: '1px solid rgba(200,169,110,.3)', color: 'var(--accent)',
              padding: '5px 16px', borderRadius: '20px',
              fontSize: '.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>Hizmet Alanlarımız</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, margin: 0 }}>
              Nerede İhtiyaç Varsa Oradayız
            </h2>
          </div>

          {/* İkon Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2px',
          }}>
            {SECTORS.map(({ label, desc, Icon }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '36px 16px 32px',
                  background: 'rgba(244,233,216,.03)',
                  borderRadius: '4px',
                  transition: 'background .3s',
                  cursor: 'default',
                  gap: '14px',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,110,.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(244,233,216,.03)'; }}
              >
                {/* İkon çerçevesi */}
                <div style={{
                  width: 88, height: 88,
                  borderRadius: '24px',
                  background: 'rgba(200,169,110,.1)',
                  border: '1.5px solid rgba(200,169,110,.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  transition: 'all .3s',
                }}>
                  <Icon size={46} color="var(--accent)" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>{label}</div>
                  <div style={{ color: 'rgba(244,233,216,.5)', fontSize: '.78rem', letterSpacing: '.3px' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsive CSS */}
          <style>{`
            @media (max-width: 900px) {
              .sector-grid { grid-template-columns: repeat(3,1fr) !important; }
            }
            @media (max-width: 540px) {
              .sector-grid { grid-template-columns: repeat(2,1fr) !important; }
            }
          `}</style>
        </div>
      </div>

      {/* ── Ana Footer İçeriği ── */}
      <div style={{ padding: '64px 0 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '44px', paddingBottom: '48px' }}>

            {/* Logo & Hakkında */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '12px',
                  background: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, color: '#012116', fontSize: '1.3rem',
                }}>V</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.15, color: 'var(--cream)' }}>{SITE.name}</div>
                  <div style={{ color: 'var(--accent)', fontSize: '.68rem', letterSpacing: '1.2px', textTransform: 'uppercase' }}>{SITE.tagline}</div>
                </div>
              </div>
              <p style={{ color: 'rgba(244,233,216,.6)', fontSize: '.87rem', lineHeight: 1.75, marginBottom: '22px' }}>
                {SITE.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    style={{
                      width: 38, height: 38, borderRadius: '8px',
                      border: '1px solid rgba(244,233,216,.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(244,233,216,.7)', transition: 'all .3s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(200,169,110,.15)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,233,216,.15)';
                      (e.currentTarget as HTMLElement).style.color = 'rgba(244,233,216,.7)';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Hızlı Erişim */}
            <div>
              <h4 style={{ color: 'var(--accent)', fontSize: '.78rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '22px' }}>Hızlı Erişim</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FOOTER_LINKS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ color: 'rgba(244,233,216,.65)', fontSize: '.88rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color .2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(244,233,216,.65)'; }}
                    >
                      <IconChevronRight size={14} color="var(--accent)" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h4 style={{ color: 'var(--accent)', fontSize: '.78rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '22px' }}>İletişim</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <IconMapPin size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: 'rgba(244,233,216,.65)', fontSize: '.87rem', lineHeight: 1.5 }}>{SITE.address}</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <IconPhone size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} style={{ color: 'rgba(244,233,216,.65)', fontSize: '.87rem', textDecoration: 'none' }}>{SITE.phone}</a>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <IconMail size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <a href={`mailto:${SITE.email}`} style={{ color: 'rgba(244,233,216,.65)', fontSize: '.87rem', textDecoration: 'none' }}>{SITE.email}</a>
                </li>
              </ul>
            </div>

            {/* Bağış CTA */}
            <div>
              <h4 style={{ color: 'var(--accent)', fontSize: '.78rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '22px' }}>Destek Olun</h4>
              <p style={{ color: 'rgba(244,233,216,.6)', fontSize: '.87rem', lineHeight: 1.75, marginBottom: '22px' }}>
                Küçük bir bağış bile büyük fark yaratır. Hemen destek olmak için tıklayın.
              </p>
              <Link href="/bagis-yap" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 24px', background: 'var(--accent)', color: '#012116',
                borderRadius: '8px', fontWeight: 700, fontSize: '.9rem', textDecoration: 'none',
                transition: 'all .3s',
              }}>
                <IconHeart size={16} color="#012116" />
                Bağış Yap
                <IconArrowRight size={14} color="#012116" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Alt Şerit ── */}
      <div style={{ borderTop: '1px solid rgba(244,233,216,.06)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <p style={{ color: 'rgba(244,233,216,.4)', fontSize: '.78rem', margin: 0 }}>
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
          <p style={{ color: 'rgba(244,233,216,.4)', fontSize: '.78rem', margin: 0 }}>
            Tasarım &amp; Geliştirme:{' '}
            <a href="https://digimas.com.tr" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
              Digimas Ajans
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
