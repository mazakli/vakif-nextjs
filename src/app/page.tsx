import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import Counter from '@/components/Counter';
import { BLOG_POSTS, SITE, STATS } from '@/lib/constants';
import { getIcerikler, getBlogYazilari } from '@/lib/cms';
import { IconHeart, IconArrowRight, IconGlobe, IconWater, IconCheck, IconBell, IconGlobe as IconGlobe2, IconNewspaper } from '@/components/Icons';

export const metadata: Metadata = {
  title: SITE.name + ' – ' + SITE.tagline,
  description: SITE.description,
};

function BlogCategoryIcon({ category }: { category: string }) {
  if (category === 'Proje') return <IconGlobe size={52} color="rgba(244,233,216,.6)" />;
  if (category === 'Duyuru') return <IconBell size={52} color="rgba(244,233,216,.6)" />;
  return <IconNewspaper size={52} color="rgba(244,233,216,.6)" />;
}

export default async function HomePage() {
  const [cmsSlides, cmsDuyuru, cmsIntro, cmsSayac, cmsMisyon, cmsCta, cmsBlog] = await Promise.all([
    getIcerikler('slider'),
    getIcerikler('duyuru'),
    getIcerikler('intro'),
    getIcerikler('sayac'),
    getIcerikler('misyon'),
    getIcerikler('cta'),
    getBlogYazilari(),
  ]);

  // Duyuru
  const duyuru = cmsDuyuru[0] || null;

  // Intro / Hakkımızda
  const intro = cmsIntro[0] || null;

  // Sayaç
  const sayac = cmsSayac[0] || null;
  const stats = sayac?.ekstra?.items || STATS;

  // Misyon
  const misyon = cmsMisyon[0] || null;

  // CTA
  const cta = cmsCta[0] || null;

  // Blog
  const blogPosts = cmsBlog.length > 0
    ? cmsBlog.slice(0, 3).map((p: any) => ({
        slug: p.slug,
        title: p.baslik,
        excerpt: p.ozet || '',
        category: p.ekstra?.kategori || 'Haber',
        date: p.yayinlandi ? new Date(p.yayinlandi).toLocaleDateString('tr-TR') : '',
        gorsel_url: p.gorsel_url || '',
      }))
    : BLOG_POSTS;

  return (
    <>
      <HeroSlider cmsSlides={cmsSlides} />

      {/* Duyuru Banner */}
      {(duyuru || true) && (
        <div style={{ background: 'var(--accent)', padding: '14px 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <IconBell size={16} color="#012116" />
            <span style={{ background: '#012116', color: '#fff', padding: '3px 10px', borderRadius: '4px', fontSize: '.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>DUYURU</span>
            <p style={{ margin: 0, color: '#012116', fontWeight: 600, fontSize: '.9rem' }}>
              {duyuru?.baslik || 'Ramazan Kampanyamız başladı! Bu yıl 15.000 aileye ulaşmayı hedefliyoruz.'}
            </p>
            <Link href={duyuru?.ekstra?.buton_url || '/bagis-yap'} style={{ background: '#012116', color: '#fff', padding: '5px 14px', borderRadius: '4px', fontSize: '.8rem', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {duyuru?.ekstra?.buton_metin || 'Destek Ol'} <IconArrowRight size={13} color="#fff" />
            </Link>
          </div>
        </div>
      )}

      {/* Intro / Hakkımızda */}
      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Hakkımızda</p>
              <h2 className="section-title">{intro?.baslik || '25 Yıldır İnsanlığa Hizmet Ediyoruz'}</h2>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                {intro?.ozet || 'Vakfımız, 2000 yılından bu yana dünya genelinde yardıma muhtaç insanlara su, gıda, eğitim ve barınma desteği sağlamaktadır. 35\'ten fazla ülkede aktif projelerimizle milyonlarca insanın hayatına dokunuyoruz.'}
              </p>
              {intro?.icerik && (
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '28px' }}>{intro.icerik}</p>
              )}
              {!intro?.icerik && (
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '28px' }}>
                  Şeffaflık ve güven ilkesiyle hareket eden vakfımız, her kuruşun doğru yere ulaşmasını sağlamaktadır.
                </p>
              )}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/hakkimizda" style={{ padding: '12px 24px', background: '#012116', color: 'var(--cream)', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #012116' }}>
                  Daha Fazla <IconArrowRight size={15} color="var(--cream)" />
                </Link>
                <Link href="/projelerimiz" style={{ padding: '12px 24px', background: 'transparent', color: '#012116', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #012116' }}>
                  Projelerimiz
                </Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', background: intro?.gorsel_url ? 'none' : 'linear-gradient(135deg, #012116 0%, #034228 50%, #c8a96e 100%)', backgroundImage: intro?.gorsel_url ? `url(${intro.gorsel_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 60px rgba(1,33,22,.2)' }}>
                {!intro?.gorsel_url && (
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <IconGlobe size={80} color="rgba(244,233,216,.5)" />
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '14px 0 0', color: 'rgba(255,255,255,.9)' }}>
                      {intro?.ekstra?.gorsel_metin || '35+ Ülkede Hizmet'}
                    </p>
                  </div>
                )}
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--accent)', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 8px 24px rgba(200,169,110,.4)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#012116', lineHeight: 1 }}>
                  {intro?.ekstra?.badge_sayi || '50K+'}
                </div>
                <div style={{ fontSize: '.8rem', color: '#012116', fontWeight: 600 }}>
                  {intro?.ekstra?.badge_etiket || 'Yardım Edilen Aile'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sayaç */}
      <Counter stats={stats} />

      {/* Misyon Bölümü */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '60px', alignItems: 'center' }}>
            <div style={{ order: 1 }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', background: misyon?.gorsel_url ? 'none' : 'linear-gradient(135deg, #c8a96e 0%, #f4e9d8 50%, #012116 100%)', backgroundImage: misyon?.gorsel_url ? `url(${misyon.gorsel_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 60px rgba(1,33,22,.12)' }}>
                {!misyon?.gorsel_url && (
                  <div style={{ textAlign: 'center' }}>
                    <IconWater size={80} color="rgba(1,33,22,.5)" />
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '14px 0 0', color: '#012116' }}>
                      {misyon?.ekstra?.gorsel_metin || 'Temiz Su Projesi'}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div style={{ order: 2 }}>
              <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Misyonumuz</p>
              <h2 className="section-title">{misyon?.baslik || 'Her Damla Su, Her Lokma Ekmek Önemli'}</h2>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                {misyon?.ozet || 'Dünyanın birçok bölgesinde insanlar temiz suya bile erişememektedir. Su kuyusu projelerimizle bu sorunu çözmeye çalışıyor, köylere temiz su ulaştırıyoruz.'}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                {(misyon?.ekstra?.liste || ['Su Kuyusu', 'Gıda Yardımı', 'Eğitim Bursu', 'Sağlık Hizmetleri']).map((s: string) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333', fontSize: '.9rem' }}>
                    <IconCheck size={16} color="var(--accent)" strokeWidth={2.5} /> {s}
                  </div>
                ))}
              </div>
              <Link href="/bagis-yap" style={{ padding: '14px 32px', background: 'var(--accent)', color: '#012116', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <IconHeart size={16} color="#012116" />
                Hemen Bağış Yap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '10px' }}>Haberler</p>
            <h2 className="section-title">Son Gelişmeler</h2>
            <div className="divider" style={{ margin: '16px auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '28px' }}>
            {blogPosts.map((post: any) => (
              <article key={post.slug} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(1,33,22,.1)', background: '#fff', transition: 'all .3s' }}>
                <div style={{ height: 200, background: post.gorsel_url ? 'none' : 'linear-gradient(135deg, #012116, #034228)', backgroundImage: post.gorsel_url ? `url(${post.gorsel_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {!post.gorsel_url && <BlogCategoryIcon category={post.category} />}
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
                    <span style={{ background: 'var(--cream)', color: '#012116', padding: '3px 10px', borderRadius: '20px', fontSize: '.73rem', fontWeight: 700 }}>{post.category}</span>
                    <span style={{ color: '#999', fontSize: '.78rem' }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#012116', marginBottom: '10px', lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: '#666', fontSize: '.87rem', lineHeight: 1.6, marginBottom: '16px' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '.87rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Devamını Oku <IconArrowRight size={14} color="var(--accent)" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/blog" style={{ padding: '13px 32px', background: '#012116', color: 'var(--cream)', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #012116' }}>
              Tüm Haberler <IconArrowRight size={15} color="var(--cream)" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-green)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', marginBottom: '16px' }}>
            {cta?.baslik || 'Sizin Desteğinize İhtiyacımız Var'}
          </h2>
          <p style={{ color: 'rgba(244,233,216,.75)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 36px' }}>
            {cta?.ozet || 'Her bağış, bir ailenin hayatını değiştirir. Bugün siz de bu büyük ailenin bir parçası olun.'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={cta?.ekstra?.buton1_url || '/bagis-yap'} style={{ padding: '16px 40px', background: 'var(--accent)', color: '#012116', borderRadius: '6px', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <IconHeart size={18} color="#012116" />
              {cta?.ekstra?.buton1_metin || 'Hemen Bağış Yap'}
            </Link>
            <Link href={cta?.ekstra?.buton2_url || '/projelerimiz'} style={{ padding: '16px 40px', background: 'transparent', color: 'var(--cream)', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', border: '2px solid rgba(244,233,216,.4)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {cta?.ekstra?.buton2_metin || 'Projelerimiz'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
