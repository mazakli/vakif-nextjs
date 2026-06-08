import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { BLOG_POSTS, SITE, STATS } from '@/lib/constants';
import { getIcerikler, getBlogYazilari } from '@/lib/cms';
import {
  IconServiceFood, IconServiceClothes, IconServiceEducation,
  IconServiceOrphan, IconServiceElderly, IconServiceEmergency,
  IconArrowRight, IconHeart, IconUsers, IconAward, IconHandshake, IconBarChart, IconClothes,
  IconPhone, IconMail, IconMapPin,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: SITE.name + ' – ' + SITE.tagline,
  description: SITE.description,
};

/* ── Hizmet Alanları ── */
const SERVICES = [
  {
    label: 'Gıda Yardımları',
    desc: 'İhtiyaç sahibi ailelere düzenli gıda desteği sağlıyoruz.',
    Icon: IconServiceFood,
  },
  {
    label: 'Kıyafet Yardımları',
    desc: 'Mevsimine uygun kıyafetleri ihtiyaç sahiplerine ulaştırıyoruz.',
    Icon: IconServiceClothes,
  },
  {
    label: 'Eğitim Destekleri',
    desc: 'Çocuklarımızın eğitimine katkı sağlıyor, geleceğe umut oluyoruz.',
    Icon: IconServiceEducation,
  },
  {
    label: 'Yetim Destek Programı',
    desc: 'Yetim çocuklarımızın her zaman yanında oluyoruz.',
    Icon: IconServiceOrphan,
  },
  {
    label: 'Yaşlı Destek Programı',
    desc: 'Yaşlı büyüklerimizin hayatını kolaylaştırıyoruz.',
    Icon: IconServiceElderly,
  },
  {
    label: 'Acil Yardım Çalışmaları',
    desc: 'Acil durumlarda hızlı yardım ulaştırıyoruz.',
    Icon: IconServiceEmergency,
  },
];

/* ── İstatistikler ── */
const SAYE_STATS = [
  { number: 453,   suffix: '+', label: 'Aileye Ulaşıldı',       Icon: IconUsers    },
  { number: 1250,  suffix: '+', label: 'Kıyafet Dağıtıldı',     Icon: IconClothes  },
  { number: 380,   suffix: '+', label: 'Çocuğa Destek Verildi', Icon: IconAward    },
  { number: 120,   suffix: '+', label: 'Gönüllü',               Icon: IconHandshake },
  { number: 15000, suffix: '+', label: 'Hayata Dokunduk',        Icon: IconHeart    },
];

/* ── Placeholder galeri görselleri ── */
const GALLERY = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=70',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=300&q=70',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&q=70',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&q=70',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&q=70',
];

