import { useState } from 'react';

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-6 tracking-tight text-white drop-shadow-md">
            Частые <span className="text-primary/90 italic">вопросы</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Ответы на самые распространённые вопросы о лечении и реабилитации.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-white/5 ${openIndex === idx ? 'border-primary/30 shadow-[0_0_20px_rgba(45,212,191,0.1)]' : ''}`}
            >
              <button
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === idx ? 'text-primary' : 'text-white/90'}`}>
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-white/40'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="px-6 pb-6 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
