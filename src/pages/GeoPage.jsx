import { useParams, Navigate } from 'react-router-dom';
import { geoCities } from '../data/geo';
import FAQSection from '../components/FAQSection';
import PricingSection from '../components/PricingSection';

export default function GeoPage() {
  const { city } = useParams();
  const data = geoCities[city];

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="w-full relative min-h-screen pt-20">
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-background">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-6 uppercase tracking-widest">
            Реабилитационный центр
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Реабилитация от зависимости в <span className="text-primary">{data.name}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.description} Наш центр находится всего в {data.distance} от {data.nameNominative}.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-background font-semibold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all transform hover:scale-105">
              Бесплатная консультация
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Удобная локация</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-xl">🚗</div>
                  <div>
                    <div className="font-semibold text-white">Время в пути</div>
                    <div className="text-white/60 text-sm">~ {data.travelTime} на автомобиле</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-xl">🏥</div>
                  <div>
                    <div className="font-semibold text-white">Адрес центра</div>
                    <div className="text-white/60 text-sm">д. Жуково, д. 1 (в лесопарковой зоне)</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Преимущества для жителей {data.nameNominative}</h3>
              <ul className="space-y-3">
                {data.benefits.map((ben, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {ben}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      
      <FAQSection faqs={data.faqs} />
    </div>
  );
}
