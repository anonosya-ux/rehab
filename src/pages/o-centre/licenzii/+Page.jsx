import React from 'react';

const licenses = [
  { id: 1, title: 'Медицинская лицензия №ЛО-77-01-01923', type: 'Медицина' },
  { id: 2, title: 'Сертификат соответствия ГОСТ Р 54990-2012', type: 'ГОСТ' },
  { id: 3, title: 'Аккредитация Департамента Труда и Соцзащиты', type: 'Аккредитация' },
  { id: 4, title: 'Сертификат BOSlab (Нейробиоуправление)', type: 'Оборудование' },
];

export default function LicensesPage() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-surface-dark">
        <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-muted border border-surface-dark rounded-full text-xs font-semibold text-white/60 uppercase tracking-widest mb-6">
            Официальные документы
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Лицензии и <span className="text-primary-400 italic">сертификаты</span> Центров
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            ЦПА «Цель» работает в строгом соответствии с законодательством РФ. Вся деятельность сертифицирована. Мы регулярно проходим проверки Минздрава и Роспотребнадзора.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {licenses.map((lic) => (
            <div key={lic.id} className="glass-card rounded-[2rem] p-4 flex flex-col items-center group cursor-pointer border border-surface-dark hover:bg-surface-dark/10 transition-colors">
              <div className="w-full aspect-[3/4] bg-surface-darker/50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                {/* Mockup for License Image */}
                <svg className="w-16 h-16 text-white/10 group-hover:text-primary-500/50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/>
                </svg>
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-all flex items-center justify-center">
                   <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md transition-opacity">Увеличить</span>
                </div>
              </div>
              <div className="text-center px-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary-400 mb-2 block">{lic.type}</span>
                <h3 className="text-white text-sm font-medium leading-snug">{lic.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
