import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="w-full pt-32 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-surface-dark">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-8 leading-tight">
            О центре практической <br className="hidden md:block"/> аддиктологии <span className="text-primary-400 italic">«Цель»</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Более 10 лет мы помогаем людям преодолевать химические и поведенческие зависимости, возвращая радость трезвой жизни пациентам и их семьям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="aspect-square bg-surface-darker/50 border border-white/10 rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjxwb2x5Z29uIGZpbGw9IiMxYTRiODIiIGZpbGwtb3BhY2l0eT0iMC4yIiBwb2ludHM9IjQgMCA4IDQgNCA4IDAgNCIvPjwvc3ZnPg==')] opacity-50" />
            <h2 className="text-4xl font-playfair font-bold text-white/20 text-center relative z-10">Здесь должно быть видео/фото реального центра</h2>
          </div>
          <div>
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">Наша философия</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Мы верим, что зависимость — это хроническое заболевание, требующее профессионального, комплексного и глубоко индивидуального подхода. Мы не просто "кодируем" или проводим детоксикацию, мы помогаем человеку изменить свой внутренний стержень.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              В основе наших программ лежат доказательные методы психотерапии, включая CBT (когнитивно-поведенческая терапия), технологию БОС-нейробиоуправления и системную работу с созависимыми членами семьи.
            </p>
            <div className="flex gap-4">
               <Link to="/o-centre/vrachi" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10">
                 Наша команда
               </Link>
               <Link to="/o-centre/licenzii" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 font-medium transition-colors border border-transparent hover:border-white/10">
                 Лицензии
               </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass rounded-[2rem] border border-white/10 mb-32">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-400 mb-2">10+</div>
            <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">Лет успешной работы</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-400 mb-2">14+</div>
            <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">Специалистов в штате</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-400 mb-2">90%</div>
            <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">Стойкая ремиссия</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-playfair font-bold text-primary-400 mb-2">24/7</div>
            <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">Горячая линия поддержки</div>
          </div>
        </div>

      </div>
    </div>
  );
}
