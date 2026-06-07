'use client';
import { useState } from 'react';
import { SITE } from '@/lib/constants';
import { IconPhone, IconMail, IconMapPin, IconWhatsApp, IconCheckCircle, IconArrowRight } from '@/components/Icons';

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1000));
    setStatus('sent');
  };

  const CONTACTS = [
    { Icon: IconMapPin,    title: 'Adres',    value: SITE.address,  href: undefined },
    { Icon: IconPhone,     title: 'Telefon',  value: SITE.phone,    href: `tel:${SITE.phone.replace(/\s/g,'')}` },
    { Icon: IconMail,      title: 'E-posta',  value: SITE.email,    href: `mailto:${SITE.email}` },
    { Icon: IconWhatsApp,  title: 'WhatsApp', value: SITE.phone,    href: `https://wa.me/${SITE.whatsapp}` },
  ];

  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Bize Ulaşın</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px' }}>İletişim</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Her türlü soru ve öneriniz için bize ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Bilgi */}
            <div>
              <h2 className="section-title" style={{ fontSize: '1.6rem' }}>İletişim Bilgileri</h2>
              <div className="divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                {CONTACTS.map(c => (
                  <div key={c.title} style={{ display: 'flex', gap: '14px', padding: '16px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(1,33,22,.08)', alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <c.Icon size={20} color="#012116" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#012116', fontSize: '.85rem', marginBottom: '3px' }}>{c.title}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: '#555', fontSize: '.9rem', textDecoration: 'none' }}>{c.value}</a>
                        : <span style={{ color: '#555', fontSize: '.9rem' }}>{c.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
              {/* Harita placeholder */}
              <div style={{ marginTop: '28px', borderRadius: '12px', overflow: 'hidden', height: 220, background: 'linear-gradient(135deg, #012116, #034228)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
                <div>
                  <IconMapPin size={40} color="rgba(244,233,216,.4)" />
                  <p style={{ margin: '12px 0 0', fontSize: '.9rem', color: 'rgba(255,255,255,.7)' }}>Harita burada gösterilecek</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#fff', borderRadius: '14px', padding: '36px', boxShadow: '0 4px 24px rgba(1,33,22,.1)' }}>
              <h2 style={{ color: '#012116', fontSize: '1.4rem', marginBottom: '8px' }}>Mesaj Gönderin</h2>
              <p style={{ color: '#666', fontSize: '.88rem', marginBottom: '24px' }}>En kısa sürede dönüş yapacağız.</p>

              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <IconCheckCircle size={56} color="#4ade80" />
                  <h3 style={{ color: '#012116', marginBottom: '8px', marginTop: '16px' }}>Mesajınız İletildi!</h3>
                  <p style={{ color: '#666' }}>En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                      { key: 'name',    label: 'Ad Soyad',  type: 'text',  placeholder: 'Adınız',             required: true },
                      { key: 'email',   label: 'E-posta',   type: 'email', placeholder: 'mail@example.com',   required: true },
                      { key: 'phone',   label: 'Telefon',   type: 'tel',   placeholder: '+90 5xx xxx xx xx',  required: false },
                      { key: 'subject', label: 'Konu',      type: 'text',  placeholder: 'Mesajınızın konusu', required: true },
                    ].map(f => (
                      <div key={f.key} className="form-group" style={{ gridColumn: f.key === 'subject' ? 'span 2' : undefined, margin: 0, marginBottom: '16px' }}>
                        <label className="form-label">{f.label} {f.required && <span style={{ color: 'red' }}>*</span>}</label>
                        <input type={f.type} placeholder={f.placeholder} required={f.required}
                          value={(form as any)[f.key]}
                          onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                          className="form-input" />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label className="form-label">Mesaj <span style={{ color: 'red' }}>*</span></label>
                    <textarea rows={5} required placeholder="Mesajınız..." value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="form-input" style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" disabled={status === 'sending'} style={{
                    width: '100%', padding: '14px', background: '#012116', color: 'var(--cream)',
                    border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '1rem',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: status === 'sending' ? .7 : 1, fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  }}>
                    {status === 'sending' ? 'Gönderiliyor...' : <><span>Mesaj Gönder</span><IconArrowRight size={16} color="var(--cream)" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
