'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const CONTACTS = [
  { icon: 'PhoneIcon', label: 'Телефон', value: '+375 29 105-06-94', href: 'tel:+375291050694' },
  { icon: 'EnvelopeIcon', label: 'Email', value: 'aircomfortbel@gmail.com', href: 'mailto:aircomfortbel@gmail.com' },
  { icon: 'MapPinIcon', label: 'Адрес', value: 'г. Гомель, ул. 2-я Витебская, 30, офис №1-14/1', href: null },
  { icon: 'ClockIcon', label: 'Режим работы', value: 'Пн–Сб, 9:00–18:00', href: null },
];

const REQUISITES = [
  { label: 'Полное наименование', value: 'Общество с ограниченной ответственностью "ТеплоПрайм"' },
  { label: 'УНП', value: '491393506' },
  { label: 'Юридический адрес', value: '246015, г. Гомель, ул. 2-я Витебская, 30, офис №1-14/1' },
  { label: 'Фактический адрес', value: '246015, г. Гомель, ул. 2-я Витебская, 30, офис №1-14/1' },
  { label: 'Расчётный счёт', value: 'BY22ALFA30122H12110010270000' },
  { label: 'Банк', value: 'ЗАО «Альфа-Банк»' },
  { label: 'БИК', value: 'ALFABY2X' },
  { label: 'Email', value: 'aircomfortbel@gmail.com' },
];

const CLIENTS = [
  {
    icon: 'UserIcon',
    title: 'Физические лица',
    desc: 'Оплата наличными или картой при самовывозе. Выдаём товарный чек. Гарантия производителя на всё оборудование.',
    items: ['Оплата картой и наличными', 'Товарный чек', 'Гарантийный талон', 'Консультация при получении'],
    color: 'crimson',
  },
  {
    icon: 'BuildingOfficeIcon',
    title: 'Юридические лица',
    desc: 'Работаем по безналичному расчёту. Предоставляем полный пакет закрывающих документов: накладная, счёт-фактура.',
    items: ['Безналичный расчёт', 'Счёт на оплату', 'ТН и ТТН', 'Акт выполненных работ'],
    color: 'blue',
  },
];

const COLOR_MAP: Record<string, { card: string; icon: string; badge: string; check: string }> = {
  crimson: {
    card: 'border-crimson-200 bg-crimson-50/40',
    icon: 'bg-crimson-100 text-crimson-700',
    badge: 'bg-crimson-100 text-crimson-700',
    check: 'text-crimson-600',
  },
  blue: {
    card: 'border-blue-200 bg-blue-50/40',
    icon: 'bg-blue-100 text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    check: 'text-blue-600',
  },
};

export default function RequisitesPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        {/* Hero */}
        <div className="bg-crimson-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 py-14">
            <nav className="flex items-center gap-2 text-sm text-crimson-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRightIcon" size={14} />
              <span className="text-white font-medium">Контакты</span>
            </nav>
            <h1 className="text-4xl font-bold mb-3">Контакты и реквизиты</h1>
            <p className="text-crimson-100 text-lg">Работаем с физическими и юридическими лицами</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

          {/* Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACTS.map(c => (
              <div key={c.label} className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-crimson-100 flex items-center justify-center shrink-0">
                  <Icon name={c.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-crimson-700" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-semibold text-foreground hover:text-crimson-700 transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Messengers */}
          <div className="flex flex-wrap gap-3">
            <a href="https://t.me/AirComforto" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg,#2AABEE,#229ED9)' }}>
              <Icon name="ChatBubbleLeftIcon" size={16} />
              Telegram
            </a>
            <a href="viber://chat?number=%2B375291050694" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: '#7B519D' }}>
              <Icon name="ChatBubbleLeftIcon" size={16} />
              Viber
            </a>
          </div>

          {/* Client types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CLIENTS.map(c => {
              const colors = COLOR_MAP[c.color];
              return (
                <div key={c.title} className={`rounded-2xl border-2 p-6 ${colors.card}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${colors.icon}`}>
                    <Icon name={c.icon} size={24} />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2">{c.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                  <ul className="space-y-1.5">
                    {c.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <Icon name="CheckCircleIcon" size={15} className={colors.check} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Requisites card */}
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-zinc-50">
              <div className="w-9 h-9 rounded-xl bg-crimson-100 flex items-center justify-center">
                <Icon name="DocumentTextIcon" size={18} className="text-crimson-700" />
              </div>
              <h2 className="font-bold text-foreground">Банковские и юридические реквизиты</h2>
            </div>
            <div className="divide-y divide-border">
              {REQUISITES.map(r => (
                <div key={r.label} className="flex items-start justify-between gap-4 px-6 py-4 hover:bg-zinc-50 transition-colors group">
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{r.label}</p>
                    <p className="text-sm font-semibold text-foreground break-all">{r.value}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(r.value, r.label)}
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-zinc-200"
                    title="Скопировать"
                  >
                    {copied === r.label
                      ? <Icon name="CheckIcon" size={15} className="text-emerald-600" />
                      : <Icon name="ClipboardDocumentIcon" size={15} className="text-muted-foreground" />
                    }
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for docs */}
          <div className="bg-zinc-50 rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground mb-1">Нужен договор или счёт на оплату?</p>
              <p className="text-sm text-muted-foreground">Свяжитесь с нами — подготовим документы в течение рабочего дня.</p>
            </div>
            <a
              href="tel:+375291050694"
              onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }}
              className="shrink-0 flex items-center gap-2 bg-crimson-gradient text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-crimson whitespace-nowrap"
            >
              <Icon name="PhoneIcon" size={16} />
              +375 29 105-06-94
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
