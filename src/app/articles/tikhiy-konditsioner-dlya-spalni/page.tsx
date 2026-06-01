import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function TikhiyKonditsionerPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Тихий кондиционер для спальни' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Тихий кондиционер для спальни</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Тихий кондиционер для спальни 2026 — ТОП бесшумных моделей</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">Для спальни уровень шума кондиционера критически важен. Стандарт — не более 26 дБ. Лучшие инверторные модели работают от 19 дБ — это тише шёпота. Разбираем рейтинг самых тихих кондиционеров 2026 года.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Что такое дБ и почему это важно</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Уровень шума</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Аналог</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Для спальни</th>
            </tr></thead>
            <tbody>
              {[
                ['19 дБ', 'Еле слышный шелест', '★★★★★ Отлично'],
                ['21–22 дБ', 'Тихий шёпот', '★★★★☆ Хорошо'],
                ['24–26 дБ', 'Тихая комната', '★★★☆☆ Допустимо'],
                ['28–32 дБ', 'Офисный фон', '★★☆☆☆ Слышно ночью'],
              ].map(([db, analog, rating], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">{db}</td>
                  <td className="p-3 border border-gray-200">{analog}</td>
                  <td className="p-3 border border-gray-200">{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">ТОП тихих кондиционеров для спальни 2026</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Модель</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Шум вн. блока</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена с уст.</th>
            </tr></thead>
            <tbody>
              {[
                ['Ballu Platinum Evolution', '19 дБ', 'от 1 890 р.'],
                ['LG S09EQ (Dual Inverter)', '21 дБ', 'от 1 690 р.'],
                ['Electrolux EACS-I Nordic', '21 дБ', 'от 1 790 р.'],
                ['Haier Flexis Plus', '21 дБ', 'от 1 790 р.'],
                ['Haier Pearl', '22 дБ', 'от 1 690 р.'],
                ['Electrolux EACS-I-09HAT', '23 дБ', 'от 1 490 р.'],
              ].map(([m, n, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200 font-medium">{m}</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-bold">{n}</td>
                  <td className="p-3 border border-gray-200 font-semibold">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ночной режим Sleep</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Все перечисленные модели имеют режим Sleep (ночной). В этом режиме кондиционер постепенно поднимает температуру на 1°C каждые 30 минут и снижает скорость вентилятора. Итог: на 2–3 дБ тише, чем в обычном режиме, и комфортный сон без резкого переохлаждения.</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Совет: установка в спальне</p>
          <p className="text-gray-700 text-sm">Не направляйте поток воздуха прямо на кровать — вызывает простуду. Оптимальная температура для сна: 22–24°C. Внутренний блок вешайте над изголовьем или сбоку от кровати — поток идёт вдоль потолка.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Подберём тихий кондиционер для вашей спальни</p>
          <p className="text-gray-700 text-sm mb-3">Скажите площадь и бюджет — бесплатно проконсультируем и установим в день заказа.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/konditsioner-dlya-detskoy" className="block text-red-700 hover:underline text-sm">→ Кондиционер для детской комнаты</Link>
            <Link href="/articles/konditsioner-lg-gomel" className="block text-red-700 hover:underline text-sm">→ Кондиционеры LG в Гомеле</Link>
            <Link href="/articles/invertor-ili-obychnyy" className="block text-red-700 hover:underline text-sm">→ Инвертор или обычный — что выбрать</Link>
          </div>
        </div>
        <Link href="/products/split-systems" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Смотреть тихие кондиционеры →</Link>
      </main>
    </ArticleShell>
  );
}
