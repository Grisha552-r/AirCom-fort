'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-foreground mb-3">Не удалось загрузить страницу</h1>
        <p className="text-muted-foreground mb-6">Временный сбой соединения с базой данных. Попробуйте обновить страницу через несколько секунд.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-crimson-gradient text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Попробовать снова
          </button>
          <a href="tel:+375291050694" className="border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-zinc-50 transition-colors">
            +375 29 105-06-94
          </a>
        </div>
      </div>
    </div>
  );
}
