'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import { AdminTab } from '@/app/admin/page';
import type { Product, Order } from '@/lib/store';

interface AdminDashboardProps {
  onNavigate: (tab: AdminTab) => void;
}

const STATUS_LABELS: Record<string, string> = {
  new: 'Новый',
  processing: 'В обработке',
  ready: 'Готов к выдаче',
  completed: 'Выполнен',
  cancelled: 'Отменён',
};

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-900/40 text-blue-300',
  processing: 'bg-amber-900/40 text-amber-300',
  ready: 'bg-emerald-900/40 text-emerald-300',
  completed: 'bg-zinc-700 text-zinc-300',
  cancelled: 'bg-red-900/40 text-red-300',
};

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [pRes, oRes] = await Promise.all([
        fetch('/api/admin/products'),
        fetch('/api/admin/orders'),
      ]);
      const [p, o] = await Promise.all([pRes.json(), oRes.json()]);
      setProducts(p);
      setOrders(o);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const newOrders = orders.filter(o => o.status === 'new').length;
  const totalRevenue = orders.filter(o => o.status === 'completed').reduce((s, o) => s + o.total, 0);

  const STATS = [
    { label: 'Товаров', value: loading ? '...' : products.length, icon: 'TagIcon', color: 'bg-blue-900/40 text-blue-300', tab: 'products' as AdminTab },
    { label: 'Заказов', value: loading ? '...' : orders.length, icon: 'ShoppingBagIcon', color: 'bg-amber-900/40 text-amber-300', tab: 'orders' as AdminTab },
    { label: 'Новых заказов', value: loading ? '...' : newOrders, icon: 'BellIcon', color: 'bg-crimson-900/40 text-red-300', tab: 'orders' as AdminTab },
    { label: 'Выручка (завершённые)', value: loading ? '...' : `${totalRevenue.toLocaleString('ru-RU')} р.`, icon: 'CurrencyDollarIcon', color: 'bg-emerald-900/40 text-emerald-300', tab: 'orders' as AdminTab },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Обзор</h1>
          <p className="text-zinc-400 text-sm mt-1">Сводная статистика магазина AirComfort</p>
        </div>
        <button onClick={load} className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-lg transition-all">
          <Icon name="ArrowPathIcon" size={13} />
          Обновить
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(stat => (
          <button
            key={stat.label}
            onClick={() => onNavigate(stat.tab)}
            className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-left hover:border-zinc-700 transition-colors group"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
              <Icon name={stat.icon as 'TagIcon'} size={20} />
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{stat.label}</p>
          </button>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <h2 className="font-bold text-white">Последние заказы</h2>
          <button onClick={() => onNavigate('orders')} className="text-xs text-zinc-400 hover:text-white transition-colors">
            Все заказы →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">№</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Клиент</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Сумма</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Статус</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map(order => (
                <tr key={order.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                  <td className="px-5 py-3 text-sm text-zinc-300 font-mono">{order.id}</td>
                  <td className="px-5 py-3">
                    <p className="text-sm text-white font-medium">{order.customerName}</p>
                    <p className="text-xs text-zinc-500">{order.customerPhone}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-white font-semibold hidden sm:table-cell">{order.total.toLocaleString('ru-RU')} р.</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[order.status]}`}>
                      {STATUS_LABELS[order.status]}
                    </span>
                  </td>
                </tr>
              ))}
              {!loading && orders.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-10 text-center text-zinc-500 text-sm">Заказов пока нет</td>
                </tr>
              )}
              {loading && (
                <tr>
                  <td colSpan={4} className="px-5 py-10 text-center text-zinc-500 text-sm">Загрузка...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Добавить товар', icon: 'PlusCircleIcon', tab: 'products' as AdminTab },
          { label: 'Управление заказами', icon: 'ClipboardDocumentListIcon', tab: 'orders' as AdminTab },
        ].map(action => (
          <button
            key={action.label}
            onClick={() => onNavigate(action.tab)}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3 hover:border-crimson-700 hover:bg-zinc-800/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-crimson-900/30 flex items-center justify-center group-hover:bg-crimson-900/50 transition-colors">
              <Icon name={action.icon as 'PlusCircleIcon'} size={20} className="text-crimson-400" />
            </div>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{action.label}</span>
            <Icon name="ArrowRightIcon" size={14} className="ml-auto text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
