'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  open: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;

const ROOM_TYPES = [
  { value: 'Квартира', icon: 'HomeIcon', desc: 'Жилая квартира' },
  { value: 'Частный дом', icon: 'HomeModernIcon', desc: 'Загородный дом' },
  { value: 'Офис / коммерция', icon: 'BuildingOffice2Icon', desc: 'Офис, магазин, кафе' },
];

const BUDGETS = [
  { value: 'до 1 000 р.', sub: 'базовые on/off модели' },
  { value: '1 000–1 500 р.', sub: 'бюджетный инвертор' },
  { value: '1 500–2 500 р.', sub: 'средний класс' },
  { value: 'от 2 500 р.', sub: 'премиум, с Wi-Fi' },
];

const COMPRESSOR_TYPES = [
  { value: 'Инвертор', desc: 'Тихий, экономит электроэнергию' },
  { value: 'On/Off', desc: 'Дешевле при покупке' },
  { value: 'Не важно', desc: 'Подберите лучший вариант' },
];

const FEATURES = [
  'Wi-Fi управление',
  'Режим обогрева',
  'Тихий ночной режим',
  'Самоочистка',
  'Очистка воздуха',
];

export default function SelectionModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [roomType, setRoomType] = useState('');
  const [area, setArea] = useState('');
  const [budget, setBudget] = useState('');
  const [compressorType, setCompressorType] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // lock body scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1); setRoomType(''); setArea(''); setBudget('');
        setCompressorType(''); setFeatures([]); setName(''); setPhone('');
        setSent(false); setError('');
      }, 300);
    }
  }, [open]);

  const toggleFeature = (f: string) =>
    setFeatures(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);

  const canNext1 = !!roomType;
  const canNext2 = !!budget && !!compressorType;
  const canSubmit = name.trim().length >= 2 && phone.replace(/\D/g, '').length >= 7;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/send-selection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomType, area, budget, compressorType, features, name, phone }),
      });
      const data = await res.json();
      if (data.ok) setSent(true);
      else setError('Ошибка отправки. Позвоните нам: +375 29 105-06-94');
    } catch {
      setError('Ошибка отправки. Позвоните нам: +375 29 105-06-94');
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <div>
            <h2 className="text-lg font-bold text-foreground">Подобрать кондиционер</h2>
            <p className="text-sm text-muted-foreground">Мы свяжемся и предложим лучшие варианты</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors">
            <Icon name="XMarkIcon" size={18} className="text-foreground" />
          </button>
        </div>

        {/* Step indicator */}
        {!sent && (
          <div className="flex items-center gap-2 px-6 pb-4 shrink-0">
            {([1, 2, 3] as Step[]).map(s => (
              <React.Fragment key={s}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= s ? 'bg-crimson-700 text-white' : 'bg-zinc-100 text-zinc-400'}`}>{s}</div>
                {s < 3 && <div className={`flex-1 h-0.5 rounded transition-colors ${step > s ? 'bg-crimson-700' : 'bg-zinc-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">

          {/* SUCCESS */}
          {sent ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <Icon name="CheckCircleIcon" size={36} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Заявка отправлена!</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Мы получили ваши пожелания и свяжемся с вами в ближайшее время для подбора кондиционера.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-crimson-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Закрыть
              </button>
            </div>
          ) : step === 1 ? (
            /* STEP 1 — тип помещения + площадь */
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Тип помещения</p>
                <div className="grid grid-cols-3 gap-3">
                  {ROOM_TYPES.map(rt => (
                    <button
                      key={rt.value}
                      onClick={() => setRoomType(rt.value)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all text-center ${roomType === rt.value ? 'border-crimson-700 bg-crimson-50' : 'border-border hover:border-crimson-200'}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${roomType === rt.value ? 'bg-crimson-100' : 'bg-zinc-100'}`}>
                        <Icon name={rt.icon} size={22} className={roomType === rt.value ? 'text-crimson-700' : 'text-zinc-500'} />
                      </div>
                      <span className={`text-xs font-semibold leading-tight ${roomType === rt.value ? 'text-crimson-700' : 'text-foreground'}`}>{rt.value}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Площадь помещения</p>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={area}
                    onChange={e => setArea(e.target.value)}
                    placeholder="Например: 25"
                    className="w-full border border-border rounded-xl px-4 py-3 pr-12 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">м²</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Оставьте пустым, если не знаете</p>
              </div>
            </div>

          ) : step === 2 ? (
            /* STEP 2 — бюджет + тип */
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">На какую стоимость рассчитываете?</p>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGETS.map(b => (
                    <button
                      key={b.value}
                      onClick={() => setBudget(b.value)}
                      className={`flex flex-col items-start p-3 rounded-xl border-2 transition-all text-left ${budget === b.value ? 'border-crimson-700 bg-crimson-50' : 'border-border hover:border-crimson-200'}`}
                    >
                      <span className={`text-sm font-bold ${budget === b.value ? 'text-crimson-700' : 'text-foreground'}`}>{b.value}</span>
                      <span className="text-xs text-muted-foreground mt-0.5">{b.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Тип компрессора</p>
                <div className="space-y-2">
                  {COMPRESSOR_TYPES.map(ct => (
                    <button
                      key={ct.value}
                      onClick={() => setCompressorType(ct.value)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${compressorType === ct.value ? 'border-crimson-700 bg-crimson-50' : 'border-border hover:border-crimson-200'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${compressorType === ct.value ? 'border-crimson-700 bg-crimson-700' : 'border-zinc-300'}`}>
                        {compressorType === ct.value && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${compressorType === ct.value ? 'text-crimson-700' : 'text-foreground'}`}>{ct.value}</p>
                        <p className="text-xs text-muted-foreground">{ct.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          ) : (
            /* STEP 3 — доп. функции + контакты */
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Дополнительные функции <span className="text-muted-foreground font-normal">(необязательно)</span></p>
                <div className="space-y-2">
                  {FEATURES.map(f => (
                    <label key={f} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${features.includes(f) ? 'border-crimson-700 bg-crimson-50' : 'border-border hover:border-crimson-200'}`}>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${features.includes(f) ? 'border-crimson-700 bg-crimson-700' : 'border-zinc-300'}`}>
                        {features.includes(f) && <Icon name="CheckIcon" size={12} className="text-white" />}
                      </div>
                      <input type="checkbox" checked={features.includes(f)} onChange={() => toggleFeature(f)} className="sr-only" />
                      <span className={`text-sm font-medium ${features.includes(f) ? 'text-crimson-700' : 'text-foreground'}`}>{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Ваши контакты</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+375 __ ___-__-__"
                    className="w-full border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100"
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
              )}
            </div>
          )}
        </div>

        {/* Footer buttons */}
        {!sent && (
          <div className="px-6 pb-6 pt-3 border-t border-border shrink-0 flex gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(s => (s - 1) as Step)}
                className="flex-1 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-zinc-50 transition-colors"
              >
                Назад
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(s => (s + 1) as Step)}
                disabled={step === 1 ? !canNext1 : !canNext2}
                className="flex-1 py-3 rounded-xl bg-crimson-gradient text-white font-semibold shadow-crimson hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Далее
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canSubmit || sending}
                className="flex-1 py-3 rounded-xl bg-crimson-gradient text-white font-semibold shadow-crimson hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                    </svg>
                    Отправка...
                  </>
                ) : 'Отправить заявку'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
