'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { CATEGORIES, Category } from '@/lib/store';
import { useProducts } from '@/lib/useStore';

export default function AdminCategories() {
  const { products } = useProducts();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', slug: '', parentId: '' });
  const [customCategories, setCustomCategories] = useState<Category[]>([]);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const allCategories = [...CATEGORIES, ...customCategories];
  const topLevel = allCategories.filter(c => !c.parentId);

  const handleAdd = () => {
    if (!form.name.trim()) return;
    const newCat: Category = {
      id: `cat-${Date.now()}`,
      name: form.name,
      slug: form.slug || form.name.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-'),
      icon: 'TagIcon',
      parentId: form.parentId || undefined,
    };
    setCustomCategories(prev => [...prev, newCat]);
    setForm({ name: '', slug: '', parentId: '' });
    setShowForm(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Категории</h1>
          <p className="text-zinc-400 text-sm mt-0.5">{allCategories.length} категорий</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-crimson-gradient text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-crimson"
        >
          <Icon name="PlusIcon" size={16} />
          Добавить
        </button>
      </div>

      {/* Categories tree */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Категория</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Слаг</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">Родитель</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Товаров</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Действия</th>
              </tr>
            </thead>
            <tbody>
              {allCategories.map(cat => {
                const productCount = products.filter(p => p.categoryId === cat.id).length;
                const parent = allCategories.find(c => c.id === cat.parentId);
                const isCustom = customCategories.some(c => c.id === cat.id);
                return (
                  <tr key={cat.id} className={`border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors ${cat.parentId ? 'pl-4' : ''}`}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        {cat.parentId && <span className="w-3 h-px bg-zinc-700 shrink-0" />}
                        <span className="text-sm text-white font-medium">{cat.name}</span>
                        {isCustom && <span className="text-xs bg-crimson-900/40 text-crimson-300 px-1.5 py-0.5 rounded-md">новая</span>}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-zinc-400 font-mono hidden sm:table-cell">{cat.slug}</td>
                    <td className="px-5 py-3 text-sm text-zinc-400 hidden md:table-cell">{parent?.name || '—'}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${productCount > 0 ? 'bg-emerald-900/40 text-emerald-300' : 'bg-zinc-800 text-zinc-500'}`}>
                        {productCount}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-2">
                        {isCustom && (
                          <button
                            onClick={() => setDeleteConfirm(cat.id)}
                            className="p-2 rounded-lg bg-zinc-800 hover:bg-red-900/50 text-zinc-400 hover:text-red-400 transition-all"
                          >
                            <Icon name="TrashIcon" size={14} />
                          </button>
                        )}
                        {!isCustom && (
                          <span className="text-xs text-zinc-600 px-2">системная</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add form */}
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setShowForm(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 z-50 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-5">Добавить категорию</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Название *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Название категории"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Слаг (URL)</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  placeholder="my-category"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Родительская категория</label>
                <select
                  value={form.parentId}
                  onChange={e => setForm(f => ({ ...f, parentId: e.target.value }))}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                >
                  <option value="">— Без родителя —</option>
                  {topLevel.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowForm(false)} className="flex-1 border border-zinc-700 text-zinc-300 py-2.5 rounded-xl font-medium hover:bg-zinc-800 transition-colors">Отмена</button>
              <button onClick={handleAdd} className="flex-1 bg-crimson-gradient text-white py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity">Добавить</button>
            </div>
          </div>
        </>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setDeleteConfirm(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 z-50 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Удалить категорию?</h3>
            <p className="text-zinc-400 text-sm mb-6">Это действие нельзя отменить.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 border border-zinc-700 text-zinc-300 py-2.5 rounded-xl font-medium hover:bg-zinc-800 transition-colors">Отмена</button>
              <button
                onClick={() => { setCustomCategories(prev => prev.filter(c => c.id !== deleteConfirm)); setDeleteConfirm(null); }}
                className="flex-1 bg-red-600 text-white py-2.5 rounded-xl font-medium hover:bg-red-700 transition-colors"
              >Удалить</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}