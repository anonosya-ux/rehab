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
      <section 
        ref={boslabRef}
        className="section-padding" 
        id="boslab-teaser"
        style={{
          opacity: boslabInView ? 1 : 0,
          transform: boslabInView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <div className="container-main">
          <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-12 lg:p-16">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-500/10 rounded-full blur-[100px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Технология</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  BOSlab <span className="gradient-text">нейробиоуправление</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Программно-аппаратный комплекс БОСЛАБ позволяет проводить ЭЭГ-тренинги (альфа-тренинги) 
                  и Т-ЭМГ-тренинги для восстановления когнитивных функций, коррекции дефицита внимания 
                  и развития навыков саморегуляции.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Коррекция когнитивных нарушений',
                    'Снижение уровня тревожности и стресса',
                    'Развитие концентрации и самоконтроля',
                    'Работа кандидата психол. наук, сертифицированного БОС-терапевта',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 text-primary-900 font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Подробнее о BOSlab
                </button>
              </div>

              {/* Visual Placeholder */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-800/50 to-accent-900/30 flex items-center justify-center overflow-hidden border border-primary-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧠</div>
                    <div className="text-lg font-semibold text-text-secondary">Нейробиоуправление</div>
                    <div className="text-sm text-text-muted mt-1">BOSlab — альфа & бета ритмы ЭЭГ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section 
        ref={locationRef}
        className="section-padding bg-surface-darker/50" 
        id="location-section"
        style={{
          opacity: locationInView ? 1 : 0,
          transform: locationInView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s',
        }}
      >
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Расположение</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Два <span className="gradient-text">удобных адреса</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Center Card */}
            <div className="p-8 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center">
                  <span className="text-2xl">🌲</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans">Реабилитационный центр</h3>
                  <span className="text-xs text-accent-400">~50 км от Москвы</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-3">
                МО, Солнечногорский р-н, д. Жуково, д. 1
              </p>
              <p className="text-text-muted text-xs leading-relaxed">
                Тихий, экологически чистый район Подмосковья. Сосновый бор, река Истра. 
                Комфортные условия для эффективного восстановления.
              </p>
            </div>

            {/* Office Card */}
            <div className="p-8 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans">Офис в Москве</h3>
                  <span className="text-xs text-primary-400">м. ВДНХ / Останкино</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-3">
                ул. Академика Королёва, д. 13, стр. 1, подъезд 4, офис 88
              </p>
              <p className="text-text-muted text-xs leading-relaxed">
                Первичная консультация, приём передач для резидентов. 
                Удобный подъезд от метро ВДНХ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        ref={ctaRef}
        className="section-padding" 
        id="final-cta"
        style={{
          opacity: ctaInView ? 1 : 0,
          transform: ctaInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <div className="container-main">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 bg-gradient-to-r from-accent-600/20 to-primary-600/20 border border-accent-400/10 text-center">
            <div className="absolute inset-0 bg-surface-dark/50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Сделайте первый шаг
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-8">
                Бесплатная консультация — 90 минут с клиническим психологом. 
                Анонимно, без обязательств.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900 font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  Записаться на консультацию
                </button>
                <a
                  href="tel:+74954141113"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl glass-light text-text-accent-600 font-semibold hover:bg-surface-dark/10 transition-all flex items-center justify-center gap-2"
                >
                  📞 +7 495 414-11-13
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={HOME_FAQS} />
    </>
  )
}
