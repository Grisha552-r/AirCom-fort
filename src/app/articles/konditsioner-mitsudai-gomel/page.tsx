import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function MitsudaiGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры Mitsudai в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры Mitsudai в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры Mitsudai в Гомеле — доступные и надёжные</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 4 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Mitsudai — бюджетная линейка с хорошим соотношением цены и качества. Оптимальный выбор для тех, кто ищет надёжный кондиционер без лишних переплат за бренд. Наш хит продаж — Mitsudai MD-SNE09AI по 890 р., под ключ от 1 290 р.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Модели Mitsudai в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Тип</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['MD-SNE09AI', 'Инвертор', 'до 27 м²', 'от 1 290 р.'],
                ['MD-SNE12AI', 'Инвертор', 'до 35 м²', 'от 1 490 р.'],
                ['MD-SNE18AI', 'Инвертор', 'до 50 м²', 'от 1 890 р.'],
                ['MD-SNE24AI', 'Инвертор', 'до 70 м²', 'от 2 390 р.'],
              ].map(([m, t, a, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-semibold">{t}</td>
                  <td className="p-3 border border-gray-200">{a}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Преимущества Mitsudai</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Самая низкая цена', 'MD-SNE09AI — 890 р. Под ключ с монтажом — 1 290 р. Дешевле в Гомеле не найти.'],
            ['Инвертор', 'Все модели MD-SNE — инверторные. Тихая работа, экономия электроэнергии.'],
            ['Простой уход', 'Фильтры легко снимаются и промываются под водой. Самообслуживание раз в 2–4 недели.'],
            ['Гарантия 1 год', 'Официальная гарантия 1 год от AirComfort. Выезд мастера при гарантийной поломке бесплатно.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Mitsudai — для кого?</p>
          <p className="text-gray-700 text-sm">Идеальный выбор для тех, кто хочет хороший инверторный кондиционер по минимальной цене. Отлично подходит для квартиры, дачи или офиса, где нет потребности в Wi-Fi управлении и премиальных функциях.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Купить Mitsudai в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Монтаж в день заказа. Под ключ от 1 290 р.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/nedorogoy-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">→ Недорогой кондиционер в Гомеле</Link>
            <Link href="/articles/konditsioner-ballu-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Ballu в Гомеле</Link>
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">→ Цены на установку кондиционера</Link>
          </div>
        </div>
        <Link href="/products/split-mitsudai" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры Mitsudai →</Link>
      </main>
    </ArticleShell>
  );
}
