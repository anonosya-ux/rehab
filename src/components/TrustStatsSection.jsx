import { motion } from 'framer-motion'
import { Award, Users, Activity, ShieldCheck } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

const TRUST_STATS = [
  { value: 10, label: 'лет опыта', suffix: '+', icon: Award },
  { value: 14, label: 'специалистов', suffix: '+', icon: Users },
  { value: 92, label: 'успешных ремиссий', suffix: '%', icon: Activity },
  { value: 4, label: 'программы', suffix: '', icon: ShieldCheck },
]

export default function TrustStatsSection() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container-main flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1200px]"
        >
          <div className="bg-white/80 dark:bg-surface-soft/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between items-center gap-6 md:gap-8 shadow-2xl border border-white/60 dark:border-white/10 relative overflow-hidden">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 text-center sm:text-left z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-md text-primary-800 dark:text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-6 h-6 text-accent-600 dark:text-accent-300 drop-shadow-sm relative z-10" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-900 font-display flex items-end justify-center sm:justify-start gap-1">
                    <AnimatedCounter 
                      target={stat.value} 
                      duration={1500 + i * 200}
                    />
                    <span className="text-accent-500 dark:text-accent-600">{stat.suffix}</span>
                  </div>
                  <div className="text-sm md:text-base font-semibold text-text-secondary leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
