'use client';
import React, { useState, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const allImages = images.length > 0 ? images : ['/assets/images/no_image.png'];

  const prev = () => setActiveIdx(i => Math.max(0, i - 1));
  const next = () => setActiveIdx(i => Math.min(allImages.length - 1, i + 1));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div
        ref={containerRef}
        className="relative w-full h-72 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden bg-zinc-50 border border-border cursor-zoom-in"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image — regular img to avoid AppImage wrapper intercepting clicks */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={allImages[activeIdx]}
          alt={`${productName} — фото ${activeIdx + 1}`}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 pointer-events-none select-none"
          style={{
            transform: hovered ? 'scale(1.8)' : 'scale(1)',
            transformOrigin: hovered ? `${mousePos.x}% ${mousePos.y}%` : 'center',
          }}
          onError={e => { (e.target as HTMLImageElement).src = '/assets/images/no_image.png'; }}
        />

        {/* Nav arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors disabled:opacity-30"
            >
              <Icon name="ChevronLeftIcon" size={20} />
            </button>
            <button
              onClick={next}
              disabled={activeIdx === allImages.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors disabled:opacity-30"
            >
              <Icon name="ChevronRightIcon" size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2 rounded-full transition-all ${i === activeIdx ? 'bg-crimson-700 w-5' : 'bg-white/70 w-2 hover:bg-white'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${i === activeIdx ? 'border-crimson-600 shadow-crimson' : 'border-border hover:border-crimson-300'}`}
            >
              <AppImage
                src={img}
                alt={`${productName} миниатюра ${i + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
