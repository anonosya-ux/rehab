import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Амбулаторные программы и дневной стационар | РЦ «Цель» Москва</title>
        <meta name="description" content="Амбулаторное лечение зависимости в Москве. Дневной стационар позволяет совмещать реабилитацию с обычной жизнью, работой и семьей." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543865893-b2611e9a31a9?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Амбулаторные программы / <span className="text-accent-500">дневной стационар</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Амбулаторное лечение зависимости в Москве — оптимальный вариант для тех, кто хочет совмещать качественную реабилитацию с работой, учёбой и семьёй.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Кому подходят амбулаторные программы</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Наши амбулаторные программы и дневной стационар рекомендуются в следующих случаях:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Людям с социальной мотивацией и стабильной поддержкой семьи.</li>
                <li>На ранних стадиях зависимости или для поддержания ремиссии.</li>
                <li>После стационарной реабилитации (как профилактика срывов).</li>
                <li>Тем, кто не может взять длительный отпуск с работы или учебы.</li>
                <li>Подросткам и молодёжи с лёгкими формами зависимости.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Особенности дневного стационара</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Посещение центра происходит с 9:00 до 18:00 (5 дней в неделю). Пациент уезжает ночевать домой, но проводит весь день в структурированной и контролируемой среде, наполненной терапией.
              </p>
              <div className="bg-surface-soft border border-surface-dark rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-primary-900 mb-4 mt-0">Распорядок дня</h3>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">09:00–09:30</span>
                    <span className="text-text-secondary">Утренний чек-ин, анализ самочувствия.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">09:30–11:00</span>
                    <span className="text-text-secondary">Групповая терапия или индивидуальная сессия.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">11:00–11:20</span>
                    <span className="text-text-secondary">Кофе-брейк, неформальное общение.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">11:20–13:00</span>
                    <span className="text-text-secondary">Основной терапевтический блок: тренинги, лекции.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">13:00–14:00</span>
                    <span className="text-text-secondary">Обед (сбалансированное питание в центре).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">14:00–15:30</span>
                    <span className="text-text-secondary">Работа с домашним заданием, творческие группы.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">15:30–16:00</span>
                    <span className="text-text-secondary">Физическая активность (йога, прогулка).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent-600 font-bold shrink-0 w-24">16:00–17:30</span>
                    <span className="text-text-secondary">Вечерняя групповая сессия, подведение итогов, план на завтра.</span>
                  </li>
                  <li className="flex gap-4 border-t border-surface-dark pt-3 mt-1">
                    <span className="text-accent-600 font-bold shrink-0 w-24">17:30–18:00</span>
                    <span className="text-text-secondary">Чек-аут, анализ дня.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Длительность и содержание программы</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Длительность программы составляет от 1 до 6 месяцев в зависимости от тяжести зависимости и динамики выздоровления. После 2 месяцев возможен переход на поддерживающий этап (посещение 1–2 раза в неделю).
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Индивидуальная терапия с психологом (1–2 раза в неделю).</li>
                <li>Групповая терапия: профилактика триггеров и работа по шагам (3 раза в неделю).</li>
                <li>Лекции и тренинги: управление эмоциями, стрессоустойчивость.</li>
                <li>Семейные сессии (прорабатываются по необходимости).</li>
                <li>Мониторинг трезвости: регулярные тесты и чек-ины.</li>
                <li>Горячая линия 24/7 для экстренной психологической поддержки.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Преимущества дневного стационара перед домашним лечением</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-soft p-4 rounded-xl border border-surface-dark">
                  <span className="font-bold text-primary-800 block mb-1">Структурированный день</span>
                  <span className="text-text-secondary text-sm">Снижение рисков и отсутствие соблазнов, свойственных домашней среде.</span>
                </div>
                <div className="bg-surface-soft p-4 rounded-xl border border-surface-dark">
                  <span className="font-bold text-primary-800 block mb-1">Сила группы</span>
                  <span className="text-text-secondary text-sm">Окружение единомышленников снижает вероятность срыва.</span>
                </div>
                <div className="bg-surface-soft p-4 rounded-xl border border-surface-dark">
                  <span className="font-bold text-primary-800 block mb-1">Профессиональный контроль</span>
                  <span className="text-text-secondary text-sm">Возможность оперативной корректировки плана реабилитации.</span>
                </div>
                <div className="bg-surface-soft p-4 rounded-xl border border-surface-dark">
                  <span className="font-bold text-primary-800 block mb-1">Экономия</span>
                  <span className="text-text-secondary text-sm">Значительно выгоднее закрытого стационара, но эффективнее самостоятельных попыток.</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-accent-600 bg-accent-50 rounded-r-xl">
                <h4 className="text-xl font-bold text-primary-900 mb-2">Кому программа не подходит?</h4>
                <p className="text-text-secondary mb-0">
                  Людям с тяжёлыми формами зависимости при высоком риске срыва, отсутствующей мотивации, без сильной семейной поддержки или с сопутствующими острыми психическими расстройствами — в таких случаях показан только круглосуточный стационар.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Начните реабилитацию амбулаторно</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Дневной стационар — это шанс сохранить работу и активную жизнь, параллельно и эффективно избавляясь от зависимости.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Записаться на диагностику
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Анонимно. Звонок бесплатный. 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
