import { usePageContext } from 'vike-react/usePageContext';
import NotFoundPage from '@/pages/_error/+Page';
import { hubData } from '@/data/hubs';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import TeamSection from '@/components/TeamSection';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function HubPage() {
  const pageContext = usePageContext();
  const hubId = pageContext.routeParams.hubId;
  const data = hubData[hubId];

  // If hubId is invalid, redirect or show 404
  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <div className="w-full relative min-h-screen pt-20">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-background">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Hub Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <div className="text-left mb-8">
            <Breadcrumbs items={[
              { label: 'Главная', href: '/' },
              { label: data.title },
            ]} />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium tracking-wide text-sm mb-6 uppercase glass-card">
            Специализированная программа
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-8 drop-shadow-lg">
            {data.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            {data.heroSlogan}
          </p>
          <div className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto mb-12">
            {data.description}
          </div>
          
          <button className="btn-modern group relative px-8 py-4 bg-primary text-background font-medium rounded-full overflow-hidden shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] hover:scale-[1.02]">
            <span className="relative z-10 flex items-center gap-2">
              Консультация врача
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </section>

      {/* Sub Topics Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-12 text-center text-white">
            Направления <span className="text-primary italic">лечения</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.subTopics.map((topic, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(45,212,191,0.15)] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 p-full h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">{topic.name}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Sections */}
      <PricingSection />
      
      <TeamSection />

      {/* Specific FAQs */}
      <FAQSection faqs={data.faqs} />
      
      <FloatingCTA />
    </div>
  );
}
