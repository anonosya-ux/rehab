import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useContactModal } from '@/components/ContactModal'
import AnimatedCounter from '@/components/AnimatedCounter'
import { ParticleTextEffect } from '@/components/ui/particle-text-effect'

const TRUST_STATS = [
  { value: 10, label: 'лет опыта', suffix: '+' },
  { value: 14, label: 'специалистов', suffix: '+' },
  { value: 92, label: 'успешных ремиссий', suffix: '%' },
  { value: 4, label: 'программы', suffix: '' },
]

export default function HeroSection() {
  const { setOpen } = useContactModal()
  
  // Advanced Scroll Parallax
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const yContent = useTransform(smoothProgress, [0, 1], ['0%', '30%'])
  const opacityContent = useTransform(smoothProgress, [0, 0.6], [1, 0])
  const scaleContent = useTransform(smoothProgress, [0, 1], [1, 0.95])

  return (
    <section 
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-primary-900"
    >
      {/* Background Particle Layer */}
      <ParticleTextEffect />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/60 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-primary-900/40 pointer-events-none z-0 mix-blend-multiply" />

      <motion.div 
        style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
        className="container-main min-h-[100svh] relative z-10 pt-32 pb-24 flex flex-col justify-center items-start text-left"
      >
        <div className="max-w-3xl text-white relative">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-semibold tracking-wide mb-8 backdrop-blur-md shadow-xl shadow-primary-900/50 text-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 hidden"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white hidden"></span>
            </span>
            Центр Практической Аддиктологии
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 whitespace-pre-wrap drop-shadow-2xl"
          >
            Освобождение начинается <span className="text-accent-500">здесь</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-2xl text-primary-100 leading-relaxed mb-12 max-w-2xl font-light drop-shadow-md"
          >
            Комплексный подход к лечению независимости. Опытные специалисты, 100% анонимность и комфортные условия для начала новой жизни.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <button
              onClick={() => setOpen?.(true)}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-accent-600 text-white font-bold text-lg hover:bg-accent-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            >
              Получить консультацию
            </button>
            
            <a
              href="tel:+74954141113"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 backdrop-blur-sm"
            >
              Узнать больше
            </a>
          </motion.div>
        </div>

        {/* Trust Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full mt-16 md:mt-24 lg:w-[130%] max-w-[1200px]"
        >
          <div className="bg-surface-soft/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-6 md:gap-8 shadow-2xl border border-white/40">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-800 flex items-center justify-center shrink-0 shadow-inner">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-900 font-display flex items-end justify-center sm:justify-start gap-1">
                    <AnimatedCounter 
                      target={stat.value} 
                      duration={1500 + i * 200}
                    />
                    <span className="text-accent-600">{stat.suffix}</span>
                  </div>
                  <div className="text-sm md:text-base font-semibold text-text-secondary leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}
