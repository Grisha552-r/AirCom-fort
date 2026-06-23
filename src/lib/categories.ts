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
  { id: "split-systems", name: "Сплит-системы", slug: "split-systems", icon: "BoltIcon", productCount: 0, image: "/assets/images/categories/split-systems.jpg" },
  { id: "split-electrolux", name: "Сплит-системы Electrolux", slug: "split-electrolux", icon: "BoltIcon", parentId: "split-systems", productCount: 138, image: "/assets/images/categories/split-electrolux.jpg" },
  { id: "split-ballu", name: "Сплит-системы Ballu", slug: "split-ballu", icon: "BoltIcon", parentId: "split-systems", productCount: 111, image: "/assets/images/categories/split-ballu.jpg" },
  { id: "split-haier", name: "Сплит-системы Haier", slug: "split-haier", icon: "BoltIcon", parentId: "split-systems", productCount: 85, image: "/assets/images/categories/split-haier.jpg" },
  { id: "split-lg", name: "Сплит-системы LG", slug: "split-lg", icon: "BoltIcon", parentId: "split-systems", productCount: 73, image: "/assets/images/categories/split-haier.jpg" },
  { id: "split-panasonic", name: "Сплит-системы Panasonic", slug: "split-panasonic", icon: "BoltIcon", parentId: "split-systems", productCount: 14, image: "/assets/images/categories/split-haier.jpg" },
  { id: "split-mitsudai", name: "Сплит-системы Mitsudai", slug: "split-mitsudai", icon: "BoltIcon", parentId: "split-systems", productCount: 16, image: "/assets/images/categories/split-mitsudai.png" },
  { id: "split-kinghome", name: "Сплит-системы King Home", slug: "split-kinghome", icon: "BoltIcon", parentId: "split-systems", productCount: 4, image: "/assets/images/categories/split-kinghome.webp" },
  { id: "split-vicool", name: "Сплит-системы Vicool", slug: "split-vicool", icon: "BoltIcon", parentId: "split-systems", productCount: 13, image: "https://k24.by/upload/iblock/a56/o1bisbd2ecxydlk9cz5cyehong2h1yy2.png" },
  { id: "mobile", name: "Мобильные кондиционеры", slug: "mobile", icon: "DevicePhoneMobileIcon", productCount: 39, image: "/assets/images/categories/mobile.jpg" },
];
