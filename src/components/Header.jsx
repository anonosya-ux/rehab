import { useState, useEffect } from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useContactModal } from '@/components/ContactModal';

const MENU_ITEMS = [
  { label: 'Наркомания', href: '/uslugi/lechenie-narkomanii' },
  { label: 'Алкоголизм', href: '/uslugi/lechenie-alkogolizma' },
  { label: 'Реабилитация', href: '/reabilitaciya/etapy' },
  { label: 'О центре', href: '/o-centre' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/kontakty' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname || '/';
  const { setOpen } = useContactModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activeMenu
          ? 'bg-white shadow-md py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group relative z-10" aria-label="ЦПА Цель — главная">
          <Logo className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Главная навигация">
          {MENU_ITEMS.map((item, idx) => (
            <div key={item.label} className="relative">
              <a
                href={item.href}
                className={`px-3 py-2 rounded-lg text-[15px] font-semibold transition-all duration-300 flex items-center gap-1 ${
                  pathname.startsWith(item.href) && item.href !== '/'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-text-secondary hover:text-primary-800 hover:bg-surface-soft'
                }`}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+74954141113"
            className="hidden md:flex flex-col items-end group"
          >
            <span className="text-sm font-bold text-primary-800 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 495 414-11-13
            </span>
            <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Анонимно 24/7</span>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="hidden sm:inline-flex btn-primary shadow-md"
            id="header-cta-button"
          >
            Помощь врача
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-surface-soft rounded-lg border border-surface-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span className={`w-5 h-0.5 bg-primary-800 rounded-full transition-all duration-300 absolute ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`w-5 h-0.5 bg-primary-800 rounded-full transition-all duration-300 absolute ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-primary-800 rounded-full transition-all duration-300 absolute ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-surface-dark mt-3 shadow-md absolute w-full"
          >
            <nav className="container-main py-6 flex flex-col gap-2" aria-label="Мобильная навигация">
              {MENU_ITEMS.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href !== '#' ? item.href : undefined}
                    className="px-4 py-3 rounded-lg text-base font-semibold text-primary-800 block bg-surface-soft border border-surface-dark"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-surface-dark flex flex-col gap-4">
                <a href="tel:+74954141113" className="px-4 py-3 text-lg text-primary-800 font-bold text-center bg-primary-50 rounded-xl border border-primary-100 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 495 414-11-13
                </a>
                <button 
                  onClick={() => { setOpen(true); setIsMobileMenuOpen(false); }}
                  className="py-3 rounded-xl btn-primary w-full text-base"
                >
                  Связаться с врачом
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
