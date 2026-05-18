'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { AdminTab } from '@/app/admin/page';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const NAV_ITEMS: { id: AdminTab; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Обзор', icon: 'ChartBarIcon' },
  { id: 'products', label: 'Товары', icon: 'TagIcon' },
  { id: 'orders', label: 'Заказы', icon: 'ShoppingBagIcon' },
];

export default function AdminSidebar({ activeTab, onTabChange, open, onClose, onLogout }: AdminSidebarProps) {
  const [showPwModal, setShowPwModal] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [pwStatus, setPwStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [pwError, setPwError] = useState('');

  const openModal = () => {
    setCurrentPw(''); setNewPw(''); setConfirmPw('');
    setPwStatus('idle'); setPwError('');
    setShowPwModal(true);
  };

  const handleChangePw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPw !== confirmPw) { setPwError('Пароли не совпадают'); return; }
    if (newPw.length < 6) { setPwError('Минимум 6 символов'); return; }
    setPwStatus('loading'); setPwError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: currentPw, newPassword: newPw }),
      });
      const data = await res.json();
      if (data.ok) {
        setPwStatus('ok');
        setTimeout(() => setShowPwModal(false), 1500);
      } else {
        setPwError(data.error || 'Ошибка');
        setPwStatus('error');
      }
    } catch {
      setPwError('Ошибка подключения');
      setPwStatus('error');
    }
  };

  return (
    <>
      {/* Backdrop mobile */}
      {open && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={onClose} />}

      <aside className={`fixed md:sticky top-0 left-0 h-screen w-56 bg-zinc-900 border-r border-zinc-800 flex flex-col z-50 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-5 border-b border-zinc-800">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Меню</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { onTabChange(item.id); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                activeTab === item.id
                  ? 'bg-crimson-700 text-white shadow-crimson'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Icon name={item.icon as 'TagIcon'} size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-zinc-800 space-y-1">
          <button
            onClick={openModal}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-150"
          >
            <Icon name="KeyIcon" size={18} />
            Сменить пароль
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-all duration-150"
          >
            <Icon name="ArrowRightOnRectangleIcon" size={18} />
            Выйти
          </button>
        </div>
      </aside>

      {/* Change password modal */}
      {showPwModal && (
        <>
          <div className="fixed inset-0 bg-black/70 z-[60]" onClick={() => setShowPwModal(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 z-[60] w-full max-w-sm shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Смена пароля</h3>
              <button onClick={() => setShowPwModal(false)} className="p-1.5 rounded-lg hover:bg-zinc-800 transition-colors">
                <Icon name="XMarkIcon" size={18} className="text-zinc-400" />
              </button>
            </div>

            {pwStatus === 'ok' ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center mx-auto mb-3">
                  <Icon name="CheckIcon" size={24} className="text-emerald-400" />
                </div>
                <p className="text-white font-semibold">Пароль изменён</p>
              </div>
            ) : (
              <form onSubmit={handleChangePw} className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Текущий пароль</label>
                  <input
                    type="password"
                    value={currentPw}
                    onChange={e => setCurrentPw(e.target.value)}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Новый пароль</label>
                  <input
                    type="password"
                    value={newPw}
                    onChange={e => setNewPw(e.target.value)}
                    required
                    minLength={6}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1.5">Повторите пароль</label>
                  <input
                    type="password"
                    value={confirmPw}
                    onChange={e => setConfirmPw(e.target.value)}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-crimson-500"
                  />
                </div>
                {pwError && <p className="text-red-400 text-xs">{pwError}</p>}
                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowPwModal(false)}
                    className="flex-1 border border-zinc-700 text-zinc-300 py-2.5 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    disabled={pwStatus === 'loading'}
                    className="flex-1 bg-crimson-gradient text-white py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {pwStatus === 'loading' ? 'Сохранение...' : 'Сохранить'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
}
