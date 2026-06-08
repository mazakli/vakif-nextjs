import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { BLOG_POSTS, SITE, STATS } from '@/lib/constants';
import { getIcerikler, getBlogYazilari } from '@/lib/cms';
import {
  IconArrowRight,
  IconFood, IconWater, IconEducation, IconHealth, IconHouse, IconOrphan,
  IconUsers, IconHeart, IconAward, IconBarChart, IconHandshake,
  IconPhone, IconMail, IconMapPin,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: SITE.name + ' – ' + SITE.tagline,
  description: SITE.description,
};

// Service area cards matching SAYE design
const SERVICE_AREAS = [
  { label: 'Gıda Yardımları', desc: 'İhtiyaç sahibi ailelere düzenli gıda kolisi ve sıcak yemek desteği sağlıyoruz.', href: '/projelerimiz', Icon: IconFood },
  { label: 'Kıyafet Yardımları', desc: 'Mevsimlik kıyafet yardımı ile çocuk ve yetişkinlere destek oluyoruz.', href: '/projelerimiz', Icon: IconHealth },
  { label: 'Eğitim Destekleri', desc: 'Burs ve kırtasiye yardımı ile gençlerin eğitim hayatını destekliyoruz.', href: '/projelerimiz', Icon: IconEducation },
  { label: 'Yetim Destek Programı', desc: 'Yetim çocukların tüm ihtiyaçlarını karşılayan kapsamlı destek programı.', href: '/projelerimiz', Icon: IconOrphan },
  { label: 'Yaşlı Destek Programı', desc: 'Yaşlı ve kimsesiz bireylere ev ziyareti, gıda ve sağlık desteği veriyoruz.', href: '/projelerimiz', Icon: IconUsers },
  { label: 'Acil Yardım Çalışmaları', desc: 'Doğal afet ve kriz anlarında hızlı müdahale ile destek sağlıyoruz.', href: '/projelerimiz', Icon: IconHandshake },
];

// Stats matching SAYE screenshots
const SAYE_STATS = [
  { number: 453,   suffix: '+',    label: 'Aileye Ulaşıldı',        Icon: IconHeart },
  { number: 1250,  suffix: '+',    label: 'Kıyafet Dağıtıldı',      Icon: IconAward },
  { number: 380,   suffix: '+',    label: 'Çocuğa Destek Verildi',   Icon: IconUsers },
  { number: 120,   suffix: '+',    label: 'Gönüllü',                 Icon: IconHandshake },
  { number: 15000, suffix: '+',    label: 'Hayata Dokunduk',          Icon: IconBarChart },
];

const SOCIAL_LINKS = [
  {
    href: SITE.social.instagram, label: 'Instagram',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: SITE.social.facebook, label: 'Facebook',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  },
  {
    href: SITE.social.twitter, label: 'X / Twitter',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>,
  },
  {
    href: SITE.social.youtube, label: 'YouTube',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
  },
];

