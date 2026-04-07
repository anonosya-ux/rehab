import React from 'react';
import StagesSection from '../components/StagesSection';

export default function StagesPage() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24">
      <div className="container-main mb-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
          Этапы <span className="text-accent-400 italic">выздоровления</span>
        </h1>
        <p className="text-lg text-white/60">
          Реабилитация — это системный процесс. Мы не обещаем быстрых чудес, мы проводим пациента шаг за шагом к трезвой и осознанной жизни.
        </p>
      </div>
      <StagesSection />
    </div>
  );
}
