import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/constants';
import { getBlogYazisi, getBlogYazilari } from '@/lib/cms';
import { IconGlobe, IconBell, IconNewspaper } from '@/components/Icons';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const cmsPosts = await getBlogYazilari();
  const cmsParams = cmsPosts.map((p: any) => ({ slug: p.slug }));
  const staticParams = BLOG_POSTS.map(p => ({ slug: p.slug }));
  return [...cmsParams, ...staticParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cmsPost = await getBlogYazisi(slug);
  if (cmsPost) return { title: cmsPost.baslik ?? 'Blog' };
  const post = BLOG_POSTS.find(p => p.slug === slug);
  return { title: post?.title ?? 'Blog' };
}

function BlogIcon({ category }: { category: string }) {
  if (category === 'Proje') return <IconGlobe size={72} color="rgba(244,233,216,.5)" />;
  if (category === 'Duyuru') return <IconBell size={72} color="rgba(244,233,216,.5)" />;
  return <IconNewspaper size={72} color="rgba(244,233,216,.5)" />;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  // Önce CMS'den dene
  const cmsPost = await getBlogYazisi(slug);
  const staticPost = BLOG_POSTS.find(p => p.slug === slug);

  if (!cmsPost && !staticPost) notFound();

  const post = cmsPost ? {
    title: cmsPost.baslik,
    excerpt: cmsPost.ozet || '',
    icerik: cmsPost.icerik || '',
    category: cmsPost.ekstra?.kategori || 'Haber',
    author: cmsPost.ekstra?.yazar || 'Vakıf',
    date: cmsPost.yayinlandi ? new Date(cmsPost.yayinlandi).toLocaleDateString('tr-TR') : '',
    gorsel_url: cmsPost.gorsel_url || '',
  } : {
    title: staticPost!.title,
    excerpt: staticPost!.excerpt,
    icerik: '',
    category: staticPost!.category,
    author: staticPost!.author,
    date: staticPost!.date,
    gorsel_url: '',
  };

  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px' }}>
            <span style={{ background: 'var(--accent)', color: '#012116', padding: '4px 12px', borderRadius: '20px', fontSize: '.78rem', fontWeight: 700 }}>{post.category}</span>
            <span style={{ color: 'rgba(255,255,255,.6)', fontSize: '.83rem', display: 'flex', alignItems: 'center' }}>{post.date}</span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', maxWidth: '700px', margin: '0 auto' }}>{post.title}</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ background: '#fff', borderRadius: '14px', padding: 'clamp(24px,5vw,48px)', boxShadow: '0 4px 24px rgba(1,33,22,.08)' }}>
            <div style={{ height: 280, background: post.gorsel_url ? 'none' : 'linear-gradient(135deg, #012116, #034228)', backgroundImage: post.gorsel_url ? `url(${post.gorsel_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', marginBottom: '32px', display: post.gorsel_url ? 'block' : 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {!post.gorsel_url && <BlogIcon category={post.category} />}
            </div>
            {post.excerpt && (
              <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1rem', marginBottom: '16px', fontWeight: 500 }}>{post.excerpt}</p>
            )}
            {post.icerik ? (
              <div style={{ color: '#555', lineHeight: 1.8, fontSize: '1rem' }} dangerouslySetInnerHTML={{ __html: post.icerik }} />
            ) : (
              <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1rem' }}>
                Projelerimiz ve faaliyetlerimiz hakkında daha fazla bilgi almak için{' '}
                <Link href="/iletisim" style={{ color: 'var(--accent)', fontWeight: 700 }}>iletişim sayfamızı</Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            )}
          </div>
          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Tüm Haberlere Dön
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
