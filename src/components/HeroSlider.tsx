'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { SLIDES } from '@/lib/constants';

type Slide = {
  baslik?: string; aciklama?: string; gorsel_url?: string;
  ekstra?: { buton1_metin?: string; buton1_url?: string; buton2_metin?: string; buton2_url?: string };
  title?: string; text?: string; image?: string;
  btn1?: { label: string; href: string };
  btn2?: { label: string; href: string };
};

// Placeholder images — warm charity/community scenes
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&q=80',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=80',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1400&q=80',
];

export default function HeroSlider({ cmsSlides }: { cmsSlides?: Slide[] }) {
  const rawSlides: Slide[] = (cmsSlides && cmsSlides.length > 0) ? cmsSlides : SLIDES;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => go((current + 1) % rawSlides.length), 5500);
    return () => clearInterval(t);
  }, [current, go, rawSlides.length]);

  const raw = rawSlides[current];
  const slide = {
    title: raw.baslik || raw.title || '',
    text:  raw.aciklama || raw.text || '',
    image: raw.gorsel_url || raw.image || PLACEHOLDER_IMAGES[current % PLACEHOLDER_IMAGES.length],
    btn1href: raw.ekstra?.buton1_url || raw.btn1?.href || '/projelerimiz',
  };

  return (
    <section style={{ position: 'relative', width: '100%', height: 'min(88vh, 640px)', overflow: 'hidden', background: '#012116' }}>
      {/* BG Images */}
      {rawSlides.map((s, i) => {
        const img = (s as any).gorsel_url || (s as any).image || PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length];
        return (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: img ? `url(${img})` : undefined,
            backgroundSize: 'cover', backgroundPosition: 'center right',
            opacity: i === current ? 1 : 0,
            transition: 'opacity .8s ease',
          }}>
            {/* Gradient overlay — dark on left, fades right */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(1,33,22,0.92) 0%, rgba(1,33,22,0.75) 45%, rgba(1,33,22,0.35) 70%, rgba(1,33,22,0.1) 100%)',
            }} />
          </div>
        );
      })}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{
            maxWidth: 580,
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(14px)' : 'translateY(0)',
            transition: 'all .5s ease',
          }}>
            {/* "SAYEnizde" — white bold */}
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.05, margin: 0 }}>
              {SLIDES[0]?.title?.split('\n')[0] || 'SAYEnizde'}
            </h1>
            {/* "İyilik Büyüyor♥" — gold script */}
            <div style={{
              fontFamily: 'var(--font-dancing), "Dancing Script", cursive',
              color: '#c8a96e',
              fontSize: 'clamp(2.8rem,6vw,4.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 18,
            }}>
              {slide.title || 'İyilik Büyüyor'}
              <svg style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} width="36" height="36" viewBox="0 0 24 24" fill="#c8a96e" stroke="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 34, maxWidth: 460 }}>
              {slide.text}
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/bagis-yap" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 30px',
                background: '#c8a96e', color: '#012116',
                borderRadius: 6, fontWeight: 800, fontSize: '.9rem',
                letterSpacing: '.5px', textDecoration: 'none',
                border: '2px solid #c8a96e',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#012116" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
                BAĞIŞ YAP
              </Link>
              <Link href={slide.btn1href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                background: 'transparent', color: '#fff',
                borderRadius: 6, fontWeight: 700, fontSize: '.88rem',
                letterSpacing: '.3px', textDecoration: 'none',
                border: '2px solid rgba(255,255,255,.5)',
              }}>
                FAALİYETLERİMİZİ İNCELE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 2 }}>
        {rawSlides.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            width: i === current ? 32 : 10, height: 10, borderRadius: 5,
            background: i === current ? '#c8a96e' : 'rgba(255,255,255,.4)',
            border: 'none', cursor: 'pointer', padding: 0,
            transition: 'all .3s ease',
          }} />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => go((current - 1 + rawSlides.length) % rawSlides.length)} style={{
        position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
        width: 40, height: 40, borderRadius: '50%',
        background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
        color: '#fff', cursor: 'pointer', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem', fontWeight: 300,
      }}>‹</button>
      <button onClick={() => go((current + 1) % rawSlides.length)} style={{
        position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
        width: 40, height: 40, borderRadius: '50%',
        background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
        color: '#fff', cursor: 'pointer', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem', fontWeight: 300,
      }}>›</button>
    </section>
  );
}
