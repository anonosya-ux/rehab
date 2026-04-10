import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STAGES = [
  {
    num: '01',
    title: 'Первичная консультация',
    desc: '90-120 минут. Очно в московском офисе или онлайн. Выяснение сути проблемы, уровня риска и мотивации.',
    icon: '🩺',
  },
  {
    num: '02',
    title: 'Первичная мотивация',
    desc: 'Суггестивные методики формирования убеждения в необходимости прохождения курса.',
    icon: '💬',
  },
  {
    num: '03',
    title: 'Детоксикация',
    desc: 'Медикаментозная терапия в стационаре. Очищение организма, снижение тяги к ПАВ.',
    icon: '🏥',
  },
  {
    num: '04',
    title: 'Программа в Центре',
    desc: 'Индивидуальная психотерапия, BOSlab нейробиоуправление, групповая терапия, спорт.',
    icon: '🧠',
  },
  {
    num: '05',
    title: 'Ресоциализация',
    desc: 'Амбулаторное сопровождение. Профориентация, тренинги, профилактика срывов.',
    icon: '🌱',
  },
];

const StageCard = ({ stage, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`relative flex items-center justify-between md:justify-normal w-full mb-16 md:mb-24 last:mb-0 ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Desktop empty spacer */}
      <div className="hidden md:block w-5/12" />
      
      {/* Center Node */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-surface-soft shadow-[0_0_30px_rgba(30,58,138,0.2)] z-10">
        <span className="text-xl">{stage.icon}</span>
      </div>

      {/* Content Card */}
      <div className="w-[calc(100%-4rem)] ml-auto md:ml-0 md:w-5/12">
        <div className={`p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(30,58,138,0.12)] transition-shadow duration-500 relative overflow-hidden group`}>
          {/* Subtle liquid glow on hover */}
          <div className="absolute -inset-24 bg-gradient-to-r from-primary-400/0 via-primary-300/10 to-primary-400/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 transition-all duration-1000 blur-2xl" />
          
          <div className="relative z-10">
             <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary-400 mb-2 block uppercase">Этап {stage.num}</span>
             <h3 className="text-xl sm:text-2xl font-display font-bold text-primary-900 mb-3">{stage.title}</h3>
             <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-medium">{stage.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function StagesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="section-padding relative overflow-hidden bg-surface-soft" id="stages-section">
      <div className="absolute top-40 left-0 w-full h-[800px] bg-gradient-to-b from-primary-50 to-transparent pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-primary-200 text-xs text-primary-800 uppercase tracking-widest mb-6 font-bold bg-white shadow-sm">Как мы работаем</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-900 mb-6 drop-shadow-sm">
            5 этапов <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">восстановления</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            От первого звонка до полной ресоциализации — системный подход на каждом этапе, как часовой механизм.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">
          {/* The static background line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 -translate-x-1/2 rounded-full" />
          
          {/* The animated progressive line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient-to-b from-accent-400 to-primary-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(30,58,138,0.5)] origin-top"
            style={{ height: lineHeight }}
          />

          <motion.div style={{ y: yParallax }}>
            {STAGES.map((stage, i) => (
              <StageCard key={stage.num} stage={stage} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-sm font-medium text-text-muted mb-6">Мы не адаптируем пациента под программу — мы проектируем программу под пациента</p>
          <button className="px-10 py-5 rounded-2xl bg-primary-900 text-white font-bold text-lg hover:bg-primary-800 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
            Начать с консультации
          </button>
        </motion.div>
      </div>
    </section>
  );
}
