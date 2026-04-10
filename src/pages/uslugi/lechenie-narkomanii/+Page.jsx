import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Лечение наркомании | Бросить наркотики | РЦ «Цель» Москва</title>
        <meta name="description" content="Эффективное и анонимное лечение наркомании в клинике «Цель» в Москве. Снятие ломки, детоксикация, закрытый стационар и поддержка с эффективностью ремиссии 42%." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Лечение наркотической <span className="text-accent-500">зависимости</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Комплексная анонимная помощь наркозависимым из Москвы и Подмосковья: от снятия ломки до полноценной ресоциализации.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Анонимное лечение наркомании</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Мы понимаем, насколько важно сохранить в тайне процесс выздоровления. Анонимное лечение наркомании — это базовая политика центра «Цель»: личные данные не передаются в государственные структуры, исключена постановка на наркологический учёт.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Первичная консультация психолога 24/7 по телефону или онлайн абсолютно конфиденциальна.</li>
                <li>Экстренный выезд врача для снятия ломки конфиденциальным транспортом без опознавательных знаков.</li>
                <li>Полная медицинская защита информации — все данные используются исключительно внутри программы терапии.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Этапы лечения наркотической зависимости</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Снятие ломки и детоксикация</h3>
                    <p className="text-text-secondary mb-0">Врач-нарколог приезжает к вам домой или принимает в клинике. Проводятся инфузии, назначаются медикаменты для быстрого купирования острых симптомов (тревога, бессонница, костные и мышечные боли). Гарантировано полное очищение крови от токсинов.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Интервенция и мотивация</h3>
                    <p className="text-text-secondary mb-0">Синдром отрицания — главная преграда. Психолог-интервент помогает осознать глубину проблемы и формирует добровольную мотивацию на трезвость для дальнейшего поступления в стационар реабилитационного центра Подмосковья.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Стационарная реабилитация</h3>
                    <p className="text-text-secondary mb-0">Проживание в закрытом безопасном стационаре (длительность от 3 до 6 месяцев). Применяется прохождение индивидуальной программы, групповая терапия, системная работа с психологом и лечение созависимости для членов семьи.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mt-1 mb-2">Ресоциализация</h3>
                    <p className="text-text-secondary mb-0">Поддержка после выписки: посещение амбулаторных групп, онлайн-консультации, помощь с трудоустройством и жёсткий контроль плана предотвращения срывов.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">В чём эффективность центра «Цель»</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Академический подход</span>
                  <span className="text-text-secondary text-sm">Внедрены авторские программы (БОС-терапия, КПТ) и привлечены наркологи-кандидаты наук.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Результативность</span>
                  <span className="text-text-secondary text-sm">Подтвержденная статистика длительной трезвости — 42% резидентов в ремиссии более 3 лет.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Достойные условия</span>
                  <span className="text-text-secondary text-sm">Комфортное проживание в Подмосковье, 4-разовое питание и спортзал.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Семейная поддержка</span>
                  <span className="text-text-secondary text-sm">Профилактические группы и вебинары для созависимых родственников резидента.</span>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Сделайте первый шаг</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Не откладывайте решение. Звоните прямо сейчас — врач ответит на ваши вопросы, сориентирует по стоимости пакетов и предложит план действий.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Связаться с врачом
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Лечение наркомании анонимно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
