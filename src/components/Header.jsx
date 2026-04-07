import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Наркомания', href: '/narkomaniya' },
  { label: 'Алкоголизм', href: '/alkogolizm' },
  { label: 'Реабилитация', href: '/reabilitaciya' },
  { label: 'О центре', href: '/o-centre' },
  { label: 'Контакты', href: '/kontakty' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-10" aria-label="ЦПА Цель — главная">
          <Logo className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Главная навигация">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5 hover:text-accent-300 ${
                location.pathname.startsWith(link.href)
                  ? 'text-accent-400 bg-white/5'
                  : 'text-text-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+74954141113"
            className="hidden md:flex items-center gap-2 text-sm text-text-secondary hover:text-accent-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium">+7 495 414-11-13</span>
          </a>

          <button
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 text-white text-sm font-semibold hover:from-accent-400 hover:to-accent-300 transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0"
            id="header-cta-button"
          >
            <span>Консультация</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-main py-4 flex flex-col gap-1 border-t border-white/10 mt-3" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.href)
                  ? 'text-accent-400 bg-white/5'
                  : 'text-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+74954141113"
            className="px-4 py-3 text-sm text-accent-400 font-medium"
          >
            📞 +7 495 414-11-13
          </a>
          <button className="mt-2 mx-4 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 text-white text-sm font-semibold">
            Бесплатная консультация
          </button>
        </nav>
      </div>
    </header>
  )
}
