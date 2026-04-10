import HeroSection from '@/components/HeroSection'
import StagesSection from '@/components/StagesSection'
import PricingSection from '@/components/PricingSection'
import CalculatorSection from '@/components/CalculatorSection'
import QuizSection from '@/components/QuizSection'
import TeamSection from '@/components/TeamSection'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import { useContactModal } from '@/components/ContactModal'
import { useInView } from '@/hooks/useInView'
import { motion } from 'framer-motion'
const HOME_FAQS = [
  { question: 'Гарантируете ли вы анонимность?', answer: 'Да, мы работаем строго анонимно. Данные пациентов не передаются в государственные структуры. Постановка на наркологический учёт не производится.' },
  { question: 'Сколько стоит лечение?', answer: 'Стоимость зависит от выбранного пакета: Базовый — от 80 000 ₽/мес, Стандарт+ — от 150 000 ₽/мес, Интенсив — от 250 000 ₽/мес, VIP — от 420 000 ₽/мес. Точная стоимость определяется после первичной консультации.' },
  { question: 'Как долго длится реабилитация?', answer: 'Минимальный рекомендованный срок — 3 месяца. Оптимальный результат достигается за 6 месяцев комплексной программы. VIP-пациенты проходят сокращённый интенсивный курс.' },
  { question: 'Можно ли принудительно госпитализировать?', answer: 'По закону РФ принудительное лечение запрещено. Мы проводим профессиональные мотивационные интервенции (выезд психолога на дом) для формирования осознанного решения.' },
  { question: 'Что входит в программу реабилитации?', answer: 'Индивидуальная психотерапия, нейробиоуправление BOSlab, групповая КПТ-терапия, семейное консультирование, спорт, йога, арт-терапия, 4-разовое питание и проживание.' },
  { question: 'Есть ли у вас лицензия?', answer: 'Да, центр «Цель» лицензирован и работает в полном соответствии с законодательством РФ. Все документы представлены на странице «Лицензии».' },
]

export default function HomePage() {
  const { setOpen } = useContactModal()
  const [boslabRef, boslabInView] = useInView({ threshold: 0.1 })
  const [locationRef, locationInView] = useInView({ threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 })

  return (
    <>
      <HeroSection />
      <StagesSection />
      <PricingSection />
      <CalculatorSection />
      <QuizSection />
      <TeamSection />
      <ReviewsSection />

      {/* BOSlab Technology Teaser */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="section-padding relative z-10" 
        id="boslab-teaser"
      >
        <div className="container-main max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-white/40 backdrop-blur-3xl border border-white/60 p-5 sm:p-8 md:p-16 lg:p-20 shadow-[0_20px_80px_-15px_rgba(30,58,138,0.1)]">
            {/* Liquid Glows */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary-400/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-accent-400/20 rounded-full blur-[80px]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary-200 text-xs text-primary-800 uppercase tracking-widest mb-6 font-bold bg-white/60 shadow-sm">Нейротехнологии</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-primary-900 leading-[1.1]">
                  BOSlab <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">нейробиоуправление</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Программно-аппаратный комплекс, перестраивающий работу мозга. ЭЭГ-тренинги формируют новые нейронные связи, подавляя тягу на физиологическом уровне.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    'Коррекция дефицита внимания',
                    'Снижение уровня тревожности',
                    'Восстановление самоконтроля',
                    'Среда БОС-терапевтов (К.П.Н.)',
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-base md:text-lg font-medium text-primary-900 bg-white/50 p-4 rounded-2xl border border-white/40 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </motion.div>
                  ))}
                </div>
                <button className="px-8 py-4 rounded-2xl bg-primary-900 text-white font-bold text-lg shadow-xl shadow-primary-900/30 hover:-translate-y-1 transition-all duration-300">
                  Подробнее о BOSlab
                </button>
              </div>

              {/* Visual Glass Box */}
              <div className="relative group perspective-[1000px]">
                <motion.div 
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex flex-col items-center justify-center overflow-hidden border border-white/20 shadow-[-20px_20px_60px_rgba(30,58,138,0.3)] relative"
                >
                  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/30 rounded-full blur-[80px]" />
                  
                  <div className="text-center relative z-10 px-8">
                    <div className="mb-8">
                      <img src="/images/glass/boslab.png" alt="BOSlab Brain" loading="lazy" className="w-48 h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl mix-blend-screen" />
                    </div>
                    <div className="text-2xl font-display font-black text-white mb-2">Нейробиоуправление</div>
                    <div className="text-base text-primary-200/80 font-medium tracking-wide">Альфа & Бета ритмы ЭЭГ</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-padding bg-surface-darker relative overflow-hidden" 
        id="location-section"
      >
        <div className="container-main relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block px-5 py-2 rounded-full border border-primary-200 text-xs text-primary-800 uppercase tracking-widest mb-6 font-bold bg-white shadow-sm">Расположение</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-900 mb-6 drop-shadow-sm">
              Два <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">удобных адреса</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Center Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#08152e] text-white flex items-center justify-center shadow-lg">
                  <img src="/images/glass/clinic.png" alt="Реабилитационный центр" loading="lazy" className="w-12 h-12 object-contain mix-blend-screen opacity-90" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary-900">Реабилитационный центр</h3>
                  <span className="text-sm font-semibold text-accent-600">~50 км от Москвы</span>
                </div>
              </div>
              <p className="text-text-primary font-medium text-base mb-4">
                МО, Солнечногорский р-н, д. Жуково, д. 1
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Тихий, экологически чистый район Подмосковья. Сосновый бор, река Истра. 
                Комфортные условия для эффективного восстановления и изоляции от среды потребления.
              </p>
            </motion.div>

            {/* Office Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#08152e] text-white flex items-center justify-center shadow-lg">
                  <img src="/images/glass/office.png" alt="Офис в Москве" loading="lazy" className="w-12 h-12 object-contain mix-blend-screen opacity-90" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary-900">Офис в Москве</h3>
                  <span className="text-sm font-semibold text-primary-600">м. ВДНХ / Останкино</span>
                </div>
              </div>
              <p className="text-text-primary font-medium text-base mb-4">
                ул. Академика Королёва, д. 13, стр. 1, офис 88
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Первичная консультация, приём передач для резидентов. 
                Удобный подъезд, закрытая парковка. Легко добраться.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="section-padding relative z-20" 
        id="final-cta"
      >
        <div className="container-main">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 bg-primary-900 text-center shadow-[0_30px_100px_-20px_rgba(30,58,138,0.5)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-8 pb-2 drop-shadow-xl">
                Сделайте первый {` `}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                  решающий шаг
                </span>
              </h2>
              <p className="text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Бесплатная диагностическая сессия (90 мин) с клиническим психологом. 
                Полностью анонимно. Без обязательств.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <button 
                  onClick={() => setOpen(true)}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-primary-900 font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Забронировать место
                </button>
                <a
                  href="tel:+74954141113"
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-800/50 border border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md"
                >
                  <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 495 414-11-13
                </a>
              </div>
              <p className="text-xs font-semibold text-primary-200/50 mt-8 tracking-widest uppercase">
                Анонимно 24/7
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <FAQSection faqs={HOME_FAQS} />
    </>
  )
}
