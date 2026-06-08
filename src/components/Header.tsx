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
              <img src={logoUrl} alt={displayName} style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover' }} />
            ) : (
              /* SAYE-style logo */
              <svg width="46" height="46" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" fill="rgba(200,169,110,0.15)" stroke="#c8a96e" strokeWidth="1.5"/>
                <path d="M30 42s-13-8-13-17a7.5 7.5 0 0113-5.14A7.5 7.5 0 0143 25c0 9-13 17-13 17z" fill="#c8a96e"/>
                <line x1="30" y1="22" x2="30" y2="14" stroke="#012116" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 18c-1.5-2.5-4-2.5-4-2.5s0 2.5 2 3.5" stroke="#012116" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                <path d="M30 17c1.5-2.5 4-2.5 4-2.5s0 2.5-2 3.5" stroke="#012116" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
              </svg>
            )}
            <div>
              <div style={{ color: '#c8a96e', fontWeight: 900, fontSize: '1.25rem', lineHeight: 1, letterSpacing: '1px' }}>
                {displayName.toUpperCase()}
              </div>
              <div style={{ color: 'rgba(244,233,216,.6)', fontSize: '.55rem', letterSpacing: '1.2px', fontWeight: 600, lineHeight: 1.3, textTransform: 'uppercase', marginTop: 2 }}>
                {(tagline || 'SOSYAL YARDIMLAŞMA').split(' ').map((word, i) => (
                  <span key={i}>{word} </span>
                ))}
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
