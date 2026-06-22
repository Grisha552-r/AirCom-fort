'use client';
import { useState, useEffect } from 'react';
import { trackLead } from '@/lib/analytics';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile: sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl">
        <div className="flex items-stretch h-14">
          <a
            href="tel:+375291050694"
            onClick={() => trackLead('phone_click_mobile_bar')}
            className="flex-1 flex items-center justify-center gap-2 bg-crimson-700 text-white font-bold text-sm active:bg-crimson-800"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Позвонить
          </a>
          <div className="w-px bg-gray-200" />
          <a
            href="https://t.me/AirComforto"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead('telegram_click_mobile_bar')}
            className="flex-1 flex items-center justify-center gap-2 text-[#2AABEE] font-bold text-sm bg-white active:bg-blue-50"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
          <div className="w-px bg-gray-200" />
          <a
            href="viber://chat?number=%2B375291050694"
            onClick={() => trackLead('viber_click_mobile_bar')}
            className="flex-1 flex items-center justify-center gap-2 text-[#7360F2] font-bold text-sm bg-white active:bg-purple-50"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.03 4.444.36 7.314.285 10.9c-.074 3.584-.16 10.306 6.322 12.107h.006l-.006 2.776s-.042.999.625 1.2c.804.245 1.276-.512 2.044-1.332.422-.453.999-1.115 1.436-1.621 3.953.33 6.993-.424 7.34-.535.8-.258 5.327-.836 6.064-6.825.76-6.165-.37-10.056-2.406-11.812-.528-.457-2.642-1.862-7.408-1.887a23.6 23.6 0 0 0-2.904.031zm.057 1.937c4.267.026 6.373 1.122 6.785 1.476 1.672 1.427 2.617 4.847 1.954 10.13-.613 5.002-4.262 5.323-4.927 5.537-.286.092-3.01.76-6.39.538 0 0-2.533 3.048-3.322 3.838-.124.123-.267.172-.362.15-.135-.033-.171-.19-.169-.418l.033-3.795s-.005-.038-.01-.065c-5.44-1.507-5.107-7.297-5.044-10.355.063-3.06.606-5.508 2.264-7.15C3.97 1.959 7.45 1.912 11.455 1.939zm.045 3.024a7.4 7.4 0 0 0-.587.028c-.343.033-.59.34-.557.684.034.344.34.592.684.557a5.44 5.44 0 0 1 5.89 5.894c-.034.344.214.65.557.683.346.034.65-.213.684-.557a7.32 7.32 0 0 0-6.671-7.289zm-2.91.974c-.247-.016-.498.08-.665.283-.1.12-.193.245-.286.368-.416.56-.416 1.31.018 1.902.663.914 1.465 1.717 2.38 2.38.59.433 1.34.434 1.9.018.123-.092.248-.186.369-.286.355-.296.398-.822.095-1.175l-.883-1.055a.835.835 0 0 0-1.06-.162c-.137.084-.273.168-.408.25a4.44 4.44 0 0 1-1.274-1.274c.082-.136.166-.27.25-.408a.834.834 0 0 0-.163-1.059l-1.055-.882zm3.02 1.4a.625.625 0 0 0-.023 1.249 1.808 1.808 0 0 1 1.8 1.801.625.625 0 0 0 1.25 0 3.056 3.056 0 0 0-3.027-3.05z"/>
            </svg>
            Viber
          </a>
        </div>
      </div>

    </>
  );
}
