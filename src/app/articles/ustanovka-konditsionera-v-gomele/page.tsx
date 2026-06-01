import Link from 'next/link';
import ArticleShell from '../ArticleShell';

export default function UstanovkaKonditsioneraPrincipePage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
      { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
      { '@type': 'ListItem', position: 3, name: 'Установка кондиционера в Гомеле' },
    ],
  };
  return (
    <ArticleShell>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>{' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>{' / '}
          <span>Установка кондиционера в Гомеле</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Установка кондиционера в Гомеле — монтаж под ключ от 400 р.</h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 6 мин</p>
        <p className="text-gray-700 leading-relaxed mb-6">AirComfort выполняет установку кондиционеров в Гомеле с 2019 года. Более 500 успешных монтажей. Работаем с Electrolux, Ballu, Haier, LG, Mitsudai, King Home. Выезд в день заказа, фиксированные цены, гарантия на монтаж 1 год.</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Стоимость установки кондиционера в Гомеле</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-red-50">
              <th className="text-left p-3 border border-gray-200 font-semibold">Услуга</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Цена</th>
            </tr></thead>
            <tbody>
              {[
                ['Монтаж кондиционера до 30 м² (трасса до 3 м)', 'от 400 р.'],
                ['Монтаж кондиционера до 35 м² (трасса до 3 м)', 'от 430 р.'],
                ['Монтаж кондиционера до 50 м² (трасса до 3 м)', 'от 500 р.'],
                ['Монтаж кондиционера до 70 м² (трасса до 3 м)', 'от 550 р.'],
                ['Дополнительный метр трассы', '50 р./м'],
                ['Прокладка через балкон', '+50 р.'],
                ['Обслуживание (чистка + диагностика)', 'от 100 р.'],
                ['Демонтаж кондиционера', 'от 100 р.'],
              ].map(([s, p], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200">{s}</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700 whitespace-nowrap">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Этапы монтажа кондиционера</h2>
        <div className="space-y-4 mb-8">
          {[
            ['01', 'Замер и выбор места', 'Определяем место внутреннего блока — над окном или на стене. Планируем маршрут трассы к наружному блоку.'],
            ['02', 'Бурение отверстия', 'Сверлим отверстие в стене диаметром 65–80 мм для прокладки трубок и кабеля. Устанавливаем гильзу.'],
            ['03', 'Монтаж блоков', 'Вешаем внутренний блок на пластину. Крепим наружный блок на кронштейны на фасаде.'],
            ['04', 'Прокладка трассы', 'Соединяем блоки медными трубками, дренажным шлангом и электрокабелем. Укладываем в короб или штробу.'],
            ['05', 'Вакуумирование', 'Вакуумным насосом удаляем воздух и влагу из системы — обязательный этап перед заправкой фреоном.'],
            ['06', 'Пуско-наладка', 'Запускаем систему, проверяем все режимы, давление фреона, дренаж. Проводим инструктаж.'],
          ].map(([num, title, desc]) => (
            <div key={num} className="flex gap-4">
              <span className="text-2xl font-black text-red-100 leading-none shrink-0 w-8">{num}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Почему нельзя экономить на монтаже</p>
          <p className="text-gray-700 text-sm">Неправильный монтаж — главная причина поломок кондиционеров. Пропущенное вакуумирование, негерметичное соединение трубок или неправильный угол дренажа приводят к поломке компрессора уже в первый сезон. Всегда выбирайте мастеров с гарантией на работы.</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Установка кондиционера в Гомеле</p>
          <p className="text-gray-700 text-sm mb-3">Выезд в день заказа. Гарантия на монтаж 1 год. Фиксированная цена без сюрпризов.</p>
          <a href="tel:+375291050694" className="text-red-700 font-semibold hover:underline">+375 29 105-06-94</a>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-3">Читайте также</p>
          <div className="space-y-2">
            <Link href="/articles/tsena-ustanovki-konditsionera" className="block text-red-700 hover:underline text-sm">→ Подробные цены на установку кондиционера</Link>
            <Link href="/articles/soglasovanie-ustanovki" className="block text-red-700 hover:underline text-sm">→ Согласование установки кондиционера</Link>
            <Link href="/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera" className="block text-red-700 hover:underline text-sm">→ Сколько времени занимает монтаж</Link>
          </div>
        </div>
        <Link href="/services" className="inline-block bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors">Заказать установку кондиционера →</Link>
      </main>
    </ArticleShell>
  );
}
