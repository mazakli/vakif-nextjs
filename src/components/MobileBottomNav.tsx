'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ITEMS = [
  {
    label: 'Ana Sayfa',
    href: '/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    label: 'Bağış Yap',
    href: '/bagis-yap',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    highlight: true,
  },
  {
    label: 'Gönüllü Ol',
    href: '/iletisim',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: 'İletişim',
    href: '/iletisim',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <>
      <nav style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#012116',
        borderTop: '1px solid rgba(200,169,110,.2)',
        boxShadow: '0 -4px 20px rgba(0,0,0,.3)',
      }} className="mobile-bottom-nav">
        {ITEMS.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                flex: 1,
                padding: '8px 4px 10px',
                color: item.highlight
                  ? 'var(--accent)'
                  : isActive
                  ? 'var(--accent)'
                  : 'rgba(244,233,216,.6)',
                textDecoration: 'none',
                fontSize: '.65rem',
                fontWeight: item.highlight || isActive ? 700 : 500,
                letterSpacing: '.3px',
                transition: 'color .2s',
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
      {/* Spacer so content isn't hidden behind nav */}
      <div className="mobile-bottom-nav-spacer" />
      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-nav { display: flex !important; }
          .mobile-bottom-nav-spacer { height: 60px; }
        }
      `}</style>
    </>
  );
}
