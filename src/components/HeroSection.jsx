import { useState, useRef } from 'react'
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
  const yContent = useTransform(smoothProgress, [0, 1], ['0%', '20%'])
  const opacityContent = useTransform(smoothProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={ref}
      className="relative min-h-[100svh] bg-white overflow-hidden pt-24"
    >
      {/* Split Background Layer */}
      <div className="absolute inset-0 flex -z-10">
        {/* Left Side: Medical Blue */}
        <div className="w-full lg:w-[60%] h-full bg-primary-800" />
        {/* Right Side: Image / Texture placeholder */}
        <div className="hidden lg:flex w-[40%] h-full bg-surface-muted relative items-center justify-center overflow-hidden">
           <ParticleTextEffect />
           <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-transparent w-32 pointer-events-none" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <motion.div 
        style={{ y: yContent, opacity: opacityContent }}
        className="container-main relative z-10 pt-16 md:pt-24 pb-32 flex flex-col items-start text-left"
      >
        <div className="max-w-2xl text-white">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Центр Практической Аддиктологии
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 whitespace-pre-wrap"
          >
            Поможем вам или вашему близкому освободиться от <span className="text-white">зависимости</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-100 leading-relaxed mb-10 max-w-xl"
          >
            Комплексный подход к лечению, опытные специалисты и комфортные условия для начала новой жизни.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setOpen?.(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-600 text-white font-bold text-lg hover:bg-accent-700 transition-all duration-300 transform active:scale-95 shadow-lg shadow-accent-600/30"
            >
              Получить консультацию
            </button>
            
            <a
              href="tel:+74954141113"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 border border-white/30"
            >
              Узнать больше
            </a>
          </motion.div>
        </div>

        {/* Floating Trust Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -bottom-24 left-0 w-full lg:w-[110%] xl:w-[120%]"
        >
          <div className="bg-primary-50 rounded-2xl p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-6 md:gap-8 shadow-elevated border border-primary-100 mr-4 lg:mr-0">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 md:gap-4 text-center sm:text-left">
                {/* Visual Icon per stat - using generic circle for now */}
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center shrink-0">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary-800 font-display flex items-end justify-center sm:justify-start gap-1">
                    <AnimatedCounter 
                      target={stat.value} 
                      duration={1500 + i * 200}
                    />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-medium text-text-secondary leading-tight mt-1">
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
