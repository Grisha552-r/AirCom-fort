import Link from 'next/link';
import ArticleShell from '@/app/articles/ArticleShell';
import { CITIES } from '@/lib/cities';

const MAIN_PAGES = [
  { href: '/', label: 'Главная страница' },
  { href: '/konditsionery-gomel', label: 'Кондиционеры в Гомеле' },
  { href: '/products', label: 'Каталог кондиционеров' },
  { href: '/services', label: 'Услуги по кондиционированию' },
  { href: '/articles', label: 'Статьи и советы' },
  { href: '/about', label: 'О компании AirComfort' },
  { href: '/requisites', label: 'Реквизиты' },
];

const CATEGORIES = [
  { href: '/products/split-systems', label: 'Все сплит-системы' },
  { href: '/products/split-electrolux', label: 'Кондиционеры Electrolux' },
  { href: '/products/split-ballu', label: 'Кондиционеры Ballu' },
  { href: '/products/split-haier', label: 'Кондиционеры Haier' },
  { href: '/products/split-lg', label: 'Кондиционеры LG' },
  { href: '/products/split-mitsudai', label: 'Кондиционеры Mitsudai' },
  { href: '/products/split-kinghome', label: 'Кондиционеры King Home' },
  { href: '/products/mobile', label: 'Мобильные кондиционеры' },
];

const ARTICLES_BRANDS = [
  { href: '/articles/konditsioner-electrolux-gomel', label: 'Кондиционеры Electrolux в Гомеле' },
  { href: '/articles/konditsioner-ballu-gomel', label: 'Кондиционеры Ballu в Гомеле' },
  { href: '/articles/konditsioner-haier-gomel', label: 'Кондиционеры Haier в Гомеле' },
  { href: '/articles/konditsioner-lg-gomel', label: 'Кондиционеры LG в Гомеле' },
  { href: '/articles/konditsioner-mitsudai-gomel', label: 'Кондиционеры Mitsudai в Гомеле' },
  { href: '/articles/konditsioner-kinghome-gomel', label: 'Кондиционеры King Home в Гомеле' },
  { href: '/articles/konditsioner-gree-gomel', label: 'Кондиционеры Gree в Гомеле' },
  { href: '/articles/invertor-konditsioner-gomel', label: 'Инверторный кондиционер в Гомеле' },
  { href: '/articles/split-sistema-gomel', label: 'Сплит-система в Гомеле' },
  { href: '/articles/nedorogoy-konditsioner-gomel', label: 'Недорогой кондиционер в Гомеле' },
];

const ARTICLES_CHOICE = [
  { href: '/articles/kak-vybrat-konditsioner', label: 'Как выбрать кондиционер для квартиры' },
  { href: '/articles/invertor-ili-obychnyy', label: 'Инверторный или обычный — что выбрать' },
  { href: '/articles/mobilnyy-ili-split', label: 'Мобильный или сплит-система' },
  { href: '/articles/tikhiy-konditsioner-dlya-spalni', label: 'Тихий кондиционер для спальни' },
  { href: '/articles/konditsioner-dlya-kukhni', label: 'Кондиционер для кухни' },
  { href: '/articles/konditsioner-dlya-detskoy', label: 'Кондиционер для детской комнаты' },
  { href: '/articles/konditsioner-dlya-gostinoy', label: 'Кондиционер для гостиной' },
  { href: '/articles/konditsioner-dlya-komnaty', label: 'Кондиционер для комнаты 20 кв. м' },
  { href: '/articles/konditsioner-dlya-ofisa-gomel', label: 'Кондиционер для офиса в Гомеле' },
  { href: '/articles/konditsioner-dlya-dachi', label: 'Кондиционер для дачи' },
  { href: '/articles/mulitsplit-gomel', label: 'Мультисплит-система в Гомеле' },
  { href: '/articles/konditsioner-s-obogrevom-gomel', label: 'Кондиционер с обогревом в Гомеле' },
];

const ARTICLES_INSTALL = [
  { href: '/articles/ustanovka-konditsionera-v-gomele', label: 'Установка кондиционера в Гомеле' },
  { href: '/articles/tsena-ustanovki-konditsionera', label: 'Цена установки кондиционера' },
  { href: '/articles/konditsioner-pod-klyuch', label: 'Кондиционер под ключ' },
  { href: '/articles/skolko-vremeni-zanimaet-ustanovka-konditsionera', label: 'Сколько времени занимает установка' },
  { href: '/articles/razreshenie-na-ustanovku-konditsionera', label: 'Разрешение на установку кондиционера' },
  { href: '/articles/soglasovanie-ustanovki', label: 'Согласование установки в Беларуси' },
  { href: '/articles/montazh-kassetnogo-konditsionera', label: 'Монтаж кассетного кондиционера' },
  { href: '/articles/ustanovka-konditsionera-v-novostroyke', label: 'Установка в новостройке' },
];

const ARTICLES_SERVICE = [
  { href: '/articles/chistka-i-obsluzhivanie', label: 'Чистка и обслуживание кондиционера' },
  { href: '/articles/obsluzhivanie-konditsionera-gomel', label: 'Обслуживание кондиционера в Гомеле' },
  { href: '/articles/zapravka-konditsionera-gomel', label: 'Заправка кондиционера фреоном' },
  { href: '/articles/remont-konditsionera-gomel', label: 'Ремонт кондиционера в Гомеле' },
  { href: '/articles/demontazh-konditsionera-gomel', label: 'Демонтаж кондиционера в Гомеле' },
  { href: '/articles/konditsioner-ne-okhlazhdaet', label: 'Кондиционер не охлаждает — причины' },
  { href: '/articles/kak-pravilno-polzovatsya-letom', label: 'Как правильно пользоваться летом' },
  { href: '/articles/podgotovka-k-zime', label: 'Подготовка кондиционера к зиме' },
];

function Section({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-crimson-700 hover:underline flex items-center gap-2 py-0.5"
            >
              <span className="w-1 h-1 rounded-full bg-crimson-400 shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function KartaSaytaPage() {
  return (
    <ArticleShell>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-crimson-700">Главная</Link>
          {' / '}
          <span className="text-foreground">Карта сайта</span>
        </nav>
        <h1 className="text-3xl font-bold text-foreground mb-2">Карта сайта</h1>
        <p className="text-muted-foreground mb-10">Все разделы сайта aircom-fort.by</p>

        <Section title="Основные страницы" links={MAIN_PAGES} />
        <Section title="Каталог кондиционеров" links={CATEGORIES} />
        <Section title="Кондиционеры по городам Гомельской области" links={
          CITIES.map(c => ({ href: `/konditsioner/${c.slug}`, label: `Кондиционер в ${c.nameIn}` }))
        } />
        <Section title="Статьи: кондиционеры по брендам" links={ARTICLES_BRANDS} />
        <Section title="Статьи: выбор кондиционера" links={ARTICLES_CHOICE} />
        <Section title="Статьи: установка кондиционеров" links={ARTICLES_INSTALL} />
        <Section title="Статьи: обслуживание и ремонт" links={ARTICLES_SERVICE} />
      </main>
    </ArticleShell>
  );
}
