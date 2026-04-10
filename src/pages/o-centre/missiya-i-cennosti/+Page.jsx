import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Миссия и ценности | РЦ «Цель» Москва</title>
        <meta name="description" content="Миссия и ценности реабилитационного центра «Цель» в Москве. Легитимность, комплексность, эффективность. Возвращаем трезвую, полноценную жизнь." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Миссия и <span className="text-accent-500">ценности</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Мы создаём условия для полного восстановления зависимых людей: физического, психологического, социального и духовного.
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
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                Миссия центра «Цель»
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Миссия реабилитационного центра «Цель» — оказание профессиональной помощи химически зависимым людям из Москвы и Подмосковья, создание безопасных и эффективных условий для прекращения употребления психоактивных веществ.
                <br /><br />
                Мы верим, что каждый человек заслуживает любви, счастья и уважения. Наша задача — помочь обрести трезвую, полноценную жизнь, используя современные, доказавшие эффективность методики и строго индивидуальный подход к каждому резиденту.
              </p>

              <div className="bg-surface-soft p-8 rounded-2xl border border-surface-dark mb-10">
                <h3 className="text-2xl font-bold text-primary-900 mb-4 mt-0">Наши ценности</h3>
                <p className="text-text-secondary mb-6">
                  Наши ценности определяют каждый этап лечения и реабилитации наркоманов и алкоголиков. Они являются фундаментом нашей работы:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Легитимность:</strong> Работа в строгом соответствии со Стратегией государственной антинаркотической политики РФ.</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Добровольность:</strong> Полное согласие клиента на участие в программе.</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Адресность:</strong> Индивидуальная траектория для каждого резидента (включая группы по специфике).</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Комплексность:</strong> Био-психо-социально-духовный подход к выздоровлению.</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span><strong className="text-primary-800">Конфиденциальность:</strong> Абсолютная гарантия защиты личных данных.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Ключевые задачи
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Цель нашей программы — помочь зависимым сформировать устойчивую мотивацию на трезвую жизнь и вернуть утраченные ценности: здоровье, семью, социальный статус.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Выработка механизмов саморегуляции для радости в трезвости.</li>
                <li>Формирование ответственного поведения и здорового образа жизни.</li>
                <li>Обучение навыкам предотвращения рецидивов (срывов).</li>
                <li>Восстановление системы ценностных норм и межличностных отношений.</li>
                <li>Поддержка семей: помощь словом и делом, коррекция созависимости.</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Наши преимущества
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Мы создаём атмосферу взаимовыручки, где каждый чувствует безопасность и поддержку. В реабилитационном центре «Цель» мы не обещаем чудес за несколько дней — мы даём надёжные, проверенные инструменты для пожизненного выздоровления.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-6">
                <li>Мощная научно-методическая база и сотрудничество с ведущими ВУЗами (МГППУ).</li>
                <li>Более 200 индивидуально адаптированных методических заданий.</li>
                <li>Мониторинг новейших мировых методик социальной психотерапии.</li>
                <li>Просветительская работа и профилактика зависимости в обществе.</li>
              </ul>

              <div className="mt-10 p-6 bg-primary-900 text-white rounded-2xl">
                <p className="text-lg font-medium italic mb-4">
                  «Человек должен поверить, что заслуживает счастья. Тогда у него появится мотивация к выздоровлению.»
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Нужна помощь?</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Мы готовы ответить на все вопросы о нашей программе, методах и условиях пребывания.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Бесплатная консультация
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Анонимно. Круглосуточно. 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
