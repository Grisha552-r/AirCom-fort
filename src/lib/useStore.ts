'use client';
import { useState, useEffect, useCallback } from 'react';
import type { Product, Order, Review } from './store';

const STORAGE_KEYS = {
  products: 'sga_products',
  orders: 'sga_orders',
  reviews: 'sga_reviews',
  cart: 'sga_cart',
  favorites: 'sga_favorites',
};

export interface CartItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(data));
  if (key === STORAGE_KEYS.cart) {
    setTimeout(() => window.dispatchEvent(new Event('cart-updated')), 0);
  }
  if (key === STORAGE_KEYS.favorites) {
    setTimeout(() => window.dispatchEvent(new Event('favorites-updated')), 0);
  }
}

// ─── PRODUCTS HOOK ─────────────────────────────────────────────────────────────
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = loadFromStorage<Product[]>(STORAGE_KEYS.products, []);
    setProducts(stored);
  }, []);

  const saveProducts = useCallback((updated: Product[]) => {
    setProducts(updated);
    saveToStorage(STORAGE_KEYS.products, updated);
  }, []);

  const addProduct = useCallback((product: Product) => {
    setProducts(prev => {
      const updated = [...prev, product];
      saveToStorage(STORAGE_KEYS.products, updated);
      return updated;
    });
  }, []);

  const updateProduct = useCallback((id: string, data: Partial<Product>) => {
    setProducts(prev => {
      const updated = prev.map(p => p.id === id ? { ...p, ...data } : p);
      saveToStorage(STORAGE_KEYS.products, updated);
      return updated;
    });
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => {
      const updated = prev.filter(p => p.id !== id);
      saveToStorage(STORAGE_KEYS.products, updated);
      return updated;
    });
  }, []);

  return { products, addProduct, updateProduct, deleteProduct, saveProducts };
}

// ─── ORDERS HOOK ──────────────────────────────────────────────────────────────
export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = loadFromStorage<Order[]>(STORAGE_KEYS.orders, []);
    setOrders(stored);
  }, []);

  const addOrder = useCallback((order: Order) => {
    setOrders(prev => {
      const updated = [order, ...prev];
      saveToStorage(STORAGE_KEYS.orders, updated);
      return updated;
    });
  }, []);

  const updateOrderStatus = useCallback((id: string, status: Order['status']) => {
    setOrders(prev => {
      const updated = prev.map(o => o.id === id ? { ...o, status } : o);
      saveToStorage(STORAGE_KEYS.orders, updated);
      return updated;
    });
  }, []);

  const deleteOrder = useCallback((id: string) => {
    setOrders(prev => {
      const updated = prev.filter(o => o.id !== id);
      saveToStorage(STORAGE_KEYS.orders, updated);
      return updated;
    });
  }, []);

  return { orders, addOrder, updateOrderStatus, deleteOrder };
}

// ─── REVIEWS HOOK ─────────────────────────────────────────────────────────────
export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const stored = loadFromStorage<Review[]>(STORAGE_KEYS.reviews, []);
    setReviews(stored);
  }, []);

  const addReview = useCallback((review: Review) => {
    setReviews(prev => {
      const updated = [...prev, review];
      saveToStorage(STORAGE_KEYS.reviews, updated);
      return updated;
    });
  }, []);

  const deleteReview = useCallback((id: string) => {
    setReviews(prev => {
      const updated = prev.filter(r => r.id !== id);
      saveToStorage(STORAGE_KEYS.reviews, updated);
      return updated;
    });
  }, []);

  return { reviews, addReview, deleteReview };
}

// ─── CART HOOK ────────────────────────────────────────────────────────────────
export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(loadFromStorage<CartItem[]>(STORAGE_KEYS.cart, []));

    const sync = () => setCart(loadFromStorage<CartItem[]>(STORAGE_KEYS.cart, []));
    window.addEventListener('cart-updated', sync);
    return () => window.removeEventListener('cart-updated', sync);
  }, []);

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.productId === item.productId);
      const updated = existing
        ? prev.map(i => i.productId === item.productId ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, item];
      saveToStorage(STORAGE_KEYS.cart, updated);
      return updated;
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => {
      const updated = prev.filter(i => i.productId !== productId);
      saveToStorage(STORAGE_KEYS.cart, updated);
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart(prev => {
      const updated = quantity <= 0
        ? prev.filter(i => i.productId !== productId)
        : prev.map(i => i.productId === productId ? { ...i, quantity } : i);
      saveToStorage(STORAGE_KEYS.cart, updated);
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    saveToStorage(STORAGE_KEYS.cart, []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount };
}

// ─── FAVORITES HOOK ───────────────────────────────────────────────────────────
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(loadFromStorage<string[]>(STORAGE_KEYS.favorites, []));

    const sync = () => setFavorites(loadFromStorage<string[]>(STORAGE_KEYS.favorites, []));
    window.addEventListener('favorites-updated', sync);
    return () => window.removeEventListener('favorites-updated', sync);
  }, []);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites(prev => {
      const updated = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      saveToStorage(STORAGE_KEYS.favorites, updated);
      return updated;
    });
  }, []);

  const isFavorite = useCallback((productId: string) => favorites.includes(productId), [favorites]);

  return { favorites, toggleFavorite, isFavorite, count: favorites.length };
}