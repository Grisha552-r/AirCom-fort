'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/lib/useStore';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Icon name="ShoppingCartIcon" size={20} className="text-crimson-700" />
            <h2 className="font-semibold text-lg">Корзина</h2>
            {cart.length > 0 && (
              <span className="bg-crimson-100 text-crimson-700 text-xs font-bold px-2 py-0.5 rounded-full">{cart.length}</span>
            )}
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Icon name="XMarkIcon" size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <Icon name="ShoppingCartIcon" size={36} className="text-muted-foreground" />
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">Корзина пуста</p>
              <p className="text-sm text-muted-foreground mb-6">Добавьте товары из каталога</p>
              <button onClick={onClose} className="bg-crimson-gradient text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition-opacity">
                Перейти в каталог
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.productId} className="flex gap-3 p-3 rounded-xl border border-border hover:border-crimson-200 transition-colors group">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                  <AppImage
                    src={item.image || '/assets/images/no_image.png'}
                    alt={item.productName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-sm font-medium text-foreground line-clamp-2 leading-tight break-words">{item.productName}</p>
                  <p className="text-crimson-700 font-bold mt-1">{item.price.toLocaleString('ru-RU')} р.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg border border-border flex items-center justify-center hover:border-crimson-400 transition-colors text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg border border-border flex items-center justify-center hover:border-crimson-400 transition-colors text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors self-start"
                >
                  <Icon name="TrashIcon" size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-border px-5 py-4 space-y-3 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Итого:</span>
              <span className="text-xl font-bold text-foreground">{total.toLocaleString('ru-RU')} р.</span>
            </div>
            <div className="bg-crimson-50 rounded-xl p-3 flex items-start gap-2">
              <Icon name="TruckIcon" size={16} className="text-crimson-600 mt-0.5 shrink-0" />
              <p className="text-xs text-crimson-800">Только самовывоз со склада. Адрес уточняйте по телефону.</p>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full bg-crimson-gradient text-white py-3 rounded-xl font-semibold text-center block hover:opacity-90 transition-opacity shadow-crimson"
            >
              Оформить заказ
            </Link>
            <button
              onClick={clearCart}
              className="w-full text-sm text-muted-foreground hover:text-red-500 transition-colors py-1"
            >
              Очистить корзину
            </button>
          </div>
        )}
      </div>
    </>
  );
}