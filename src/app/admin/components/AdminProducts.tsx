'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { Product, CATEGORIES } from '@/lib/store';

const EMPTY_PRODUCT: Omit<Product, 'id'> = {
  name: '',
  slug: '',
  categoryId: 'split-electrolux',
  price: 0,
  originalPrice: undefined,
  discount: undefined,
  rating: 5,
  reviewCount: 0,
  images: [''],
  description: '',
  characteristics: {},
  inStock: true,
  isNew: false,
  isFeatured: false,
  brand: '',
  tags: [],
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Product, 'id'>>(EMPTY_PRODUCT);
  const [charKey, setCharKey] = useState('');
  const [charVal, setCharVal] = useState('');
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditId(null);
    setForm(EMPTY_PRODUCT);
    setShowForm(true);
  };

  const openEdit = (product: Product) => {
    setEditId(product.id);
    setForm({
      name: product.name,
      slug: product.slug,
      categoryId: product.categoryId,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      rating: product.rating,
      reviewCount: product.reviewCount,
      images: product.images.length > 0 ? product.images : [''],
      description: product.description,
      characteristics: { ...product.characteristics },
      inStock: product.inStock,
      isNew: product.isNew,
      isFeatured: product.isFeatured,
      brand: product.brand,
      tags: product.tags,
    });
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!form.name.trim() || !form.brand.trim()) return;
    setSaving(true);
    const slug = form.name.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').slice(0, 60);
    try {
      if (editId) {
        await fetch(`/api/admin/products/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, slug }),
        });
      } else {
        const id = `p-${Date.now()}`;
        await fetch('/api/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, slug, id }),
        });
      }
      setShowForm(false);
      await load();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
    setDeleteConfirm(null);
    await load();
  };

  const handleAddChar = () => {
    if (!charKey.trim() || !charVal.trim()) return;
    setForm(f => ({ ...f, characteristics: { ...f.characteristics, [charKey]: charVal } }));
    setCharKey('');
    setCharVal('');
  };

  const handleRemoveChar = (key: string) => {
    setForm(f => {
      const chars = { ...f.characteristics };
      delete chars[key];
      return { ...f, characteristics: chars };
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-white">Товары</h1>
          <p className="text-zinc-400 text-sm mt-0.5">{products.length} позиций в каталоге</p>
        </div>
        <button
          onClick={openAdd}
          className="bg-crimson-gradient text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-crimson"
        >
          <Icon name="PlusIcon" size={16} />
          Добавить товар
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Поиск по названию или бренду..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-crimson-600"
        />
      </div>

      {/* Table */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-zinc-500 text-sm">Загрузка товаров...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Товар</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">Категория</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Цена</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Статус</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Действия</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(product => {
                  const cat = CATEGORIES.find(c => c.id === product.categoryId);
                  return (
                    <tr key={product.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                            {product.images[0] && (
                              <AppImage
                                src={product.images[0]}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium line-clamp-1">{product.name}</p>
                            <p className="text-xs text-zinc-500">{product.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-zinc-400 hidden md:table-cell">{cat?.name || product.categoryId}</td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-white font-semibold">{product.price.toLocaleString('ru-RU')} р.</p>
                        {product.discount && <p className="text-xs text-crimson-400">-{product.discount}%</p>}
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${product.inStock ? 'bg-emerald-900/40 text-emerald-300' : 'bg-red-900/40 text-red-300'}`}>
                          {product.inStock ? 'В наличии' : 'Нет'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEdit(product)}
                            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
                          >
                            <Icon name="PencilIcon" size={14} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(product.id)}
                            className="p-2 rounded-lg bg-zinc-800 hover:bg-red-900/50 text-zinc-400 hover:text-red-400 transition-all"
                          >
                            <Icon name="TrashIcon" size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && !loading && (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-zinc-500 text-sm">
                      {search ? 'Товары не найдены' : 'Нет товаров'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete confirm modal */}
      {deleteConfirm && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setDeleteConfirm(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 z-50 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Удалить товар?</h3>
            <p className="text-zinc-400 text-sm mb-6">Это действие нельзя отменить.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 border border-zinc-700 text-zinc-300 py-2.5 rounded-xl font-medium hover:bg-zinc-800 transition-colors">
                Отмена
              </button>
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

      {/* Product form modal */}
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black/70 z-50" onClick={() => setShowForm(false)} />
          <div className="fixed top-0 right-0 h-full w-full max-w-xl bg-zinc-900 border-l border-zinc-800 z-50 overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 px-5 py-4 flex items-center justify-between">
              <h2 className="text-white font-bold text-lg">{editId ? 'Редактировать товар' : 'Добавить товар'}</h2>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-zinc-800 transition-colors">
                <Icon name="XMarkIcon" size={20} className="text-zinc-400" />
              </button>
            </div>

            <div className="p-5 space-y-5">
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Название *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Название товара"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Категория</label>
                  <select
                    value={form.categoryId}
                    onChange={e => setForm(f => ({ ...f, categoryId: e.target.value }))}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Бренд *</label>
                  <input
                    type="text"
                    value={form.brand}
                    onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
                    placeholder="Electrolux, Ballu..."
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Цена (р.) *</label>
                  <input
                    type="number"
                    value={form.price || ''}
                    onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Старая цена</label>
                  <input
                    type="number"
                    value={form.originalPrice || ''}
                    onChange={e => setForm(f => ({ ...f, originalPrice: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Скидка %</label>
                  <input
                    type="number"
                    value={form.discount || ''}
                    onChange={e => setForm(f => ({ ...f, discount: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">URL изображений</label>
                <div className="space-y-2">
                  {form.images.map((img, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        type="text"
                        value={img}
                        onChange={e => {
                          const imgs = [...form.images];
                          imgs[i] = e.target.value;
                          setForm(f => ({ ...f, images: imgs }));
                        }}
                        placeholder="https://..."
                        className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-crimson-500"
                      />
                      {form.images.length > 1 && (
                        <button
                          onClick={() => setForm(f => ({ ...f, images: f.images.filter((_, idx) => idx !== i) }))}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-red-900/40 text-zinc-400 hover:text-red-400 transition-all"
                        >
                          <Icon name="XMarkIcon" size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setForm(f => ({ ...f, images: [...f.images, ''] }))}
                    className="text-xs text-crimson-400 hover:text-crimson-300 flex items-center gap-1 transition-colors"
                  >
                    <Icon name="PlusIcon" size={12} />
                    Добавить фото
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Описание</label>
                <textarea
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500 resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Характеристики</label>
                <div className="space-y-2 mb-3">
                  {Object.entries(form.characteristics).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-2 bg-zinc-800 rounded-xl px-3 py-2">
                      <span className="text-xs text-zinc-400">{key}:</span>
                      <span className="text-xs text-white flex-1">{val}</span>
                      <button onClick={() => handleRemoveChar(key)} className="text-zinc-500 hover:text-red-400 transition-colors">
                        <Icon name="XMarkIcon" size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={charKey}
                    onChange={e => setCharKey(e.target.value)}
                    placeholder="Параметр"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                  <input
                    type="text"
                    value={charVal}
                    onChange={e => setCharVal(e.target.value)}
                    placeholder="Значение"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                  <button onClick={handleAddChar} className="px-3 py-2 bg-crimson-700 text-white rounded-xl hover:bg-crimson-800 transition-colors text-sm font-medium">
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'inStock', label: 'В наличии' },
                  { key: 'isNew', label: 'Новинка' },
                  { key: 'isFeatured', label: 'Рекомендуем' },
                ].map(toggle => (
                  <label key={toggle.key} className="flex items-center gap-2 cursor-pointer bg-zinc-800 rounded-xl px-3 py-2.5">
                    <div
                      onClick={() => setForm(f => ({ ...f, [toggle.key]: !f[toggle.key as keyof typeof f] }))}
                      className={`w-9 h-5 rounded-full transition-colors relative ${form[toggle.key as keyof typeof form] ? 'bg-crimson-600' : 'bg-zinc-600'}`}
                    >
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${form[toggle.key as keyof typeof form] ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </div>
                    <span className="text-xs text-zinc-300">{toggle.label}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 border border-zinc-700 text-zinc-300 py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors"
                >
                  Отмена
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 bg-crimson-gradient text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-crimson disabled:opacity-60"
                >
                  {saving ? 'Сохранение...' : editId ? 'Сохранить' : 'Добавить'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
