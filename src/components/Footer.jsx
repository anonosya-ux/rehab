import { Link } from 'react-router-dom'
import Logo from './Logo'

const FOOTER_SECTIONS = [
  {
    title: 'Лечение',
    links: [
      { label: 'Наркомания', href: '/narkomaniya' },
      { label: 'Алкоголизм', href: '/alkogolizm' },
      { label: 'Лудомания', href: '/povedencheskie-zavisimosti/ludomaniya' },
      { label: 'Гаджет-зависимость', href: '/povedencheskie-zavisimosti/gadzhet-zavisimost' },
    ],
  },
  {
    title: 'Программы',
    links: [
      { label: 'Этапы лечения', href: '/reabilitaciya/etapy' },
      { label: 'Пакеты услуг', href: '/reabilitaciya/pakety' },
      { label: 'Ресоциализация', href: '/reabilitaciya/resocializaciya' },
      { label: 'Стоимость', href: '/reabilitaciya/stoimost' },
    ],
  },
  {
    title: 'О центре',
    links: [
      { label: 'Наша команда', href: '/o-centre/vrachi' },
      { label: 'BOSlab технология', href: '/o-centre/boslab' },
      { label: 'Отзывы', href: '/o-centre/otzyvy' },
      { label: 'Лицензии', href: '/o-centre/licenzii' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-darker border-t border-white/5">
      {/* Main Grid */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-5 group">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Более 10 лет помощи зависимым и их семьям. Клинически ориентированная среда 
              для восстановления и ресоциализации.
            </p>
            <div className="space-y-2">
              <a href="tel:+74954141113" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 495 414-11-13
              </a>
              <a href="tel:+79778958599" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 977 895-85-99
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-muted hover:text-accent-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Addresses Bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2 text-xs text-text-muted">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="font-medium text-text-secondary">Центр:</div>
              МО, Солнечногорский р-н, д. Жуково, д. 1
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-text-muted">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div>
              <div className="font-medium text-text-secondary">Офис Москва:</div>
              ул. Академика Королёва, д. 13, стр. 1, офис 88
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {currentYear} ЦПА «Цель». Все права защищены.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-text-secondary transition-colors">Политика конфиденциальности</Link>
            <Link to="/agreement" className="hover:text-text-secondary transition-colors">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
