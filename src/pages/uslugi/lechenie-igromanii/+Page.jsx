import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Лечение игровой зависимости (Лудомании) | РЦ «Цель» Москва</title>
        <meta name="description" content="Специализированная программа лечения игромании, лудомании и других поведенческих зависимостей в реабилитационном центре «Цель»." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596265371388-43edbaadab94?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Лечение игровой и поведенческой <span className="text-accent-500">зависимости</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Специализированная программа для людей, страдающих лудоманией, компьютерной и пищевой зависимостью. Помогаем восстановить контроль над жизнью.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Что такое игровая зависимость (лудомания)</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Игромания — это не просто «страсть к азарту», а патологическая зависимость, приводящая к финансовым, семейным и психологическим катастрофам. Как и химическая зависимость, лудомания меняет мозговые структуры, вызывая неконтролируемую тягу к игре.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Постоянные мысли об игре, планирование следующей ставки.</li>
                <li>Необходимость постоянного роста ставок для получения того же удовольствия.</li>
                <li>Ложь родным, воровство денег на игру или покрытие долгов.</li>
                <li>Депрессия, тревожность и суицидальные мысли при проигрышах.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Признаки иных поведенческих зависимостей</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Помимо лудомании, в реабилитационном центре «Цель» успешно лечат следующие виды аддикций:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Компьютерная зависимость</span>
                  <span className="text-text-secondary text-sm">Чрезмерное увлечение социальными сетями, онлайн-играми, порно-зависимость.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Пищевая зависимость</span>
                  <span className="text-text-secondary text-sm">Компульсивное переедание, булимия, орторексия и другие РПП.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Шопоголизм</span>
                  <span className="text-text-secondary text-sm">Компульсивные и неконтролируемые покупки вещей, без которых можно обойтись.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Рабочая зависимость (Трудоголизм)</span>
                  <span className="text-text-secondary text-sm">Одержимость работой в ущерб здоровью, друзьям и семье.</span>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Наш подход к лечению</h2>
              <p className="text-text-secondary mb-6">
                Лечение лудомании и поведенческих аддикций строится по принципам, схожим с химической реабилитацией, но с особым акцентом на поведенческие паттерны:
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Диагностика и мотивация</h3>
                    <ul className="list-disc pl-5 text-text-secondary">
                      <li>Тестирование на степень зависимости и сопутствующие расстройства.</li>
                      <li>Работа с отрицанием («это не зависимость, просто неудачная полоса»).</li>
                      <li>Финансовый аудит: оценка долгов и планирование финансового восстановления.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Психотерапия игромании</h3>
                    <ul className="list-disc pl-5 text-text-secondary">
                      <li>Когнитивно-поведенческая терапия (КПТ) — изменение установок «игра = способ заработка или единственное удовольствие».</li>
                      <li>Работа с триггерами: выявление ситуаций, провоцирующих желание играть (стресс, скука).</li>
                      <li>Навыки замещения: спорт, новые хобби, медитация вместо азарта.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Семейная терапия</h3>
                    <ul className="list-disc pl-5 text-text-secondary">
                      <li>Работа с созависимостью: как перестать платить долги игромана.</li>
                      <li>Восстановление утраченного доверия в семье.</li>
                      <li>Совместное финансовое планирование для безопасности семьи.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Ресоциализация и профилактика</h3>
                    <ul className="list-disc pl-5 text-text-secondary">
                      <li>Профилактика рецидивов: блокировка тематических сайтов, установка приложений родительского контроля.</li>
                      <li>Помощь в трудоустройстве и дисциплинированном восстановлении финансов.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-primary-900 mb-3 mt-0">Длительность лечения</h3>
                <p className="text-text-secondary mb-0">
                  Базовая программа составляет от 1 до 3 месяцев стационара, с последующим прохождением 6 месяцев постреабилитации в амбулаторном формате. Финальный результат напрямую зависит от искренней мотивации пациента и правильной поддержки его близких.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Остановить разрушение</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Лечение игровой зависимости — это шанс спасти семью и финансы. Психолог поможет объективно оценить ситуацию и выбрать подходящую программу. Не ждите финансового краха!
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Оставить заявку
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Конфиденциально и анонимно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
