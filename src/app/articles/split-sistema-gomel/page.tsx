import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function SplitSistemaGomelPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Сплит-система в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Сплит-система в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Сплит-система в Гомеле — купить с установкой от 1 290 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Сплит-система — самый популярный тип кондиционера для квартир и домов. Состоит из двух блоков: внутреннего (на стене) и внешнего (на фасаде). В отличие от мобильного, работает тихо, эффективно охлаждает и не занимает место в комнате. AirComfort предлагает 300+ моделей в наличии в Гомеле.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Цены на сплит-системы с установкой в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Площадь</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Мощность</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Бренд / Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена под ключ</th>
            </tr></thead>
            <tbody>
              {[
                ['до 20 м²', '7 000 BTU', 'Mitsudai MD-SNE07', 'от 1 090 р.'],
                ['до 25 м²', '9 000 BTU', 'Ballu BSAGI-09HN8', 'от 1 290 р.'],
                ['до 35 м²', '12 000 BTU', 'Haier AS12NS4ERA', 'от 1 590 р.'],
                ['до 50 м²', '18 000 BTU', 'Electrolux EACS-I-18HAT', 'от 2 090 р.'],
                ['до 70 м²', '24 000 BTU', 'LG S24EQ', 'от 2 990 р.'],
              ].map(([a, b, m, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{a}</td>
                  <td className="p-3 border border-gray-200 text-gray-600">{b}</td>
                  <td className="p-3 border border-gray-200">{m}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как правильно выбрать мощность сплит-системы</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Главное правило: 1 кВт мощности охлаждения на 10 м² площади. Для комнаты 20 м² — 2 кВт (9 000 BTU). Для спальни 15 м² — 1,5 кВт (7 000 BTU). Добавьте 20–30% если комната угловая, с большими окнами на юг или плохо изолирована.</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Ошибка: купить слишком мощный кондиционер</p>
          <p className="text-gray-700 text-sm">Избыточная мощность — не плюс. Кондиционер будет часто включаться/выключаться, не успевая осушить воздух. Результат: холодно и сыро. Выбирайте точно под площадь.</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что входит в установку сплит-системы под ключ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            'Монтаж внутреннего блока',
            'Монтаж внешнего блока на фасад',
            'Прокладка трассы до 3 м',
            'Вакуумирование системы',
            'Пусконаладочные работы',
            'Инструктаж по использованию',
            'Гарантия на монтаж 1 год',
            'Все расходники включены',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-sm text-gray-800">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Выбрать и установить сплит-систему в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">300+ моделей в наличии. Монтаж в день заказа. Гарантия 1 год.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/kak-vybrat-konditsioner" className="block text-red-700 hover:underline text-sm">→ Как выбрать кондиционер для квартиры</Link>
            <Link href="/articles/invertor-konditsioner-gomel" className="block text-red-700 hover:underline text-sm">→ Инверторный кондиционер в Гомеле</Link>
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">→ Сколько стоит установка кондиционера</Link>
          </div>
        </div>
        <Link href="/products/split-systems" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть все сплит-системы →</Link>
      </main>
    </ArticleShell>
  );
}
