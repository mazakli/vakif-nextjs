const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://ozel-cms-production.up.railway.app';
const MARKA = process.env.NEXT_PUBLIC_MARKA_SLUG || 'sare-vakfi';

export async function getIcerikler(tur: string) {
  try {
    const res = await fetch(`${CMS_URL}/api/public/${MARKA}/icerikler?tur=${tur}`, {
      next: { revalidate: 60 }, // 60 saniyede bir yenile
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function getAyarlar() {
  try {
    const res = await fetch(`${CMS_URL}/api/public/${MARKA}/ayarlar`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
