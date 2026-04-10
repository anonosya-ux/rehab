import React from 'react';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';


const STAGES = [
  {
    id: 'stage-1',
    title: 'Мотивация и интервенция',
    duration: '1-3 дня',
    desc: 'Первый и самый сложный шаг. Зачастую зависимый не осознает свою проблему. Наша задача — мягко, но уверенно подвести его к решению начать лечение.',
    features: ['Выезд мотивационной бригады', 'Работа с сопротивлением', 'Консультация родственников', 'Сопровождение в клинику'],
    specialists: 'Клинические психологи, аддиктологи'
  },
  {
    id: 'stage-2',
    title: 'Медицинская детоксикация',
    duration: '3-14 дней',
    desc: 'Очищение организма от токсинов и снятие физической ломки. Проводится строго в условиях медицинского стационара под круглосуточным наблюдением врачей.',
    features: ['Инфузионная терапия', 'Медикаментозный сон', 'Восстановление электролитного баланса', 'Диагностика органов'],
    specialists: 'Врачи психиатры-наркологи, реаниматологи'
  },
  {
    id: 'stage-3',
    title: 'Базовая реабилитация (Интеграция)',
    duration: '3-6 месяцев',
    desc: 'Основной этап работы в закрытом загородном стационаре (ЦПА Цель). Изоляция от привычной среды, глубокая проработка психологических травм и формирование трезвого мышления.',
    features: ['Проживание в центре', 'Ежедневные групповые сессии', 'Индивидуальная психотерапия', 'Арт-терапия и спорт', 'Технология BOSlab'],
    specialists: 'Психотерапевты, гештальт-терапевты, нейропсихологи'
  },
  {
    id: 'stage-4',
    title: 'Социальная адаптация',
    duration: '1-3 месяца',
    desc: 'Постепенное возвращение в социум с сохранением поддержки специалистов. Выход в город, восстановление семейных связей, поиск работы или учеба.',
    features: ['Амбулаторное посещение групп', 'Семейные сессии', 'Страховка от срыва', 'Волонтерская помощь новичкам'],
    specialists: 'Социальные работники, семейные психологи'
  },
  {
    id: 'stage-5',
    title: 'Постлечебное сопровождение',
    duration: 'От 1 года',
    desc: 'Долгосрочная поддержка после окончания основного курса выздоровления. Помогаем справляться с кризисами и сохранять устойчивую ремиссию на протяжении всей жизни.',
    features: ['Участие в терапевтическом лагере', 'Ежемесячные консультации', 'Группы поддержки для выпускников', 'Пожизненная анонимная помощь'],
    specialists: 'Аддиктологи, наставники программы'
  }
];

export default function StagesDetailedPage() {
  const { setOpen } = useContactModal();

  return (
    <div className="w-full relative min-h-screen bg-surface-soft pb-24 overflow-clip">
      {/* Immersive Parallax Header */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-primary-950 px-4">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/presentation-05.png" 
            alt="Реабилитационный центр" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-soft via-surface-soft/80 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 drop-shadow-sm">
              Путь к свободе из <span className="text-primary-600">5 шагов</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed">
              Реабилитация — это системный процесс. Мы не обещаем быстрых чудес, мы проводим пациента шаг за шагом к осознанной трезвости.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-main relative z-20 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Sticky Navigation Sidebar for Desktop */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Оглавление</h3>
              <ul className="space-y-4">
                {STAGES.map((stage, idx) => (
                  <li key={stage.id}>
                    <a href={`#${stage.id}`} className="text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-start gap-3">
                      <span className="text-primary-400 font-bold">{idx + 1}.</span>
                      {stage.title}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 bg-primary-50 rounded-2xl p-6 border border-primary-100 text-center">
                <p className="text-sm text-slate-700 mb-4 font-medium">Нужна помощь прямо сейчас?</p>
                <button 
                  onClick={() => setOpen(true)}
                  className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>

          {/* Deep Scroll Content - Bento Cards */}
          <div className="lg:col-span-8 space-y-12 md:space-y-24">
            {STAGES.map((stage, idx) => (
              <motion.section 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={stage.id} 
                id={stage.id}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-700 text-3xl font-black font-display shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                      {stage.title}
                    </h2>
                    <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full uppercase tracking-wider">
                      Длительность: {stage.duration}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8">
                    {stage.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4 text-lg">Что включает в себя:</h4>
                      <ul className="space-y-3">
                        {stage.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-600 leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
                      <h4 className="font-semibold text-slate-900 mb-2">Кто работает с пациентом:</h4>
                      <p className="text-primary-700 font-medium">
                        {stage.specialists}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
            
            {/* Bottom CTA Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary-900 rounded-3xl p-8 md:p-14 text-center overflow-hidden relative shadow-2xl mt-12"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-900/40 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  Готовы сделать первый шаг?
                </h3>
                <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
                  Чем раньше начнется лечение, тем выше шансы на полное восстановление. Позвоните нам или оставьте заявку для консультации.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={() => setOpen(true)}
                    className="px-10 py-5 bg-white text-primary-900 hover:bg-slate-50 font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto text-lg"
                  >
                    Заказать звонок
                  </button>
                  <a 
                    href="tel:+74954141113"
                    className="px-10 py-5 bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold rounded-2xl transition-all w-full sm:w-auto text-lg"
                  >
                    8 495 414 11 13
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
