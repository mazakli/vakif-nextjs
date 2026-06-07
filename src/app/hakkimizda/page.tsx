import type { Metadata } from 'next';
import Link from 'next/link';
import { STATS } from '@/lib/constants';
import { IconHeart, IconArrowRight, IconAward, IconHandshake, IconGlobe, IconZap, IconBarChart, IconLeaf, IconShield } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Vakfımız hakkında detaylı bilgi edinin. 25 yıllık deneyimimiz ve misyonumuz.',
};

const VALUES = [
  { Icon: IconHandshake, title: 'Güven',          desc: 'Her kuruşun hesabını şeffaf bir şekilde paylaşır, bağışçılarımızın güvenini koruruz.' },
  { Icon: IconHeart,     title: 'Merhamet',        desc: 'İnsanlığın acısını kendi acımız olarak görür, empatiyle yaklaşırız.' },
  { Icon: IconGlobe,     title: 'Evrensellik',     desc: 'Din, dil, ırk ayrımı gözetmeksizin ihtiyaç sahibi herkese ulaşırız.' },
  { Icon: IconZap,       title: 'Hız',             desc: 'Afet durumlarında en hızlı şekilde sahaya iner, acil yardım ulaştırırız.' },
  { Icon: IconBarChart,  title: 'Şeffaflık',       desc: 'Tüm mali raporlarımızı kamuoyuyla paylaşır, hesap verebilirliği önemseriz.' },
  { Icon: IconLeaf,      title: 'Sürdürülebilirlik', desc: 'Kısa vadeli yardımın ötesinde kalıcı çözümler üretir, toplumları güçlendiririz.' },
];

export default function HakkimizdaPage() {
  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Biz Kimiz?</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px' }}>Hakkımızda</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            25 yılı aşkın tecrübemizle dünya genelinde ihtiyaç sahiplerine ulaşıyor, hayatları dönüştürüyoruz.
          </p>
        </div>
      </div>

      {/* Hikaye */}
      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Hikayemiz</h2>
              <div className="divider" />
              <p style={{ lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Vakfımız, 2000 yılında bir grup hayırsever iş insanı ve akademisyen tarafından kuruldu. Başlangıçta küçük çaplı bölgesel yardım faaliyetleriyle başlayan yolculuğumuz, bugün 35'ten fazla ülkede sürdürülen uluslararası projelere dönüşmüştür.
              </p>
              <p style={{ lineHeight: 1.8, color: '#555', marginBottom: '16px' }}>
                Su kuyularından eğitim burslarına, gıda yardımından sağlık hizmetlerine kadar geniş bir yelpazede faaliyet gösteren vakfımız, yardım alanındaki lider kuruluşlar arasında yer almaktadır.
              </p>
              <p style={{ lineHeight: 1.8, color: '#555' }}>
                Tüm faaliyetlerimizde şeffaflık ve hesap verebilirlik ilkesiyle hareket ediyoruz. Her yıl bağımsız denetim firmaları tarafından denetlenen mali tablolarımızı kamuoyuyla paylaşıyoruz.
              </p>
            </div>
            <div>
              <div style={{ background: 'linear-gradient(135deg, #012116, #034228)', borderRadius: '16px', padding: '40px', color: '#fff', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <IconAward size={52} color="var(--accent)" />
                </div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '24px' }}>Kurulduğumuzdan Bu Yana</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {STATS.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{s.number.toLocaleString('tr-TR')}{s.suffix}</div>
                      <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.7)', marginTop: '4px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Değerlerimiz</h2>
            <div className="divider" style={{ margin: '16px auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '24px' }}>
            {VALUES.map(({ Icon, title, desc }) => (
              <div key={title} style={{ background: 'var(--cream-light)', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', border: '1px solid rgba(200,169,110,.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '16px', background: 'rgba(1,33,22,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={28} color="#012116" />
                  </div>
                </div>
                <h3 style={{ color: '#012116', fontSize: '1.1rem', marginBottom: '10px' }}>{title}</h3>
                <p style={{ color: '#666', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark-green)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '20px' }}>Bize Katılın</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bagis-yap" style={{ padding: '13px 30px', background: 'var(--accent)', color: '#012116', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <IconHeart size={16} color="#012116" /> Bağış Yap
            </Link>
            <Link href="/iletisim" style={{ padding: '13px 30px', background: 'transparent', color: 'var(--cream)', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', border: '2px solid rgba(244,233,216,.4)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              İletişime Geç <IconArrowRight size={15} color="var(--cream)" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
