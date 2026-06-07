import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/constants';
import { IconHeart, IconMapPin, IconWater, IconEducation, IconFood } from '@/components/Icons';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find(p => p.slug === slug);
  return { title: p?.title ?? 'Proje' };
}

function ProjectIcon({ title }: { title: string }) {
  if (title.includes('Su')) return <IconWater size={80} color="rgba(244,233,216,.4)" />;
  if (title.includes('Eğitim')) return <IconEducation size={80} color="rgba(244,233,216,.4)" />;
  return <IconFood size={80} color="rgba(244,233,216,.4)" />;
}

function pct(raised: number, goal: number) { return Math.min(100, Math.round((raised / goal) * 100)); }

export default async function ProjeDetailPage({ params }: Props) {
  const { slug } = await params;
  const proje = PROJECTS.find(p => p.slug === slug);
  if (!proje) notFound();

  const percent = pct(proje.raised, proje.goal);

  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '12px' }}>
            <span style={{
              background: proje.status === 'completed' ? 'var(--accent)' : '#4ade80',
              color: proje.status === 'completed' ? '#012116' : '#014420',
              padding: '4px 12px', borderRadius: '20px', fontSize: '.78rem', fontWeight: 700,
            }}>{proje.status === 'completed' ? 'Tamamlandı' : 'Aktif Proje'}</span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', marginBottom: '10px' }}>{proje.title}</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <IconMapPin size={14} color="var(--accent)" /> {proje.location}
          </p>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '28px', alignItems: 'start' }}>
            <div>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '28px', boxShadow: '0 4px 24px rgba(1,33,22,.1)', marginBottom: '24px' }}>
                <h2 style={{ color: '#012116', marginBottom: '16px', fontSize: '1.2rem' }}>Proje Hakkında</h2>
                <p style={{ color: '#555', lineHeight: 1.8, margin: 0 }}>{proje.excerpt}</p>
              </div>
              <div style={{ height: 200, background: 'linear-gradient(135deg, #012116, #034228)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectIcon title={proje.title} />
              </div>
            </div>

            <div>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '28px', boxShadow: '0 4px 24px rgba(1,33,22,.1)', marginBottom: '24px' }}>
                <h3 style={{ color: '#012116', marginBottom: '20px', fontSize: '1.1rem' }}>Bağış Durumu</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '.9rem' }}>
                  <span style={{ fontWeight: 700, color: '#012116', fontSize: '1.3rem' }}>₺{proje.raised.toLocaleString('tr-TR')}</span>
                  <span style={{ color: '#888' }}>₺{proje.goal.toLocaleString('tr-TR')}</span>
                </div>
                <div style={{ height: 10, background: '#f0f0f0', borderRadius: '5px', overflow: 'hidden', marginBottom: '8px' }}>
                  <div style={{ height: '100%', width: `${percent}%`, background: '#012116', borderRadius: '5px' }} />
                </div>
                <div style={{ textAlign: 'right', color: '#888', fontSize: '.8rem' }}>%{percent} tamamlandı</div>
              </div>

              {proje.status !== 'completed' && (
                <Link href="/bagis-yap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px', background: 'var(--accent)', color: '#012116', borderRadius: '10px', fontWeight: 800, fontSize: '1.05rem', textDecoration: 'none' }}>
                  <IconHeart size={18} color="#012116" /> Bu Projeye Bağış Yap
                </Link>
              )}
            </div>
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <Link href="/projelerimiz" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>
              Tüm Projelere Dön
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
