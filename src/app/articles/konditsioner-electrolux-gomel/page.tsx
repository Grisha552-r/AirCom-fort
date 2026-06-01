import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function ElectroluxGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Electrolux в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры Electrolux в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры Electrolux в Гомеле — купить с установкой от 1 490 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Electrolux — шведский бренд с производством в Китае. Сочетает современный дизайн, тихую работу и высокую надёжность. Все инверторные модели оснащены фильтром Anti-Allergen и работают на обогрев до −15°C. AirComfort — официальный дилер в Гомеле.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Серии Electrolux в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Серия</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Особенности</th>
            </tr></thead>
            <tbody>
              {[
                ['EACS (базовая)', 'On/Off', '26 дБ', 'Надёжность, бюджет'],
                ['EACS-I (инвертор)', 'Инвертор', '21 дБ', 'Экономия 40%, тихий'],
                ['EACS-I Nordic', 'Инвертор', '21 дБ', 'Работает до −30°C'],
                ['EACO (мультисплит)', 'Инвертор', '21 дБ', 'Один внешний, несколько внутренних'],
              ].map(([s, t, n, f], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{s}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{t}</td>
                  <td className="p-3 border border-gray-200">{n}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены Electrolux с установкой</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['Electrolux EACS-09HA (on/off)', 'до 25 м²', 'от 1 090 р.'],
                ['Electrolux EACS-I-09HAT (инверт.)', 'до 25 м²', 'от 1 490 р.'],
                ['Electrolux EACS-I-12HAT (инверт.)', 'до 35 м²', 'от 1 690 р.'],
                ['Electrolux EACS-I-18HAT (инверт.)', 'до 50 м²', 'от 2 090 р.'],
              ].map(([m, a, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{a}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">EACS или EACS-I — что выбрать?</p>
          <p className="text-gray-700 text-sm">EACS — on/off, дешевле при покупке. EACS-I — инвертор, потребляет на 40% меньше электроэнергии и работает тише. Если пользуетесь каждый день — инвертор окупается за 2 сезона.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['138 моделей в наличии', 'Самый широкий выбор среди всех брендов в AirComfort. Найдём нужную мощность.'],
            ['Anti-Allergen фильтр', 'Фильтрует пыль, пыльцу и аллергены. Идеально для людей с астмой и аллергией.'],
            ['Nordic до −30°C', 'Серия Nordic работает на обогрев при −30°C — единственный массовый бренд с такими характеристиками.'],
            ['Гарантия 2–3 года', 'EACS — 2 года, EACS-I и Nordic — 3 года. AirComfort — официальный дилер.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить Electrolux в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Официальный дилер. Монтаж в день заказа, гарантия 2–3 года.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-ballu-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Ballu в Гомеле</Link>
            <Link href="/articles/konditsioner-haier-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Haier в Гомеле</Link>
            <Link href="/articles/tikhiy-konditsioner-dlya-spalni" className="block text-red-700 hover:underline text-sm">→ Тихий кондиционер для спальни</Link>
          </div>
        </div>
        <Link href="/products/split-electrolux" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры Electrolux →</Link>
      </main>
    </ArticleShell>
  );
}
