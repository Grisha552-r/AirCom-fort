// Small file — safe to import client-side (no INITIAL_PRODUCTS)
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  parentId?: string;
  productCount?: number;
  image?: string;
}

export const CATEGORIES: Category[] = [
  { id: "split-systems", name: "Сплит-системы", slug: "split-systems", icon: "BoltIcon", productCount: 0, image: "https://rkcdn.ru/products/ec119a77-4b96-11f0-b8df-00505601218a/src.jpg" },
  { id: "split-electrolux", name: "Сплит-системы Electrolux", slug: "split-electrolux", icon: "BoltIcon", parentId: "split-systems", productCount: 138, image: "https://rkcdn.ru/products/898b032d-6126-11ee-b737-005056941658/src.jpg" },
  { id: "split-ballu", name: "Сплит-системы Ballu", slug: "split-ballu", icon: "BoltIcon", parentId: "split-systems", productCount: 111, image: "https://rkcdn.ru/products/de39f5a6-44a3-11ed-b732-005056013a69/src.jpg" },
  { id: "split-haier", name: "Сплит-системы Haier", slug: "split-haier", icon: "BoltIcon", parentId: "split-systems", productCount: 85, image: "https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg" },
  { id: "split-lg", name: "Сплит-системы LG", slug: "split-lg", icon: "BoltIcon", parentId: "split-systems", productCount: 73, image: "https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg" },
  { id: "split-panasonic", name: "Сплит-системы Panasonic", slug: "split-panasonic", icon: "BoltIcon", parentId: "split-systems", productCount: 14, image: "https://rkcdn.ru/products/d04e8c84-44aa-11ed-b732-005056013a69/src.jpg" },
  { id: "split-mitsudai", name: "Сплит-системы Mitsudai", slug: "split-mitsudai", icon: "BoltIcon", parentId: "split-systems", productCount: 16, image: "https://interpride.by/wp-content/uploads/2023/04/inv2-600x600-2-1.png" },
  { id: "split-kinghome", name: "Сплит-системы King Home", slug: "split-kinghome", icon: "BoltIcon", parentId: "split-systems", productCount: 4, image: "https://hobot.by/upload/resize_cache/webp/resize_cache/iblock/cfd/1920_1080_1a343e72c12fde7d8b74032b2d7d3a0fa/ix97mhtv7010pg6hkg8j3ym9sxlezct0.webp" },
  { id: "mobile", name: "Мобильные кондиционеры", slug: "mobile", icon: "DevicePhoneMobileIcon", productCount: 39, image: "https://rkcdn.ru/products/dfb0eaee-fada-11ed-b736-005056013a69/src.jpg" },
];
