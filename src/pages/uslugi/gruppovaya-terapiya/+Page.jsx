import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Групповая терапия и тренинги | РЦ «Цель» Москва</title>
        <meta name="description" content="Групповая психотерапия в Москве и Подмосковье. Терапевтические группы, тренинги саморегуляции, арт-терапия и малые группы поддержки для зависимых." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark/10 border border-primary-200 text-white/90 text-sm font-medium mb-6">
                <span>Услуги</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
                Групповая терапия <span className="text-accent-500">и тренинги</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Безопасное терапевтическое сообщество для проработки глубинных причин зависимости, формирования новых моделей поведения и получения поддержки от единомышленников.
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
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Значение групповой терапии</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Групповая терапия — это сообщество людей, идущих к одной цели. Занятия в группе позволяют:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Социализироваться в безопасной среде без осуждения.</li>
                <li>Находить мотивацию: видя прогресс других, вы верите в свои силы.</li>
                <li>Тренировать навыки здорового общения и поддержки.</li>
                <li>Осуществлять самоконтроль и получать деликатную обратную связь.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Виды групповых занятий</h2>
              
              <div className="space-y-6 mb-10">
                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">1. Терапевтические группы</h3>
                  <p className="text-text-secondary mb-3">Групповые встречи с психологом, направленные на обсуждение личных трудностей, зависимого мышления и формирование здоровых моделей поведения. Темы включают:</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Осознание проблемы, принятие себя.</li>
                    <li>Работа со стыдом, гневом, чувством вины.</li>
                    <li>Проработка отношений с семьей и обществом.</li>
                    <li>Выявление и нейтрализация триггеров срыва.</li>
                  </ul>
                </div>

                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">2. Малые терапевтические группы</h3>
                  <p className="text-text-secondary mb-0">Небольшие группы с постоянным составом участников, позволяющие создать максимальный уровень доверия и глубже прорабатывать личные темы.</p>
                </div>

                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">3. Программа формирования трезвости</h3>
                  <p className="text-text-secondary mb-3">Структурированная работа, направленная на глубинные аспекты выздоровления:</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Осознание проблемы и принятие факта зависимости.</li>
                    <li>Формирование опоры и системы ценностей.</li>
                    <li>Глубокий самоанализ.</li>
                    <li>Работа с чувством вины и восстановление значимых отношений.</li>
                    <li>Поддержка сообщества и наставничество.</li>
                  </ul>
                  <p className="text-text-secondary mt-3">Программа предполагает регулярную работу с наставником и участие в поддерживающем сообществе людей, проходящих путь выздоровления.</p>
                </div>

                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">4. Тренинги саморегуляции и психообразование</h3>
                  <p className="text-text-secondary mb-3">Занятия, направленные на понимание природы зависимости и освоение навыков трезвой жизни:</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Управление стрессом без применения психоактивных веществ.</li>
                    <li>БОС-тренинг (Биологическая обратная связь).</li>
                    <li>Лекции по нейробиологии зависимости.</li>
                    <li>Обучение техникам мышечной релаксации и дыхательным практикам.</li>
                  </ul>
                </div>

                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">5. Семейные группы</h3>
                  <p className="text-text-secondary mb-3">Работа с близкими зависимого человека, направленная на изменение дисфункциональных семейных моделей. Родственники учатся:</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Устанавливать чёткие и здоровые границы.</li>
                    <li>Распознавать и предотвращать манипуляции.</li>
                    <li>Преодолевать излишний контроль и созависимость.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Правила групповой терапии</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Анонимность:</strong> «Что говорится в группе — остаётся в группе».</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Честность:</strong> Открытый разговор без прикрас и оправданий.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Без осуждения:</strong> Любой человек имеет право на ошибку и слабость.</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent-600 font-bold">✓</div>
                  <div className="text-text-secondary"><strong className="text-primary-800">Ответственность:</strong> Систематическое выполнение терапевтических заданий.</div>
                </div>
              </div>

              <div className="p-6 bg-primary-50 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-primary-900 mb-2 mt-0">Расписание</h3>
                <p className="text-text-secondary mb-0">Групповые занятия в стационаре и дневном отделении проходят с понедельника по пятницу. Постреабилитационная поддержка: вторник, четверг, суббота.</p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Начать посещение групп</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Участие в группе — один из самых мощных инструментов преодоления зависимости. Запишитесь на первичную консультацию для составления плана терапии.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Записаться на приём
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Первичная диагностика анонимна</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
