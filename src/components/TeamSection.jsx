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
    <section className="section-padding bg-white" id="team-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs text-primary-600 uppercase tracking-widest mb-3 font-bold bg-primary-50 px-3 py-1 rounded-full border border-primary-100">Наша команда</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            14+ <span className="text-accent-600">специалистов</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            3 кандидата наук, доценты МГППУ, сотрудники НМИЦ им. Сербского. Команда международного уровня.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_HIGHLIGHTS.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl bg-surface-soft border border-surface-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:bg-white"
            >
              <div className="flex items-start gap-4">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-xl font-bold text-primary-800 flex-shrink-0 group-hover:scale-105 transition-transform group-hover:bg-primary-600 group-hover:text-primary-900">
                  {member.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-primary-900 font-sans truncate mb-1">{member.name}</h3>
                  <p className="text-sm text-text-secondary mb-3 font-medium">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.qualifications.map((q, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 rounded-md text-[11px] bg-white text-text-muted border border-surface-dark font-medium"
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
        <div className="text-center mt-12">
          <a href="/o-centre/vrachi" className="px-8 py-4 rounded-xl border-2 border-primary-800 text-primary-800 font-bold text-base hover:bg-primary-50 transition-all duration-300 inline-flex items-center gap-2">
            Вся команда
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
