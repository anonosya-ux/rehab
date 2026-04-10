import Breadcrumbs from '@/components/Breadcrumbs';
import { useContactModal } from '@/components/ContactModal';
import { motion } from 'framer-motion';

const SIGNS_OF_CODEPENDENCY = [
  "Вы постоянно решаете проблемы зависимого (отдаете долги, звоните на работу).",
  "Ваше настроение зависит от того, употребил ли сегодня близкий.",
  "Вы скрываете проблему от окружающих, чувствуете стыд и вину.",
  "Вы перестали уделять время своим хобби, друзьям и здоровью.",
];

export default function ForRelativesPage() {
  const { setOpen } = useContactModal();

  return (
    <div className="container-main section-padding pt-32 relative overflow-hidden">
      <Breadcrumbs items={[{ label: 'Для родственников', href: '/dlya-rodstvennikov' }]} />
      
      {/* Background Decor */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Hero Section for Relatives */}
      <div className="mt-8 mb-16 text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
        >
          Поддержка семьи
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-accent-600 mb-6"
        >
          Зависимость — болезнь <span className="gradient-text italic">всей семьи</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Вы не виноваты в зависимости близкого, но мы понимаем, какую боль вы испытываете. 
          Первый шаг к спасению зависимого начинается с исцеления созависимости членов его семьи.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12">
        {/* Intervention Service Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-heavy rounded-[32px] p-8 md:p-12 shadow-glow-emerald border border-surface-dark flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 rounded-2xl bg-surface-muted flex items-center justify-center mb-8 border border-surface-dark shadow-inner">
              <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-medium text-text-accent-600 mb-4">Интервенция</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Зависимый отрицает проблему и категорически отказывается лечиться? Уговоры, слезы и угрозы не работают (анозогнозия).
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              <strong>Интервенция</strong> — это выезд профессионального психолога-мотиватора к вам домой. Благодаря применению специальных кризисных методов общения, в 9 из 10 случаев зависимый соглашается поехать в клинику добровольно в тот же день.
            </p>
          </div>
          <button 
            onClick={() => setOpen(true)}
            className="w-full py-4 bg-primary-500 text-surface-darker font-bold rounded-2xl hover:bg-primary-400 transition-all hover:shadow-glow-emerald"
          >
            Срочно вызвать мотиватора
          </button>
        </motion.div>

        {/* Codependency Check Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[32px] p-8 md:p-12 border border-primary-200 flex flex-col justify-between hover:bg-white/[0.04] transition-colors"
        >
          <div>
            <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mb-8 border border-accent-500/20">
              <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-medium text-text-accent-600 mb-4">Признаки созависимости</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Созависимость — это патологическая адаптация к стрессу от жизни с химически зависимым человеком. Проверьте себя:
            </p>
            <ul className="space-y-4 mb-8">
              {SIGNS_OF_CODEPENDENCY.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-text-secondary text-base">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <button 
            onClick={() => setOpen(true)}
            className="w-full py-4 glass-light border border-surface-dark text-text-accent-600 font-bold rounded-2xl hover:bg-surface-dark/10 transition-all"
          >
            Записаться в группу для родственников
          </button>
        </motion.div>
      </div>

      {/* Info Block */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl bg-white/[0.02] border border-primary-200"
      >
        <p className="text-text-muted italic text-lg leading-relaxed">
          «Пока вы решаете проблемы зависимого, спасаете его от долгов и полиции — вы спонсируете его болезнь. По-настоящему любить зависимого — значит жестко исключить любую поддержку его употребления.»
        </p>
        <div className="mt-4 text-sm font-semibold text-primary-400 uppercase tracking-widest">— Главный психолог ЦПА Цель</div>
      </motion.div>
    </div>
  );
}
