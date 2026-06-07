export const SITE = {
  name: 'Vakfımız',
  tagline: 'İnsanlığa Hizmet',
  description: 'Yardıma muhtaç insanlara ulaşan, şeffaf ve güvenilir yardım vakfı.',
  phone: '+90 500 123 45 67',
  whatsapp: '+905001234567',
  email: 'info@vakif.org',
  address: 'İstanbul, Türkiye',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
};

export const NAV_LINKS = [
  { label: 'Anasayfa',     href: '/' },
  { label: 'Hakkımızda',   href: '/hakkimizda' },
  { label: 'Projelerimiz', href: '/projelerimiz' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Bağış Yap',   href: '/bagis-yap' },
];

export const FOOTER_LINKS = [
  { label: 'Anasayfa',            href: '/' },
  { label: 'Hakkımızda',          href: '/hakkimizda' },
  { label: 'Projelerimiz',        href: '/projelerimiz' },
  { label: 'Blog',                href: '/blog' },
  { label: 'Bağış Yap',          href: '/bagis-yap' },
  { label: 'İletişim',            href: '/iletisim' },
  { label: 'Gizlilik Politikası', href: '/gizlilik' },
];

export const STATS = [
  { number: 50000, suffix: '+', label: 'Yardım Edilen Aile' },
  { number: 35,    suffix: '+', label: 'Ülkede Hizmet' },
  { number: 1200,  suffix: '+', label: 'Gönüllü' },
  { number: 25,    suffix: '',  label: 'Yıllık Deneyim' },
];

export const SLIDES = [
  {
    image: '/images/slide1.jpg',
    title: 'İnsanlığa Hizmet Etmek İçin Buradayız',
    text: 'Dünyanın dört bir yanında yardıma muhtaç insanlara ulaşıyor, umut oluyor ve hayatları dönüştürüyoruz.',
    btn1: { label: 'Projelerimiz', href: '/projelerimiz' },
    btn2: { label: 'Bağış Yap',   href: '/bagis-yap' },
  },
  {
    image: '/images/slide2.jpg',
    title: 'Her Damla Su, Her Lokma Ekmek Önemli',
    text: 'Su kuyuları, gıda yardımı ve eğitim burslarıyla insanlığa hizmet ediyoruz.',
    btn1: { label: 'Bize Katılın', href: '/bagis-yap' },
    btn2: { label: 'Hakkımızda',  href: '/hakkimizda' },
  },
  {
    image: '/images/slide3.jpg',
    title: 'Geleceği Birlikte İnşa Ediyoruz',
    text: 'Eğitimden sağlığa, gıdadan barınağa kadar tüm temel ihtiyaçlarda yanınızdayız.',
    btn1: { label: 'Hemen Bağış', href: '/bagis-yap' },
    btn2: { label: 'İletişim',    href: '/iletisim' },
  },
];

export const CATEGORIES = [
  { id: 'genel',   label: 'Genel Bağış'  },
  { id: 'gida',    label: 'Gıda Yardımı' },
  { id: 'egitim',  label: 'Eğitim'       },
  { id: 'su',      label: 'Su Kuyusu'    },
  { id: 'saglik',  label: 'Sağlık'       },
  { id: 'barinma', label: 'Barınma'      },
];

export const BLOG_POSTS = [
  {
    slug: 'afrika-su-kuyusu-projesi',
    title: 'Afrika\'da 50 Su Kuyusu Açtık',
    excerpt: 'Kuraklıkla mücadele eden köylere temiz su ulaştırdık. Bu proje 5.000 kişiye temiz su erişimi sağladı.',
    category: 'Proje',
    date: '15 Mayıs 2025',
    image: '/images/blog1.jpg',
    author: 'Vakıf Editörü',
  },
  {
    slug: 'egitim-bursu-basvurulari',
    title: '2025 Eğitim Bursu Başvuruları Açıldı',
    excerpt: 'Bu yıl 200 öğrenciye burs verilecek. Başvurular 30 Haziran\'a kadar devam edecek.',
    category: 'Duyuru',
    date: '3 Mayıs 2025',
    image: '/images/blog2.jpg',
    author: 'Vakıf Editörü',
  },
  {
    slug: 'gida-yardim-kampanyasi',
    title: 'Ramazan Gıda Yardım Kampanyası Tamamlandı',
    excerpt: 'Bu Ramazan ayında 10.000 aileye gıda kolisi ulaştırdık. Bağışlarınız için teşekkürler.',
    category: 'Haber',
    date: '20 Nisan 2025',
    image: '/images/blog3.jpg',
    author: 'Vakıf Editörü',
  },
];

export const PROJECTS = [
  {
    slug: 'africa-su-kuyusu',
    title: 'Afrika Su Kuyusu Projesi',
    location: 'Nijer, Afrika',
    status: 'active' as const,
    goal: 500000,
    raised: 320000,
    image: '/images/project1.jpg',
    excerpt: 'Kuraklıkla mücadele eden köylere temiz su ulaştırıyoruz.',
  },
  {
    slug: 'egitim-burs',
    title: 'Eğitim Burs Programı',
    location: 'Türkiye Geneli',
    status: 'active' as const,
    goal: 1000000,
    raised: 780000,
    image: '/images/project2.jpg',
    excerpt: 'İhtiyaç sahibi öğrencilere burs desteği sağlıyoruz.',
  },
  {
    slug: 'gida-yardimi',
    title: 'Gıda Yardım Projesi',
    location: 'Suriye, Türkiye',
    status: 'completed' as const,
    goal: 250000,
    raised: 250000,
    image: '/images/project3.jpg',
    excerpt: '10.000 aileye gıda kolisi ulaştırdık.',
  },
];
