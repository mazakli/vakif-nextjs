'use client';
import { useState } from 'react';
import { CATEGORIES } from '@/lib/constants';
import { IconHeart, IconCreditCard, IconBank, IconLock, IconCheck, IconArrowRight, IconCheckCircle, IconWater, IconEducation, IconFood, IconHealth, IconHouse, IconOrphan } from '@/components/Icons';

type Step = 1 | 2 | 3;

interface DonationData {
  amount: string;
  customAmount: string;
  category: string;
  name: string;
  email: string;
  phone: string;
  tckn: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  paymentMethod: 'card' | 'transfer';
  kvkk: boolean;
  terms: boolean;
}

const AMOUNTS = ['50', '100', '250', '500', '1000', '2500'];

const CAT_ICONS: Record<string, React.ReactNode> = {
  genel:   <IconHeart size={24} color="currentColor" />,
  gida:    <IconFood size={24} color="currentColor" />,
  egitim:  <IconEducation size={24} color="currentColor" />,
  su:      <IconWater size={24} color="currentColor" />,
  saglik:  <IconHealth size={24} color="currentColor" />,
  barinma: <IconHouse size={24} color="currentColor" />,
};

export default function BagisYapPage() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<DonationData>({
    amount: '100', customAmount: '', category: 'genel',
    name: '', email: '', phone: '', tckn: '',
    cardName: '', cardNumber: '', cardExpiry: '', cardCvv: '',
    paymentMethod: 'card', kvkk: false, terms: false,
  });

  const totalAmount = data.customAmount || data.amount;
  const set = (key: keyof DonationData, value: string | boolean) => setData(p => ({ ...p, [key]: value }));

  const formatCard   = (v: string) => v.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
  const formatExpiry = (v: string) => { const d = v.replace(/\D/g,'').slice(0,4); return d.length > 2 ? d.slice(0,2)+'/'+d.slice(2) : d; };
  const cardLast4    = data.cardNumber.replace(/\s/g,'').slice(-4) || '****';

  const STEP_LABELS = ['Bağış Bilgileri', 'Ödeme', 'Onay'];

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>Online Bağış</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '12px' }}>Bağış Yapın</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '500px', margin: '0 auto' }}>
            Güvenli ve hızlı bağış yapın. Her bağış bir umut olur.
          </p>
        </div>
      </div>

      {/* Adım Göstergesi */}
      <div style={{ background: 'var(--cream)', padding: '20px 0', borderBottom: '1px solid rgba(1,33,22,.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            {STEP_LABELS.map((label, i) => {
              const num = (i + 1) as Step;
              return (
                <div key={num} style={{ display: 'flex', alignItems: 'center', flex: i < 2 ? 1 : undefined }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: step >= num ? '#012116' : '#e0e0e0',
                      color: step >= num ? '#fff' : '#888',
                      fontWeight: 700, fontSize: '.9rem', transition: 'all .3s',
                    }}>
                      {step > num ? <IconCheck size={18} color="#fff" strokeWidth={2.5} /> : num}
                    </div>
                    <span style={{ fontSize: '.72rem', color: step >= num ? '#012116' : '#999', fontWeight: step >= num ? 700 : 400, whiteSpace: 'nowrap' }}>{label}</span>
                  </div>
                  {i < 2 && <div style={{ flex: 1, height: 2, background: step > num ? '#012116' : '#e0e0e0', margin: '0 8px 22px', transition: 'background .3s' }} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '700px' }}>

          {/* ── ADIM 1 ── */}
          {step === 1 && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: 'clamp(24px,5vw,40px)', boxShadow: '0 4px 24px rgba(1,33,22,.1)' }}>
              <h2 style={{ color: '#012116', marginBottom: '6px' }}>Bağış Bilgileri</h2>
              <p style={{ color: '#666', fontSize: '.88rem', marginBottom: '28px' }}>Bağış miktarını ve kategorisini seçin.</p>

              {/* Miktarlar */}
              <div className="form-group">
                <label className="form-label">Bağış Miktarı (₺) <span style={{ color: 'red' }}>*</span></label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '12px' }}>
                  {AMOUNTS.map(a => (
                    <button key={a} onClick={() => { set('amount', a); set('customAmount', ''); }} style={{
                      padding: '12px', border: `2px solid ${data.amount === a && !data.customAmount ? '#012116' : '#ddd'}`,
                      borderRadius: '8px', background: data.amount === a && !data.customAmount ? '#012116' : '#fff',
                      color: data.amount === a && !data.customAmount ? '#fff' : '#333',
                      fontWeight: 700, cursor: 'pointer', fontSize: '.95rem', fontFamily: 'inherit',
                    }}>₺{Number(a).toLocaleString('tr-TR')}</button>
                  ))}
                </div>
                <input type="number" min="1" placeholder="Farklı bir miktar girin..."
                  value={data.customAmount}
                  onChange={e => { set('customAmount', e.target.value); set('amount', ''); }}
                  className="form-input" />
              </div>

              {/* Kategori */}
              <div className="form-group">
                <label className="form-label">Bağış Kategorisi <span style={{ color: 'red' }}>*</span></label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px,1fr))', gap: '10px' }}>
                  {CATEGORIES.map(c => (
                    <button key={c.id} onClick={() => set('category', c.id)} style={{
                      padding: '14px 8px', border: `2px solid ${data.category === c.id ? '#012116' : '#ddd'}`,
                      borderRadius: '10px', background: data.category === c.id ? 'rgba(1,33,22,.06)' : '#fff',
                      cursor: 'pointer', textAlign: 'center', fontFamily: 'inherit',
                      color: data.category === c.id ? '#012116' : '#555',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px', color: data.category === c.id ? '#012116' : '#888' }}>
                        {CAT_ICONS[c.id]}
                      </div>
                      <div style={{ fontSize: '.78rem', fontWeight: 700 }}>{c.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Kişisel */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { key: 'name',  label: 'Ad Soyad', type: 'text',  placeholder: 'Ad Soyad',          required: true },
                  { key: 'email', label: 'E-posta',  type: 'email', placeholder: 'mail@example.com',  required: true },
                  { key: 'phone', label: 'Telefon',  type: 'tel',   placeholder: '+90 5xx xxx xx xx', required: false },
                  { key: 'tckn',  label: 'T.C. Kimlik No', type: 'text', placeholder: 'XXXXXXXXXXX', required: false },
                ].map(f => (
                  <div key={f.key} style={{ marginBottom: '16px' }}>
                    <label className="form-label">{f.label} {f.required && <span style={{ color: 'red' }}>*</span>}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      value={(data as any)[f.key]}
                      onChange={e => set(f.key as keyof DonationData, f.key === 'tckn' ? e.target.value.replace(/\D/g,'') : e.target.value)}
                      className="form-input" />
                  </div>
                ))}
              </div>

              <button onClick={() => {
                if (!totalAmount || Number(totalAmount) < 1) return alert('Lütfen bir miktar girin.');
                if (!data.name || !data.email) return alert('Ad ve e-posta zorunludur.');
                setStep(2);
              }} style={{ width: '100%', padding: '15px', background: '#012116', color: 'var(--cream)', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '8px' }}>
                Ödemeye Geç <IconArrowRight size={16} color="var(--cream)" />
              </button>
            </div>
          )}

          {/* ── ADIM 2 ── */}
          {step === 2 && (
            <div>
              {/* Özet */}
              <div style={{ background: 'var(--dark-green)', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <div style={{ color: 'rgba(244,233,216,.7)', fontSize: '.82rem', marginBottom: '2px' }}>Bağış Miktarı</div>
                  <div style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: 900 }}>₺{Number(totalAmount).toLocaleString('tr-TR')}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'rgba(244,233,216,.7)', fontSize: '.82rem' }}>{CATEGORIES.find(c => c.id === data.category)?.label}</div>
                  <div style={{ color: 'var(--cream)', fontSize: '.9rem', marginTop: '2px' }}>{data.name}</div>
                </div>
              </div>

              <div style={{ background: '#fff', borderRadius: '16px', padding: 'clamp(24px,5vw,40px)', boxShadow: '0 4px 24px rgba(1,33,22,.1)' }}>
                <h2 style={{ color: '#012116', marginBottom: '20px' }}>Ödeme Yöntemi</h2>

                {/* Yöntem sekmeleri */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
                  {[
                    { id: 'card',     label: 'Kredi / Banka Kartı', Icon: IconCreditCard },
                    { id: 'transfer', label: 'Banka Havalesi',      Icon: IconBank },
                  ].map(m => (
                    <button key={m.id} onClick={() => set('paymentMethod', m.id as 'card' | 'transfer')} style={{
                      flex: 1, padding: '13px', border: `2px solid ${data.paymentMethod === m.id ? '#012116' : '#ddd'}`,
                      borderRadius: '8px', background: data.paymentMethod === m.id ? 'rgba(1,33,22,.06)' : '#fff',
                      fontWeight: data.paymentMethod === m.id ? 700 : 500, cursor: 'pointer', fontSize: '.88rem',
                      color: data.paymentMethod === m.id ? '#012116' : '#555', fontFamily: 'inherit',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    }}>
                      <m.Icon size={16} color={data.paymentMethod === m.id ? '#012116' : '#888'} />
                      {m.label}
                    </button>
                  ))}
                </div>

                {data.paymentMethod === 'card' && (
                  <>
                    {/* Kart önizleme */}
                    <div style={{ background: 'linear-gradient(135deg, #012116, #1a4a2e)', borderRadius: '16px', padding: '24px', color: '#fff', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />
                      <div style={{ position: 'absolute', top: 20, right: 40, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />
                      <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.5)', letterSpacing: '2px', marginBottom: '20px' }}>VAKIF BAĞIŞ KARTI</div>
                      <div style={{ fontSize: '1.2rem', letterSpacing: '3px', marginBottom: '20px', fontFamily: 'monospace', color: 'rgba(255,255,255,.9)' }}>
                        {data.cardNumber || '**** **** **** ****'}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                          <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.5)', marginBottom: '2px' }}>KART SAHİBİ</div>
                          <div style={{ fontSize: '.88rem', letterSpacing: '1px', fontFamily: 'monospace' }}>{data.cardName || 'AD SOYAD'}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.5)', marginBottom: '2px' }}>SON KULLANIM</div>
                          <div style={{ fontSize: '.88rem', fontFamily: 'monospace' }}>{data.cardExpiry || 'MM/YY'}</div>
                        </div>
                        <IconCreditCard size={32} color="var(--accent)" />
                      </div>
                    </div>

                    {/* Kart girişleri */}
                    <div style={{ display: 'grid', gap: '16px' }}>
                      <div>
                        <label className="form-label">Kart Üzerindeki İsim <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" placeholder="AD SOYAD" value={data.cardName}
                          onChange={e => set('cardName', e.target.value.toUpperCase())} className="form-input" />
                      </div>
                      <div>
                        <label className="form-label">Kart Numarası <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" placeholder="0000 0000 0000 0000" value={data.cardNumber}
                          onChange={e => set('cardNumber', formatCard(e.target.value))} className="form-input" />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label className="form-label">Son Kullanım <span style={{ color: 'red' }}>*</span></label>
                          <input type="text" placeholder="AA/YY" value={data.cardExpiry}
                            onChange={e => set('cardExpiry', formatExpiry(e.target.value))} className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">CVV <span style={{ color: 'red' }}>*</span></label>
                          <input type="password" placeholder="***" maxLength={3} value={data.cardCvv}
                            onChange={e => set('cardCvv', e.target.value.replace(/\D/g,'').slice(0,3))} className="form-input" />
                        </div>
                      </div>
                    </div>
                    {/*
                    ╔══════════════════════════════════════════════════════════╗
                    ║  ÖDEME SAĞLAYICISI ENTEGRASYON NOKTASI                   ║
                    ║  iyzico / PayTR / Stripe vb. burada entegre edilecek     ║
                    ╚══════════════════════════════════════════════════════════╝
                    */}
                  </>
                )}

                {data.paymentMethod === 'transfer' && (
                  <div style={{ background: 'var(--cream-light)', borderRadius: '12px', padding: '24px' }}>
                    <h3 style={{ color: '#012116', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <IconBank size={20} color="#012116" /> Banka Hesap Bilgileri
                    </h3>
                    {[
                      { label: 'Banka',      value: 'Türkiye İş Bankası' },
                      { label: 'Şube',       value: 'Merkez Şubesi' },
                      { label: 'Hesap Adı',  value: 'Vakfımız' },
                      { label: 'IBAN',       value: 'TR00 0000 0000 0000 0000 0000 00' },
                      { label: 'Açıklama',   value: `${data.name} - ${CATEGORIES.find(c => c.id === data.category)?.label}` },
                    ].map(r => (
                      <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(1,33,22,.08)', fontSize: '.9rem' }}>
                        <span style={{ color: '#666', fontWeight: 600 }}>{r.label}:</span>
                        <span style={{ color: '#012116', fontWeight: r.label === 'IBAN' ? 700 : 400 }}>{r.value}</span>
                      </div>
                    ))}
                    <p style={{ marginTop: '16px', color: '#888', fontSize: '.83rem' }}>
                      Havale açıklamasına adınızı ve bağış kategorisini yazmanızı rica ederiz.
                    </p>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', background: '#f5f5f5', color: '#333', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Geri
                  </button>
                  <button onClick={() => {
                    if (data.paymentMethod === 'card') {
                      if (!data.cardName || !data.cardNumber || !data.cardExpiry || !data.cardCvv) return alert('Lütfen tüm kart bilgilerini girin.');
                    }
                    setStep(3);
                  }} style={{ flex: 2, padding: '14px', background: '#012116', color: 'var(--cream)', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    {data.paymentMethod === 'card' ? `₺${Number(totalAmount).toLocaleString('tr-TR')} Bağış Yap` : 'Tamamlandı, Onayla'}
                    <IconArrowRight size={16} color="var(--cream)" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── ADIM 3 ── */}
          {step === 3 && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: 'clamp(24px,5vw,40px)', boxShadow: '0 4px 24px rgba(1,33,22,.1)' }}>
              <h2 style={{ color: '#012116', marginBottom: '6px' }}>Özet & Onay</h2>
              <p style={{ color: '#666', fontSize: '.88rem', marginBottom: '28px' }}>Lütfen bağış bilgilerinizi kontrol edin.</p>

              <div style={{ background: 'var(--cream-light)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
                {[
                  { label: 'Bağış Miktarı', value: `₺${Number(totalAmount).toLocaleString('tr-TR')}` },
                  { label: 'Kategori',      value: CATEGORIES.find(c => c.id === data.category)?.label },
                  { label: 'Ad Soyad',      value: data.name },
                  { label: 'E-posta',       value: data.email },
                  { label: 'Ödeme',         value: data.paymentMethod === 'card' ? `Kart (**** ${cardLast4})` : 'Banka Havalesi' },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(1,33,22,.08)', fontSize: '.9rem' }}>
                    <span style={{ color: '#666' }}>{r.label}:</span>
                    <span style={{ color: '#012116', fontWeight: 600 }}>{r.value}</span>
                  </div>
                ))}
              </div>

              {/* Onay kutucukları */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {[
                  { key: 'kvkk',  label: 'Kişisel verilerin işlenmesine ilişkin aydınlatma metnini okudum ve onaylıyorum.' },
                  { key: 'terms', label: 'Bağış koşullarını okudum ve kabul ediyorum.' },
                ].map(a => (
                  <label key={a.key} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={(data as any)[a.key]}
                      onChange={e => set(a.key as keyof DonationData, e.target.checked)}
                      style={{ marginTop: '2px', accentColor: '#012116' }} />
                    <span style={{ fontSize: '.85rem', color: '#555', lineHeight: 1.5 }}>{a.label}</span>
                  </label>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', background: '#f5f5f5', color: '#333', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                  Geri
                </button>
                <button onClick={() => {
                  if (!data.kvkk || !data.terms) return alert('Lütfen onay kutucuklarını işaretleyin.');
                  alert('Bağışınız için teşekkürler!\nKonfirmasyon e-postası gönderildi.');
                }} style={{ flex: 2, padding: '14px', background: 'var(--accent)', color: '#012116', border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <IconHeart size={18} color="#012116" /> Bağışı Tamamla
                </button>
              </div>

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px', color: '#999', fontSize: '.78rem', alignItems: 'center' }}>
                <IconLock size={13} color="#999" /> 256-bit SSL ile güvenli ödeme
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
