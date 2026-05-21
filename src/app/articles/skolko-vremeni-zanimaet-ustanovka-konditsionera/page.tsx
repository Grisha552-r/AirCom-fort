'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export default function SkolkoVremeni() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-crimson-700">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-crimson-700">Статьи</Link>
          {' / '}
          <span>Сколько времени занимает установка</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Сколько времени занимает установка кондиционера: от замера до запуска
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2025 · Время чтения: 4 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Один из самых частых вопросов перед заказом монтажа — нужно ли брать выходной или достаточно
          освободить пару часов? Отвечаем чётко: стандартная установка одного кондиционера занимает 2–4 часа.
          Но есть нюансы — разбираем по этапам.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Этапы монтажа и время на каждый</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-crimson-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Этап</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Время</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Замер и разметка', '10–20 мин'],
                ['Крепление внутреннего блока', '20–30 мин'],
                ['Сверление отверстия в стене', '10–20 мин'],
                ['Крепление наружного блока', '20–40 мин'],
                ['Прокладка медной трассы', '30–60 мин'],
                ['Подключение электрики и дренажа', '20–30 мин'],
                ['Вакуумирование системы', '30–40 мин'],
                ['Пуско-наладка и проверка', '20–30 мин'],
              ].map(([stage, time]) => (
                <tr key={stage} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200">{stage}</td>
                  <td className="p-3 border border-gray-200 font-medium text-crimson-700">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что увеличивает время монтажа</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Штробление стен',
              text: 'Если трубки нужно спрятать в стену — добавляет 1–2 часа. Делается при капитальном ремонте или в домах с требованиями к внешнему виду.',
            },
            {
              title: 'Длинная трасса',
              text: 'Каждые 5 м сверх базовых добавляют 20–30 минут работы. Трасса длиннее 10 м встречается редко, но бывает при нестандартных планировках.',
            },
            {
              title: 'Высотные работы',
              text: 'На 5–9 этаже мастер работает с люлькой или страховкой — подготовка занимает дополнительное время.',
            },
            {
              title: 'Несколько кондиционеров',
              text: 'Каждый дополнительный блок — ещё 2–4 часа. При установке 2–3 систем в квартире лучше закладывать полный рабочий день.',
            },
          ].map(item => (
            <div key={item.title} className="border-l-4 border-crimson-200 pl-4">
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-gray-700 text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Время установки по типу объекта</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border border-gray-200 font-semibold">Объект</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Время</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Квартира, 1 кондиционер', '2–4 ч', 'Стандартный монтаж'],
                ['Квартира, 2 кондиционера', '4–7 ч', 'Два отдельных монтажа'],
                ['Частный дом (1 этаж)', '3–5 ч', 'Трасса через стену или крышу'],
                ['Офис, 1 кондиционер', '2–4 ч', 'Подвесной или настенный блок'],
                ['Сложный монтаж (штробление)', '5–8 ч', 'Скрытая прокладка трассы'],
              ].map(([obj, time, note]) => (
                <tr key={obj} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200">{obj}</td>
                  <td className="p-3 border border-gray-200 font-medium text-crimson-700">{time}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Нужно ли присутствовать дома</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Да — кто-то должен быть дома на всё время работ. Мастеру нужен доступ к щитку, к стене
          и возможность проверить наружный блок снаружи. Зато вы не ждёте «с 9 до 18» — мы согласовываем
          конкретный промежуток в 2–3 часа, и мастер приезжает в это окно.
        </p>

        <div className="bg-crimson-50 border border-crimson-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-crimson-900 mb-2">Запишитесь на монтаж</h3>
          <p className="text-crimson-800 text-sm mb-4">
            Мастер приедет в удобное для вас время. Работы занимают 2–4 часа, всё включено.
          </p>
          <Link
            href="/services"
            className="inline-block bg-crimson-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-800 transition-colors"
          >
            Записаться на монтаж →
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: 'Сколько времени занимает установка кондиционера?',
              a: 'Стандартный монтаж одного кондиционера — 2–4 часа. Штробление, длинная трасса или несколько блоков могут увеличить время до 6–8 часов.',
            },
            {
              q: 'Можно ли установить кондиционер за один день?',
              a: 'Да. Один–два блока устанавливаются за один визит мастера. Три и более — лучше разбить на два дня.',
            },
            {
              q: 'Как долго длится вакуумирование?',
              a: 'Вакуумирование занимает 30–40 минут. Это обязательный этап — без него система быстро выйдет из строя.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50">{q}</summary>
              <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Читайте также</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Сколько стоит установка кондиционера</p>
              <p className="text-gray-500 text-xs mt-1">Цены и что входит в стоимость</p>
            </Link>
            <Link href="/articles/razreshenie-na-ustanovku-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Нужно ли разрешение на установку</p>
              <p className="text-gray-500 text-xs mt-1">Документы и согласования</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
