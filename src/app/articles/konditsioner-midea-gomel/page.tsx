import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function MideaPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Midea в Гомеле' },
    ],
  };

  return (
    <ArticleShell>
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-red-600">Главная</Link>
        {' / '}
        <Link href="/articles" className="hover:text-red-600">Статьи</Link>
        {' / '}
        <span>Кондиционеры Midea в Гомеле</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Кондиционеры Midea в Гомеле — цены 2026, установка под ключ
      </h1>
      <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Midea — крупнейший в мире производитель климатической техники, основан в Китае в 1968 году.
        Компания выпускает оборудование для брендов Electrolux, AEG, Carrier и многих других.
        Собственные кондиционеры Midea отличаются хорошим качеством при доступной цене.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Серии кондиционеров Midea</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Mission', 'On/Off', 'Базовая модель, надёжность', 'от 890 р.'],
              ['Blanc', 'Инвертор', 'Тихая работа, R32', 'от 1 190 р.'],
              ['Xtreme Save Pro', 'Инвертор A+++', 'Самая экономичная, до -25°C', 'от 1 490 р.'],
              ['All Easy Pro', 'Инвертор', 'Wi-Fi, голосовое управление', 'от 1 390 р.'],
              ['Aurora', 'Инвертор', 'Работа при -30°C, морозостойкий', 'от 1 690 р.'],
              ['U-Match Plus', 'Инвертор', 'Кассетный или канальный тип', 'от 2 500 р.'],
            ].map(([series, type, features, price], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-medium">{series}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{type}</td>
                <td className="p-3 border border-gray-200 text-gray-600">{features}</td>
                <td className="p-3 border border-gray-200 text-red-700 font-semibold">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Почему выбирают Midea</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['Доступная цена', 'Кондиционер Midea на 15–25% дешевле аналогов LG и Haier при сопоставимых характеристиках.'],
          ['Широкая линейка', 'От бюджетного on/off до инверторных A+++ с Wi-Fi и работой при -30°C.'],
          ['Надёжность', 'Midea производит технику для Electrolux, AEG, Carrier — это говорит о качестве компонентов.'],
          ['Гарантия', 'Официальная гарантия 2–3 года. Сервисные центры есть в Гомеле.'],
        ].map(([title, text]) => (
          <div key={title} className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-1">{title}</p>
            <p className="text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Какую серию выбрать?</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Задача</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Рекомендация</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Минимальный бюджет', 'Mission On/Off — надёжный и доступный'],
              ['Экономия на электроэнергии', 'Xtreme Save Pro A+++ — окупится за 3–4 года'],
              ['Управление со смартфона', 'All Easy Pro с Wi-Fi — голосовое управление Alice/Google'],
              ['Зимняя эксплуатация', 'Aurora — работает при -30°C без обогревателя'],
              ['Спальня или детская', 'Blanc — самая тихая серия, от 19 дБ'],
            ].map(([task, rec], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3 border border-gray-200 text-gray-700">{task}</td>
                <td className="p-3 border border-gray-200 font-medium text-gray-900">{rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-2">Установка Midea в Гомеле</p>
        <p className="text-gray-700 text-sm mb-3">
          Монтируем кондиционеры Midea любых серий. Гарантия на установку 2 года.
          Звоните — подберём модель под ваш бюджет и площадь:
        </p>
        <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">
          +375 29 105-06-94
        </a>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Midea или Electrolux?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Интересный факт: Midea производит кондиционеры для Electrolux по OEM-контракту. Технически
        они могут быть близки по компонентам. Electrolux дороже на 10–15%, но имеет более узнаваемый
        бренд. Если бюджет ограничен, Midea — отличная альтернатива.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        Подробнее:{' '}
        <Link href="/articles/konditsioner-electrolux-gomel" className="text-red-700 hover:underline">
          Кондиционеры Electrolux в Гомеле
        </Link>
      </p>

      <div className="bg-gray-50 rounded-xl p-5 mb-8">
        <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
        <div className="space-y-2">
          <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">
            → Инвертор или обычный кондиционер — что выгоднее
          </Link>
          <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">
            → Как выбрать кондиционер для квартиры
          </Link>
          <Link href="/articles/konditsioner-ballu-gomel" className="block text-red-700 hover:underline text-sm">
            → Кондиционеры Ballu в Гомеле
          </Link>
        </div>
      </div>

      <Link
        href="/products"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
      >
        Посмотреть кондиционеры в наличии →
      </Link>
    </main>
    </ArticleShell>
  );
}
