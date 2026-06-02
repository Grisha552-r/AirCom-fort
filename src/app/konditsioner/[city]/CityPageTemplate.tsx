import Link from 'next/link';
import ArticleShell from '@/app/articles/ArticleShell';
import type { CityData } from '@/lib/cities';
import { getDeliveryText } from '@/lib/cities';

interface Props {
  city: CityData;
}

export default function CityPageTemplate({ city }: Props) {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Кондиционеры по городам', item: 'https://aircom-fort.by/karta-sayta' },
      { '@type': 'ListItem', position: 3, name: `Кондиционер в ${city.nameIn}` },
    ],
  };

  const delivery = getDeliveryText(city);

  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/karta-sayta" className="hover:text-red-600">Города области</Link>{' / '}
          <span>{city.name}</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Кондиционер в {city.nameIn} — купить и установить
        </h1>
        <p className="text-gray-500 text-sm mb-6">Доставка из Гомеля · {city.region} · {city.distance} км</p>

        <p className="text-gray-700 leading-relaxed mb-8">
          {city.uniqueNote} AirComfort выполняет доставку и профессиональный монтаж кондиционеров
          по всей Гомельской области — в том числе в {city.nameIn}. Мы везём оборудование из Гомеля
          и устанавливаем его силами собственных мастеров.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на кондиционеры с установкой</h2>
        <p className="text-gray-600 text-sm mb-4">
          Цены на оборудование — фиксированные, как на сайте. Стоимость монтажа стандартная: 400 р. за установку под ключ (трасса до 3 м).
          Дополнительный метр трассы — 50 р./м. Стоимость выезда в {city.nameIn} согласовывается отдельно.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-red-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Товар</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Монтаж</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Mitsudai MD-SNE09AI', 'до 25 м²', '890 р.', '400 р.'],
                ['Ballu BSAGI-09HN8', 'до 25 м²', '890 р.', '400 р.'],
                ['Electrolux EACS-09HG-B2', 'до 25 м²', '1 090 р.', '400 р.'],
                ['Haier AS09NS4ERA', 'до 25 м²', '950 р.', '400 р.'],
                ['Ballu BSAGI-12HN8', 'до 35 м²', '1 090 р.', '400 р.'],
                ['Electrolux EACS-12HG-B2', 'до 35 м²', '1 290 р.', '400 р.'],
                ['LG S09EQ', 'до 25 м²', '1 290 р.', '400 р.'],
              ].map(([model, area, price, install], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{model}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{area}</td>
                  <td className="p-3 border border-gray-200 text-gray-700">{price}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{install}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в монтаж под ключ</h2>
        <ul className="space-y-2 mb-8">
          {[
            'Доставка оборудования в ' + city.nameIn,
            'Разметка и бурение отверстия в стене',
            'Установка внутреннего и наружного блоков',
            'Прокладка медной трассы (до 3 м включено)',
            'Вакуумирование и запуск системы',
            'Проверка работы во всех режимах',
            'Инструктаж по эксплуатации',
            'Гарантия на монтажные работы 1 год',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-red-600 font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Доставка и выезд в {city.name}</h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-gray-700 text-sm leading-relaxed">{delivery}</p>
          <p className="text-gray-600 text-sm mt-3">
            Работаем по всему {city.region.replace('район', 'району').replace('Мозырский', 'Мозырскому').replace('Жлобинский', 'Жлобинскому')}.
            Привозим оборудование из склада в Гомеле.
            Оплата возможна наличными при получении или банковским переводом.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Бренды в наличии</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            ['Electrolux', 'EACS, EACS-I, Nordic', '/products/split-electrolux'],
            ['Ballu', 'BSAGI, BSW, Platinum', '/products/split-ballu'],
            ['Haier', 'AS NS4ERA, Tibio, Pearl', '/products/split-haier'],
            ['LG', 'S-серия, ArtCool, ThinQ', '/products/split-lg'],
            ['Mitsudai', 'MD-SNE серия', '/products/split-mitsudai'],
            ['King Home', 'Luna Matt G-MAX', '/products/split-kinghome'],
          ].map(([brand, series, href]) => (
            <Link
              key={brand}
              href={href}
              className="bg-gray-50 border border-gray-200 rounded-xl p-3 hover:border-red-300 hover:bg-red-50 transition-colors"
            >
              <p className="font-semibold text-gray-900 text-sm">{brand}</p>
              <p className="text-gray-500 text-xs mt-0.5">{series}</p>
            </Link>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Заказать кондиционер в {city.nameIn}</p>
          <p className="text-gray-700 text-sm mb-3">
            Позвоните — уточним наличие, цену выезда в {city.nameIn} и запишем на удобную дату.
          </p>
          <a href="tel:+375291050694" className="text-red-700 font-bold text-lg hover:underline">
            +375 29 105-06-94
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Полезные статьи</p>
          <div className="space-y-2">
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер для квартиры</Link>
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">→ Сколько стоит установка кондиционера</Link>
            <Link href="/articles/konditsioner-pod-klyuch" className="block text-red-700 hover:underline text-sm">→ Кондиционер под ключ — что входит в пакет</Link>
            <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">→ Инвертор или обычный — что выбрать</Link>
          </div>
        </div>

        <Link
          href="/products/split-systems"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
        >
          Смотреть каталог кондиционеров →
        </Link>
      </main>
    </ArticleShell>
  );
}
