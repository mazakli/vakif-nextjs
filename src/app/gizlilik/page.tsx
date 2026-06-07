import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Vakfımızın gizlilik politikası ve kişisel verilerin korunması hakkında bilgi.',
};

const SECTIONS = [
  {
    title: '1. Giriş',
    content: 'Bu Gizlilik Politikası, Vakfımız ("Vakıf") tarafından işletilen web sitesi aracılığıyla toplanan kişisel verilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır. Web sitemizi kullanarak bu politikayı kabul etmiş sayılırsınız.',
  },
  {
    title: '2. Toplanan Veriler',
    content: `Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda aşağıdaki bilgileri toplayabiliriz:

• Ad, soyad ve iletişim bilgileri (e-posta, telefon)
• Adres bilgileri
• Bağış işlemlerine ilişkin finansal bilgiler
• İnternet tarayıcı bilgileri ve IP adresi
• Web sitemizde gerçekleştirilen işlemlere ilişkin veriler`,
  },
  {
    title: '3. Verilerin Kullanım Amacı',
    content: `Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:

• Bağış işlemlerinin gerçekleştirilmesi
• Hizmetlerimiz hakkında bilgi sağlanması
• Yasal yükümlülüklerin yerine getirilmesi
• İletişim ve müşteri desteği
• Web sitemizin iyileştirilmesi`,
  },
  {
    title: '4. Verilerin Paylaşımı',
    content: 'Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. Bağış işlemleri için kullanılan ödeme altyapısı sağlayıcıları, yalnızca ödeme işleminin gerçekleştirilmesi için gerekli bilgilere erişebilmektedir.',
  },
  {
    title: '5. Verilerin Güvenliği',
    content: 'Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri uygulanmaktadır. SSL şifrelemesi kullanılmakta, veriler güvenli sunucularda saklanmaktadır.',
  },
  {
    title: '6. Çerezler (Cookie)',
    content: 'Web sitemiz, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda bazı özellikler düzgün çalışmayabilir.',
  },
  {
    title: '7. Haklarınız',
    content: `KVKK kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• Kişisel verilerinize ilişkin bilgi talep etme
• Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Kişisel verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme
• Kişisel verilerinizin silinmesini veya yok edilmesini isteme`,
  },
  {
    title: '8. İletişim',
    content: 'Gizlilik politikamıza ilişkin sorularınız için info@vakif.org adresine e-posta gönderebilirsiniz.',
  },
];

export default function GizlilikPage() {
  return (
    <>
      <div style={{ background: 'linear-gradient(135deg, #012116 60%, #034228)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px' }}>Gizlilik Politikası</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '600px', margin: '0 auto' }}>
            Son güncelleme: Ocak 2025
          </p>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--cream-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: '#fff', borderRadius: '14px', padding: 'clamp(24px, 5vw, 48px)', boxShadow: '0 4px 24px rgba(1,33,22,.08)' }}>
            {SECTIONS.map(s => (
              <div key={s.title} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(1,33,22,.08)' }}>
                <h2 style={{ color: '#012116', fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px' }}>{s.title}</h2>
                <p style={{ color: '#555', lineHeight: 1.8, whiteSpace: 'pre-line', margin: 0 }}>{s.content}</p>
              </div>
            ))}
            <p style={{ color: '#888', fontSize: '.83rem', margin: 0, textAlign: 'center' }}>
              Bu politika değiştiğinde web sitemizde duyurulacaktır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
