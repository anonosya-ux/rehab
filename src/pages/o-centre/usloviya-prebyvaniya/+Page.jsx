import { Head } from 'vike-react/Head';
import { motion } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';

export default function Page() {
  const { setOpen } = useContactModal();

  return (
    <>
      <Head>
        <title>Условия пребывания в реабилитационном центре | РЦ «Цель» Москва</title>
        <meta name="description" content="Комфортные условия для эффективной реабилитации. Проживание в экологически чистом районе Подмосковья, сбалансированное питание и чёткий режим дня." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary-900 border-b border-surface-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
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
                Условия <span className="text-accent-500">пребывания</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                В нашем центре созданы все условия для максимального комфорта и эффективности. Безопасная среда, сбалансированное питание и дисциплина.
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
              
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Проживание в центре реабилитации</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Наш центр расположен в современных корпусах в Подмосковье, удалённых от городской суеты, где пациенты живут в спокойной и экологически чистой обстановке, не имея доступа к ПАВ.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl flex items-start gap-3">
                  <div className="text-accent-600 font-bold mt-1">✓</div>
                  <div className="text-text-secondary text-sm">2- и 3-местные номера со всеми удобствами (ТУ, душ, современная мебель).</div>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl flex items-start gap-3">
                  <div className="text-accent-600 font-bold mt-1">✓</div>
                  <div className="text-text-secondary text-sm">Регулярная уборка, свежий воздух и ухоженная зелёная территория.</div>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl flex items-start gap-3">
                  <div className="text-accent-600 font-bold mt-1">✓</div>
                  <div className="text-text-secondary text-sm">Просторные общие зоны для общения, отдыха и чтения.</div>
                </div>
                <div className="bg-surface-soft p-5 border border-surface-dark rounded-xl flex items-start gap-3">
                  <div className="text-accent-600 font-bold mt-1">✓</div>
                  <div className="text-text-secondary text-sm">Спортивная площадка и безопасная прогулочная зона.</div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Питание</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Для физического восстановления организма предусмотрено четырёхразовое сбалансированное питание с учётом всех диетических рекомендаций.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-10">
                <li>Полноценный завтрак, обед, ужин и 2 полезных перекуса (полдника).</li>
                <li>Витаминизация меню для быстрого восстановления истощенного организма.</li>
                <li>Возможность составления индивидуального меню (при аллергиях или заболеваниях ЖКТ).</li>
                <li>Участие резидентов в посильных кухонных работах по графику для формирования ответственности.</li>
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Строгий, но гуманный режим дня</h2>
              <p className="text-text-secondary mb-6">
                Четкий распорядок помогает восстановить здоровую дисциплину и наладить циркадные ритмы:
              </p>

              <div className="overflow-x-auto mb-10 border border-surface-dark rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left text-sm text-text-secondary">
                  <thead className="bg-surface-soft text-primary-900 uppercase font-bold text-xs">
                    <tr>
                      <th scope="col" className="px-6 py-4">Время</th>
                      <th scope="col" className="px-6 py-4">Занятие</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-dark">
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">07:00–07:20</td>
                      <td className="px-6 py-3">Подъём, утренняя гигиена</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">07:20–08:00</td>
                      <td className="px-6 py-3">Зарядка, душ</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">08:00–08:30</td>
                      <td className="px-6 py-3">Завтрак</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">08:30–09:20</td>
                      <td className="px-6 py-3">Личное время, самоподготовка</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">09:20–11:20</td>
                      <td className="px-6 py-3">Основное занятие (терапия, тренинг)</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">11:20–11:40</td>
                      <td className="px-6 py-3">Перерыв</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">11:40–12:40</td>
                      <td className="px-6 py-3">Продолжение занятия</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">12:40–13:00</td>
                      <td className="px-6 py-3">Обед</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">13:00–14:00</td>
                      <td className="px-6 py-3">Отдых, сон</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">14:00–15:40</td>
                      <td className="px-6 py-3">Занятие (лекция, творчество)</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">15:40–16:00</td>
                      <td className="px-6 py-3">Полдник</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">16:00–18:00</td>
                      <td className="px-6 py-3">Свободное время, спорт, прогулка</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">18:00–19:00</td>
                      <td className="px-6 py-3">Ужин</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">19:00–20:00</td>
                      <td className="px-6 py-3">Вечернее занятие (фильм, обсуждение)</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">20:00–21:00</td>
                      <td className="px-6 py-3">Самоподготовка, дневник</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">21:00–22:00</td>
                      <td className="px-6 py-3">Свободное время</td>
                    </tr>
                    <tr className="hover:bg-primary-50">
                      <td className="px-6 py-3 font-medium text-primary-800">22:00</td>
                      <td className="px-6 py-3">Отбой</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Медицинский контроль и досуг</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3 mt-0">Безопасность</h3>
                  <ul className="space-y-2 text-text-secondary text-base">
                    <li>Круглосуточное дежурство медперсонала и психолога.</li>
                    <li>Полная конфиденциальность от внешних контактов.</li>
                    <li>Своевременная медпомощь при обострениях.</li>
                    <li>Временный запрет на личные гаджеты (по согласованию).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3 mt-0">Физическая активность</h3>
                  <ul className="space-y-2 text-text-secondary text-base">
                    <li>Ежедневные прогулки и спорт на свежем воздухе.</li>
                    <li>Творческие занятия: рисование, музыка, лепка.</li>
                    <li>Киносеансы профильных фильмов с обсуждением.</li>
                    <li>Праздники для сплочения терапевтической группы.</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-primary-50 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-primary-900 mb-2 mt-0">Условия для родственников</h3>
                <p className="text-text-secondary mb-0">Возможны еженедельные встречи (согласно графику индивидуальной программы), участие в группах для созависимых и постоянное информирование о прогрессе лечения (только с письменного согласия пациента).</p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-surface-soft p-6 rounded-2xl border border-surface-dark shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-4">Убедитесь сами</h4>
                <p className="text-sm text-text-secondary mb-6">
                  Дисциплина, комфорт и поддержка — основа нашего стационара. Свяжитесь с нами, чтобы задать уточняющие вопросы или записаться на экскурсию по центру.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 px-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold transition-colors mb-4"
                >
                  Записаться на консультацию
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
