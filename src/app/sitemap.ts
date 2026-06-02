import { MetadataRoute } from 'next';
import products from '@/data/products.json';
import { CITIES } from '@/lib/cities';

const BASE = 'https://aircom-fort.by';

const STATIC_PAGES = [
  { url: `${BASE}/`,                    priority: 1.0,  changefreq: 'daily'   as const },
  { url: `${BASE}/konditsionery-gomel`, priority: 0.98, changefreq: 'daily'   as const },
  { url: `${BASE}/products`,            priority: 0.9,  changefreq: 'daily'   as const },
  { url: `${BASE}/services`,            priority: 0.8,  changefreq: 'weekly'  as const },
  { url: `${BASE}/articles`,            priority: 0.7,  changefreq: 'weekly'  as const },
  { url: `${BASE}/about`,               priority: 0.5,  changefreq: 'monthly' as const },
  { url: `${BASE}/requisites`,          priority: 0.4,  changefreq: 'monthly' as const },
];

const CATEGORY_SLUGS = [
  'split-systems', 'split-electrolux', 'split-ballu',
  'split-haier', 'split-lg', 'split-mitsudai', 'split-kinghome', 'mobile',
];

const ARTICLE_SLUGS = [
  'tsena-ustanovki-konditsionera',
  'konditsioner-dlya-komnaty',
  'konditsioner-ne-okhlazhdaet',
  'kak-vybrat-konditsioner',
  'invertor-ili-obychnyy',
  'chistka-i-obsluzhivanie',
  'kak-pravilno-polzovatsya-letom',
  'podgotovka-k-zime',
  'soglasovanie-ustanovki',
  'mobilnyy-ili-split',
  'ustanovka-konditsionera-v-gomele',
  'skolko-vremeni-zanimaet-ustanovka-konditsionera',
  'razreshenie-na-ustanovku-konditsionera',
  'konditsioner-pod-klyuch',
  'montazh-kassetnogo-konditsionera',
  'zapravka-konditsionera-gomel',
  'remont-konditsionera-gomel',
  'obsluzhivanie-konditsionera-gomel',
  'demontazh-konditsionera-gomel',
  'konditsioner-electrolux-gomel',
  'konditsioner-dlya-ofisa-gomel',
  'tikhiy-konditsioner-dlya-spalni',
  'konditsioner-ballu-gomel',
  'konditsioner-haier-gomel',
  'konditsioner-lg-gomel',
  'konditsioner-dlya-detskoy',
  'invertor-konditsioner-gomel',
  'split-sistema-gomel',
  'konditsioner-dlya-gostinoy',
  'mulitsplit-gomel',
  'konditsioner-gree-gomel',
  'konditsioner-dlya-dachi',
  'konditsioner-s-obogrevom-gomel',
  'nedorogoy-konditsioner-gomel',
  'konditsioner-kinghome-gomel',
  'ustanovka-konditsionera-v-novostroyke',
  'konditsioner-dlya-kukhni',
  'konditsioner-mitsudai-gomel',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const productPages: MetadataRoute.Sitemap = (products as { id: string }[]).map(p => ({
    url: `${BASE}/products/${p.id}`,
    lastModified: now,
    priority: 0.7,
    changefreq: 'monthly' as const,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map(c => ({
    url: `${BASE}/konditsioner/${c.slug}`,
    lastModified: now,
    priority: 0.75,
    changefreq: 'monthly' as const,
  }));

  return [
    ...STATIC_PAGES.map(p => ({ url: p.url, lastModified: now, priority: p.priority, changefreq: p.changefreq })),
    ...CATEGORY_SLUGS.map(slug => ({ url: `${BASE}/products/${slug}`, lastModified: now, priority: 0.85, changefreq: 'weekly' as const })),
    ...ARTICLE_SLUGS.map(slug => ({ url: `${BASE}/articles/${slug}`, lastModified: now, priority: 0.65, changefreq: 'monthly' as const })),
    ...cityPages,
    ...productPages,
  ];
}
