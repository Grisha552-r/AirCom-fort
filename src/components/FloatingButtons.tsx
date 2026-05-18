'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function FloatingButtons() {
  const [hoveredTg, setHoveredTg] = useState(false);
  const [hoveredVb, setHoveredVb] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!callbackOpen) return;
    const handler = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setCallbackOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [callbackOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/send-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() || undefined, phone: phone.trim() }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('ok');
        setTimeout(() => {
          setCallbackOpen(false);
          setStatus('idle');
          setName('');
          setPhone('');
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[999] flex flex-col items-end gap-2.5">

      {/* Callback popup */}
      {callbackOpen && (
        <div
          ref={formRef}
          className="bg-white rounded-2xl shadow-2xl border border-border p-5 w-72 mb-1 animate-fade-in-up"
        >
          {status === 'ok' ? (
            <div className="text-center py-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-foreground text-sm">Заявка принята!</p>
              <p className="text-muted-foreground text-xs mt-1">Перезвоним в рабочее время</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-foreground text-sm">Перезвоните мне</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Ответим в течение часа</p>
                </div>
                <button
                  onClick={() => setCallbackOpen(false)}
                  className="w-7 h-7 rounded-full hover:bg-zinc-100 flex items-center justify-center text-muted-foreground transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ваше имя (необязательно)"
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-crimson-500 focus:ring-2 focus:ring-crimson-100 transition-all"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+375 XX XXX-XX-XX"
                  required
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-crimson-500 focus:ring-2 focus:ring-crimson-100 transition-all"
                />
                {status === 'error' && (
                  <p className="text-xs text-red-500">Ошибка отправки. Позвоните нам напрямую.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading' || !phone.trim()}
                  className="w-full bg-crimson-700 hover:bg-crimson-800 disabled:opacity-60 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
                    </svg>
                  )}
                  Жду звонка
                </button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-3">
                с 9:00 до 18:00, пн–сб
              </p>
            </>
          )}
        </div>
      )}

      {/* Callback button */}
      <div className="relative flex items-center">
        <button
          onClick={() => setCallbackOpen(o => !o)}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(135deg,#b91c1c,#991b1b)', boxShadow: '0 4px 14px rgba(185,28,28,0.5)' }}
          aria-label="Перезвоните мне"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
          </svg>
        </button>
      </div>

      {/* Telegram */}
      <div className="relative flex items-center">
        {hoveredTg && (
          <div className="absolute right-14 bg-white px-3 py-2 rounded-xl text-xs text-zinc-700 whitespace-nowrap shadow-lg font-medium">
            Написать в Telegram
          </div>
        )}
        <a
          href="https://t.me/AirComforto"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredTg(true)}
          onMouseLeave={() => setHoveredTg(false)}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(135deg,#2AABEE,#229ED9)', boxShadow: '0 4px 14px rgba(42,171,238,0.5)' }}
        >
          <svg viewBox="0 0 24 24" fill="white" width={22} height={22}>
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
      </div>

      {/* Viber */}
      <div className="relative flex items-center">
        {hoveredVb && (
          <div className="absolute right-14 bg-white px-3 py-2 rounded-xl text-xs text-zinc-700 whitespace-nowrap shadow-lg font-medium">
            Написать в Viber
          </div>
        )}
        <a
          href="viber://chat?number=%2B375291050694"
          onMouseEnter={() => setHoveredVb(true)}
          onMouseLeave={() => setHoveredVb(false)}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(135deg,#7360F2,#8B5CF6)', boxShadow: '0 4px 14px rgba(115,96,242,0.5)' }}
        >
          <svg viewBox="0 0 24 24" fill="white" width={22} height={22}>
            <path d="M11.4 0C8.5.03 4.8.32 2.7 2.3 1.1 3.9.6 6.2.5 9c-.1 2.8-.1 8.1 5 9.6v2.2s0 .9.5 1.1c.7.2 1.1-.4 1.8-1.2l1.2-1.4c3.3.3 5.9-.4 6.2-.5.7-.2 4.5-.7 5.1-5.8.6-5.2-.3-8.5-2.5-10h-.1C17 3.6 14.8 2.8 11.4 0zM11.5 1.6c3.2 0 5.2.5 6.3.9 1.8 1.2 2.6 4.1 2.1 8.7-.5 4.2-3.6 4.5-4.1 4.7-.2.1-2.5.7-5.4.5 0 0-2.1 2.6-2.8 3.3-.1.1-.2.2-.3.1-.1 0-.2-.2-.2-.4V17c-4.6-1.3-4.4-5.8-4.4-9.1.1-2.5.5-4.5 1.8-5.8 1.8-1.6 5.2-1.5 7-1.5zm.2 2.4c-.4 0-.6.4-.3.7.1.1.2.1.2.1 1.5.4 2.4 1.3 2.7 2.8v.4c.1.4.6.5.7.1v-.1c-.3-1.9-1.5-3.1-3.3-3.6zm-3.5.6c-.1 0-.3 0-.4.1-.3 0-.5.3-.4.6 0 .1.1.2.2.3.1.1.3.1.5.1.3-.1.5 0 .8.1 1 .5 1.7 1.1 2.1 2.1.1.1.1.2.1.4.1.3.3.4.5.4.2-.1.4-.3.3-.6-.1-.5-.3-.9-.5-1.2-.5-.9-1.3-1.6-2.6-1.9-.2-.1-.4-.1-.6-.4zm3.6 1.3c-.3 0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4-.1-.4-.4-.4zm-3.8.7c-.2 0-.3.1-.4.2-.1.2-.2.4-.1.6 0 .1.1.2.2.2.4.3.8.6 1 1 .1.2.4.3.6.1.2-.1.3-.4.1-.6-.3-.5-.7-1-1.2-1.4-.1-.1-.1-.1-.2-.1zm.2 3.2c-.3 0-.6.2-.9.4-.1.1-.2.2-.2.4 0 .2 0 .2.1.2.3.8.7 1.4 1.3 2 .6.5 1.3 1 2.2 1.2.1 0 .2 0 .2.1.1.1.4.2.4.2s.1 0 .4-.2c.2-.3.4-.6.4-.9 0-.3-.1-.5-.4-.6-.2-.1-.3 0-.5 0-.1.1-.2.1-.4.2-.2 0-.4 0-.5-.1-.5-.2-.9-.5-1.4-1.4-.1-.2-.2-.3-.2-.5.1-.1.1-.2.2-.4.1-.1.1-.3 0-.5-.1-.2-.3-.3-.5-.3l-.2-.1z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
