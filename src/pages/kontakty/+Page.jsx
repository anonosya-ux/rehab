import Breadcrumbs from '@/components/Breadcrumbs';
import YandexMap from '@/components/YandexMap';
import { useContactModal } from '@/components/ContactModal';
import { motion } from 'framer-motion';

export default function ContactsPage() {
  const { setOpen } = useContactModal();

  return (
    <div className="container-main section-padding pt-32 relative">
      <Breadcrumbs items={[{ label: 'Контакты', href: '/kontakty' }]} />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      
      <div className="mt-8 mb-16 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-primary mb-6">
          Наши <span className="gradient-text">контакты</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
          Мы на связи круглосуточно. Позвоните нам или оставьте заявку — специалист проконсультирует вас анонимно и бесплатно.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
        {/* Contact Info Board */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-heavy rounded-[32px] p-8 md:p-12 shadow-glow-emerald border border-white/10 relative overflow-hidden"
        >
          {/* Internal Glint */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

          <ul className="space-y-10">
            {/* Phone */}
            <li className="flex gap-5">
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center border border-primary-500/20 shrink-0">
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-text-muted text-sm uppercase tracking-widest mb-1.5 font-medium">Телефон горячей линии</h3>
                <a href="tel:+74954141113" className="text-2xl md:text-3xl font-display font-medium text-text-primary hover:text-primary-400 transition-colors block">
                  +7 495 414-11-13
                </a>
                <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-green-500/20 text-green-400 rounded-md">Круглосуточно, 24/7</span>
              </div>
            </li>

            {/* Address */}
            <li className="flex gap-5 border-t border-white/5 pt-10">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-text-muted text-sm uppercase tracking-widest mb-1.5 font-medium">Адрес центра</h3>
                <p className="text-lg text-text-primary leading-relaxed">
                  г. Москва, ул. Примерная, д. 12<br/>
                  <span className="text-text-secondary text-sm">Прием по предварительной записи</span>
                </p>
              </div>
            </li>

             {/* Email Msg */}
             <li className="flex gap-5 border-t border-white/5 pt-10">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-text-muted text-sm uppercase tracking-widest mb-1.5 font-medium">Электронная почта</h3>
                <p className="text-lg text-text-primary leading-relaxed">
                  info@lechenie-zavisimosti.ru
                </p>
              </div>
            </li>
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="mt-12 w-full py-4 bg-primary-500 text-surface-darker font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-400 hover:shadow-glow-emerald transition-all active:scale-95"
          >
            Оставить заявку на прием
          </button>
        </motion.div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full min-h-[400px]"
        >
          <YandexMap />
        </motion.div>
      </div>
    </div>
  );
}
