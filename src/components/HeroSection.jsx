import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useContactModal } from '@/components/ContactModal'
import { ParticleTextEffect } from '@/components/ui/particle-text-effect'
import { GooeyText } from '@/components/ui/gooey-text-morphing'
import { LiquidButton } from '@/components/ui/liquid-glass-button'

export default function HeroSection() {
  const { setOpen } = useContactModal()
  
  // Advanced Scroll Parallax
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  // Aggressive parallax effects for 'One Moscow' immersion level
  const yContent = useTransform(smoothProgress, [0, 1], ['0%', '60%'])
  const opacityContent = useTransform(smoothProgress, [0, 0.4], [1, 0])
  const scaleContent = useTransform(smoothProgress, [0, 1], [1, 0.9])
  
  // Background Parallax
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.2])
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '15%'])

  return (
    <section 
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-primary-900 pb-16 pt-20"
    >
      {/* Deep Parallax Background Image */}
      <motion.div 
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 z-0 bg-primary-950"
      >
        <img 
          src="/images/presentation-07.png" 
          alt="Интерьер реабилитационного центра Цель" 
          className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity" 
        />
        {/* Magic UI Glassmorphism & Contrast Gradient */}
        <div className="absolute inset-0 bg-primary-950/50 sm:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 sm:from-primary-950/60 via-primary-950/40 sm:via-transparent to-primary-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/60 sm:via-primary-950/40 to-transparent" />
      </motion.div>

      {/* Background Particle Layer */}
      <div className="absolute inset-0 z-[1] mix-blend-screen opacity-100">
        <ParticleTextEffect />
      </div>

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
            className="text-lg md:text-2xl text-white/95 leading-relaxed mb-6 max-w-2xl font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]"
          >
            Комплексный подход к лечению зависимости. Опытные специалисты, 100% анонимность и комфортные условия для начала новой жизни.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-10 text-left"
          >
             <GooeyText 
                texts={["Анонимно", "Профессионально", "Без боли", "Навсегда"]} 
                morphTime={1.5}
                cooldownTime={2.5}
                textClassName="text-accent-400 font-display font-black text-3xl sm:text-4xl text-left left-0"
                className="h-[60px] flex items-center justify-start ml-0 w-full"
             />
          </motion.div>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
          >
            <LiquidButton
              onClick={() => setOpen?.(true)}
              className="w-full sm:w-auto shadow-[0_0_40px_rgba(45,212,191,0.3)] min-w-[260px]"
            >
              Бесплатная консультация
            </LiquidButton>
            
            <a
              href="tel:+74954141113"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 rounded-2xl text-white font-medium text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 backdrop-blur-md bg-white/5"
            >
              <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Срочный вызов (24/7)
            </a>
          </motion.div>
        </div>


      </motion.div>

    </section>
  )
}
