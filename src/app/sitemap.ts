import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE = 'https://aircom-fort.by';

const STATIC_PAGES = [
  { url: `${BASE}/`,           priority: 1.0, changefreq: 'daily'   },
  { url: `${BASE}/products`,   priority: 0.9, changefreq: 'daily'   },
  { url: `${BASE}/services`,   priority: 0.8, changefreq: 'weekly'  },
  { url: `${BASE}/about`,      priority: 0.5, changefreq: 'monthly' },
  { url: `${BASE}/requisites`, priority: 0.4, changefreq: 'monthly' },
  { url: `${BASE}/articles`,   priority: 0.6, changefreq: 'weekly'  },
];

const CATEGORY_SLUGS = [
  'split-systems', 'split-electrolux', 'split-ballu',
  'split-haier', 'split-lg', 'split-mitsudai', 'mobile',
];

const ARTICLE_SLUGS = [
  'kak-vybrat-konditsioner',
  'invertor-ili-obychnyy',
  'chistka-i-obsluzhivanie',
  'kak-pravilno-polzovatsya-letom',
  'podgotovka-k-zime',
  'soglasovanie-ustanovki',
  'mobilnyy-ili-split',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const categoryPages = CATEGORY_SLUGS.map(slug => ({
    url: `${BASE}/products/${slug}`,
    lastModified: now,
    priority: 0.85,
  }));

  const articlePages = ARTICLE_SLUGS.map(slug => ({
    url: `${BASE}/articles/${slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  let productPages: MetadataRoute.Sitemap = [];
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), 'src/data/products.json'), 'utf-8');
    const products: { id: string }[] = JSON.parse(raw);
    productPages = products.map(p => ({
      url: `${BASE}/products/${p.id}`,
      lastModified: now,
      priority: 0.7,
    }));
  } catch {}

  return [
    ...STATIC_PAGES.map(p => ({ url: p.url, lastModified: now, priority: p.priority })),
    ...categoryPages,
    ...articlePages,
    ...productPages,
  ];
}
