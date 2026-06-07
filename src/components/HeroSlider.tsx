'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { SLIDES } from '@/lib/constants';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => go((current + 1) % SLIDES.length), 5500);
    return () => clearInterval(timer);
  }, [current, go]);

  const slide = SLIDES[current];

  return (
    <section style={{ position: 'relative', height: 'min(90vh, 680px)', overflow: 'hidden' }}>
      {/* Background */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(rgba(1,33,22,0.65), rgba(1,33,22,0.75)), url(${s.image}) center/cover no-repeat`,
          opacity: i === current ? 1 : 0,
          transition: 'opacity .7s ease',
          zIndex: 0,
        }} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 680, opacity: isAnimating ? 0 : 1, transform: isAnimating ? 'translateY(16px)' : 'translateY(0)', transition: 'all .5s ease' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200,169,110,.2)', border: '1px solid rgba(200,169,110,.4)', borderRadius: '20px', padding: '5px 14px', marginBottom: '20px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ color: 'var(--accent)', fontSize: '.8rem', fontWeight: 600, letterSpacing: '1px' }}>İNSANLIĞA HİZMET</span>
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', lineHeight: 1.2 }}>
              {slide.title}
            </h1>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.7 }}>
              {slide.text}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href={slide.btn1.href} style={{
                padding: '14px 32px', background: 'var(--accent)', color: '#012116',
                borderRadius: '6px', fontWeight: 700, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'transform .2s',
              }}>{slide.btn1.label}</Link>
              <Link href={slide.btn2.href} style={{
                padding: '14px 32px', background: 'transparent', color: '#fff',
                borderRadius: '6px', fontWeight: 700, textDecoration: 'none',
                border: '2px solid rgba(255,255,255,.5)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'border-color .2s',
              }}>{slide.btn2.label}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 2 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            width: i === current ? 28 : 10, height: 10, borderRadius: '5px',
            background: i === current ? 'var(--accent)' : 'rgba(255,255,255,.4)',
            border: 'none', cursor: 'pointer', transition: 'all .3s ease', padding: 0,
          }} />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => go((current - 1 + SLIDES.length) % SLIDES.length)} style={{
        position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.2)',
        color: '#fff', width: 44, height: 44, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2,
        fontSize: '1.2rem', transition: 'background .2s',
      }}>‹</button>
      <button onClick={() => go((current + 1) % SLIDES.length)} style={{
        position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.2)',
        color: '#fff', width: 44, height: 44, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2,
        fontSize: '1.2rem', transition: 'background .2s',
      }}>›</button>
    </section>
  );
}
