'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Link from 'next/link';

export default function UstanovkaVGomelee() {
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
            { '@type': 'ListItem', position: 3, name: 'Установка кондиционера в Гомеле' },
          ],
        }) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-crimson-700">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-crimson-700">Статьи</Link>
          {' / '}
          <span>Установка кондиционера в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Установка кондиционера в Гомеле: монтаж сплит-системы под ключ
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Установка кондиционера в Гомеле — услуга, которую многие откладывают до последнего. А потом приходит жара,
          и выясняется, что мастера расписаны на неделю вперёд. В этой статье расскажем, как работает монтаж
          сплит-системы, что влияет на цену и почему лучше заказывать кондиционер с установкой у одной компании.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что такое монтаж «под ключ»</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Монтаж кондиционера «под ключ» означает, что вы получаете полностью готовую к работе систему:
          мастер приезжает, устанавливает оба блока, прокладывает трассу, подключает электрику и дренаж,
          проверяет герметичность и запускает кондиционер в тестовом режиме.
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            'Крепление внутреннего блока на кронштейны',
            'Крепление наружного блока на фасад или балкон',
            'Прокладка медных трубок трассы (до 3 м включено)',
            'Подключение электрокабеля от распределительного щитка',
            'Дренажный шланг для отвода конденсата',
            'Вакуумирование системы перед запуском',
            'Пуско-наладочные работы и проверка всех режимов',
            'Инструктаж по эксплуатации',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на установку кондиционера в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-crimson-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Цена монтажа</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['до 30 м²', '7 000–9 000 BTU', 'от 400 р.'],
                ['до 50 м²', '12 000–18 000 BTU', 'от 400 р.'],
                ['до 70 м²', '24 000 BTU', 'от 400 р.'],
              ].map(([area, power, price]) => (
                <tr key={area} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200">{area}</td>
                  <td className="p-3 border border-gray-200">{power}</td>
                  <td className="p-3 border border-gray-200 font-semibold text-crimson-700">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-8 italic">
          Цена действительна при стандартном монтаже — трасса до 3 м, без штробления, до 5 этажа.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как выбрать фирму по установке кондиционеров в Гомеле</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          В Гомеле работают десятки мастеров и компаний. Но далеко не все одинаково надёжны. Вот на что стоит обратить внимание:
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Гарантия на монтаж',
              text: 'Надёжные компании дают гарантию на работы — не менее 1 года. Если что-то пойдёт не так, мастер вернётся бесплатно.',
            },
            {
              title: 'Наличие инструмента и расходников',
              text: 'Мастер должен приехать с вакуумным насосом, манометром, медными трубками и кабелем — без просьб купить что-то самостоятельно.',
            },
            {
              title: 'Конкретная цена до начала работ',
              text: 'Хорошая компания называет итоговую стоимость после осмотра или хотя бы описывает структуру цены по телефону.',
            },
            {
              title: 'Реальные отзывы и опыт',
              text: 'Проверьте отзывы на независимых платформах. Компании с большим опытом, как правило, имеют подтверждённые истории установок.',
            },
          ].map(item => (
            <div key={item.title} className="border-l-4 border-crimson-200 pl-4">
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="text-gray-700 text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему лучше брать кондиционер с установкой в одном месте</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Если вы покупаете технику в одном месте, а монтаж заказываете в другом — получаете двойной риск:
          при поломке будет сложно понять, чья вина — продавца или монтажника. В AirComfort действует единая
          ответственность: один договор, одна гарантия на оборудование и работу, один номер телефона при проблемах.
        </p>

        <div className="bg-crimson-50 border border-crimson-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-crimson-900 mb-2">Закажите установку в AirComfort</h3>
          <p className="text-crimson-800 text-sm mb-4">
            Выбирайте кондиционер в каталоге — мастер приедет и установит его за один визит. Гарантия на монтаж 1 год.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-block bg-crimson-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-800 transition-colors"
            >
              Заказать установку →
            </Link>
            <Link
              href="/products/split-systems"
              className="inline-block border border-crimson-300 text-crimson-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-50 transition-colors"
            >
              Посмотреть кондиционеры
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: 'Сколько стоит установка кондиционера в Гомеле?',
              a: 'Стандартный монтаж сплит-системы — от 400 р. независимо от мощности. Цена включает трассу 3 м, трубки, кабель, крепёж и пусконаладку.',
            },
            {
              q: 'За сколько дней нужно записываться на монтаж?',
              a: 'В обычное время — 1–3 дня. В сезон (май–август) лучше записываться за 3–7 дней. При срочной необходимости — уточняйте наличие свободных окон.',
            },
            {
              q: 'Кондиционер с установкой — насколько выгоднее?',
              a: 'Комплект «кондиционер + монтаж» в AirComfort дешевле, чем заказывать отдельно. Плюс — единая гарантия и один звонок при любой проблеме.',
            },
            {
              q: 'Нужно ли готовить что-то перед приездом мастера?',
              a: 'Освободите стену для внутреннего блока и обеспечьте доступ к наружной стене (или балкону). Инструмент и расходники — у мастера.',
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
              <p className="font-medium text-crimson-800 text-sm">Кондиционеры в Гомеле от 1 329 р.</p>
              <p className="text-crimson-600 text-xs mt-1">300+ моделей с установкой под ключ</p>
            </Link>
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Сколько стоит установка кондиционера</p>
              <p className="text-gray-500 text-xs mt-1">Подробный разбор цен и доплат</p>
            </Link>
            <Link href="/articles/konditsioner-pod-klyuch" className="block p-4 border border-gray-200 rounded-lg hover:border-crimson-300 hover:bg-crimson-50 transition-colors">
              <p className="font-medium text-gray-900 text-sm">Кондиционер под ключ: цена и что входит</p>
              <p className="text-gray-500 text-xs mt-1">Всё что включено в пакет «под ключ»</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
