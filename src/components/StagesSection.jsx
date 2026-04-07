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
]

export default function StagesSection() {
  return (
    <section className="section-padding bg-surface-darker/50" id="stages-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Как мы работаем</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            5 этапов <span className="gradient-text">восстановления</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            От первого звонка до полной ресоциализации — системный подход на каждом этапе.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STAGES.map((stage, i) => (
              <div
                key={stage.num}
                className="group relative p-6 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{stage.icon}</span>
                  <span className="text-xs text-accent-400 font-mono font-bold tracking-wider">{stage.num}</span>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-text-primary mb-2 font-sans">{stage.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{stage.desc}</p>

                {/* Connector Arrow (Desktop only) */}
                {i < STAGES.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-accent-500/50">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-text-muted mb-4">Мы не адаптируем пациента под программу — мы проектируем программу под пациента</p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 text-white font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
            Начать с консультации
          </button>
        </div>
      </div>
    </section>
  )
}
