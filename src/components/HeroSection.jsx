import { useState, useEffect, useRef } from 'react'

const TRUST_STATS = [
  { value: '10+', label: 'лет опыта', suffix: '' },
  { value: '14', label: 'специалистов', suffix: '+' },
  { value: '3', label: 'канд. наук', suffix: '' },
  { value: '4', label: 'программы', suffix: '' },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero-section"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-darker via-surface-dark to-primary-900/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-accent-500/8 blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-400/5 blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative container-main text-center py-32 md:py-40">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-xs text-text-secondary mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse-soft" />
          Центр практической аддиктологии
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-text-primary">Если твоя</span>
          <span className="block gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
            ЦЕЛЬ
          </span>
          <span className="block text-text-primary mt-2">— ЖИЗНЬ!</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Комплексная помощь при химических и поведенческих зависимостях. 
          Научно обоснованный подход с использованием технологии нейробиоуправления BOSlab.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 text-white font-semibold text-lg hover:from-accent-400 hover:to-accent-300 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 active:translate-y-0"
            id="hero-cta-main"
          >
            Бесплатная консультация
          </button>
          <a
            href="tel:+74954141113"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-light text-text-primary font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +7 495 414-11-13
          </a>
        </div>

        {/* Trust Stats Bar */}
        <div
          className={`inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 px-8 py-5 rounded-2xl glass transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {TRUST_STATS.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="hidden md:block w-px h-8 bg-white/10" />}
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400">
                  {stat.value}<span className="text-accent-300">{stat.suffix}</span>
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-[10px] text-text-muted uppercase tracking-widest">Узнать больше</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-accent-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
