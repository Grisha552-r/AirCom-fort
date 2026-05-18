'use client';
import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/app/admin/components/AdminSidebar';
import AdminDashboard from '@/app/admin/components/AdminDashboard';
import AdminProducts from '@/app/admin/components/AdminProducts';
import AdminOrders from '@/app/admin/components/AdminOrders';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

export type AdminTab = 'dashboard' | 'products' | 'orders';

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('/api/admin/auth')
      .then(r => r.json())
      .then(d => setAuthed(d.ok))
      .catch(() => setAuthed(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.ok) {
        setAuthed(true);
        setPassword('');
      } else {
        setError('Неверный пароль');
      }
    } catch {
      setError('Ошибка подключения');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setAuthed(false);
  };

  if (authed === null) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-crimson-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4">
              <AppImage
                src="/assets/images/Image__1_-1777225844930.png"
                alt="AirComfort логотип"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">AirComfort Admin</h1>
            <p className="text-zinc-400 text-sm mt-1">Панель управления</p>
          </div>
          <form onSubmit={handleLogin} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 space-y-4">
            <div>
              <label className="text-sm font-medium text-zinc-300 block mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                placeholder="Введите пароль"
                autoComplete="current-password"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-crimson-500 focus:ring-2 focus:ring-crimson-900"
              />
              {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-crimson-gradient text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {loading ? 'Проверка...' : 'Войти'}
            </button>
          </form>
          <div className="text-center mt-4">
            <Link href="/" className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors">← Вернуться на сайт</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-zinc-900 border-b border-zinc-800 px-4 md:px-6 h-14 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors">
              <Icon name="Bars3Icon" size={20} className="text-white" />
            </button>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-7 h-7">
                <AppImage src="/assets/images/Image__1_-1777225844930.png" alt="AirComfort" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-white font-bold text-sm">AirComfort Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors">
              <Icon name="ArrowTopRightOnSquareIcon" size={14} />
              Сайт
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-red-400 text-xs font-medium transition-colors"
            >
              <Icon name="ArrowRightOnRectangleIcon" size={14} />
              Выйти
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {activeTab === 'dashboard' && <AdminDashboard onNavigate={setActiveTab} />}
          {activeTab === 'products' && <AdminProducts />}
          {activeTab === 'orders' && <AdminOrders />}
        </main>
      </div>
    </div>
  );
}
