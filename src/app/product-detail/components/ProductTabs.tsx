'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import type { Product } from '@/lib/store';
import { useReviews } from '@/lib/useStore';

interface ProductTabsProps {
  product: Product;
}

function StarRating({ rating, interactive = false, onRate }: { rating: number; interactive?: boolean; onRate?: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          className={`w-5 h-5 cursor-pointer transition-colors ${
            star <= (interactive ? (hovered || rating) : Math.round(rating))
              ? 'text-amber-400' :'text-zinc-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          onClick={() => interactive && onRate?.(star)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'characteristics' | 'reviews'>('description');
  const { reviews, addReview } = useReviews();
  const productReviews = reviews.filter(r => r.productId === product.id);

  const [reviewForm, setReviewForm] = useState({ author: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.author.trim() || !reviewForm.text.trim()) return;
    addReview({
      id: `r-${Date.now()}`,
      productId: product.id,
      author: reviewForm.author,
      rating: reviewForm.rating,
      text: reviewForm.text,
      date: new Date().toISOString().split('T')[0],
    });
    setReviewForm({ author: '', rating: 5, text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const TABS = [
    { id: 'description', label: 'Описание' },
    { id: 'characteristics', label: 'Характеристики' },
    { id: 'reviews', label: `Отзывы (${productReviews.length})` },
  ] as const;

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden mb-10">
      {/* Tab bar */}
      <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'border-crimson-700 text-crimson-700' :'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {/* Description */}
        {activeTab === 'description' && (
          <div className="prose prose-sm max-w-none">
            <p className="text-base text-foreground leading-relaxed">{product.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'ShieldCheckIcon', text: 'Официальная гарантия производителя' },
                { icon: 'CurrencyDollarIcon', text: 'Оплата при получении' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3 bg-zinc-50 rounded-xl p-3">
                  <Icon name={item.icon as 'ShieldCheckIcon'} size={18} className="text-crimson-600 shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Characteristics */}
        {activeTab === 'characteristics' && (
          <div className="space-y-1">
            {Object.entries(product.characteristics).map(([key, val], i) => (
              <div
                key={key}
                className={`flex items-center justify-between py-3 px-3 rounded-xl ${i % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}`}
              >
                <span className="text-sm text-muted-foreground">{key}</span>
                <span className="text-sm font-medium text-foreground text-right max-w-xs">{val}</span>
              </div>
            ))}
            {Object.keys(product.characteristics).length === 0 && (
              <p className="text-muted-foreground text-sm text-center py-8">Характеристики не указаны</p>
            )}
          </div>
        )}

        {/* Reviews */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {/* Review summary */}
            {productReviews.length > 0 && (
              <div className="flex items-center gap-6 bg-zinc-50 rounded-2xl p-5 border border-border">
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground">{product.rating}</div>
                  <StarRating rating={product.rating} />
                  <p className="text-xs text-muted-foreground mt-1">{productReviews.length} отзывов</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5, 4, 3, 2, 1].map(star => {
                    const count = productReviews.filter(r => r.rating === star).length;
                    const pct = productReviews.length ? (count / productReviews.length) * 100 : 0;
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-4">{star}</span>
                        <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground w-4">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Review list */}
            {productReviews.map(review => (
              <div key={review.id} className="border-b border-border pb-5 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm text-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString('ru-RU')}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}

            {productReviews.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Icon name="ChatBubbleLeftRightIcon" size={40} className="mx-auto mb-3 text-zinc-300" />
                <p className="font-medium">Отзывов пока нет</p>
                <p className="text-sm mt-1">Будьте первым, кто оставит отзыв</p>
              </div>
            )}

            {/* Review form */}
            <div className="bg-zinc-50 rounded-2xl p-5 border border-border">
              <h3 className="font-bold text-base text-foreground mb-4">Оставить отзыв</h3>
              {submitted ? (
                <div className="flex items-center gap-3 bg-emerald-50 text-emerald-700 rounded-xl p-4 border border-emerald-100">
                  <Icon name="CheckCircleIcon" size={20} />
                  <span className="font-medium text-sm">Спасибо! Ваш отзыв добавлен.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      value={reviewForm.author}
                      onChange={e => setReviewForm(f => ({ ...f, author: e.target.value }))}
                      placeholder="Имя и фамилия"
                      required
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-50 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">Оценка</label>
                    <StarRating
                      rating={reviewForm.rating}
                      interactive
                      onRate={r => setReviewForm(f => ({ ...f, rating: r }))}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">Отзыв</label>
                    <textarea
                      value={reviewForm.text}
                      onChange={e => setReviewForm(f => ({ ...f, text: e.target.value }))}
                      placeholder="Поделитесь впечатлениями о товаре..."
                      required
                      rows={3}
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-crimson-400 focus:ring-2 focus:ring-crimson-50 bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-crimson-gradient text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-crimson"
                  >
                    Отправить отзыв
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}