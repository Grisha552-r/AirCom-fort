'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CtaSection() {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    try {
      await fetch('/api/call-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-crimson-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Выезд мастера в день заказа
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Нужна консультация<br className="hidden sm:block" /> по выбору кондиционера?
          </h2>
          <p className="text-crimson-100 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Подберём модель под ваше помещение и бюджет. Перезвоним в течение 15 минут — бесплатно.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {sent ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-bold text-xl mb-2">Заявка принята!</p>
              <p className="text-crimson-100 text-sm">Перезвоним в течение 15 минут</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+375 29 000-00-00"
                  required
                  aria-label="Номер телефона"
                  className="w-full bg-white/95 text-foreground placeholder:text-zinc-400 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !phone.trim()}
                className="shrink-0 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                ) : (
                  <Icon name="PhoneIcon" size={16} />
                )}
                Перезвоните
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="tel:+375291050694"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <Icon name="PhoneIcon" size={16} />
              +375 29 105-06-94
            </a>
            <span className="w-px h-4 bg-white/20" />
            <a
              href="https://t.me/AirComforto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a
              href="viber://chat?number=%2B375291050694"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M11.4 0C5.5 0 .8 4.7.8 10.5c0 2.9 1.2 5.6 3.2 7.6L2.5 24l6.2-1.5c1.5.7 3.1 1.1 4.7 1.1 5.9 0 10.6-4.7 10.6-10.5S17.3 0 11.4 0zm5.5 14.7c-.3.8-.9 1.4-1.8 1.6-.5.1-1 .2-4.5-1.4-3-1.4-5.1-4.3-5.3-4.5-.2-.2-1.4-1.8-1.4-3.5 0-1.7.9-2.5 1.2-2.8.3-.3.7-.4 1-.4h.7c.3 0 .5.1.8.6.3.5 1 2.4 1.1 2.6.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.2-.3.3-.1.6.2.3.8 1.2 1.6 1.9.9.8 1.6 1.1 1.9 1.2.3.1.5 0 .7-.1.2-.2.4-.5.7-.7.3-.3.5-.3.8-.2l2.6 1.2c.3.1.5.3.5.5-.1.4-.1.7-.3 1.3z"/>
              </svg>
              Viber
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
