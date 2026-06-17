'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { CATEGORIES } from '@/lib/categories';
import { useCart, useFavorites } from '@/lib/useStore';

interface HeaderProps {
  onCartOpen?: () => void;
}

export default function Header({ onCartOpen }: HeaderProps) {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [callFormOpen, setCallFormOpen] = useState(false);
  const [callName, setCallName] = useState('');
  const [callPhone, setCallPhone] = useState('');
  const [callSending, setCallSending] = useState(false);
  const [callSent, setCallSent] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const { itemCount } = useCart();
  const { count: favCount } = useFavorites();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target as Node)) {
        setCatalogOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!callFormOpen) { setCallSent(false); setCallName(''); setCallPhone(''); }
  }, [callFormOpen]);

  const topCategories = CATEGORIES.filter(c => !c.parentId && c.id !== 'accessories' && c.id !== 'blocks');

  async function handleCallSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!callPhone.trim()) return;
    setCallSending(true);
    try {
      await fetch('/api/call-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: callName, phone: callPhone }),
      });
      setCallSent(true);
      setTimeout(() => setCallFormOpen(false), 2000);
    } finally {
      setCallSending(false);
    }
  }

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'} bg-white`}>
        {/* Top bar */}
        <div className="bg-crimson-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs">
            <span className="hidden sm:flex items-center gap-1.5 text-crimson-200 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Выезд в день заказа · Гомель и область
            </span>
            <span className="sm:hidden text-crimson-200 font-medium">AirComfort</span>
            <div className="flex items-center gap-3">
              {/* Telegram */}
              <a
                href="https://t.me/AirComforto"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                aria-label="Написать в Telegram"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shrink-0 overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#2AABEE,#229ED9)' }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="sr-only">Написать в Telegram</span>
              </a>
              {/* Viber */}
              <a
                href="viber://chat?number=%2B375291050694"
                title="Viber"
                aria-label="Написать в Viber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 shrink-0"
              >
                <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#7B519D"/>
                  <path fill="white" d="M23 32 C21 35 21 41 24 47 C27 53 32 59 38 64 C44 69 51 73 57 74 C63 75 67 73 69 70 L71 66 C72 64 71 62 69 61 L62 57 C60 56 58 57 57 59 L55 62 C54 63 52 63 51 62 C46 59 41 54 38 49 C37 48 37 46 38 45 L41 43 C43 42 44 40 43 38 L39 31 C38 29 36 28 34 29 Z"/>
                  <path fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" d="M58 25 C66 27 72 34 72 43"/>
                  <path fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" d="M58 33 C63 35 66 39 66 44"/>
                  <path fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" d="M58 41 C60 42 61 43 61 45"/>
                </svg>
              </a>
              <span className="opacity-30">|</span>
              <div className="flex flex-col items-end sm:flex-row sm:items-center sm:gap-1.5">
                <a href="tel:+375291050694" onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }} className="flex items-center gap-1.5 font-medium hover:text-crimson-200 transition-colors">
                  <Icon name="PhoneIcon" size={12} />
                  +375 29 105-06-94
                </a>
                <button
                  onClick={() => setCallFormOpen(true)}
                  className="sm:hidden text-[10px] text-crimson-200 hover:text-white underline underline-offset-2 transition-colors leading-tight mt-0.5"
                >
                  Заказать звонок
                </button>
                <span className="hidden md:block opacity-70">с 9:00 до 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-2 sm:gap-3">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 shrink-0">
                <AppImage
                  src="/assets/images/logo.png"
                  alt="AirComfort логотип"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="font-display text-xl font-bold text-foreground tracking-wide">AirComfort</span>
            </Link>

            {/* Catalog button — desktop only */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <div className="relative" ref={catalogRef}>
                <button
                  onClick={() => setCatalogOpen(!catalogOpen)}
                  className="flex items-center gap-2 bg-crimson-gradient text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-crimson"
                >
                  <Icon name="Bars3Icon" size={16} />
                  Каталог
                  <Icon name="ChevronDownIcon" size={14} className={`transition-transform duration-200 ${catalogOpen ? 'rotate-180' : ''}`} />
                </button>

                {catalogOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-border z-50 overflow-hidden animate-fade-in-up">
                    <div className="p-2">
                      {topCategories.map(cat => (
                        <Link
                          key={cat.id}
                          href={`/products/${cat.slug}`}
                          onClick={() => setCatalogOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-crimson-50 group transition-colors duration-150"
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                            {cat.image && !cat.image.includes('d04e8c84') ? (
                              <AppImage src={cat.image} alt={cat.name} width={40} height={40} className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full bg-crimson-100 flex items-center justify-center">
                                <Icon name="TagIcon" size={14} className="text-crimson-700" />
                              </div>
                            )}
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-crimson-700 transition-colors">{cat.name}</span>
                          <Icon name="ChevronRightIcon" size={14} className="ml-auto text-muted-foreground group-hover:text-crimson-600 transition-colors" />
                        </Link>
                      ))}
                      <div className="border-t border-border mt-1 pt-1">
                        <Link
                          href="/services"
                          onClick={() => setCatalogOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-crimson-50 group transition-colors duration-150"
                        >
                          <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center">
                            <Icon name="WrenchScrewdriverIcon" size={28} className="text-crimson-700" />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-crimson-700 transition-colors">Услуги</span>
                          <Icon name="ChevronRightIcon" size={14} className="ml-auto text-muted-foreground group-hover:text-crimson-600 transition-colors" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search — hidden on mobile */}
            <form
              role="search"
              className="hidden sm:flex flex-1 relative max-w-xl"
              onSubmit={e => { e.preventDefault(); if (searchQuery.trim()) window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`; }}
            >
              <div className="w-full flex items-center bg-muted rounded-xl border border-border focus-within:border-crimson-600 focus-within:ring-2 focus-within:ring-crimson-100 transition-all duration-200">
                <Icon name="MagnifyingGlassIcon" size={18} className="ml-3 text-muted-foreground shrink-0" />
                <input
                  type="search"
                  name="search"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Поиск товаров..."
                  aria-label="Поиск товаров"
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery('')} className="mr-2 text-muted-foreground hover:text-foreground" aria-label="Очистить поиск">
                    <Icon name="XMarkIcon" size={16} />
                  </button>
                )}
              </div>
            </form>

            {/* Spacer on mobile so icons go to the right */}
            <div className="flex-1 sm:hidden" />

            {/* "Заказать звонок" — desktop full, mobile icon-only */}
            <button
              onClick={() => setCallFormOpen(true)}
              className="hidden md:flex items-center gap-1.5 shrink-0 text-sm font-semibold text-crimson-700 border border-crimson-200 hover:border-crimson-500 hover:bg-crimson-50 px-3 py-1.5 rounded-lg transition-all duration-200"
            >
              <Icon name="PhoneIcon" size={14} />
              Заказать звонок
            </button>
            {/* Action icons */}
            <div className="flex items-center gap-1 shrink-0">
              <Link href="/favorites" className="hidden md:flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors group relative">
                <div className="relative">
                  <Icon name="HeartIcon" size={22} className="text-muted-foreground group-hover:text-crimson-600 transition-colors" />
                  {favCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-crimson-700 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {favCount > 9 ? '9+' : favCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground mt-0.5">Избранное</span>
              </Link>
              <button
                onClick={onCartOpen}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-muted transition-colors group relative"
              >
                <div className="relative">
                  <Icon name="ShoppingCartIcon" size={22} className="text-muted-foreground group-hover:text-crimson-600 transition-colors" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-crimson-700 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {itemCount > 9 ? '9+' : itemCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground mt-0.5 hidden md:block">Корзина</span>
              </button>
              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name={mobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="p-4 space-y-1">
              {/* Mobile search */}
              <form
                role="search"
                className="flex items-center bg-muted rounded-xl border border-border mb-3 focus-within:border-crimson-600 focus-within:ring-2 focus-within:ring-crimson-100 transition-all"
                onSubmit={e => { e.preventDefault(); if (searchQuery.trim()) { window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`; setMobileMenuOpen(false); } }}
              >
                <Icon name="MagnifyingGlassIcon" size={16} className="ml-3 text-muted-foreground shrink-0" />
                <input
                  type="search"
                  name="search"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Поиск товаров..."
                  aria-label="Поиск товаров"
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
                />
              </form>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-2">Каталог</p>
              {topCategories.map(cat => (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-crimson-50 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-zinc-100">
                    {cat.image && !cat.image.includes('d04e8c84') ? (
                      <AppImage src={cat.image} alt={cat.name} width={40} height={40} className="object-cover w-full h-full" />
                    ) : (
                      <div className="w-full h-full bg-crimson-100 flex items-center justify-center">
                        <Icon name="TagIcon" size={14} className="text-crimson-700" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-crimson-700 transition-colors">{cat.name}</span>
                  <Icon name="ChevronRightIcon" size={14} className="ml-auto text-muted-foreground" />
                </Link>
              ))}
              <div className="border-t border-border pt-2 mt-2">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-crimson-50 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg shrink-0 bg-crimson-50 flex items-center justify-center">
                    <Icon name="WrenchScrewdriverIcon" size={22} className="text-crimson-700" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-crimson-700 transition-colors">Услуги</span>
                  <Icon name="ChevronRightIcon" size={14} className="ml-auto text-muted-foreground" />
                </Link>
              </div>
              <div className="border-t border-border pt-3 mt-2">
                <a href="tel:+375291050694" onClick={e => { e.preventDefault(); window.open('tel:+375291050694'); }} className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-crimson-700">
                  <Icon name="PhoneIcon" size={16} />
                  +375 29 105-06-94
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Call request modal */}
      {callFormOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setCallFormOpen(false); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-crimson-gradient px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg">Заказать звонок</h3>
                <p className="text-crimson-100 text-sm mt-0.5">Перезвоним в течение 15 минут</p>
              </div>
              <button onClick={() => setCallFormOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <Icon name="XMarkIcon" size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {callSent ? (
                <div className="flex flex-col items-center py-4 gap-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground font-semibold text-center">Заявка принята!</p>
                  <p className="text-muted-foreground text-sm text-center">Мы скоро вам перезвоним</p>
                </div>
              ) : (
                <form onSubmit={handleCallSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Ваше имя <span className="text-muted-foreground font-normal">(необязательно)</span></label>
                    <input
                      type="text"
                      value={callName}
                      onChange={e => setCallName(e.target.value)}
                      placeholder="Иван"
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-crimson-500 focus:ring-2 focus:ring-crimson-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Номер телефона <span className="text-crimson-600">*</span></label>
                    <input
                      type="tel"
                      value={callPhone}
                      onChange={e => setCallPhone(e.target.value)}
                      placeholder="+375 29 000-00-00"
                      required
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-crimson-500 focus:ring-2 focus:ring-crimson-100 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={callSending || !callPhone.trim()}
                    className="w-full bg-crimson-gradient text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-crimson"
                  >
                    {callSending ? (
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                    ) : (
                      <Icon name="PhoneIcon" size={16} />
                    )}
                    {callSending ? 'Отправляем...' : 'Перезвоните мне'}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
