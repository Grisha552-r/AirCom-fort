import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function KingHomeGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Кондиционеры King Home в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Кондиционеры King Home в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Кондиционеры King Home в Гомеле — серия Luna Matt G-MAX</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 5 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">King Home Luna Matt — инверторные сплит-системы премиум-класса с матовым корпусом серии G-MAX. Компрессор Gree, энергоэффективность A++, хладагент R32, встроенный Wi-Fi и ионизация воздуха. Гарантия производителя 74 месяца — более 6 лет.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Модели King Home Luna Matt в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['King Home Luna Matt 09', '9 000 BTU', 'до 25 м²', 'от 2 490 р.'],
                ['King Home Luna Matt 12', '12 000 BTU', 'до 35 м²', 'от 2 890 р.'],
                ['King Home Luna Matt 18', '18 000 BTU', 'до 50 м²', 'от 3 490 р.'],
                ['King Home Luna Matt 24', '24 000 BTU', 'до 70 м²', 'от 3 990 р.'],
              ].map(([m, b, a, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{b}</td>
                  <td className="p-3 border border-gray-200">{a}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Особенности King Home Luna Matt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            ['Компрессор Gree', 'Надёжный компрессор от крупнейшего производителя в мире. Тихий, долговечный, эффективный.'],
            ['Класс A++', 'Энергоэффективность A++ при охлаждении и A+ при обогреве. Экономит до 50% по сравнению с on/off.'],
            ['R32 хладагент', 'Экологичный хладагент с нулевым потенциалом разрушения озона и низким глобальным потеплением.'],
            ['Гарантия 74 месяца', 'Более 6 лет официальной гарантии производителя — рекорд среди всех брендов в Гомеле.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">King Home vs LG — что выбрать?</p>
          <p className="text-gray-700 text-sm">King Home Luna Matt предлагает сопоставимые характеристики с LG при более длительной гарантии (74 мес. vs 36 мес.). Если важна максимальная гарантия — King Home. Если бренд и сервисная сеть — LG.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">King Home Luna Matt в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Монтаж в день заказа, гарантия 74 месяца. Консультация бесплатно.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-lg-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры LG в Гомеле</Link>
            <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">→ Инверторный кондиционер в Гомеле</Link>
            <Link href="/articles/konditsioner-gree-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры Gree в Гомеле</Link>
          </div>
        </div>
        <Link href="/products/split-kinghome" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть кондиционеры King Home →</Link>
      </main>
    </ArticleShell>
  );
}
