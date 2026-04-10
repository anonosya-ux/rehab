import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

const PACKAGES = [
  {
    name: 'Базовый',
    price: '80 000',
    priceTo: '120 000',
    room: '4-местное палато',
    features: [
      'Индивид. психолог: 2-4 р/мес',
      'Сессии с аддиктологом: 4-6 р/мес',
      'BOSlab: 1-2 раза в месяц',
      'Семейная сессия: 1 за курс',
      'Ежедневная групповая терапия',
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
      'Ведение кандидатом наук',
      'Полная диагностика',
      'Личный VIP-сопровождающий',
    ],
    accent: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function PricingSection() {
  const { setOpen } = useContactModal();

  return (
    <section className="section-padding relative overflow-hidden bg-surface-soft" id="pricing-section">
      <div className="container-main">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-200 text-xs text-primary-800 uppercase tracking-widest mb-6 font-bold bg-primary-100">Тарифы реабилитации</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-primary mb-6">
            Пакеты <span className="text-accent-600">услуг</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Прозрачное ценообразование. Все пакеты включают 4-разовое питание, ежедневную терапию, спорт-зал и полное сопровождение.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8"
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl transition-all duration-500 bg-white group ${
                pkg.accent
                  ? 'border-2 border-primary-500 shadow-elevated transform xl:-translate-y-4'
                  : 'border border-surface-dark hover:-translate-y-2 hover:shadow-card'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-accent-600 text-white text-sm font-bold shadow-md">
                  {pkg.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-8 mt-2">
                <h3 className={`text-2xl font-display font-bold mb-3 ${pkg.accent ? 'text-primary-800' : 'text-text-primary'}`}>
                  {pkg.name}
                </h3>
                <div className="text-sm text-text-muted mb-4 pb-4 border-b border-surface-muted">Размещение: <span className="text-text-secondary font-medium">{pkg.room}</span></div>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-display font-black text-primary-800 tracking-tight">{pkg.price}₽</span>
                  <span className="text-sm text-text-muted">до {pkg.priceTo} ₽/мес</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.accent ? 'bg-primary-100 text-primary-600' : 'bg-surface-muted text-primary-400'}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => setOpen(true)}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                  pkg.accent
                    ? 'bg-accent-600 text-white hover:bg-accent-700 shadow-md'
                    : 'bg-primary-50 text-primary-800 hover:bg-primary-100'
                }`}
              >
                Оставить заявку
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-text-muted mt-12 max-w-2xl mx-auto"
        >
          Указанные цены являются ориентировочными. Финальная стоимость формируется индивидуально после бесплатной первичной диагностики у специалиста.
        </motion.p>
      </div>
    </section>
  );
}
