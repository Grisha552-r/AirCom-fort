import type { Metadata } from 'next';

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  'split-systems': {
    title: 'Сплит-системы в Гомеле — купить кондиционер с установкой',
    description: 'Сплит-системы всех брендов в Гомеле. Продажа и установка под ключ. Официальная гарантия. Монтаж от 400 р.',
  },
  'split-electrolux': {
    title: 'Кондиционеры Electrolux в Гомеле — купить с установкой',
    description: 'Кондиционеры Electrolux в Гомеле по выгодным ценам. Официальный дилер. Установка под ключ, гарантия производителя.',
  },
  'split-ballu': {
    title: 'Кондиционеры Ballu в Гомеле — купить с установкой',
    description: 'Кондиционеры Ballu в Гомеле: инверторные и on/off модели. Продажа и монтаж под ключ. Гарантия.',
  },
  'split-haier': {
    title: 'Кондиционеры Haier в Гомеле — купить с установкой',
    description: 'Кондиционеры Haier в Гомеле. Широкий выбор моделей. Установка под ключ, официальная гарантия производителя.',
  },
  'split-lg': {
    title: 'Кондиционеры LG в Гомеле — купить с установкой',
    description: 'Кондиционеры LG в Гомеле. Инверторные сплит-системы с Wi-Fi и без. Продажа и профессиональный монтаж.',
  },
  'split-mitsudai': {
    title: 'Кондиционеры Mitsudai в Гомеле — купить с установкой',
    description: 'Кондиционеры Mitsudai в Гомеле. Доступная цена, надёжное качество. Установка под ключ от AirComfort.',
  },
  'mobile': {
    title: 'Мобильные кондиционеры в Гомеле — без сверления и монтажа',
    description: 'Мобильные кондиционеры в Гомеле. Не требуют установки и монтажа. Быстрая доставка по Гомелю и области.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const cat = CATEGORY_META[id];
  if (cat) {
    return {
      title: cat.title,
      description: cat.description,
      robots: { index: true, follow: true },
      alternates: { canonical: `https://aircom-fort.by/products/${id}` },
    };
  }
  return {
    title: 'Купить кондиционер в Гомеле — AirComfort',
    description: 'Купить кондиционер в Гомеле с доставкой и установкой. Официальная гарантия производителя. Монтаж под ключ от 400 р.',
    robots: { index: true, follow: true },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
