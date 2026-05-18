'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/lib/useStore';

const AREA_OPTIONS = [
  { label: 'до 30 м²', price: 400 },
  { label: 'до 35 м²', price: 430 },
  { label: 'до 50 м²', price: 500 },
  { label: 'до 70 м²', price: 550 },
];

interface Props {
  open: boolean;
  onClose: () => void;
  onCartOpen?: () => void;
}

export default function InstallCalculatorModal({ open, onClose, onCartOpen }: Props) {
  const { addToCart } = useCart();

  const [serviceType, setServiceType] = useState<'install' | 'service' | 'dismantle'>('install');
  const [areaIdx, setAreaIdx] = useState(0);
  const [traceLen, setTraceLen] = useState(3);
  const [viaBalcony, setViaBalcony] = useState(false);
  const [dismantling, setDismantling] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [added, setAdded] = useState(false);

  const basePrice = serviceType === 'install' ? AREA_OPTIONS[areaIdx].price : 100;
  const extraTrace = serviceType === 'install' ? Math.max(0, traceLen - 3) * 50 : 0;
  const extraBalcony = viaBalcony ? 50 : 0;
  const extraDismantling = dismantling ? 100 : 0;
  const extraMaintenance = serviceType !== 'service' && maintenance ? 100 : 0;
  const total = basePrice + extraTrace + extraBalcony + extraDismantling + extraMaintenance;

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const SERVICE_LABELS = {
    install: 'Установка кондиционера',
    service: 'Обслуживание кондиционера',
    dismantle: 'Демонтаж кондиционера',
  };

  const handleAddToCart = () => {
    const extras: string[] = [];
    if (serviceType === 'install') extras.push(AREA_OPTIONS[areaIdx].label, `трасса ${traceLen} м`);
    if (viaBalcony) extras.push('через балкон');
    if (dismantling) extras.push('демонтаж оборудования');
    if (extraMaintenance) extras.push('обслуживание');
    const name = `${SERVICE_LABELS[serviceType]}${extras.length ? ` (${extras.join(', ')})` : ''}`;
    addToCart({ productId: `service-${serviceType}-${Date.now()}`, productName: name, price: total, quantity: 1, image: '/assets/images/no_image.png' });
    setAdded(true);
    onCartOpen?.();
    setTimeout(() => { setAdded(false); onClose(); }, 1500);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-white rounded-t-3xl z-10">
            <div>
              <h2 className="font-bold text-lg text-foreground">Расчёт стоимости установки</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Примерная стоимость монтажа</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors shrink-0"
            >
              <Icon name="XMarkIcon" size={18} className="text-foreground" />
            </button>
          </div>

          <div className="p-5 space-y-5">
            {/* Step 1 — service type */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-crimson-700 text-white text-[10px] flex items-center justify-center font-bold shrink-0">1</span>
                Выберите услугу
              </p>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { id: 'install', label: 'Установка', icon: 'WrenchScrewdriverIcon' },
                  { id: 'service', label: 'Обслуживание', icon: 'Cog6ToothIcon' },
                  { id: 'dismantle', label: 'Демонтаж', icon: 'ArrowUturnLeftIcon' },
                ] as const).map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setServiceType(opt.id)}
                    className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl border-2 transition-all text-xs font-semibold ${
                      serviceType === opt.id
                        ? 'border-crimson-600 bg-crimson-50 text-crimson-700'
                        : 'border-border text-muted-foreground hover:border-crimson-200'
                    }`}
                  >
                    <Icon name={opt.icon} size={20} />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 — area */}
            {serviceType === 'install' && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-crimson-700 text-white text-[10px] flex items-center justify-center font-bold shrink-0">2</span>
                  Площадь помещения
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {AREA_OPTIONS.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setAreaIdx(i)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm ${
                        areaIdx === i
                          ? 'border-crimson-600 bg-crimson-50 text-crimson-700'
                          : 'border-border text-foreground hover:border-crimson-200'
                      }`}
                    >
                      <span className="font-medium">{opt.label}</span>
                      <span className="font-bold">{opt.price} р.</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 — trace length */}
            {serviceType === 'install' && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-crimson-700 text-white text-[10px] flex items-center justify-center font-bold shrink-0">3</span>
                  Длина трассы
                  <span className="text-xs text-muted-foreground font-normal">(3 м включено, +50 р./м)</span>
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTraceLen(l => Math.max(3, l - 1))}
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-xl font-bold hover:bg-muted transition-colors"
                  >−</button>
                  <div className="text-center flex-1">
                    <span className="text-2xl font-bold text-foreground">{traceLen}</span>
                    <span className="text-muted-foreground ml-1 text-sm">м</span>
                    {traceLen > 3 && (
                      <p className="text-xs text-crimson-700 font-semibold mt-0.5">+{(traceLen - 3) * 50} р.</p>
                    )}
                  </div>
                  <button
                    onClick={() => setTraceLen(l => l + 1)}
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-xl font-bold hover:bg-muted transition-colors"
                  >+</button>
                </div>
              </div>
            )}

            {/* Step 4 — add-ons */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-crimson-700 text-white text-[10px] flex items-center justify-center font-bold shrink-0">
                  {serviceType === 'install' ? '4' : '2'}
                </span>
                Дополнительно
              </p>
              <div className="space-y-2">
                <label
                  className="flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all hover:border-crimson-200"
                  style={{ borderColor: viaBalcony ? '#b91c1c' : undefined, backgroundColor: viaBalcony ? '#fef2f2' : undefined }}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="HomeModernIcon" size={16} className={viaBalcony ? 'text-crimson-700' : 'text-zinc-500'} />
                    <span className="text-sm font-medium text-foreground">Прокладка через балкон</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold text-crimson-700">+50 р.</span>
                    <input type="checkbox" checked={viaBalcony} onChange={e => setViaBalcony(e.target.checked)} className="w-4 h-4 accent-crimson-700 cursor-pointer" />
                  </div>
                </label>

                <label
                  className="flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all hover:border-crimson-200"
                  style={{ borderColor: dismantling ? '#b91c1c' : undefined, backgroundColor: dismantling ? '#fef2f2' : undefined }}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="TrashIcon" size={16} className={dismantling ? 'text-crimson-700' : 'text-zinc-500'} />
                    <span className="text-sm font-medium text-foreground">Демонтаж оборудования</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold text-crimson-700">+100 р.</span>
                    <input type="checkbox" checked={dismantling} onChange={e => setDismantling(e.target.checked)} className="w-4 h-4 accent-crimson-700 cursor-pointer" />
                  </div>
                </label>

                {serviceType !== 'service' && (
                  <label
                    className="flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all hover:border-crimson-200"
                    style={{ borderColor: maintenance ? '#b91c1c' : undefined, backgroundColor: maintenance ? '#fef2f2' : undefined }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name="Cog6ToothIcon" size={16} className={maintenance ? 'text-crimson-700' : 'text-zinc-500'} />
                      <span className="text-sm font-medium text-foreground">Обслуживание кондиционера</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-bold text-crimson-700">+100 р.</span>
                      <input type="checkbox" checked={maintenance} onChange={e => setMaintenance(e.target.checked)} className="w-4 h-4 accent-crimson-700 cursor-pointer" />
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Result footer */}
          <div className="p-5 border-t border-border bg-zinc-50 rounded-b-3xl sticky bottom-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Итоговая стоимость</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-crimson-700">{total}</span>
                  <span className="text-base font-semibold text-foreground">р.</span>
                </div>
              </div>
              <div className="text-right text-xs text-muted-foreground space-y-0.5">
                <p>База: <span className="font-semibold text-foreground">{basePrice} р.</span></p>
                {extraTrace > 0 && <p>Трасса: <span className="font-semibold text-crimson-700">+{extraTrace} р.</span></p>}
                {extraBalcony > 0 && <p>Балкон: <span className="font-semibold text-crimson-700">+{extraBalcony} р.</span></p>}
                {extraDismantling > 0 && <p>Демонтаж: <span className="font-semibold text-crimson-700">+{extraDismantling} р.</span></p>}
                {extraMaintenance > 0 && <p>ТО: <span className="font-semibold text-crimson-700">+{extraMaintenance} р.</span></p>}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                added ? 'bg-emerald-500 text-white' : 'bg-crimson-gradient text-white hover:opacity-90 shadow-crimson'
              }`}
            >
              <Icon name={added ? 'CheckIcon' : 'ShoppingCartIcon'} size={18} />
              {added ? 'Добавлено!' : 'Добавить в корзину'}
            </button>
            <p className="text-xs text-muted-foreground text-center mt-2">Звоним с 9:00 до 18:00 · +375 29 105-06-94</p>
          </div>
        </div>
      </div>
    </>
  );
}
