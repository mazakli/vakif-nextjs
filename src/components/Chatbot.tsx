'use client';
import { useState, useRef, useEffect } from 'react';
import { IconMessageCircle, IconX, IconSend, IconCheckCircle, IconBot } from './Icons';

type Msg = { role: 'user' | 'bot'; text: string };

const GREET = 'Merhaba! Size nasıl yardımcı olabilirim? Bağış yapmak, projelerimiz veya vakfımız hakkında bilgi almak için sorabilirsiniz.';

const FAQ: [RegExp, string][] = [
  [/bağış|donate|yardım/, 'Bağış yapmak için /bagis-yap sayfamızı ziyaret edebilirsiniz. Kredi kartı, banka transferi ve diğer yöntemlerle bağış yapabilirsiniz.'],
  [/proje|project/, 'Projelerimiz için /projelerimiz sayfamıza göz atabilirsiniz. Su kuyusu, eğitim bursu ve gıda yardımı gibi projelerimiz mevcuttur.'],
  [/iletişim|contact|telefon|email|adres/, `Bize ulaşmak için:\n+90 500 123 45 67\ninfo@vakif.org\nVeya /iletisim sayfamızı ziyaret edebilirsiniz.`],
  [/hakkında|about|vakıf|kim/, 'Vakfımız 25 yıldır 35\'ten fazla ülkede insanlığa hizmet vermektedir. Detaylı bilgi için /hakkimizda sayfamıza bakınız.'],
  [/gizlilik|privacy/, 'Gizlilik politikamız için /gizlilik sayfamızı inceleyebilirsiniz.'],
];

function getReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const [pattern, reply] of FAQ) {
    if (pattern.test(lower)) return reply;
  }
  return 'Sorunuz için teşekkürler. Bu konuda size daha iyi yardımcı olabilmemiz için lütfen bizi arayın: +90 500 123 45 67 veya info@vakif.org adresine yazın.';
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: 'bot', text: GREET }]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs(m => [...m, { role: 'user', text }, { role: 'bot', text: getReply(text) }]);
    setInput('');
  };

  return (
    <>
      {open && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '20px', width: 340, zIndex: 1000,
          background: '#fff', borderRadius: '16px', boxShadow: '0 8px 40px rgba(1,33,22,.2)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden', maxHeight: '480px',
        }}>
          {/* Header */}
          <div style={{ background: '#012116', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconBot size={18} color="#012116" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '.9rem' }}>Vakıf Asistan</div>
                <div style={{ color: '#4ade80', fontSize: '.72rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  Çevrimiçi
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconX size={18} color="rgba(255,255,255,.7)" />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px',
                  borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.role === 'user' ? '#012116' : '#f0f0f0',
                  color: m.role === 'user' ? '#fff' : '#1a1a1a',
                  fontSize: '.85rem', lineHeight: 1.6, whiteSpace: 'pre-line',
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          <div style={{ padding: '8px 12px', display: 'flex', gap: '6px', flexWrap: 'wrap', borderTop: '1px solid #f0f0f0' }}>
            {['Bağış yapmak istiyorum', 'Projeleriniz', 'İletişim'].map(q => (
              <button key={q} onClick={() => setInput(q)} style={{ padding: '5px 10px', borderRadius: '20px', border: '1px solid #ddd', background: '#f8f8f8', fontSize: '.75rem', cursor: 'pointer', color: '#333', fontFamily: 'inherit' }}>{q}</button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Mesajınızı yazın..."
              style={{ flex: 1, padding: '9px 12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '.85rem', outline: 'none', fontFamily: 'inherit' }}
            />
            <button onClick={send} style={{ background: '#012116', color: '#fff', border: 'none', borderRadius: '8px', padding: '9px 13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconSend size={15} color="#fff" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chatbot"
        style={{
          position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000,
          width: 56, height: 56, borderRadius: '50%',
          background: '#012116', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(1,33,22,.4)', transition: 'transform .3s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        {open
          ? <IconX size={22} color="var(--cream)" />
          : <IconMessageCircle size={22} color="var(--cream)" />
        }
      </button>
    </>
  );
}
