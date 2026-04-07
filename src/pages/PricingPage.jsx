import React from 'react';
import PricingSection from '../components/PricingSection';

export default function PricingPage() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24">
      <div className="container-main mb-12 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
          Пакеты программ <span className="text-primary-400 italic">реабилитации</span>
        </h1>
        <p className="text-lg text-white/60">
          Мы предлагаем прозрачное ценообразование. Пакеты отличаются уровнем комфорта, интенсивностью терапии и количеством индивидуальных сессий.
        </p>
      </div>
      <PricingSection />
    </div>
  );
}
