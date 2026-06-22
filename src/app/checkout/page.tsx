'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { useCart, useOrders } from '@/lib/useStore';
import type { Order } from '@/lib/store';
import { trackLead } from '@/lib/analytics';

export default function CheckoutPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, total, clearCart } = useCart();
  const { addOrder } = useOrders();

  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', comment: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!form.phone.trim() || !/^\+375\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Введите корректный номер (+375XXXXXXXXX)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || cart.length === 0) return;

    const id = `ORD-${Date.now().toString().slice(-6)}`;
    const order: Order = {
      id,
      createdAt: new Date().toISOString(),
      customerName: form.name,
      customerPhone: form.phone,
      customerEmail: form.email || undefined,
      items: cart.map(i => ({ productId: i.productId, productName: i.productName, quantity: i.quantity, price: i.price })),
      total,
      status: 'new',
      comment: form.comment || undefined,
    };
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: id,
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          comment: form.comment,
          items: order.items,
          total,
        }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'send-order failed');

      addOrder(order);
      trackLead('order_placed');
      clearCart();
      setOrderId(id);
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header onCartOpen={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        <main className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircleIcon" size={44} className="text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Заказ оформлен!</h1>
          <p className="text-muted-foreground mb-2">Номер заказа: <span className="font-bold text-foreground">{orderId}</span></p>
          <p className="text-muted-foreground mb-8">Наш менеджер позвонит вам в течение 15 минут для подтверждения заказа и согласования доставки или монтажа.</p>
          <div className="bg-crimson-50 rounded-2xl p-5 border border-crimson-100 mb-8 text-left">
            <div className="flex items-center gap-3">
              <Icon name="PhoneIcon" size={20} className="text-crimson-600" />
              <div>
                <p className="font-semibold text-crimson-800 text-sm">Ждите звонка менеджера</p>
                <p className="text-xs text-crimson-600">Или позвоните сами: <a href="tel:+375291050694" className="font-bold">+375 29 105-06-94</a></p>
              </div>
            </div>
          </div>
          <Link href="/" className="bg-crimson-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-crimson inline-block">
            На главную
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-crimson-700 transition-colors">Главная</Link>
          <Icon name="ChevronRightIcon" size={14} />
          <span className="text-foreground font-medium">Оформление заказа</span>
        </nav>

        <h1 className="text-2xl font-bold text-foreground mb-8">Оформление заказа</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="ShoppingCartIcon" size={48} className="mx-auto mb-4 text-zinc-300" />
            <p className="text-lg font-medium text-foreground mb-2">Корзина пуста</p>
            <Link href="/products" className="text-crimson-700 font-medium hover:underline">Перейти в каталог</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-2xl border border-border p-6">
                  <h2 className="font-bold text-lg text-foreground mb-5 flex items-center gap-2">
                    <Icon name="UserIcon" size={20} className="text-crimson-600" />
                    Контактные данные
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1.5">Имя и фамилия *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Иван Петров"
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-border focus:border-crimson-400 focus:ring-crimson-50'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1.5">Телефон *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="+375291234567"
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-border focus:border-crimson-400 focus:ring-crimson-50'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1.5">Email (необязательно)</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="email@example.com"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1.5">Адрес установки</label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                        placeholder="г. Гомель, ул. Примерная, д. 1, кв. 1"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1.5">Комментарий</label>
                      <textarea
                        value={form.comment}
                        onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                        placeholder="Удобное время установки, дополнительные пожелания..."
                        rows={3}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-50 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                {submitError && (
                  <p className="text-sm text-crimson-600 bg-crimson-50 rounded-lg px-3 py-2 text-center">
                    Не удалось отправить заказ. Позвоните нам: <a href="tel:+375291050694" className="font-semibold underline">+375 29 105-06-94</a>
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-crimson-gradient text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-crimson flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon name="CheckIcon" size={20} />
                  {submitting ? 'Отправляем...' : 'Оформить заказ'}
                </button>
                <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных</p>
              </form>
            </div>

            {/* Order summary */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl border border-border p-5 sticky top-24">
                <h2 className="font-bold text-lg text-foreground mb-4">Ваш заказ</h2>
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.productId} className="flex gap-3 items-center">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-50 shrink-0 border border-border">
                        <AppImage
                          src={item.image || '/assets/images/no_image.png'}
                          alt={item.productName}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground line-clamp-2 leading-tight">{item.productName}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.quantity} × {item.price.toLocaleString('ru-RU')} р.</p>
                      </div>
                      <p className="text-sm font-bold text-foreground shrink-0">{(item.price * item.quantity).toLocaleString('ru-RU')} р.</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Товаров: {cart.reduce((s, i) => s + i.quantity, 0)}</span>
                    <span className="font-medium">{total.toLocaleString('ru-RU')} р.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Доставка:</span>
                    <span className="text-emerald-600 font-semibold">Уточним при звонке</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Итого:</span>
                    <span className="text-crimson-700">{total.toLocaleString('ru-RU')} р.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}