'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="main-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        background: scrolled ? 'rgba(1,33,22,0.97)' : '#012116',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.2)' : 'none',
        transition: 'all .3s ease',
        padding: '0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '1.2rem', color: '#012116',
          }}>V</div>
          <div>
            <div style={{ color: 'var(--cream)', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.1 }}>{SITE.name}</div>
            <div style={{ color: 'var(--accent)', fontSize: '.7rem', letterSpacing: '1px' }}>{SITE.tagline}</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav id="main-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href;
            const isDonate = link.href === '/bagis-yap';
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: isDonate ? '9px 22px' : '8px 16px',
                  borderRadius: isDonate ? '6px' : '4px',
                  background: isDonate ? 'var(--accent)' : (isActive ? 'rgba(200,169,110,.15)' : 'transparent'),
                  color: isDonate ? '#012116' : 'var(--cream)',
                  fontWeight: isDonate ? 700 : (isActive ? 700 : 500),
                  fontSize: '.9rem',
                  border: isDonate ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all .3s ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isDonate) (e.currentTarget as HTMLElement).style.background = 'rgba(244,233,216,.1)';
                }}
                onMouseLeave={e => {
                  if (!isDonate) (e.currentTarget as HTMLElement).style.background = isActive ? 'rgba(200,169,110,.15)' : 'transparent';
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', color: 'var(--cream)', flexDirection: 'column', gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor', transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor', opacity: menuOpen ? 0 : 1, transition: 'all .3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor', transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: '#012116',
          borderTop: '1px solid rgba(244,233,216,.1)',
          padding: '16px 0 20px',
        }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: link.href === '/bagis-yap' ? 'var(--accent)' : 'var(--cream)',
                  fontWeight: link.href === '/bagis-yap' ? 700 : 500,
                  padding: '10px 12px',
                  borderRadius: '6px',
                  background: pathname === link.href ? 'rgba(200,169,110,.15)' : 'transparent',
                  textDecoration: 'none',
                  fontSize: '.95rem',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
