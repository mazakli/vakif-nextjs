'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/constants';
import { IconChevronDown, IconX, IconMenu, IconHeart } from './Icons';

interface HeaderProps {
  logoUrl?: string | null;
  siteName?: string;
  tagline?: string;
}

const NAV = [
  { label: 'ANA SAYFA',            href: '/',              dropdown: false },
  { label: 'HAKKIMIZDA',           href: '/hakkimizda',    dropdown: true  },
  { label: 'FAALİYET ALANLARIMIZ', href: '/projelerimiz',  dropdown: true  },
  { label: 'FAALİYETLERİMİZ',      href: '/blog',          dropdown: false },
  { label: 'ŞEFFAFLIK MERKEZİ',    href: '/hakkimizda',    dropdown: true  },
  { label: 'GÖNÜLLÜ OL',           href: '/iletisim',      dropdown: false },
  { label: 'İLETİŞİM',             href: '/iletisim',      dropdown: false },
];

export default function Header({ logoUrl, siteName, tagline }: HeaderProps) {
  const displayName = siteName || SITE.name;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 900,
        background: '#012116',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.3)' : 'none',
        transition: 'box-shadow .3s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 0 }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0, marginRight: 28 }}>
            {logoUrl ? (
              <img src={logoUrl} alt={displayName} style={{ width: 50, height: 50, objectFit: 'contain' }} />
            ) : (
              /* SAYE logo — kalp + eller + fidan */
              <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dış çember */}
                <circle cx="50" cy="50" r="47" fill="rgba(200,169,110,0.08)" stroke="#c8a96e" strokeWidth="2"/>

                {/* Sol el / kol — aşağıdan içe doğru kıvrılan yay */}
                <path
                  d="M18 78 C14 62 20 44 32 36"
                  stroke="#c8a96e" strokeWidth="5" fill="none"
                  strokeLinecap="round"
                />
                {/* Sol el ucu — içe dönen küçük kıvrım */}
                <path
                  d="M32 36 C36 33 40 34 42 38"
                  stroke="#c8a96e" strokeWidth="4.5" fill="none"
                  strokeLinecap="round"
                />

                {/* Sağ el / kol */}
                <path
                  d="M82 78 C86 62 80 44 68 36"
                  stroke="#c8a96e" strokeWidth="5" fill="none"
                  strokeLinecap="round"
                />
                {/* Sağ el ucu */}
                <path
                  d="M68 36 C64 33 60 34 58 38"
                  stroke="#c8a96e" strokeWidth="4.5" fill="none"
                  strokeLinecap="round"
                />

                {/* Kalp */}
                <path
                  d="M50 74
                     C50 74 26 58 26 44
                     A14 14 0 0 1 50 40
                     A14 14 0 0 1 74 44
                     C74 58 50 74 50 74Z"
                  fill="#c8a96e"
                />

                {/* Fidan sapı — kalpten yukarı */}
                <line x1="50" y1="38" x2="50" y2="22"
                  stroke="#c8a96e" strokeWidth="3.5" strokeLinecap="round"/>

                {/* Sol yaprak */}
                <path
                  d="M50 30 C46 22 36 21 36 21
                     C36 26 42 31 49 30Z"
                  fill="#c8a96e"
                />

                {/* Sağ yaprak */}
                <path
                  d="M50 26 C54 18 64 17 64 17
                     C64 22 58 27 51 26Z"
                  fill="#c8a96e"
                />
              </svg>
            )}
            <div>
              <div style={{ color: '#c8a96e', fontWeight: 900, fontSize: '1.3rem', lineHeight: 1, letterSpacing: '2px' }}>
                {displayName.toUpperCase()}
              </div>
              <div style={{ color: 'rgba(244,233,216,.55)', fontSize: '.52rem', letterSpacing: '1.5px', fontWeight: 600, lineHeight: 1.4, textTransform: 'uppercase', marginTop: 3 }}>
                SOSYAL YARDIMLAŞMA<br />VE KÜLTÜR VAKFI
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 0, flex: 1 }} className="saye-desktop-nav">
            {NAV.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 3,
                    padding: '8px 11px',
                    color: isActive ? '#c8a96e' : 'rgba(244,233,216,.9)',
                    fontWeight: 600,
                    fontSize: '.72rem',
                    letterSpacing: '.8px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    borderBottom: isActive ? '2px solid #c8a96e' : '2px solid transparent',
                    transition: 'all .2s',
                    paddingBottom: 6,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#c8a96e';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = isActive ? '#c8a96e' : 'rgba(244,233,216,.9)';
                  }}
                >
                  {link.label}
                  {link.dropdown && <IconChevronDown size={11} color="currentColor" />}
                </Link>
              );
            })}
          </nav>

          {/* ── Bağış Butonu ── */}
          <Link
            href="/bagis-yap"
            className="saye-desktop-nav"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 22px',
              background: '#c8a96e',
              color: '#012116',
              borderRadius: 6,
              fontWeight: 800,
              fontSize: '.82rem',
              letterSpacing: '.8px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'all .2s',
              border: '2px solid #c8a96e',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#b8924a';
              (e.currentTarget as HTMLElement).style.borderColor = '#b8924a';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#c8a96e';
              (e.currentTarget as HTMLElement).style.borderColor = '#c8a96e';
            }}
          >
            <IconHeart size={14} color="#012116" />
            BAĞIŞ YAP
          </Link>

          {/* ── Hamburger ── */}
          <button
            className="saye-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, color: 'var(--cream)', marginLeft: 'auto',
            }}
          >
            {menuOpen ? <IconX size={24} color="#c8a96e" /> : <IconMenu size={24} color="#c8a96e" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 800,
          background: '#012116',
          overflowY: 'auto',
          paddingTop: 72,
        }}>
          <div className="container" style={{ paddingTop: 24, paddingBottom: 40, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 16px',
                  color: pathname === link.href ? '#c8a96e' : 'rgba(244,233,216,.9)',
                  fontWeight: 600, fontSize: '.9rem', letterSpacing: '.5px',
                  borderBottom: '1px solid rgba(244,233,216,.08)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
                {link.dropdown && <IconChevronDown size={14} color="rgba(200,169,110,.7)" />}
              </Link>
            ))}
            <Link
              href="/bagis-yap"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                marginTop: 20,
                padding: '14px 24px',
                background: '#c8a96e', color: '#012116',
                borderRadius: 8, fontWeight: 800, fontSize: '.95rem',
                textDecoration: 'none',
              }}
            >
              <IconHeart size={16} color="#012116" /> BAĞIŞ YAP
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .saye-desktop-nav { display: none !important; }
          .saye-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
