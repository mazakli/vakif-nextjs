import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { IconMapPin, IconHeart, IconWater, IconEducation, IconFood } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Projelerimiz',
  description: 'Aktif ve tamamlanmış projelerimizi inceleyin.',
};

function pct(raised: number, goal: number) { return Math.min(100, Math.round((raised / goal) * 100)); }

function ProjectIcon({ title }: { title: string }) {
  if (title.includes('Su')) return <IconWater size={64} color="rgba(244,233,216,.5)" />;
  if (title.includes('Eğitim')) return <IconEducation size={64} color="rgba(244,233,216,.5)" />;
  return <IconFood size={64} color="rgba(244,233,216,.5)" />;
}

export default function ProjelerimizPage() {
  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Faaliyetlerimiz</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px' }}>Projelerimiz</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Dünya genelinde yürüttüğümüz projeleri inceleyin ve destek olmak istediğinizi seçin.
          </p>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '28px' }}>
            {PROJECTS.map(p => {
              const percent = pct(p.raised, p.goal);
              return (
                <article key={p.slug} style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(1,33,22,.1)', transition: 'all .3s' }}>
                  <div style={{
                    height: 200,
                    background: p.status === 'completed' ? 'linear-gradient(135deg, #1a4a2e, #2d6a40)' : 'linear-gradient(135deg, #012116, #034228)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                  }}>
                    <ProjectIcon title={p.title} />
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      background: p.status === 'completed' ? 'var(--accent)' : '#4ade80',
                      color: p.status === 'completed' ? '#012116' : '#014420',
                      padding: '4px 10px', borderRadius: '20px', fontSize: '.73rem', fontWeight: 700,
                    }}>
                      {p.status === 'completed' ? 'Tamamlandı' : 'Aktif'}
                    </div>
                  </div>
                  <div style={{ padding: '22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', color: '#888', fontSize: '.82rem' }}>
                      <IconMapPin size={13} color="var(--accent)" /> {p.location}
                    </div>
                    <h3 style={{ color: '#012116', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>{p.title}</h3>
                    <p style={{ color: '#666', fontSize: '.87rem', lineHeight: 1.6, marginBottom: '16px' }}>{p.excerpt}</p>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.8rem', color: '#555', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 600, color: '#012116' }}>₺{p.raised.toLocaleString('tr-TR')}</span>
                        <span>Hedef: ₺{p.goal.toLocaleString('tr-TR')}</span>
                      </div>
                      <div style={{ height: 8, background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${percent}%`, background: p.status === 'completed' ? 'var(--accent)' : '#012116', borderRadius: '4px' }} />
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '.75rem', color: '#888', marginTop: '4px' }}>%{percent}</div>
                    </div>
                    <Link href={`/projelerimiz/${p.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', background: '#012116', color: 'var(--cream)', borderRadius: '8px', fontWeight: 700, fontSize: '.88rem', textDecoration: 'none' }}>
                      {p.status === 'completed' ? 'Detaylar' : <><IconHeart size={14} color="var(--cream)" /> Destekle</>}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark-green)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '16px' }}>Bir Proje Destekleyin</h2>
          <Link href="/bagis-yap" style={{ padding: '14px 36px', background: 'var(--accent)', color: '#012116', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
            <IconHeart size={18} color="#012116" /> Bağış Yap
          </Link>
        </div>
      </section>
    </>
  );
}
