import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Безопасность и конфиденциальность | РЦ «Цель» Москва</title>
        <meta name="description" content="Информационная, физическая и психологическая безопасность пациентов. Анонимное лечение в закрытом реабилитационном стационаре в Москве." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Безопасность и <span className="text-accent-500">конфиденциальность</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Комплексная защита пациентов на всех уровнях. Система обеспечения физического и эмоционального комфорта без страха осуждения.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Физическая безопасность</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                В центре «Цель» создана закрытая контролируемая среда, которая полностью исключает доступ к психоактивным веществам и гарантирует круглосуточную медицинскую поддержку.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <h3 className="text-xl font-bold text-primary-800 mb-3 mt-0">24/7 медицинский контроль</h3>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Регулярные осмотры врачом-терапевтом и психиатром-наркологом.</li>
                    <li>Наличие оснащённой аптечки экстренной медицинской помощи.</li>
                    <li>Строгий контроль за приемом назначенных препаратов.</li>
                    <li>Срочная госпитализация в профильную больницу при осложнениях.</li>
                  </ul>
                </div>

                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <h3 className="text-xl font-bold text-primary-800 mb-3 mt-0">Контролируемая среда</h3>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Закрытая территория с видеонаблюдением в общественных зонах.</li>
                    <li>Первичный осмотр личных вещей при поступлении (всегда с согласия).</li>
                    <li>Контроль содержимого посылок и передач от родственников.</li>
                  </ul>
                </div>

                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <h3 className="text-xl font-bold text-primary-800 mb-3 mt-0">Профилактика насилия и конфликтов</h3>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Персонал профессионально обучен работе с проявлениями агрессии и техникам деэскалации.</li>
                    <li>Обучение пациентов навыкам здоровой сублимации (через вербализацию, спорт и арт-терапию).</li>
                    <li>Своевременное выявление проблем на стадии предконфликта и разбор ситуаций со специалистами.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Информационная конфиденциальность (Анонимность)</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Анонимное лечение — базовое право нашего пациента. Мы гарантируем защиту личной информации по отношению к любым третьим лицам.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li><strong className="text-primary-800">Без учёта:</strong> Личные данные не передаются в государственные органы (ПНД, поликлиники).</li>
                <li><strong className="text-primary-800">Медиа:</strong> Фото и видеоматериалы снимаются только с письменного согласия.</li>
                <li><strong className="text-primary-800">Связь:</strong> Электронная связь с семьёй в первые недели происходит только через куратора.</li>
                <li><strong className="text-primary-800">Тайна историй:</strong> Внутри центра действует строгое правило «Что говорится в группе — остаётся в группе».</li>
                <li><strong className="text-primary-800">Информация:</strong> Сведения о пребывании и диагнозе передаются только родственникам по доверенности.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Психологическая безопасность</h2>
              <p className="text-text-secondary mb-6">
                Моральный климат в стационаре выстроен на принципах взаимного уважения и эмпатии. Наши специалисты предотвращают любой буллинг и поддерживают резидентов при прохождении трудных эмоциональных этапов.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary">Ведущие групп проходят обязательную супервизию каждые 3 месяца.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary">Индивидуальные сессии с психологом при интенсивных эмоциональных реакциях.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary">Тренинги, направленные на взращивание толерантности и доверия.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary">Персональный куратор назначается каждому новичку для успешной адаптации.</div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 border border-primary-100 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-primary-900 mb-4 mt-0">Баланс прав и обязанностей</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-primary-800 mb-2">Права пациента</h4>
                    <ul className="text-sm text-text-secondary space-y-1 p-0 m-0 list-none">
                      <li>• Свобода религии.</li>
                      <li>• Выбор методов терапии в рамках плана.</li>
                      <li>• Возможность подавать жалобы и предложения.</li>
                      <li>• Связь с внешним миром по графику.</li>
                      <li>• Право отказаться от программы по заявлению.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-800 mb-2">Обязанности пациента</h4>
                    <ul className="text-sm text-text-secondary space-y-1 p-0 m-0 list-none">
                      <li>• Соблюдение установленного распорядка.</li>
                      <li>• Честность в прохождении психотерапии.</li>
                      <li>• Уважительное отношение к группе.</li>
                      <li>• Выполнение рекомендаций врачей.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Безопасное место</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Центр «Цель» — это место, где можно открыться без страха. Если у вас есть опасения насчёт анонимности, звоните нам, и мы ответим на все вопросы.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Связаться с нами
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Анонимная линия поддержки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