/* ── Sosyal Medya ── */
const SOCIALS = [
  { href: SITE.social.instagram, label: 'Instagram',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { href: SITE.social.facebook, label: 'Facebook',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { href: SITE.social.twitter, label: 'X',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg> },
  { href: SITE.social.youtube, label: 'YouTube',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
];

/* ── Placeholder faaliyet görselleri ── */
const ACTIVITY_IMAGES = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=75',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=75',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=75',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=75',
];

export default async function HomePage() {
  const [cmsSlides, cmsSayac, cmsBlog] = await Promise.all([
    getIcerikler('slider'),
    getIcerikler('sayac'),
    getBlogYazilari(),
  ]);

  const sayac = cmsSayac[0] || null;
  const stats: typeof SAYE_STATS = sayac?.ekstra?.items || SAYE_STATS;

  const activities = cmsBlog.length > 0
    ? cmsBlog.slice(0, 4).map((p: any, i: number) => ({
        slug: p.slug,
        title: p.baslik,
        excerpt: p.ozet || '',
        category: p.ekstra?.kategori || 'Faaliyet',
        date: p.yayinlandi ? new Date(p.yayinlandi).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) : '',
        image: p.gorsel_url || ACTIVITY_IMAGES[i % ACTIVITY_IMAGES.length],
      }))
    : BLOG_POSTS.slice(0, 4).map((p, i) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        category: p.category,
        date: p.date,
        image: ACTIVITY_IMAGES[i % ACTIVITY_IMAGES.length],
      }));

  return (
    <>
      {/* ── 1. HERO ── */}
      <HeroSlider cmsSlides={cmsSlides} />

      {/* ── 2. HİZMET ALANLARI ── */}
      <section style={{ background: '#f8f4ee', borderBottom: '1px solid #e8e0d5' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6,1fr)',
          }} className="saye-services">
            {SERVICES.map(({ label, desc, Icon }, i) => (
              <div key={label} style={{
                padding: '28px 18px 24px',
                borderRight: i < 5 ? '1px solid #e5ddd3' : 'none',
                background: '#f8f4ee',
                transition: 'background .25s',
              }} className="saye-service-card">
                <div style={{ marginBottom: 12, color: '#012116' }}>
                  <Icon size={40} color="#012116" />
                </div>
                <h3 style={{
                  color: '#012116', fontWeight: 800,
                  fontSize: '.8rem', letterSpacing: '.3px',
                  textTransform: 'uppercase', marginBottom: 6, lineHeight: 1.3,
                }}>{label}</h3>
                <p style={{ color: '#666', fontSize: '.78rem', lineHeight: 1.55, marginBottom: 12 }}>{desc}</p>
                <Link href="/projelerimiz" style={{
                  color: '#c8a96e', fontWeight: 700, fontSize: '.75rem',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                }}>
                  Detaylı İncele <IconArrowRight size={11} color="#c8a96e" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) { .saye-services { grid-template-columns: repeat(3,1fr) !important; } .saye-services > div { border-right: none !important; border-bottom: 1px solid #e5ddd3; } }
          @media (max-width: 560px) { .saye-services { grid-template-columns: repeat(2,1fr) !important; } }
          .saye-service-card:hover { background: #fff !important; }
        `}</style>
      </section>

      {/* ── 3. İSTATİSTİKLER ── */}
      <section style={{ background: '#012116' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
          }} className="saye-stats">
            {stats.map((s: any, i: number) => {
              const StatIcon = (SAYE_STATS[i] || SAYE_STATS[0]).Icon;
              return (
                <div key={i} style={{
                  padding: '32px 16px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(244,233,216,.1)' : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                }}>
                  <StatIcon size={28} color="rgba(200,169,110,.75)" />
                  <div style={{
                    fontSize: 'clamp(1.7rem,3vw,2.4rem)',
                    fontWeight: 900, color: '#c8a96e', lineHeight: 1,
                  }}>
                    {(s.number || 0).toLocaleString('tr-TR')}{s.suffix || ''}
                  </div>
                  <div style={{ color: 'rgba(244,233,216,.7)', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.8px', textTransform: 'uppercase', textAlign: 'center' }}>
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px)  { .saye-stats { grid-template-columns: repeat(3,1fr) !important; } }
          @media (max-width: 560px)  { .saye-stats { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* ── 4. SON FAALİYETLERİMİZ ── */}
      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div className="container">
          {/* Başlık Satırı */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 36, flexWrap: 'wrap', gap: 16,
          }}>
            {/* Süslemeli başlık */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 30, height: 1, background: '#c8a96e' }} />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#c8a96e" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
              <h2 style={{
                color: '#012116', fontSize: 'clamp(1.1rem,2vw,1.35rem)',
                fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase',
              }}>SON FAALİYETLERİMİZ</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#c8a96e" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
                <div style={{ width: 30, height: 1, background: '#c8a96e' }} />
              </div>
            </div>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '9px 20px',
              border: '1.5px solid #012116', color: '#012116',
              borderRadius: 5, fontWeight: 700, fontSize: '.78rem',
              letterSpacing: '.8px', textDecoration: 'none',
            }}>
              TÜM FAALİYETLER <IconArrowRight size={13} color="#012116" />
            </Link>
          </div>

          {/* 4 Kolon Kartlar */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18,
          }} className="saye-activities">
            {activities.map((post: { slug: string; title: string; excerpt: string; category: string; date: string; image: string }, i: number) => (
              <article key={post.slug} style={{
                borderRadius: 8, overflow: 'hidden',
                background: '#fff',
                border: '1px solid #ebe5dc',
                transition: 'all .25s',
              }} className="saye-act-card">
                {/* Görsel */}
                <div style={{
                  height: 175,
                  background: post.image
                    ? `url(${post.image}) center/cover`
                    : `linear-gradient(135deg, #012116, #034228)`,
                  position: 'relative',
                }} />
                {/* İçerik */}
                <div style={{ padding: '16px 16px 18px' }}>
                  <p style={{ color: '#999', fontSize: '.72rem', marginBottom: 7 }}>{post.date}</p>
                  <h3 style={{
                    color: '#012116', fontSize: '.9rem', fontWeight: 800,
                    lineHeight: 1.35, marginBottom: 8,
                  }}>{post.title}</h3>
                  <p style={{ color: '#666', fontSize: '.78rem', lineHeight: 1.6, marginBottom: 12 }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{
                    color: '#c8a96e', fontWeight: 700, fontSize: '.75rem',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}>
                    Devamını Oku <IconArrowRight size={11} color="#c8a96e" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .saye-activities { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 540px)  { .saye-activities { grid-template-columns: 1fr !important; } }
          .saye-act-card:hover { box-shadow: 0 8px 28px rgba(1,33,22,.12); transform: translateY(-3px); }
        `}</style>
      </section>

      {/* ── 5. ALT 3 KOLON: GALERİ | BAĞIŞ CTA | GÖNÜLLÜ ── */}
      <section style={{ background: '#f8f4ee', padding: '52px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1.1fr 0.9fr 1fr', gap: 24, alignItems: 'start',
          }} className="saye-bottom-grid">

            {/* Sol: Galeriden Kareler */}
            <div>
              <h3 style={{
                color: '#012116', fontWeight: 800, fontSize: '.82rem',
                letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 16,
              }}>GALERİDEN KARELER</h3>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {GALLERY.map((src, i) => (
                  <div key={i} style={{
                    width: 'calc(20% - 5px)', aspectRatio: '1',
                    borderRadius: 5, overflow: 'hidden',
                    background: `url(${src}) center/cover`,
                    flexShrink: 0,
                  }} />
                ))}
              </div>
            </div>

            {/* Orta: Koyu Yeşil Bağış Kartı */}
            <div style={{
              background: '#012116',
              borderRadius: 12,
              padding: '36px 28px',
              textAlign: 'center',
            }}>
              {/* Logo */}
              <svg width="52" height="52" viewBox="0 0 60 60" fill="none" style={{ margin: '0 auto 14px' }}>
                <circle cx="30" cy="30" r="28" fill="rgba(200,169,110,0.2)" stroke="#c8a96e" strokeWidth="1.5"/>
                <path d="M30 42s-13-8-13-17a7.5 7.5 0 0113-5.14A7.5 7.5 0 0143 25c0 9-13 17-13 17z" fill="#c8a96e"/>
                <line x1="30" y1="22" x2="30" y2="14" stroke="#012116" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 18c-1.5-2.5-4-2.5-4-2.5s0 2.5 2 3.5" stroke="#012116" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                <path d="M30 17c1.5-2.5 4-2.5 4-2.5s0 2.5-2 3.5" stroke="#012116" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
              </svg>
              {/* Script yazı */}
              <div style={{
                fontFamily: 'var(--font-dancing), "Dancing Script", cursive',
                color: '#c8a96e',
                fontSize: '1.9rem',
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: 8,
              }}>
                SAYEnizde<br />iyilik büyüyor.
              </div>
              <p style={{ color: 'rgba(244,233,216,.6)', fontSize: '.8rem', lineHeight: 1.6, marginBottom: 22 }}>
                Küçük bir destek, büyük bir değişim yaratır.
              </p>
              <Link href="/bagis-yap" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px 24px',
                background: '#c8a96e', color: '#012116',
                borderRadius: 7, fontWeight: 800, fontSize: '.88rem',
                textDecoration: 'none', letterSpacing: '.5px',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#012116" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
                BAĞIŞ YAP
              </Link>
            </div>

            {/* Sağ: Gönüllü Ol */}
            <div style={{ paddingTop: 8 }}>
              {/* Volunteer SVG icon */}
              <div style={{ marginBottom: 16 }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M32 48s-16-10-16-22a12 12 0 0116-11.4A12 12 0 0148 26c0 12-16 22-16 22z" strokeWidth="2"/>
                  <circle cx="32" cy="20" r="6"/>
                  <path d="M20 56v-6a8 8 0 018-8h8a8 8 0 018 8v6"/>
                </svg>
              </div>
              <h3 style={{
                color: '#012116', fontWeight: 800, fontSize: '.95rem',
                letterSpacing: '.5px', textTransform: 'uppercase', lineHeight: 1.3, marginBottom: 12,
              }}>GÖNÜLLÜ OL,<br />İYİLİĞE ORTAK OL</h3>
              <p style={{ color: '#666', fontSize: '.84rem', lineHeight: 1.65, marginBottom: 22 }}>
                Siz de gönüllü olarak iyilik hareketimizin bir parçası olabilir, daha fazla hayata dokunabilirsiniz.
              </p>
              <Link href="/iletisim" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 22px',
                border: '2px solid #012116', color: '#012116',
                borderRadius: 6, fontWeight: 700, fontSize: '.8rem',
                letterSpacing: '.5px', textDecoration: 'none',
                transition: 'all .2s',
              }}>
                GÖNÜLLÜ BAŞVURUSU YAP <IconArrowRight size={13} color="#012116" />
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 960px)  { .saye-bottom-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px)  { .saye-bottom-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