export default async function HomePage() {
  const [cmsSlides, cmsSayac, cmsBlog] = await Promise.all([
    getIcerikler('slider'),
    getIcerikler('sayac'),
    getBlogYazilari(),
  ]);

  // Stats — prefer CMS, fall back to SAYE_STATS
  const sayac = cmsSayac[0] || null;
  const stats: { number: number; suffix: string; label: string }[] = sayac?.ekstra?.items || SAYE_STATS;

  // Activities / blog posts — 4 cols in SAYE design
  const activities = cmsBlog.length > 0
    ? cmsBlog.slice(0, 4).map((p: any) => ({
        slug: p.slug,
        title: p.baslik,
        excerpt: p.ozet || '',
        category: p.ekstra?.kategori || 'Faaliyet',
        date: p.yayinlandi ? new Date(p.yayinlandi).toLocaleDateString('tr-TR') : '',
        gorsel_url: p.gorsel_url || '',
      }))
    : BLOG_POSTS.slice(0, 4).map(p => ({ ...p, gorsel_url: (p as any).image || '' }));

  return (
    <>
      {/* Hero */}
      <HeroSlider cmsSlides={cmsSlides} />

      {/* ── Hizmet Alanlarımız Strip ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e8e0d4', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.75rem', textTransform: 'uppercase', marginBottom: '10px' }}>Neler Yapıyoruz</p>
            <h2 style={{ color: '#012116', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, margin: 0 }}>Hizmet Alanlarımız</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }} className="service-grid">
            {SERVICE_AREAS.map(({ label, desc, href, Icon }) => (
              <div key={label} style={{
                border: '1px solid #e5ddd3',
                borderRadius: '10px',
                padding: '28px 24px',
                background: '#fff',
                transition: 'all .3s',
              }} className="service-card">
                <div style={{
                  width: 52, height: 52,
                  borderRadius: '12px',
                  background: 'rgba(1,33,22,.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <Icon size={28} color="#012116" />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#012116', marginBottom: '8px' }}>{label}</h3>
                <p style={{ color: '#666', fontSize: '.85rem', lineHeight: 1.6, marginBottom: '16px' }}>{desc}</p>
                <Link href={href} style={{
                  color: 'var(--accent)', fontWeight: 700, fontSize: '.83rem',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px',
                }}>
                  Detaylı İncele <IconArrowRight size={13} color="var(--accent)" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .service-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 540px) { .service-grid { grid-template-columns: 1fr !important; } }
          .service-card:hover { box-shadow: 0 8px 32px rgba(1,33,22,.1); border-color: var(--accent); transform: translateY(-2px); }
        `}</style>
      </section>

      {/* ── İstatistikler / Stats Bar ── */}
      <section style={{ background: 'var(--dark-green)', padding: '52px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0',
          }} className="stats-grid">
            {stats.map((s, i) => {
              const StatIcon = (SAYE_STATS[i] || SAYE_STATS[0]).Icon;
              return (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '24px 16px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(244,233,216,.1)' : 'none',
                }}>
                  <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                    <StatIcon size={30} color="rgba(200,169,110,.7)" />
                  </div>
                  <div style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: '6px' }}>
                    {s.number.toLocaleString('tr-TR')}{s.suffix}
                  </div>
                  <div style={{ color: 'rgba(244,233,216,.7)', fontSize: '.85rem', fontWeight: 500 }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(3,1fr) !important; } }
          @media (max-width: 540px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* ── Son Faaliyetlerimiz ── */}
      <section style={{ background: 'var(--cream-light)', padding: '70px 0' }}>
        <div className="container">
          {/* Decorated Title Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: 5, height: 40, background: 'var(--accent)', borderRadius: '3px' }} />
              <div>
                <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.72rem', textTransform: 'uppercase', margin: '0 0 4px' }}>Haberler &amp; Faaliyetler</p>
                <h2 style={{ color: '#012116', fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 800, margin: 0 }}>Son Faaliyetlerimiz</h2>
              </div>
            </div>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 22px',
              background: 'transparent',
              border: '2px solid #012116',
              color: '#012116',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '.85rem',
              textDecoration: 'none',
              letterSpacing: '.5px',
              transition: 'all .2s',
            }}>
              TÜM FAALİYETLER <IconArrowRight size={14} color="#012116" />
            </Link>
          </div>

          {/* 4-column activity cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }} className="activity-grid">
            {activities.map((post: any) => (
              <article key={post.slug} style={{
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 2px 16px rgba(1,33,22,.08)',
                transition: 'all .3s',
              }} className="activity-card">
                <div style={{
                  height: 180,
                  background: post.gorsel_url
                    ? `url(${post.gorsel_url}) center/cover`
                    : 'linear-gradient(135deg, #012116, #034228)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'var(--accent)',
                    color: '#012116',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '.7rem',
                    fontWeight: 800,
                    letterSpacing: '.5px',
                  }}>{post.category}</div>
                </div>
                <div style={{ padding: '18px' }}>
                  <p style={{ color: '#999', fontSize: '.75rem', marginBottom: '8px' }}>{post.date}</p>
                  <h3 style={{ fontSize: '.93rem', fontWeight: 700, color: '#012116', marginBottom: '8px', lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: '#777', fontSize: '.82rem', lineHeight: 1.6, marginBottom: '14px' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{
                    color: 'var(--accent)', fontWeight: 700, fontSize: '.8rem',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px',
                  }}>
                    Devamını Oku <IconArrowRight size={12} color="var(--accent)" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .activity-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 540px)  { .activity-grid { grid-template-columns: 1fr !important; } }
          .activity-card:hover { box-shadow: 0 8px 32px rgba(1,33,22,.14); transform: translateY(-3px); }
        `}</style>
      </section>

      {/* ── Alt 3 Kolon Bölümü ── */}
      <section style={{ background: '#f7f2ea', padding: '64px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '28px',
            alignItems: 'start',
          }} className="bottom-three-grid">

            {/* Sol: Fotoğraf Galerisi Önizleme */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#012116', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Galeri</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{
                    aspectRatio: '1',
                    borderRadius: '8px',
                    background: `linear-gradient(135deg, hsl(${140 + i * 20},30%,${30 + i * 5}%), hsl(${40 + i * 10},40%,${50 + i * 5}%))`,
                    overflow: 'hidden',
                  }} />
                ))}
              </div>
              <Link href="/projelerimiz" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                marginTop: '14px',
                color: 'var(--accent)',
                fontWeight: 700,
                fontSize: '.83rem',
                textDecoration: 'none',
              }}>
                Tüm Galeri <IconArrowRight size={13} color="var(--accent)" />
              </Link>
            </div>

            {/* Orta: Koyu Yeşil Bağış CTA Kartı */}
            <div style={{
              background: '#012116',
              borderRadius: '12px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(1,33,22,.2)',
            }}>
              {/* Logo placeholder */}
              <div style={{
                width: 60, height: 60,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                fontWeight: 900, fontSize: '1.4rem', color: '#012116',
              }}>V</div>
              <h3 style={{ color: 'var(--cream)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '10px' }}>{SITE.name}</h3>
              <p style={{ color: 'rgba(244,233,216,.65)', fontSize: '.85rem', lineHeight: 1.6, marginBottom: '10px' }}>
                {SITE.tagline}
              </p>
              <p style={{ color: 'rgba(244,233,216,.55)', fontSize: '.8rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Her bağışınız bir ailenin hayatını değiştirir. Siz de bu güzel harekete katılın.
              </p>
              <Link href="/bagis-yap" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 30px',
                background: 'var(--accent)',
                color: '#012116',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '.95rem',
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center',
                boxSizing: 'border-box',
              }}>
                <IconHeart size={16} color="#012116" />
                Bağış Yap
              </Link>
            </div>

            {/* Sağ: İletişim Bilgileri + Sosyal */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#012116', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>İletişim</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <IconMapPin size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#555', fontSize: '.87rem', lineHeight: 1.5 }}>{SITE.address}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <IconPhone size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} style={{ color: '#555', fontSize: '.87rem', textDecoration: 'none' }}>{SITE.phone}</a>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <IconMail size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <a href={`mailto:${SITE.email}`} style={{ color: '#555', fontSize: '.87rem', textDecoration: 'none' }}>{SITE.email}</a>
                </div>
              </div>
              {/* Social icons */}
              <h4 style={{ fontSize: '.75rem', fontWeight: 700, color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Bizi Takip Edin</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    style={{
                      width: 38, height: 38,
                      borderRadius: '8px',
                      border: '1.5px solid #ddd',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#666',
                      transition: 'all .2s',
                      textDecoration: 'none',
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .bottom-three-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .bottom-three-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
