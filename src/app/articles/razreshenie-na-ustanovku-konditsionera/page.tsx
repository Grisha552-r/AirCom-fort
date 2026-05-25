'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export default function RazresheniePage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
            { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
            { '@type': 'ListItem', position: 3, name: 'Нужно ли разрешение на установку кондиционера в Гомеле' },
          ],
        }) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-crimson-700">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-crimson-700">Статьи</Link>
          {' / '}
          <span>Разрешение на установку кондиционера</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Нужно ли разрешение на установку кондиционера в Гомеле
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Вопрос согласования — один из самых частых у тех, кто впервые устанавливает кондиционер в квартире.
          Одни ставят без разрешений и живут спокойно, другие получают предписания от управляющей компании.
          Разберём, когда согласование обязательно, а когда можно обойтись без него.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Частный дом vs многоквартирный дом</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-green-200 bg-green-50 rounded-xl p-4">
            <p className="font-semibold text-green-800 mb-2">Частный дом</p>
            <p className="text-green-700 text-sm">
              Разрешение не нужно. Вы устанавливаете оборудование на собственной стене.
              Единственное ограничение — соблюдение отступов от границы участка по строительным нормам.
            </p>
          </div>
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
            <p className="font-semibold text-amber-800 mb-2">Многоквартирный дом</p>
            <p className="text-amber-700 text-sm">
              Фасад — общее имущество всех жильцов. Для размещения наружного блока на фасаде
              требуется согласие управляющей компании или собрания собственников.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Где можно разместить наружный блок без согласования</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Не весь монтаж требует разрешений. Вот варианты, которые, как правило, не вызывают вопросов:
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            'На балконе или лоджии (внутри ограждения) — не фасад, разрешение чаще не нужно',
            'На стене внутри балкона — технически внутри вашей квартиры',
            'На лоджии, если блок не выступает за плоскость фасада',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-8">
          Если наружный блок крепится на внешней стене дома (фасаде) — нужно разрешение. Это относится
          к большинству стандартных установок в панельных домах, где выхода на балкон нет.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как получить согласование в Гомеле</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              step: '1',
              title: 'Обратитесь в управляющую компанию',
              text: 'Подайте заявление с указанием места размещения наружного блока. Приложите схему расположения на фасаде.',
            },
            {
              step: '2',
              title: 'Получите технические условия',
              text: 'УК выдаёт ТУ на размещение. В документе указываются допустимые габариты блока и требования к монтажу.',
            },
            {
              step: '3',
              title: 'Согласуйте с соседями (в ряде случаев)',
              text: 'Если блок будет рядом с окном или балконом соседей — лучше получить их письменное согласие.',
            },
            {
              step: '4',
              title: 'Закажите монтаж',
              text: 'После согласования мастер устанавливает кондиционер согласно выданным ТУ.',
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

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что грозит за самовольную установку</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          В Беларуси самовольная установка оборудования на фасаде многоквартирного дома является нарушением
          жилищного законодательства. Последствия:
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            'Предписание от управляющей компании о демонтаже',
            'Административный штраф (размер зависит от конкретного нарушения)',
            'Обязанность привести фасад в первоначальный вид за свой счёт',
            'Конфликты с соседями и управляющей компанией',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-crimson-500 mt-0.5">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-crimson-50 border border-crimson-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-crimson-900 mb-2">Помощь в оформлении документов</h3>
          <p className="text-crimson-800 text-sm mb-4">
            Мастера AirComfort знают местные требования и могут помочь с оформлением. Уточните при записи на монтаж.
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
              q: 'Нужно ли разрешение на установку кондиционера в квартире?',
              a: 'Если наружный блок размещается на фасаде — да, нужно согласование с управляющей компанией. Если блок ставится на балконе внутри ограждения — как правило, нет.',
            },
            {
              q: 'Куда обращаться за разрешением на установку кондиционера в Гомеле?',
              a: 'В управляющую компанию (ЖКХ) по месту жительства. Они выдают технические условия на размещение оборудования на фасаде.',
            },
            {
              q: 'Сколько времени занимает согласование?',
              a: 'Обычно 7–14 рабочих дней. В ряде случаев процесс может затянуться, если требуется общее собрание жильцов.',
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
            <Link href="/articles/soglasovanie-ustanovki" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Как согласовать установку кондиционера</p>
              <p className="text-gray-500 text-xs mt-1">Документы и юридические нюансы</p>
            </Link>
            <Link href="/articles/ustanovka-konditsionera-v-gomele" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Установка кондиционера в Гомеле</p>
              <p className="text-gray-500 text-xs mt-1">Цены и фирмы по монтажу</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
