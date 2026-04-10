import Breadcrumbs from '@/components/Breadcrumbs';

export default function UserAgreement() {
  return (
    <div className="container-main section-padding pt-32">
      <Breadcrumbs items={[{ label: 'Пользовательское соглашение', href: '/agreement' }]} />
      
      <div className="max-w-4xl mt-8 glass-card rounded-[32px] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[120px] pointer-events-none" />
        
        <h1 className="text-3xl md:text-5xl font-display font-medium text-text-primary mb-8 relative z-10">
          Пользовательское соглашение
        </h1>
        
        <div className="prose prose-invert prose-emerald max-w-none relative z-10 text-text-secondary">
          <p className="text-lg">
            Настоящее Пользовательское соглашение (далее — «Соглашение») регламентирует отношения между ЦПА «Цель» и Пользователем сети Интернет, использующим сайт.
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">1. Общие положения</h2>
          <p>
            Использование материалов и сервисов Сайта регулируется нормами действующего законодательства Российской Федерации. <br/>
            Сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ.
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">2. Медицинский дисклеймер</h2>
          <div className="bg-primary-900/40 border border-primary-500/20 p-5 rounded-2xl my-6">
            <strong className="text-primary-400">Внимание:</strong> Информация, размещенная на Сайте, не может быть использована для постановки диагноза или самолечения и не заменяет очную консультацию врача-специалиста. 
            При любых симптомах зависимости или ухудшения состояния необходимо немедленно обратиться к медицинскому работнику.
          </div>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">3. Обязательства Пользователя</h2>
          <p>
            Пользователь соглашается не предпринимать действий, которые могут рассматриваться как нарушающие российское законодательство или нормы международного права, в том числе в сфере интеллектуальной собственности, авторских и смежных прав.
          </p>

          <h2 className="text-2xl text-text-primary mt-10 mb-4 font-display">4. Прочие условия</h2>
          <p>
            Все возможные споры, вытекающие из настоящего Соглашения или связанные с ним, подлежат разрешению в соответствии с действующим законодательством РФ. Мы оставляем за собой право вносить изменения в настоящее соглашение без предварительного уведомления.
          </p>
        </div>
      </div>
    </div>
  );
}
