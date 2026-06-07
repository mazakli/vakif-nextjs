'use client';
import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

function useCount(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return val;
}

function StatItem({ number, suffix, label }: { number: number; suffix: string; label: string; active: boolean }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCount(number, active);

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: '8px' }}>
        {count.toLocaleString('tr-TR')}{suffix}
      </div>
      <div style={{ color: 'rgba(244,233,216,.75)', fontSize: '.95rem', fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export default function Counter() {
  return (
    <section style={{ background: 'var(--dark-green)', padding: '60px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '20px' }}>
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} active={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
