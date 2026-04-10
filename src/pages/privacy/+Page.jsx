import Breadcrumbs from '@/components/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <div className="container-main section-padding pt-32">
      <Breadcrumbs items={[{ label: 'Политика конфиденциальности', href: '/privacy' }]} />
      
      <div className="max-w-4xl mt-8 glass-card rounded-[32px] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
        
        <h1 className="text-3xl md:text-5xl font-display font-medium text-text-primary mb-8 relative z-10">
          Политика конфиденциальности
        </h1>
        
        <div className="prose prose-invert prose-emerald max-w-none relative z-10 text-text-secondary">
          <p className="text-lg">
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей (далее — «Пользователь») сайта Центра Практической Аддиктологии «Цель» (далее — «Сайт»). 
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">1. Основные понятия</h2>
          <p>
            <strong>Персональные данные (ПД):</strong> любая информация, относящаяся прямо или косвенно к определенному или определяемому физическому лицу (субъекту ПД). <br/>
            <strong>Обработка ПД:</strong> любое действие с ПД, совершаемое с использованием средств автоматизации или без них (сбор, запись, систематизация, накопление, использование, удаление).
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">2. Цели сбора данных</h2>
          <p>
            Мы собираем данные исключительно для:
          </p>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li>Предоставления первичной бесплатной консультации специалистом.</li>
            <li>Ответов на вопросы Пользователей относительно процесса реабилитации.</li>
            <li>Организации госпитализации или приема пациента.</li>
          </ul>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">3. Правовые основания</h2>
          <p>
            Обработка осуществляется на законной и справедливой основе в соответствии с Федеральным законом от 27.07.2006 г. № 152-ФЗ «О персональных данных».
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">4. Защита информации</h2>
          <p>
            Сайт обеспечивает полную анонимность. Вы можете не указывать свои настоящие данные или фамилию. Все передаваемые данные шифруются по протоколу SSL, доступ к ним имеют только сертифицированные врачи-дежурные.
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">5. Контакты</h2>
          <p>
            Любые вопросы по отзыву согласия на обработку ПД можно направить по телефону горячей линии: <a href="tel:+74954141113" className="text-primary-400 hover:text-primary-300">+7 495 414-11-13</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
