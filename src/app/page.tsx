import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import Counter from '@/components/Counter';
import { BLOG_POSTS, SITE } from '@/lib/constants';
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

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Duyuru Banner */}
      <div style={{ background: 'var(--accent)', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <IconBell size={16} color="#012116" />
          <span style={{ background: '#012116', color: '#fff', padding: '3px 10px', borderRadius: '4px', fontSize: '.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>DUYURU</span>
          <p style={{ margin: 0, color: '#012116', fontWeight: 600, fontSize: '.9rem' }}>
            Ramazan Kampanyamız başladı! Bu yıl 15.000 aileye ulaşmayı hedefliyoruz.
          </p>
          <Link href="/bagis-yap" style={{ background: '#012116', color: '#fff', padding: '5px 14px', borderRadius: '4px', fontSize: '.8rem', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Destek Ol <IconArrowRight size={13} color="#fff" />
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Hakkımızda</p>
              <h2 className="section-title">25 Yıldır İnsanlığa Hizmet Ediyoruz</h2>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Vakfımız, 2000 yılından bu yana dünya genelinde yardıma muhtaç insanlara su, gıda, eğitim ve barınma desteği sağlamaktadır. 35'ten fazla ülkede aktif projelerimizle milyonlarca insanın hayatına dokunuyoruz.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '28px' }}>
                Şeffaflık ve güven ilkesiyle hareket eden vakfımız, her kuruşun doğru yere ulaşmasını sağlamaktadır.
              </p>
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
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #012116 0%, #034228 50%, #c8a96e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 60px rgba(1,33,22,.2)' }}>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  <IconGlobe size={80} color="rgba(244,233,216,.5)" />
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '14px 0 0', color: 'rgba(255,255,255,.9)' }}>35+ Ülkede Hizmet</p>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--accent)', borderRadius: '12px', padding: '16px 20px', boxShadow: '0 8px 24px rgba(200,169,110,.4)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#012116', lineHeight: 1 }}>50K+</div>
                <div style={{ fontSize: '.8rem', color: '#012116', fontWeight: 600 }}>Yardım Edilen Aile</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sayaç */}
      <Counter />

      {/* Bölüm 2 */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '60px', alignItems: 'center' }}>
            <div style={{ order: 1 }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #c8a96e 0%, #f4e9d8 50%, #012116 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 60px rgba(1,33,22,.12)' }}>
                <div style={{ textAlign: 'center' }}>
                  <IconWater size={80} color="rgba(1,33,22,.5)" />
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '14px 0 0', color: '#012116' }}>Temiz Su Projesi</p>
                </div>
              </div>
            </div>
            <div style={{ order: 2 }}>
              <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Misyonumuz</p>
              <h2 className="section-title">Her Damla Su, Her Lokma Ekmek Önemli</h2>
              <div className="divider" />
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Dünyanın birçok bölgesinde insanlar temiz suya bile erişememektedir. Su kuyusu projelerimizle bu sorunu çözmeye çalışıyor, köylere temiz su ulaştırıyoruz.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                {['Su Kuyusu', 'Gıda Yardımı', 'Eğitim Bursu', 'Sağlık Hizmetleri'].map(s => (
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
            {BLOG_POSTS.map(post => (
              <article key={post.slug} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(1,33,22,.1)', background: '#fff', transition: 'all .3s' }}>
                <div style={{ height: 200, background: 'linear-gradient(135deg, #012116, #034228)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BlogCategoryIcon category={post.category} />
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
            Sizin Desteğinize İhtiyacımız Var
          </h2>
          <p style={{ color: 'rgba(244,233,216,.75)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 36px' }}>
            Her bağış, bir ailenin hayatını değiştirir. Bugün siz de bu büyük ailenin bir parçası olun.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bagis-yap" style={{ padding: '16px 40px', background: 'var(--accent)', color: '#012116', borderRadius: '6px', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <IconHeart size={18} color="#012116" />
              Hemen Bağış Yap
            </Link>
            <Link href="/projelerimiz" style={{ padding: '16px 40px', background: 'transparent', color: 'var(--cream)', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', border: '2px solid rgba(244,233,216,.4)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Projelerimiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
