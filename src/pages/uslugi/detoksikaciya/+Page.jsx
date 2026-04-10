import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Детоксикация и медико-психологическое сопровождение | РЦ «Цель» Москва</title>
        <meta name="description" content="Безопасная детоксикация от наркотиков и алкоголя в Москве. Снятие ломки, абстинентного синдрома. Выезд нарколога на дом круглосуточно." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Детоксикация и снятие <span className="text-accent-500">ломки</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                Преодоление абстинентного синдрома, очищение организма от токсинов и профессиональная подготовка к полноценной реабилитации.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Почему нужна профессиональная детоксикация</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Психоактивные вещества крайне токсичны. При длительном употреблении они накапливаются в тканях, вызывая хронические заболевания печени, почек, сердца, психозы и деградацию личности. Детоксикация выводит продукты распада алкоголя, героина, синтетических наркотиков и других веществ.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Печень не способна справиться с накопленными токсинами самостоятельно.</li>
                <li>Самостоятельный резкий отказ от ПАВ вызывает тяжелейшую ломку, опасную для жизни.</li>
                <li>Без медикаментозного очищения невозможно эффективное психологическое лечение.</li>
                <li>Курс детоксикации многократно ускоряет общее физическое восстановление.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Этапы детоксикации в центре «Цель»</h2>
              
              <div className="space-y-6 mb-10">
                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">1. Купирование абстинентного синдрома</h3>
                  <p className="text-text-secondary mb-3">Снятие ломки — срочная помощь при острой абстиненции. Врач нарколог осуществляет выезд на дом (Москва и Подмосковье):</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Инфузионная терапия (капельницы) для быстрого восстановления водно-солевого баланса.</li>
                    <li>Седативные препараты при нарушениях сна, высокой тревоге и судорогах.</li>
                    <li>Снятие мышечных и костных болей («выкручивания»).</li>
                  </ul>
                </div>

                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">2. Основная детоксикация (Длительность 5–10 дней)</h3>
                  <p className="text-text-secondary mb-3">Глубокое очищение организма проводится в стационаре с использованием капельниц:</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Физраствор и сорбенты для быстрого вывода токсинов через почки.</li>
                    <li>Гемодез — связывает и нейтрализует накопившиеся яды в крови.</li>
                    <li>Витамины группы B, C, магний — экстренное восстановление нервной системы.</li>
                    <li>Гепатопротекторы — защита и регенерация клеток печени.</li>
                  </ul>
                </div>

                <div className="p-6 bg-surface-soft border border-surface-dark rounded-2xl">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 mt-0">3. Медико-психологическое сопровождение</h3>
                  <p className="text-text-secondary mb-3">Параллельно с физическим очищением к работе приступает клинический психолог:</p>
                  <ul className="list-disc pl-5 text-text-secondary mb-0">
                    <li>Снятие постабстинентной депрессии, купирование панических атак.</li>
                    <li>Критически важная мотивация на трезвость, проработка отрицания.</li>
                    <li>Интервенционные консультации для семьи: как выстроить правильное поведение.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Результаты правильной детоксикации</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Снятие физической тяги</span>
                  <span className="text-text-secondary text-sm">Полное исчезновение болевого синдрома и ломки за 3–7 дней.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Восстановление сна и аппетита</span>
                  <span className="text-text-secondary text-sm">Возвращение к нормальным физиологическим ритмам.</span>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl">
                  <span className="font-bold text-primary-800 block mb-2">Ясность мышления</span>
                  <span className="text-text-secondary text-sm">Нейтрализация воздействия ПАВ на мозг для готовности к психотерапии.</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-accent-600 bg-accent-50 rounded-r-xl">
                <h4 className="text-xl font-bold text-primary-900 mb-2">Безопасность и противопоказания</h4>
                <p className="text-text-secondary mb-0">
                  Все процедуры проводятся строго под круглосуточным контролем врача. Мы тщательно подбираем дозировки, учитывая аллергические реакции и сопутствующие заболевания сердца или печени. Для беременных или пациентов с тяжелыми нарушениями мы применяем безмедикаментозные (МКБ) методы детокса.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Вызвать нарколога на дом</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Снятие ломки и детоксикация — первый и необходимый шаг к свободе. Выезд дежурного врача в течение 20 минут.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Срочный вызов врача
                </button>
                <div className="text-center">
                  <span className="text-sm text-text-muted">Анонимно. Круглосуточно.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
