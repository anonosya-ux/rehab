const PACKAGES = [
  {
    name: 'Базовый',
    price: '80 000',
    priceTo: '120 000',
    room: '4-местное',
    features: [
      'Индивид. психолог: 2-4 р/мес',
      'Сессии с аддиктологом: 4-6 р/мес',
      'BOSlab: 1-2 раза в месяц',
      'Семейная сессия: 1 за курс',
      'Ежедневная групповая терапия',
      '4-разовое питание',
    ],
    accent: false,
  },
  {
    name: 'Стандарт+',
    price: '150 000',
    priceTo: '200 000',
    room: '3-местное',
    features: [
      'Индивид. психолог: 6-8 р/мес',
      'Сессии с аддиктологом: 8-10 р/мес',
      'BOSlab: 3-4 раза в месяц',
      'Семейные сессии: 1-2 за курс',
      'Патопсихологическое исследование',
      'Профориентация',
    ],
    accent: false,
  },
  {
    name: 'Интенсив',
    price: '250 000',
    priceTo: '300 000',
    room: '2-местное',
    features: [
      'Индивид. психолог: 10-12 р/мес',
      'Сессии с аддиктологом: 12-15 р/мес',
      'BOSlab: 5-6 раз в месяц',
      'Семейные сессии: 2-3 за курс',
      'Нейропсихологическое исследование',
      'Сопровождение инд. заданий',
    ],
    accent: true,
    badge: 'Популярный',
  },
  {
    name: 'V.I.P.',
    price: '420 000',
    priceTo: '500 000',
    room: '1-местное',
    features: [
      'Индивид. психолог: 14-16 р/мес',
      'Сессии с аддиктологом: 16+ р/мес',
      'BOSlab: 7-8 раз в месяц',
      'Семейные сессии: 3+ за курс',
      'Ведение кандидатом наук',
      'Полная диагностика + составление семейного договора',
    ],
    accent: false,
  },
]

export default function PricingSection() {
  return (
    <section className="section-padding" id="pricing-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Программы реабилитации</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Пакеты <span className="gradient-text">услуг</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Прозрачное ценообразование. Все пакеты включают 4-разовое питание, ежедневную групповую терапию, спорт, баню и йогу.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated ${
                pkg.accent
                  ? 'bg-gradient-to-b from-accent-500/10 to-accent-600/5 border border-accent-400/30 shadow-glow'
                  : 'glass hover:bg-white/[0.06]'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-semibold">
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 font-sans ${pkg.accent ? 'text-accent-300' : 'text-text-primary'}`}>
                  {pkg.name}
                </h3>
                <div className="text-xs text-text-muted mb-3">Проживание: {pkg.room}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-text-primary">{pkg.price}</span>
                  <span className="text-sm text-text-muted"> – {pkg.priceTo} ₽/мес</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px mb-5 ${pkg.accent ? 'bg-accent-400/20' : 'bg-white/10'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.accent ? 'text-accent-400' : 'text-accent-500/70'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  pkg.accent
                    ? 'bg-gradient-to-r from-accent-500 to-accent-400 text-white hover:shadow-glow'
                    : 'glass-light text-text-primary hover:bg-white/10'
                }`}
              >
                Подробнее
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-text-muted mt-8 max-w-lg mx-auto">
          Стоимость может варьироваться в зависимости от индивидуального плана лечения. 
          Точную стоимость уточните у специалиста на бесплатной консультации.
        </p>
      </div>
    </section>
  )
}
