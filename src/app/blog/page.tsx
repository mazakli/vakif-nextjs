import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { IconArrowRight, IconGlobe, IconBell, IconNewspaper } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Vakfımızdan son haberler, duyurular ve proje güncellemeleri.',
};

function BlogIcon({ category }: { category: string }) {
  if (category === 'Proje') return <IconGlobe size={56} color="rgba(244,233,216,.5)" />;
  if (category === 'Duyuru') return <IconBell size={56} color="rgba(244,233,216,.5)" />;
  return <IconNewspaper size={56} color="rgba(244,233,216,.5)" />;
}

export default function BlogPage() {
  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Haberler & Duyurular</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px' }}>Blog</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Vakfımızdan son haberler, proje güncellemeleri ve duyurular.
          </p>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '28px' }}>
            {BLOG_POSTS.map(post => (
              <article key={post.slug} style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(1,33,22,.1)', transition: 'all .3s' }}>
                <div style={{ height: 200, background: 'linear-gradient(135deg, #012116, #034228)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BlogIcon category={post.category} />
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ background: 'var(--cream)', color: '#012116', padding: '3px 10px', borderRadius: '20px', fontSize: '.73rem', fontWeight: 700 }}>{post.category}</span>
                    <span style={{ color: '#999', fontSize: '.78rem' }}>{post.date}</span>
                    <span style={{ color: '#999', fontSize: '.78rem' }}>· {post.author}</span>
                  </div>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#012116', marginBottom: '10px', lineHeight: 1.4 }}>{post.title}</h2>
                  <p style={{ color: '#666', fontSize: '.87rem', lineHeight: 1.6, marginBottom: '16px' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '.87rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Devamını Oku <IconArrowRight size={14} color="var(--accent)" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
