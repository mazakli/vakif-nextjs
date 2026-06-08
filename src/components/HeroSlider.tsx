'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { SLIDES } from '@/lib/constants';

type Slide = {
  baslik?: string;
  aciklama?: string;
  gorsel_url?: string;
  ekstra?: {
    buton1_metin?: string;
    buton1_url?: string;
    buton2_metin?: string;
    buton2_url?: string;
  };
  // Statik tip
  title?: string;
  text?: string;
  image?: string;
  btn1?: { label: string; href: string };
  btn2?: { label: string; href: string };
};

export default function HeroSlider({ cmsSlides }: { cmsSlides?: Slide[] }) {
  const slides: Slide[] = (cmsSlides && cmsSlides.length > 0) ? cmsSlides : SLIDES;
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => go((current + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [current, go, slides.length]);

  const raw = slides[current];
  const slide = {
    title: raw.baslik || raw.title || '',
    text: raw.aciklama || raw.text || '',
    image: raw.gorsel_url || raw.image || '',
    btn1: { label: raw.ekstra?.buton1_metin || raw.btn1?.label || 'Devamı', href: raw.ekstra?.buton1_url || raw.btn1?.href || '/' },
    btn2: { label: raw.ekstra?.buton2_metin || raw.btn2?.label || 'Bağış Yap', href: raw.ekstra?.buton2_url || raw.btn2?.href || '/bagis-yap' },
  };

  return (
    <section style={{ position: 'relative', height: 'min(92vh, 700px)', overflow: 'hidden' }}>
      {/* Background */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(rgba(1,33,22,0.55), rgba(1,33,22,0.70)), url(${(s as any).gorsel_url || (s as any).image || ''}) center/cover no-repeat`,
          opacity: i === current ? 1 : 0,
          transition: 'opacity .7s ease',
          zIndex: 0,
        }} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 720, opacity: isAnimating ? 0 : 1, transform: isAnimating ? 'translateY(20px)' : 'translateY(0)', transition: 'all .5s ease' }}>
            {/* Script / cursive main heading */}
            <h1 style={{
              fontFamily: 'var(--font-dancing), "Dancing Script", cursive',
              color: '#fff',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700,
              marginBottom: '12px',
              lineHeight: 1.1,
              textShadow: '0 2px 20px rgba(0,0,0,.3)',
            }}>
              {slide.title}
              <span style={{ color: 'var(--accent)', marginLeft: '4px' }}>&#9829;</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,.88)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.75, maxWidth: 560 }}>
              {slide.text}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/bagis-yap" style={{
                padding: '14px 34px', background: 'var(--accent)', color: '#012116',
                borderRadius: '6px', fontWeight: 800, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '1rem', letterSpacing: '.3px',
              }}>BAĞIŞ YAP</Link>
              <Link href={slide.btn1.href} style={{
                padding: '14px 34px', background: 'transparent', color: '#fff',
                borderRadius: '6px', fontWeight: 700, textDecoration: 'none',
                border: '2px solid rgba(255,255,255,.55)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '.95rem', letterSpacing: '.3px',
              }}>FAALİYETLERİMİZİ İNCELE</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 2 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            width: i === current ? 28 : 10, height: 10, borderRadius: '5px',
            background: i === current ? 'var(--accent)' : 'rgba(255,255,255,.4)',
            border: 'none', cursor: 'pointer', transition: 'all .3s ease', padding: 0,
          }} />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => go((current - 1 + slides.length) % slides.length)} style={{
        position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.2)',
        color: '#fff', width: 44, height: 44, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2,
        fontSize: '1.2rem', transition: 'background .2s',
      }}>‹</button>
      <button onClick={() => go((current + 1) % slides.length)} style={{
        position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.2)',
        color: '#fff', width: 44, height: 44, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2,
        fontSize: '1.2rem', transition: 'background .2s',
      }}>›</button>
    </section>
  );
}
