export type IconProps = { size?: number; color?: string; strokeWidth?: number; style?: React.CSSProperties; className?: string };
const S = ({ size = 24, color = 'currentColor', strokeWidth = 1.8, style, className, ...props }: IconProps & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} className={className} {...props} />
);

export const IconPhone     = (p: IconProps) => <S {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12 19.79 19.79 0 01.22 3.43 2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></S>;
export const IconMail      = (p: IconProps) => <S {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></S>;
export const IconMapPin    = (p: IconProps) => <S {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></S>;
export const IconWhatsApp  = (p: IconProps) => <S {...p} fill={p.color ?? 'currentColor'} stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></S>;
export const IconHeart     = (p: IconProps) => <S {...p}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></S>;
export const IconGlobe     = (p: IconProps) => <S {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></S>;
export const IconCheck     = (p: IconProps) => <S {...p}><polyline points="20 6 9 17 4 12"/></S>;
export const IconCheckCircle = (p: IconProps) => <S {...p}><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></S>;
export const IconSearch    = (p: IconProps) => <S {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></S>;
export const IconSend      = (p: IconProps) => <S {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></S>;
export const IconCreditCard = (p: IconProps) => <S {...p}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></S>;
export const IconLock      = (p: IconProps) => <S {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></S>;
export const IconArrowRight = (p: IconProps) => <S {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></S>;
export const IconChevronRight = (p: IconProps) => <S {...p}><polyline points="9 18 15 12 9 6"/></S>;
export const IconChevronLeft  = (p: IconProps) => <S {...p}><polyline points="15 18 9 12 15 6"/></S>;
export const IconX         = (p: IconProps) => <S {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></S>;
export const IconMenu      = (p: IconProps) => <S {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></S>;
export const IconBot       = (p: IconProps) => <S {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><line x1="7" y1="16" x2="7" y2="16" strokeWidth={3}/><line x1="12" y1="16" x2="12" y2="16" strokeWidth={3}/><line x1="17" y1="16" x2="17" y2="16" strokeWidth={3}/></S>;
export const IconMessageCircle = (p: IconProps) => <S {...p}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></S>;
export const IconAward     = (p: IconProps) => <S {...p}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></S>;
export const IconUsers     = (p: IconProps) => <S {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></S>;
export const IconBarChart  = (p: IconProps) => <S {...p}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></S>;
export const IconShield    = (p: IconProps) => <S {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></S>;
export const IconLeaf      = (p: IconProps) => <S {...p}><path d="M2 22c5.2-5.2 7.8-10.4 7.8-15.4 0-2.4 1.6-4.4 3.7-4.6C17 1.8 20 4.8 20 8.5c0 7.7-7.3 12-18 13.5z"/><path d="M2 22L12 12"/></S>;
export const IconZap       = (p: IconProps) => <S {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></S>;
export const IconHandshake = (p: IconProps) => <S {...p}><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/><path d="M8 14l2 2 6-6"/></S>;
export const IconBell      = (p: IconProps) => <S {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></S>;
export const IconNewspaper = (p: IconProps) => <S {...p}><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></S>;
export const IconBank      = (p: IconProps) => <S {...p}><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/></S>;

/* ── Hizmet alanı ikonları (büyük, detaylı) ── */
export const IconFood = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8V8"/>
    <line x1="28" y1="8" x2="28" y2="24"/>
    <line x1="36" y1="8" x2="36" y2="20"/>
    <line x1="32" y1="32" x2="32" y2="56"/>
    <line x1="24" y1="56" x2="40" y2="56"/>
    <path d="M12 8c0 8 4 14 4 14M52 8c0 8-4 14-4 14"/>
  </svg>
);

export const IconWater = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 6C32 6 12 26 12 40a20 20 0 0040 0C52 26 32 6 32 6z"/>
    <path d="M22 42a10 10 0 0010 8" strokeWidth="1.8" strokeOpacity=".5"/>
  </svg>
);

export const IconEducation = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22l26-12 26 12-26 12L6 22z"/>
    <path d="M58 22v18"/>
    <path d="M14 26v14c0 5 8 10 18 10s18-5 18-10V26"/>
    <line x1="58" y1="22" x2="58" y2="40"/>
    <circle cx="58" cy="42" r="2" fill={color} stroke="none"/>
  </svg>
);

export const IconHealth = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="8" width="48" height="48" rx="10"/>
    <line x1="32" y1="20" x2="32" y2="44"/>
    <line x1="20" y1="32" x2="44" y2="32"/>
  </svg>
);

export const IconHouse = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 32L32 8l26 24"/>
    <path d="M14 32v22h36V32"/>
    <rect x="26" y="40" width="12" height="14"/>
    <line x1="14" y1="18" x2="14" y2="8"/><line x1="14" y1="8" x2="22" y2="8"/>
  </svg>
);

export const IconOrphan = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="18" r="10"/>
    <path d="M14 56c0-9.94 8.06-18 18-18s18 8.06 18 18"/>
    <path d="M24 30l8 6 8-6" strokeWidth="1.6" strokeOpacity=".6"/>
  </svg>
);
