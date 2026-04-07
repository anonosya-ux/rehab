const TEAM_HIGHLIGHTS = [
  {
    name: 'Козлов А.Г.',
    role: 'Генеральный директор',
    qualifications: ['Клинический психолог', 'Психотерапевт', 'Аддиктолог'],
    initial: 'К',
  },
  {
    name: 'Барцалкина В.В.',
    role: 'Эксперт по научно-методическому сопровождению',
    qualifications: ['Канд. психол. наук', 'Доцент МГППУ', 'Клинический психолог'],
    initial: 'Б',
  },
  {
    name: 'Гречаная Т.Б.',
    role: 'Ведущий специалист по работе с родственниками',
    qualifications: ['Канд. мед. наук', 'НМИЦ им. Сербского', 'Психотерапевт'],
    initial: 'Г',
  },
  {
    name: 'Третяк Э.В.',
    role: 'Клинический психолог',
    qualifications: ['Канд. психол. наук', 'Доцент МГППУ', 'Психолог-психотерапевт'],
    initial: 'Т',
  },
  {
    name: 'Разуваев А.А.',
    role: 'Программный директор',
    qualifications: ['Магистр психологии', 'Спец. по ПТСР', 'Психотерапевт'],
    initial: 'Р',
  },
  {
    name: 'Хромышева Е.В.',
    role: 'Ведущий специалист амбулаторных программ',
    qualifications: ['Клинический психолог', 'Нейропсихолог', 'Психоаналитик'],
    initial: 'Х',
  },
]

export default function TeamSection() {
  return (
    <section className="section-padding bg-surface-darker/50" id="team-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Наша команда</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            14+ <span className="gradient-text">специалистов</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            3 кандидата наук, доценты МГППУ, сотрудники НМИЦ им. Сербского. Команда международного уровня.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_HIGHLIGHTS.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center text-xl font-bold text-accent-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  {member.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-text-primary font-sans truncate">{member.name}</h3>
                  <p className="text-xs text-accent-400/80 mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.qualifications.map((q, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-0.5 rounded-md text-[10px] bg-white/5 text-text-muted border border-white/5"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-xl glass-light text-text-primary font-medium text-sm hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
            Вся команда
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
