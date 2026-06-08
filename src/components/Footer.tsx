'use client';
import { useState } from 'react';
import { SITE } from '@/lib/constants';

export default function Footer() {
  const [email, setEmail] = useState('');

  const SOCIALS = [
    { href: SITE.social.instagram, label: 'Instagram',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { href: SITE.social.facebook, label: 'Facebook',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
    { href: SITE.social.twitter, label: 'X',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg> },
    { href: SITE.social.youtube, label: 'YouTube',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  ];

  return (
    <footer style={{ background: '#012116', color: 'rgba(244,233,216,.85)' }}>
      {/* ── Ana Footer Satırı ── */}
      <div style={{ borderBottom: '1px solid rgba(244,233,216,.06)', padding: '22px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center',
            flexWrap: 'wrap', gap: '10px 32px',
            justifyContent: 'space-between',
          }}>
            {/* İletişim bilgileri */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px 28px' }}>
              {/* Telefon */}
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: 'rgba(244,233,216,.85)', textDecoration: 'none', fontSize: '.82rem',
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  border: '1px solid rgba(200,169,110,.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12 19.79 19.79 0 01.22 3.43 2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.62-.62a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                {SITE.phone}
              </a>
              {/* E-posta */}
              <a href={`mailto:${SITE.email}`} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: 'rgba(244,233,216,.85)', textDecoration: 'none', fontSize: '.82rem',
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  border: '1px solid rgba(200,169,110,.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                {SITE.email}
              </a>
              {/* Adres */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: 'rgba(244,233,216,.85)', fontSize: '.82rem',
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  border: '1px solid rgba(200,169,110,.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                {SITE.address}
              </div>
            </div>

            {/* Sosyal Medya */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ color: 'rgba(244,233,216,.5)', fontSize: '.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                BİZİ TAKİP EDİN
              </span>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: '1px solid rgba(200,169,110,.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(244,233,216,.7)',
                    textDecoration: 'none', transition: 'all .2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#c8a96e';
                    (e.currentTarget as HTMLElement).style.borderColor = '#c8a96e';
                    (e.currentTarget as HTMLElement).style.color = '#012116';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,169,110,.35)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(244,233,216,.7)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* E-Bülten */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                style={{
                  padding: '9px 14px',
                  background: 'rgba(255,255,255,.07)',
                  border: '1px solid rgba(200,169,110,.3)',
                  borderRight: 'none',
                  borderRadius: '6px 0 0 6px',
                  color: '#fff',
                  fontSize: '.8rem',
                  outline: 'none',
                  width: 190,
                  fontFamily: 'inherit',
                }}
              />
              <button
                style={{
                  padding: '9px 14px',
                  background: '#c8a96e',
                  border: '1px solid #c8a96e',
                  borderRadius: '0 6px 6px 0',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                onClick={() => setEmail('')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#012116" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Alt Şerit ── */}
      <div style={{ padding: '14px 0' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 8,
        }}>
          <p style={{ color: 'rgba(244,233,216,.35)', fontSize: '.74rem', margin: 0 }}>
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
          <p style={{ color: 'rgba(244,233,216,.35)', fontSize: '.74rem', margin: 0 }}>
            Tasarım &amp; Geliştirme:{' '}
            <a href="https://digimas.com.tr" target="_blank" rel="noopener noreferrer"
              style={{ color: '#c8a96e', fontWeight: 600, textDecoration: 'none' }}>
              Digimas Ajans
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
