'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export default function KonditsionerPodKlyuch() {
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
            { '@type': 'ListItem', position: 3, name: 'Кондиционер под ключ в Гомеле: цены и что входит в пакет' },
          ],
        }) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-crimson-700">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-crimson-700">Статьи</Link>
          {' / '}
          <span>Кондиционер под ключ</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Кондиционер под ключ в Гомеле: цены и что входит в пакет
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          «Под ключ» — значит вы делаете один заказ и получаете готовую работающую систему.
          Не нужно искать монтажников отдельно, вести переговоры с двумя компаниями или беспокоиться
          о гарантии. Рассказываем, что реально входит в пакет и сколько это стоит в Гомеле.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в «кондиционер под ключ»</h2>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            'Подбор модели кондиционера под вашу площадь и бюджет',
            'Доставка оборудования к месту монтажа',
            'Установка внутреннего блока на стену',
            'Крепление наружного блока на кронштейны',
            'Прокладка медной трассы (до 5 м)',
            'Подключение электрокабеля от щитка',
            'Монтаж дренажного шланга',
            'Вакуумирование системы',
            'Пуско-наладка и проверка всех режимов',
            'Инструктаж по эксплуатации',
            'Гарантия на монтаж 1 год',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на кондиционер с установкой под ключ</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-crimson-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Комплект</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Цена «под ключ»</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Базовый (on/off)', 'до 25 м²', 'от 790 р.'],
                ['Стандарт (инвертор)', 'до 35 м²', 'от 1 050 р.'],
                ['Комфорт (инвертор + wifi)', 'до 35 м²', 'от 1 200 р.'],
                ['Мощный инвертор', 'до 50 м²', 'от 1 350 р.'],
              ].map(([set, area, price]) => (
                <tr key={set} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">{set}</td>
                  <td className="p-3 border border-gray-200">{area}</td>
                  <td className="p-3 border border-gray-200 font-semibold text-crimson-700">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-8 italic">
          Цены указаны с монтажом трассы до 5 м. Точная стоимость зависит от конкретной модели и условий монтажа.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Климатические системы под ключ — когда это выгодно</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Покупать кондиционер и заказывать монтаж отдельно — распространённая ошибка. Вот почему пакет «под ключ» выгоднее:
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Единая гарантия',
              text: 'Один поставщик несёт ответственность и за оборудование, и за монтаж. Не нужно доказывать, чья вина при поломке.',
            },
            {
              title: 'Один выезд',
              text: 'Кондиционер привозят и устанавливают за один визит. Экономия времени и нервов.',
            },
            {
              title: 'Правильный подбор',
              text: 'Мастер с опытом знает, какую модель лучше взять для вашего помещения — с учётом шума, потребления и надёжности.',
            },
            {
              title: 'Цена без сюрпризов',
              text: 'Вы заранее знаете итоговую сумму. Нет ситуации «купил технику, а монтажник попросил ещё столько же».',
            },
          ].map(item => (
            <div key={item.title} className="border-l-4 border-crimson-200 pl-4">
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-gray-700 text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что не входит в стандартный пакет</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          За эти работы может понадобиться доплата:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border border-gray-200 font-semibold">Работа</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Доплата</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Трасса свыше 5 м (за каждый доп. метр)', '+50 р./м'],
                ['Монтаж через балкон или лоджию', '+50 р.'],
                ['Работы выше 5 этажа', 'от +100 р.'],
                ['Штробление стен', 'от +80 р.'],
              ].map(([work, price]) => (
                <tr key={work} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200">{work}</td>
                  <td className="p-3 border border-gray-200 font-medium text-orange-600">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-crimson-50 border border-crimson-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-crimson-900 mb-2">Выберите кондиционер с установкой</h3>
          <p className="text-crimson-800 text-sm mb-4">
            В каталоге AirComfort — Electrolux, Ballu, Haier, LG, Mitsudai. Мастер установит за один визит.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/split-systems"
              className="inline-block bg-crimson-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-800 transition-colors"
            >
              Выбрать кондиционер →
            </Link>
            <Link
              href="/services"
              className="inline-block border border-crimson-300 text-crimson-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-50 transition-colors"
            >
              Рассчитать стоимость
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: 'Что такое кондиционер под ключ?',
              a: 'Это комплексная услуга: оборудование + доставка + монтаж + гарантия. Вы платите одну сумму и получаете готовую работающую систему.',
            },
            {
              q: 'Сколько стоит кондиционер под ключ в Гомеле?',
              a: 'От 790 р. за базовую модель с монтажом трассы 5 м. Инверторные модели с установкой — от 1050 р.',
            },
            {
              q: 'Сколько времени занимает установка кондиционера под ключ?',
              a: 'Один визит мастера длится 2–4 часа. В этот период выполняется весь монтаж — от крепления блоков до пуско-наладки.',
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
            <Link href="/konditsionery-gomel" className="block p-4 border border-crimson-200 rounded-lg bg-crimson-50 hover:bg-crimson-100 transition-colors">
              <p className="font-medium text-crimson-800 text-sm">Кондиционеры в Гомеле от 1 290 р.</p>
              <p className="text-crimson-600 text-xs mt-1">300+ моделей с установкой под ключ</p>
            </Link>
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Сколько стоит установка кондиционера</p>
              <p className="text-gray-500 text-xs mt-1">Подробный разбор цен и доплат</p>
            </Link>
            <Link href="/articles/ustanovka-konditsionera-v-gomele" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Установка кондиционера в Гомеле</p>
              <p className="text-gray-500 text-xs mt-1">Монтаж и выбор компании</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
