import Link from 'next/link';
import ArticleShell from '../ArticleShell';

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://aircom-fort.by' },
    { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://aircom-fort.by/articles' },
    { '@type': 'ListItem', position: 3, name: 'Демонтаж кондиционера в Гомеле' },
  ],
};

export default function DemontazhPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Главная</Link>
          {' / '}
          <Link href="/articles" className="hover:text-red-600">Статьи</Link>
          {' / '}
          <span>Демонтаж кондиционера в Гомеле</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Демонтаж кондиционера в Гомеле — цена от 100 р., выезд в день заказа
        </h1>
        <p className="text-gray-500 text-sm mb-8">Обновлено: май 2026 · Время чтения: 4 мин</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Демонтаж кондиционера может потребоваться в нескольких случаях: вы переезжаете и хотите забрать технику с собой, меняете старый кондиционер на новый, делаете ремонт или просто переносите блоки на другую стену. В любой из этих ситуаций важно снять сплит-систему правильно — иначе потеряете фреон, повредите компрессор или придётся переплачивать за заправку при повторной установке.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Сколько стоит демонтаж кондиционера в Гомеле</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Услуга</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Цена</th>
                <th className="text-left px-4 py-3 font-semibold border border-gray-200">Что включено</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border border-gray-200">Демонтаж сплит-системы</td>
                <td className="px-4 py-3 border border-gray-200 font-semibold text-red-700">от 100 р.</td>
                <td className="px-4 py-3 border border-gray-200">Снятие внутреннего и наружного блока, сохранение фреона</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 border border-gray-200">Демонтаж при замене на новый</td>
                <td className="px-4 py-3 border border-gray-200 font-semibold text-red-700">Включён в монтаж</td>
                <td className="px-4 py-3 border border-gray-200">При заказе установки нового кондиционера — бесплатно</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-200">Перенос кондиционера</td>
                <td className="px-4 py-3 border border-gray-200 font-semibold text-red-700">от 250 р.</td>
                <td className="px-4 py-3 border border-gray-200">Демонтаж + повторный монтаж на новом месте</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 border border-gray-200">Консервация на зиму</td>
                <td className="px-4 py-3 border border-gray-200 font-semibold text-red-700">от 50 р.</td>
                <td className="px-4 py-3 border border-gray-200">Закачка фреона во внешний блок, заглушки на трассу</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Демонтаж кондиционера при замене включён в стоимость установки</p>
          <p className="text-gray-700 text-sm">Если вы покупаете новый кондиционер и заказываете монтаж в AirComfort — старую сплит-систему снимем бесплатно. Стоимость установки под ключ начинается от 400 р.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Когда нужен демонтаж кондиционера</h2>

        <ul className="space-y-3 mb-8">
          {[
            { title: 'Замена на новую модель', desc: 'Старый кондиционер устарел или сломался — снимаем старый и устанавливаем новый. Демонтаж входит в стоимость монтажа.' },
            { title: 'Переезд', desc: 'Забираете технику с собой. Мастер правильно стравит и закачает фреон, чтобы при переустановке не нужно было заправлять.' },
            { title: 'Ремонт в квартире', desc: 'Штробление стен, замена окон или отделка — кондиционер мешает. Снимем, сохраним, установим обратно после ремонта.' },
            { title: 'Перенос на другую стену', desc: 'Переставить внутренний блок в удобное место. Потребуется новая трасса и дополнительная заправка фреоном.' },
            { title: 'Продажа квартиры', desc: 'Кондиционер не входит в стоимость недвижимости и вы хотите его забрать.' },
          ].map(item => (
            <li key={item.title} className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">{item.title}</span>
                <span className="text-gray-600"> — {item.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Как проходит демонтаж кондиционера</h2>

        <div className="space-y-4 mb-8">
          {[
            { step: '1', title: 'Закачка фреона во внешний блок', desc: 'Перед снятием мастер запускает кондиционер в режиме охлаждения и с помощью специального клапана перекачивает весь фреон из трассы и испарителя во внешний блок. Это занимает 3–5 минут, но позволяет сохранить хладагент.' },
            { step: '2', title: 'Перекрытие кранов и отключение', desc: 'Краны на внешнем блоке закрываются, кондиционер отключается от сети. Теперь фреон надёжно заперт внутри.' },
            { step: '3', title: 'Снятие внутреннего блока', desc: 'Отключаются электрические провода и медная трасса, блок снимается со стеновой пластины. Место крепления заделывается или остаётся — по вашему желанию.' },
            { step: '4', title: 'Снятие наружного блока', desc: 'Блок откручивается от кронштейнов. При высотной установке работа ведётся со страховкой или с выносом с балкона/лестницы.' },
            { step: '5', title: 'Уборка и передача оборудования', desc: 'Мастер убирает за собой, закрывает отверстие в стене заглушкой и передаёт оборудование вам в рабочем состоянии.' },
          ].map(item => (
            <div key={item.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">{item.step}</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему не стоит снимать кондиционер самому</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Главная опасность самостоятельного демонтажа — потеря фреона. Если просто открутить трубки без предварительной закачки хладагента во внешний блок, весь фреон вырвется наружу. Последствия:
        </p>

        <ul className="space-y-2 mb-6">
          {[
            'Потеряете 1–3 кг фреона стоимостью 40–80 р.',
            'При повторной установке потребуется полная заправка (ещё 60–100 р.)',
            'Резкий выброс фреона под давлением опасен для глаз и кожи',
            'Без специнструмента высок риск повредить медные трубки',
          ].map(item => (
            <li key={item} className="flex gap-2 text-sm text-gray-700">
              <span className="text-red-500 shrink-0">✗</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed mb-8">
          Вызов мастера стоит от 100 р. и занимает 1–2 часа. Это намного дешевле и безопаснее, чем переплачивать за заправку и ремонт после неудачной самостоятельной попытки.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>

        <div className="space-y-5 mb-10">
          {[
            {
              q: 'Нужно ли покупать новую трассу при переносе кондиционера?',
              a: 'Зависит от расстояния до нового места установки. Если перенос на то же расстояние — старую трассу можно использовать повторно, если она в хорошем состоянии. При увеличении длины трассы нужны дополнительные медные трубки.',
            },
            {
              q: 'Что делать с дыркой в стене после демонтажа?',
              a: 'Мастер устанавливает пластиковую заглушку. При желании отверстие можно заделать раствором — это делается за отдельную плату или вы делаете сами после снятия.',
            },
            {
              q: 'Можно ли демонтировать кондиционер зимой?',
              a: 'Да, демонтаж возможен в любое время года. Сложность только в работе с наружным блоком на высоте при сильном морозе или гололёде.',
            },
          ].map(item => (
            <div key={item.q} className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h3 className="text-lg font-bold mb-2">Заказать демонтаж кондиционера в Гомеле</h3>
          <p className="text-gray-300 text-sm mb-4">Выезд в день заказа. Аккуратная работа без повреждений стен. Сохраняем фреон для повторного использования.</p>
          <a href="tel:+375291050694" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            +375 29 105-06-94
          </a>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm font-semibold text-gray-700 mb-4">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/articles/tsena-ustanovki-konditsionera', label: 'Сколько стоит установка кондиционера' },
              { href: '/articles/obsluzhivanie-konditsionera-gomel', label: 'Обслуживание кондиционера в Гомеле' },
              { href: '/articles/zapravka-konditsionera-gomel', label: 'Заправка кондиционера в Гомеле' },
              { href: '/services', label: 'Все услуги AirComfort' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm text-red-700 hover:text-red-800 hover:underline">
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </ArticleShell>
  );
}
