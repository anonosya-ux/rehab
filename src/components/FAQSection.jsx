import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQSection with Schema.org FAQPage structured data (seo-schema skill).
 * Updated with Framer Motion and Premium Liquid Glass design tokens.
 */
const FAQSection = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Schema.org FAQPage — JSON-LD per seo-schema skill
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="section-padding relative overflow-hidden z-10" id="faq">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-surface-darker -z-20" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[140px] -z-10" />

      {/* Schema.org FAQPage JSON-LD */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="container-main max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/20 text-xs text-primary-400 uppercase tracking-widest mb-6 font-medium bg-primary-500/10">F.A.Q.</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-text-primary">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Мы собрали ответы на самые распространенные вопросы о лечении, анонимности и гарантиях в нашем центре.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx 
                  ? 'border-primary-400/40 shadow-glow-emerald bg-white/[0.08]' 
                  : 'border-white/5 hover:bg-white/[0.06] hover:border-white/10'
              }`}
            >
              <button
                className="w-full text-left px-6 py-6 md:px-8 md:py-7 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-2xl"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className={`text-lg md:text-xl font-medium transition-colors pr-6 ${openIndex === idx ? 'text-primary-400' : 'text-text-primary'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-primary-500 text-surface-darker rotate-180' : 'bg-white/5 text-text-muted hover:bg-white/10'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-text-secondary leading-relaxed border-t border-white/5 mt-2 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
