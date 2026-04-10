import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing the banner so it doesn't distract immediately on load
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[calc(100%-3rem)] sm:w-auto max-w-lg"
        >
          <div className="glass-heavy rounded-[24px] p-5 flex flex-col sm:flex-row items-center gap-5 border border-surface-dark shadow-glow-emerald">
            <div className="text-sm text-text-secondary leading-relaxed text-center sm:text-left">
              Мы используем файлы cookie для улучшения работы сайта. Продолжая использование, вы соглашаетесь с нашей{' '}
              <a href="/privacy" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">
                Политикой конфиденциальности.
              </a>
            </div>
            <button
              onClick={handleAccept}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary-500 text-surface-darker font-medium text-sm hover:bg-primary-400 transition-colors whitespace-nowrap active:scale-95"
            >
              Я согласен
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
