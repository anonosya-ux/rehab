import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';
import { TiltCard } from '@/components/ui/TiltCard';

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
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function PricingSection() {
  const { setOpen } = useContactModal();

  return (
    <section className="section-padding relative overflow-hidden bg-surface-soft" id="pricing-section">
      {/* Liquid Glass Background Blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-300/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-primary-200 text-xs text-primary-800 uppercase tracking-widest mb-6 font-bold bg-white/50 backdrop-blur-md shadow-sm">Тарифы реабилитации</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-900 mb-6 drop-shadow-sm">
            Пакеты <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">услуг</span>
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
            <motion.div key={pkg.name} variants={itemVariants} className="h-full">
              <TiltCard>
                <div
                  className={`relative p-8 rounded-3xl h-full flex flex-col transition-all duration-500 backdrop-blur-2xl ${
                    pkg.accent
                      ? 'bg-gradient-to-b from-white/90 to-white/70 border-2 border-primary-400 shadow-[0_20px_60px_-15px_rgba(30,58,138,0.3)]'
                      : 'bg-white/60 border border-white/60 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] hover:bg-white/80'
                  }`}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm font-bold shadow-lg border border-accent-400/50 whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8 mt-2">
                    <h3 className={`text-2xl font-display font-bold mb-3 ${pkg.accent ? 'text-primary-900' : 'text-text-primary'}`}>
                      {pkg.name}
                    </h3>
                    <div className="text-sm text-text-muted mb-4 pb-4 border-b border-primary-900/10">Размещение: <span className="text-primary-800 font-semibold">{pkg.room}</span></div>
                    <div className="flex flex-col gap-1">
                      <span className="text-4xl font-display font-black text-primary-900 tracking-tight">{pkg.price}₽</span>
                      <span className="text-sm font-medium text-text-muted">до {pkg.priceTo} ₽/мес</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 flex-grow mb-10">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${pkg.accent ? 'bg-primary-100/80 text-primary-700' : 'bg-primary-50 text-primary-500'}`}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => setOpen(true)}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${
                      pkg.accent
                        ? 'bg-accent-600 text-white hover:bg-accent-700 shadow-lg shadow-accent-600/30'
                        : 'bg-white text-primary-800 hover:bg-primary-50 shadow-sm border border-primary-100'
                    }`}
                  >
                    Оставить заявку
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-text-muted mt-16 max-w-2xl mx-auto px-6 py-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40"
        >
          Указанные цены являются ориентировочными. Финальная стоимость формируется индивидуально после бесплатной первичной диагностики у специалиста.
        </motion.p>
      </div>
    </section>
  );
}
