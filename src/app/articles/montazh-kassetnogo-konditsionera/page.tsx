'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export default function MontazhKassetnogo() {
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
          <span>Монтаж кассетного кондиционера</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Монтаж кассетного кондиционера: стоимость и особенности установки
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2025 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Кассетный кондиционер — профессиональное решение для офисов, торговых залов и других
          коммерческих помещений. Он монтируется в подвесной потолок и практически не виден в интерьере.
          Но монтаж такого оборудования сложнее, чем у обычного настенного сплита, а значит, и стоит дороже.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Чем кассетный кондиционер отличается от настенного</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-crimson-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Параметр</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Кассетный</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Настенный сплит</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Место монтажа', 'Подвесной потолок', 'Стена'],
                ['Распределение воздуха', '4 направления', '1–2 направления'],
                ['Видимость в интерьере', 'Минимальная', 'Заметен на стене'],
                ['Площадь охлаждения', 'до 100 м² и более', 'до 70 м²'],
                ['Сложность монтажа', 'Высокая', 'Стандартная'],
                ['Стоимость монтажа', 'от 600 р.', 'от 400 р.'],
              ].map(([param, cassette, wall]) => (
                <tr key={param} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">{param}</td>
                  <td className="p-3 border border-gray-200">{cassette}</td>
                  <td className="p-3 border border-gray-200">{wall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Стоимость монтажа кассетного кондиционера</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Цена монтажа</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['12 000–18 000 BTU', 'до 50 м²', 'от 600 р.'],
                ['24 000–36 000 BTU', 'до 100 м²', 'от 700 р.'],
                ['48 000 BTU и выше', 'до 150 м²', 'от 900 р.'],
              ].map(([power, area, price]) => (
                <tr key={power} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200">{power}</td>
                  <td className="p-3 border border-gray-200">{area}</td>
                  <td className="p-3 border border-gray-200 font-semibold text-crimson-700">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-8 italic">
          Цена включает монтаж кассеты в потолок, подключение трассы и дренажа, пуско-наладку.
          Стоимость дренажной помпы (если нужна) уточняйте отдельно.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Этапы монтажа кассетного кондиционера</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              step: '1',
              title: 'Подготовка отверстия в потолке',
              text: 'Вырезается квадратное отверстие в панели подвесного потолка под кассету. Размер зависит от модели — обычно 600×600 или 800×800 мм.',
            },
            {
              step: '2',
              title: 'Монтаж крепёжной рамы',
              text: 'К несущим конструкциям крепится рама, на которую подвешивается внутренний блок. Это ответственный этап — от жёсткости крепления зависит вибрация и шум.',
            },
            {
              step: '3',
              title: 'Подключение трассы и дренажа',
              text: 'Прокладывается медная трасса к наружному блоку. Отдельно — дренажная линия. При невозможности самотёчного дренажа устанавливается помпа.',
            },
            {
              step: '4',
              title: 'Электрическое подключение',
              text: 'Кассетный кондиционер подключается трёхфазным кабелем (для мощных моделей) или однофазным. Подключение только к отдельному автомату.',
            },
            {
              step: '5',
              title: 'Вакуумирование и пуско-наладка',
              text: 'Система вакуумируется, проверяется герметичность, после чего кондиционер запускается и тестируется во всех режимах.',
            },
          ].map(item => (
            <div key={item.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-crimson-700 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {item.step}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-700 text-sm mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что увеличивает стоимость монтажа</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border border-gray-200 font-semibold">Фактор</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Доплата</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Дренажная помпа (принудительный слив)', 'от +80 р.'],
                ['Трасса свыше 5 м (за каждый метр)', '+50 р./м'],
                ['Высота потолков более 4 м', 'от +100 р.'],
                ['Монтаж нескольких блоков в один день', 'скидка на каждый следующий'],
              ].map(([factor, price]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200">{factor}</td>
                  <td className="p-3 border border-gray-200 font-medium text-orange-600">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-crimson-50 border border-crimson-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-crimson-900 mb-2">Нужен монтаж кассетного кондиционера?</h3>
          <p className="text-crimson-800 text-sm mb-4">
            Оставьте заявку — мастер приедет, оценит объём работ и назовёт точную стоимость.
          </p>
          <Link
            href="/services"
            className="inline-block bg-crimson-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-800 transition-colors"
          >
            Рассчитать стоимость →
          </Link>
        </div>

        <h2 className="text-2xl font-semibond text-gray-900 mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: 'Сколько стоит монтаж кассетного кондиционера в Гомеле?',
              a: 'От 600 р. за единицу мощностью 12 000–18 000 BTU. Для более мощных систем — от 700–900 р. Стоимость зависит от высоты потолков, длины трассы и необходимости дренажной помпы.',
            },
            {
              q: 'Нужен ли подвесной потолок для кассетного кондиционера?',
              a: 'Да. Кассетный блок монтируется исключительно в подвесной (натяжной или реечный) потолок. Без него установка невозможна.',
            },
            {
              q: 'Сколько времени занимает монтаж кассетного кондиционера?',
              a: 'Один блок — 4–6 часов. Это дольше, чем настенный сплит, из-за более сложной процедуры крепления и дренажа.',
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
              <p className="font-medium text-gray-900 text-sm">Цены на установку кондиционера</p>
              <p className="text-gray-500 text-xs mt-1">Монтаж настенного сплита — цены и условия</p>
            </Link>
            <Link href="/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Сколько времени занимает установка</p>
              <p className="text-gray-500 text-xs mt-1">По этапам и по типам объектов</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
