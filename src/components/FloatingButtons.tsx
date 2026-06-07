'use client';
import { IconPhone, IconMail, IconWhatsApp } from './Icons';
import { SITE } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div id="floating-contacts" style={{
      position: 'fixed', right: '20px', bottom: '100px',
      display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 800,
    }}>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank" rel="noopener noreferrer"
        title="WhatsApp"
        style={{ width: 50, height: 50, borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,.4)', transition: 'transform .3s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        <IconWhatsApp size={22} color="#fff" />
      </a>
      <a
        href={`tel:${SITE.phone.replace(/\s/g, '')}`}
        title="Ara"
        style={{ width: 50, height: 50, borderRadius: '50%', background: '#012116', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(1,33,22,.35)', transition: 'transform .3s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        <IconPhone size={20} color="var(--cream)" />
      </a>
      <a
        href={`mailto:${SITE.email}`}
        title="E-posta"
        style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--accent)', color: '#012116', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(200,169,110,.35)', transition: 'transform .3s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        <IconMail size={20} color="#012116" />
      </a>
    </div>
  );
}
