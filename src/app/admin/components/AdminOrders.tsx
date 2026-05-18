'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import { Order } from '@/lib/store';

const STATUS_LABELS: Record<Order['status'], string> = {
  new: 'Новый',
  processing: 'В обработке',
  ready: 'Готов к выдаче',
  completed: 'Выполнен',
  cancelled: 'Отменён',
};

const STATUS_COLORS: Record<Order['status'], string> = {
  new: 'bg-blue-900/40 text-blue-300 border-blue-800',
  processing: 'bg-amber-900/40 text-amber-300 border-amber-800',
  ready: 'bg-emerald-900/40 text-emerald-300 border-emerald-800',
  completed: 'bg-zinc-700 text-zinc-300 border-zinc-600',
  cancelled: 'bg-red-900/40 text-red-300 border-red-800',
};

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<Order['status'] | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/orders');
      const data = await res.json();
      setOrders(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleStatusChange = async (id: string, status: Order['status']) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/orders/${id}`, { method: 'DELETE' });
    setDeleteConfirm(null);
    setExpandedId(null);
    setOrders(prev => prev.filter(o => o.id !== id));
  };

  const filtered = filterStatus === 'all' ? orders : orders.filter(o => o.status === filterStatus);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-white">Заказы</h1>
        <p className="text-zinc-400 text-sm mt-0.5">{orders.length} заказов всего</p>
      </div>

      {/* Status filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {(['all', 'new', 'processing', 'ready', 'completed', 'cancelled'] as const).map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filterStatus === status
                ? 'bg-crimson-700 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            {status === 'all' ? 'Все' : STATUS_LABELS[status]}
            {status !== 'all' && (
              <span className="ml-1.5 opacity-70">({orders.filter(o => o.status === status).length})</span>
            )}
          </button>
        ))}
        <button onClick={load} className="shrink-0 ml-auto px-3 py-2 rounded-xl text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-all flex items-center gap-1">
          <Icon name="ArrowPathIcon" size={13} />
          Обновить
        </button>
      </div>

      {/* Orders list */}
      {loading ? (
        <div className="py-16 text-center text-zinc-500 text-sm">Загрузка заказов...</div>
      ) : (
        <div className="space-y-3">
          {filtered.map(order => (
            <div key={order.id} className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
              <div
                className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-zinc-800/40 transition-colors"
                onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div>
                    <p className="text-white font-bold font-mono text-sm">{order.id}</p>
                    <p className="text-zinc-500 text-xs">{new Date(order.createdAt).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white text-sm font-medium">{order.customerName}</p>
                    <p className="text-zinc-500 text-xs">{order.customerPhone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-white font-bold text-sm hidden sm:block">{order.total.toLocaleString('ru-RU')} р.</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLORS[order.status]}`}>
                    {STATUS_LABELS[order.status]}
                  </span>
                  <Icon name={expandedId === order.id ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-zinc-500" />
                </div>
              </div>

              {expandedId === order.id && (
                <div className="border-t border-zinc-800 px-5 py-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Товары</p>
                    <div className="space-y-2">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-zinc-300">{item.productName}</span>
                          <span className="text-zinc-400">{item.quantity} × {item.price.toLocaleString('ru-RU')} р. = <span className="text-white font-semibold">{(item.quantity * item.price).toLocaleString('ru-RU')} р.</span></span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-zinc-800 rounded-xl p-3">
                      <p className="text-xs text-zinc-500 mb-1">Клиент</p>
                      <p className="text-white text-sm font-medium">{order.customerName}</p>
                      <a href={`tel:${order.customerPhone}`} className="text-crimson-400 text-sm hover:underline">{order.customerPhone}</a>
                      {order.customerEmail && <p className="text-zinc-400 text-xs mt-0.5">{order.customerEmail}</p>}
                    </div>
                    {order.comment && (
                      <div className="bg-zinc-800 rounded-xl p-3">
                        <p className="text-xs text-zinc-500 mb-1">Комментарий</p>
                        <p className="text-zinc-300 text-sm">{order.comment}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Изменить статус</p>
                    <div className="flex gap-2 flex-wrap">
                      {(Object.keys(STATUS_LABELS) as Order['status'][]).map(status => (
                        <button
                          key={status}
                          onClick={() => handleStatusChange(order.id, status)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                            order.status === status
                              ? STATUS_COLORS[status]
                              : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                          }`}
                        >
                          {STATUS_LABELS[status]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setDeleteConfirm(order.id)}
                      className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-red-400 transition-colors"
                    >
                      <Icon name="TrashIcon" size={14} />
                      Удалить заказ
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-zinc-500">
              <Icon name="ShoppingBagIcon" size={40} className="mx-auto mb-3 text-zinc-700" />
              <p>Заказов не найдено</p>
            </div>
          )}
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setDeleteConfirm(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 z-50 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Удалить заказ?</h3>
            <p className="text-zinc-400 text-sm mb-6">Это действие нельзя отменить.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 border border-zinc-700 text-zinc-300 py-2.5 rounded-xl font-medium hover:bg-zinc-800 transition-colors">Отмена</button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-600 text-white py-2.5 rounded-xl font-medium hover:bg-red-700 transition-colors"
              >
                Удалить
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
