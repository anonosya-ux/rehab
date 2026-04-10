import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Подход к лечению и реабилитации | РЦ «Цель» Москва</title>
        <meta name="description" content="Комплексный подход к лечению алкоголизма и наркомании в центре «Цель». Мотивация, диагностика, БОСЛАБ, авторские программы психотерапии." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark/10 border border-primary-200 text-white/90 text-sm font-medium mb-6">
                <span>О центре</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
                Подход к лечению и <span className="text-accent-500">реабилитации</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Комплексное лечение зависимости: мотивация, диагностика, коррекция поведения и ресоциализация по индивидуальной траектории.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8 prose prose-lg prose-blue max-w-none">
              <p className="text-text-secondary leading-relaxed mb-8">
                Лечение зависимости в нашем центре основано на комплексном подходе: мотивация, диагностика, коррекция поведения и ресоциализация. Мы используем уникальные методы реабилитации наркомании и алкоголизма для жителей Москвы и Подмосковья, сочетая индивидуальную траекторию с доказанными программами.
              </p>

              <div className="bg-surface-soft p-8 rounded-2xl border border-surface-dark mb-10">
                <h3 className="text-2xl font-bold text-primary-900 mb-6 mt-0">Уникальные методы и методики подхода</h3>
                <p className="text-text-secondary mb-6">
                  Комплексный подход лечения зависимости в центре «Цель» включает в себя:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Мотивация на лечение:</strong> суггестивные техники, семейные интервенции для преодоления психологических защит.</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Диагностика эмоционально-поведенческого фона:</strong> тренинги саморегуляции с программно-аппаратным комплексом «БОСЛАБ».</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Авторская программа индивидуальной траектории реабилитации:</strong> для проработки психоэмоциональных особенностей.</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Авторская программа психотерапии для родственников:</strong> коррекция созависимых моделей поведения.</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Онлайн-программы социально-психологического сопровождения:</strong> для нестабильного эмоционального фона.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                Этапы программы реабилитации
              </h2>
              <p className="text-text-secondary mb-8">
                Программа длится в среднем 6 месяцев (с возможным продлением по индивидуальным факторам: возраст, стаж зависимости, тяжесть сопутствующих заболеваний).
              </p>

              <div className="space-y-6 mb-10">
                {/* Stage 1 */}
                <div className="flex gap-6 border border-surface-dark rounded-2xl p-6 bg-white hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Диагностико-мотивационный этап <span className="text-sm font-normal text-text-muted ml-2">(от 6 недель)</span></h4>
                    <p className="text-text-secondary text-base m-0">Формирование мотивации, адаптация к режиму. Психологическая поддержка при симптомах: перепады настроения, бессонница, агрессия, тяга к веществам. Пациент понимает: справиться самостоятельно невозможно — нужна профессиональная помощь.</p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex gap-6 border border-surface-dark rounded-2xl p-6 bg-white hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Коррекционный этап <span className="text-sm font-normal text-text-muted ml-2">(от 12 недель)</span></h4>
                    <p className="text-text-secondary text-base m-0">Вовлечение в группу, преодоление адаптационных проблем: низкая или завышенная самооценка, коммуникативные барьеры, лень, эмоциональные всплески. Формирование ответственного поведения через аналитические задания и работы в коллективе.</p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex gap-6 border border-surface-dark rounded-2xl p-6 bg-white hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Стабилизационный этап <span className="text-sm font-normal text-text-muted ml-2">(от 6 недель)</span></h4>
                    <p className="text-text-secondary text-base m-0">Приобретение устойчивости для жизни без ПАВ. Семейные консультации, разрешение семейных конфликтов, формирование Семейного договора. Переход к самостоятельности и постепенной ресоциализации.</p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex gap-6 border border-surface-dark rounded-2xl p-6 bg-white hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center font-black text-xl shrink-0">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900 mb-2">Постреабилитационное сопровождение</h4>
                    <p className="text-text-secondary text-base m-0">Закрепление навыков в социуме, профилактика рецидивов, контроль за выполнением индивидуального плана выздоровления. Регулярные встречи амбулаторной программы.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Преимущества нашего подхода
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-6">
                <li><strong className="text-primary-800">Большой опыт:</strong> многолетняя успешная практика в Москве.</li>
                <li><strong className="text-primary-800">Профессиональная команда:</strong> психиатры-наркологи, клинические психологи высшей категории.</li>
                <li><strong className="text-primary-800">Авторские программы:</strong> адаптируемые индивидуально под нужды и состояние каждого резидента.</li>
                <li><strong className="text-primary-800">Комплекс условий:</strong> безопасный стационар, сбалансированное питание, непрерывная терапия.</li>
              </ul>
              
              <p className="text-text-secondary mt-8 font-medium">
                Комплексный подход центра «Цель» даёт реальные результаты. Запишитесь на бесплатную консультацию по лечению зависимости — анонимно и оперативно!
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Начать лечение</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Специалисты контакт-центра готовы проконсультировать вас по любым вопросам, связанным с подходом к лечению и этапами реабилитации.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Круглосуточная помощь
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">+7 495 414-11-13</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
