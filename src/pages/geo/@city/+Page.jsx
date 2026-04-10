import { usePageContext } from 'vike-react/usePageContext';
import NotFoundPage from '@/pages/_error/+Page';
import { geoCities } from '@/data/geo';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useContactModal } from '@/components/ContactModal';
import YandexMap from '@/components/YandexMap';

export default function GeoPage() {
  const pageContext = usePageContext();
  const city = pageContext.routeParams.city;
  const data = geoCities[city];
  const { setOpen } = useContactModal();

  if (!data) {
    return <NotFoundPage />;
  }

  // Schema.org LocalBusiness per seo-schema skill + local-legal-seo-audit skill
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": `Реабилитационный центр «Цель» — ${data.name}`,
    "url": `https://lechenie-narkomanii-alkogolizma.ru/geo/${city}/`,
    "telephone": "+7 495 414-11-13",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "д. 1",
      "addressLocality": "д. Жуково",
      "addressRegion": "Московская область",
      "postalCode": "141502",
      "addressCountry": "RU",
    },
    "areaServed": {
      "@type": "City",
      "name": data.name,
    },
    "medicalSpecialty": ["Наркология", "Психиатрия"],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₽₽₽",
  };

  return (
    <div className="w-full relative min-h-screen pt-20">
      {/* LocalBusiness Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="fixed inset-0 pointer-events-none z-[-1] bg-surface-darker">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-left mb-8">
            <Breadcrumbs items={[
              { label: 'Главная', href: '/' },
              { label: 'Города', href: '/geo/' },
              { label: data.name },
            ]} />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-surface-muted border border-surface-dark text-text-secondary text-sm mb-6 uppercase tracking-widest">
            Реабилитационный центр
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-text-accent-600 mb-6">
            Реабилитация от зависимости в <span className="gradient-text">{data.name}</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.description} Наш центр находится всего в {data.distance} от {data.nameNominative}.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setOpen(true)}
              className="px-8 py-4 bg-primary-500 text-surface-darker font-bold rounded-2xl hover:bg-primary-400 hover:shadow-glow-emerald transition-all transform hover:scale-105"
            >
              Бесплатная консультация
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="container-main max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-heavy p-10 rounded-[32px] border border-surface-dark shadow-glow-emerald">
              <h3 className="text-2xl font-display font-medium text-text-accent-600 mb-6">Удобная локация</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center flex-shrink-0 text-xl border border-primary-500/20">🚗</div>
                  <div className="mt-1">
                    <div className="font-semibold text-text-primary">Время в пути</div>
                    <div className="text-text-muted text-sm mt-1">~ {data.travelTime} на автомобиле</div>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent-500/20 flex items-center justify-center flex-shrink-0 text-xl border border-accent-500/20">🏥</div>
                  <div className="mt-1">
                    <div className="font-semibold text-text-primary">Идеальная среда</div>
                    <div className="text-text-muted text-sm mt-1">Изолировано от городских триггеров в тихих локациях Подмосковья</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass p-10 rounded-[32px] border border-primary-200">
              <h3 className="text-2xl font-display font-medium text-text-accent-600 mb-6">Почему выбирают нас</h3>
              <ul className="space-y-4">
                {data.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 flex-shrink-0 text-primary-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {ben}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Maps Block */}
          <div className="w-full">
            <h3 className="text-2xl font-display font-medium text-text-accent-600 mb-6 ml-4">Как добраться из г. {data.name}</h3>
            <YandexMap />
          </div>
        </div>
      </section>

      <PricingSection />
      
      <FAQSection faqs={data.faqs} />
    </div>
  );
}
