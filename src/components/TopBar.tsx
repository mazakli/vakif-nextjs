'use client';
import { IconPhone, IconMail, IconWhatsApp } from './Icons';
import { SITE } from '@/lib/constants';

export default function TopBar() {
  return (
    <div id="top-bar" style={{ background: 'var(--dark-green)', color: 'var(--cream)', padding: '8px 0', fontSize: '.83rem' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} style={{ color: 'var(--cream)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
            <IconPhone size={13} color="var(--accent)" />
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} style={{ color: 'var(--cream)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
            <IconMail size={13} color="var(--accent)" />
            {SITE.email}
          </a>
        </div>
        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '5px 14px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '.8rem', textDecoration: 'none' }}
          >
            <IconWhatsApp size={13} color="#fff" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
