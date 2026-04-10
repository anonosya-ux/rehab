import React, { useRef, useState } from 'react';

const doctors = [
  {
    id: 1,
    name: 'Анатолий Козлов',
    role: 'Основатель и генеральный директор',
    degree: 'Клинический психолог',
    description: 'Психолог-психотерапевт. Координация работы центра и разработка стратегии реабилитации.',
  },
  {
    id: 2,
    name: 'Гречаная Т.Б.',
    role: 'Специалист по работе с родственниками',
    degree: 'Канд. мед. наук',
    description: 'Ст. научн. сотр. НМИЦ им. Сербского. Сопровождение созависимых, терапия психотравмы.',
  },
  {
    id: 3,
    name: 'Барцалкина В.В.',
    role: 'Эксперт по научно-методической работе',
    degree: 'Канд. псих. наук',
    description: 'Доцент МГППУ. Разработка программ подготовки специалистов-аддиктологов.',
  },
  {
    id: 4,
    name: 'Елена Хромышева',
    role: 'Амбулаторные программы',
    degree: 'Клинический психолог',
    description: 'Когнитивно-поведенческая терапия. Индивидуальная и групповая работа с химическими и поведенческими зависимостями.',
  },
  {
    id: 5,
    name: 'Георгий Петров',
    role: 'Отдел ресоциализации',
    degree: 'Клинический психолог',
    description: 'Руководитель отдела ресоциализации ЦПА «Цель». Разработка индивидуальных траекторий восстановления.',
  },
  {
    id: 6,
    name: 'Ирина Матвеева',
    role: 'Психотерапевт',
    degree: 'Нейропсихолог',
    description: 'Сертифицированный судебный эксперт-психолог, специалист по работе с РПП и созависимостью.',
  },
  {
    id: 7,
    name: 'Екатерина Козлова',
    role: 'Арт-терапевт',
    degree: 'Клинический психолог',
    description: 'Художник, скульптор, педагог по ИЗО. Индивидуальная и групповая терапия.',
  },
  {
    id: 8,
    name: 'Алексей Алексеев',
    role: 'Аддиктолог',
    degree: 'Психолог-консультант',
    description: 'Формирование мотивации к лечению, работа с травмами и буллингом.',
  },
  {
    id: 9,
    name: 'Артём Прокопьев',
    role: 'Аддиктолог',
    degree: 'Психолог-консультант',
    description: 'Специалист по работе с посттравматическим стрессовым расстройством (ПТСР).',
  },
  {
    id: 10,
    name: 'Остап Авраменко',
    role: 'Терапия и мотивация',
    degree: 'Психолог-консультант',
    description: 'Распознавание семейных паттернов, профилактика срыва зависимых от ПАВ.',
  }
];

function ProfileCard({ doctor }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-surface-dark bg-surface-muted p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/20 group h-full`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 126, 230, 0.1), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Avatar Area */}
        <div className="relative w-24 h-24 mb-6 rounded-full p-1 bg-gradient-to-tr from-accent-500/50 to-primary-500/50 overflow-hidden group-hover:from-accent-400 group-hover:to-primary-400 transition-all duration-300 mx-auto sm:mx-0">
          <div className="w-full h-full bg-surface-darker rounded-full flex items-center justify-center text-3xl font-display font-bold text-white/80 group-hover:text-white transition-colors">
            {doctor.name.charAt(0)}
          </div>
        </div>

        {/* Info */}
        <div className="flex-grow text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs font-semibold text-primary-300 uppercase tracking-wider mb-4">
            {doctor.degree}
          </div>
          
          <h3 className="text-2xl font-bold font-display text-text-primary mb-2">{doctor.name}</h3>
          <p className="text-sm font-medium text-accent-400 mb-4 uppercase tracking-wider">{doctor.role}</p>
          <p className="text-white/60 leading-relaxed text-sm mb-6 line-clamp-3">
            {doctor.description}
          </p>
        </div>

        {/* Action */}
        <div className="mt-auto pt-6 border-t border-white/5">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 group/btn px-5 py-2.5 rounded-xl bg-surface-muted hover:bg-surface-dark/10 border border-surface-dark hover:border-accent-400/50 text-white font-medium transition-all">
            <span>Записаться</span>
            <svg className="w-4 h-4 text-text-muted group-hover/btn:text-accent-400 transform group-hover/btn:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SpecialistsPage() {
  return (
    <div className="w-full relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-surface-dark">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-accent-600/5 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container-main relative z-10">
        <div className="mb-16 text-center lg:text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-muted border border-surface-dark rounded-full text-xs font-semibold text-white/60 uppercase tracking-widest mb-6">
            Наша команда
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-primary mb-6 leading-tight">
            Специалисты с <span className="gradient-text italic">клиническим</span> опытом
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            В ЦПА «Цель» работает более 14 профильных специалистов, включая кандидатов наук, доцентов МГППУ и научных сотрудников НМИЦ им. Сербского. Наша команда — залог успешного выздоровления.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doc) => (
            <ProfileCard key={doc.id} doctor={doc} />
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-24 p-8 md:p-12 glass-heavy rounded-3xl border border-primary-500/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-glow-emerald">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full" />
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-text-primary mb-4">
              Готовы начать лечение?
            </h3>
            <p className="text-text-secondary">
              Позвоните нам или оставьте заявку. Первичную консультацию и диагностику проводят руководители профильных направлений.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
               onClick={() => window.document.getElementById('header-cta-button')?.click()}
               className="px-8 py-4 bg-primary-500 text-surface-darker font-bold rounded-2xl hover:bg-primary-400 hover:shadow-glow-emerald transition-all transform hover:scale-105 inline-flex items-center gap-3"
            >
               Оставить заявку
               <svg className="w-5 h-5 flex-shrink-0 text-surface-darker" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
