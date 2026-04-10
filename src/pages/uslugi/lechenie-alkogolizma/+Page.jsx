import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Лечение алкоголизма анонимно | РЦ «Цель» Москва</title>
        <meta name="description" content="Анонимное лечение алкогольной зависимости в Москве и Подмосковье. Вывод из запоя, кодирование, стационарная реабилитация и работа с созависимостью." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541535882654-2ea07c13ac99?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
                <span>Услуги</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
                Лечение зависимости <span className="text-accent-500">от алкоголя</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Комплексный подход, позволяющий работать не только с физической тягой, но и с психологическими причинами болезни.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Когда нужно начинать лечение</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Алкоголизм — это не «плохая привычка», а хроническое прогрессирующее заболевание, которое неизбежно приводит к утрате работы, разрушению семьи и серьёзным соматическим осложнениям. Чем раньше начато лечение, тем выше шансы на стабильную ремиссию.
              </p>
              
              <div className="bg-surface-soft p-6 border border-surface-dark rounded-2xl mb-10">
                <h3 className="text-xl font-bold text-primary-900 mb-4 mt-0">Повод обратиться к наркологу:</h3>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-0">
                  <li>Регулярно возникают запои, требуется «опохмелиться» по утрам.</li>
                  <li>Алкоголь становится основным и единственным способом снятия стресса и расслабления.</li>
                  <li>Появляются провалы в памяти, агрессия, неконтролируемые конфликты в семье.</li>
                  <li>Человек обещает «завязать», искренне верит в это, но снова возвращается к алкоголю.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Комплексный подход центра «Цель»</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Мы используем многоэтапный подход к лечению алкоголизма, который позволяет устранить не только физическую потребность в веществе, но и глубинные психологические и социальные факторы аддикции.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Детоксикация и стабилизация состояния</h3>
                    <p className="text-text-secondary mb-0">На этом этапе проводится снятие ломки, экстренное выведение из запоя и коррекция соматического состояния. Применяются инфузионные схемы (капельницы) и медикаментозное купирование тревоги.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Реабилитация алкоголизма в стационаре</h3>
                    <p className="text-text-secondary mb-0">Проходит в закрытом стационаре в экологически чистом районе Подмосковья, исключающем доступ к алкоголю. Включает диагностику, индивидуальную траекторию психотерапии, групповые занятия и работу с созависимостью семьи.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Постреабилитационное сопровождение</h3>
                    <p className="text-text-secondary mb-0">По завершении стационара пациент плавно интегрируется в социум через посещение амбулаторных групп поддержки, онлайн-сопровождение, помощь в возвращении к работе.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Применяемые методы лечения</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Когнитивно-поведенческая терапия (КПТ):</strong> Изменение разрушительных убеждений и привычек.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Групповая терапия:</strong> 12 шагов, поддержка и обмен опытом с другими зависимыми.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Эмоциональная саморегуляция:</strong> Работа со стрессом, агрессией и триггерами.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Семейная терапия:</strong> Восстановление доверительных отношений, помощь близким.</div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-primary-900 mb-2 mt-0">Сколько длится лечение</h3>
                <p className="text-text-secondary mb-0">
                  Сроки напрямую зависят от стадии аддикции, состояния здоровья и готовности пациента. В среднем стационарная реабилитация занимает от 1 до 6 месяцев. В индивидуальный план всегда включается продление программы и амбулаторная поддержка.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Анонимная консультация</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Наши специалисты объяснят, как правильно и без конфликтов разговаривать с зависимым, чтобы мягко мотивировать его на лечение в клинике.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Задать вопрос врачу
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Лечение алкоголизма анонимно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
