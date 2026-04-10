import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// === Context for modal state ===
const ContactModalContext = createContext({ open: false, setOpen: () => {} });

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}

// === Phone mask utility ===
function formatPhone(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 1) return '+7 ';
  if (digits.length <= 4) return `+7 ${digits.slice(1)}`;
  if (digits.length <= 7) return `+7 ${digits.slice(1, 4)} ${digits.slice(4)}`;
  if (digits.length <= 9) return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}

// === Premium Liquid Glass Modal ===
export default function ContactModal() {
  const { open, setOpen } = useContactModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [problemType, setProblemType] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, setOpen]);

  function validate() {
    const errs = {};
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 11) errs.phone = 'Введите номер телефона полностью';
    if (!consent) errs.consent = 'Обязательное согласие (152-ФЗ)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, problemType }),
      }).catch(() => {}); 
      
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setIsSubmitting(false);
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('+7 ');
      setProblemType('');
      setConsent(false);
      setErrors({});
    }, 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-surface-darker/60 backdrop-blur-xl"
            onClick={handleClose}
          />

          {/* Liquid Glass Modal Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md glass-heavy rounded-[32px] p-8 md:p-10 shadow-glow-emerald overflow-hidden"
          >
            {/* Top-edge internal glint */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Закрыть"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-emerald border border-primary-500/30">
                  <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-display font-semibold text-text-primary mb-3">Принято!</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Врач свяжется с вами в течение 5 минут. Ваш номер в полной безопасности.
                </p>
                <button 
                  onClick={handleClose} 
                  className="w-full px-6 py-4 bg-primary-500 text-surface-darker font-bold rounded-2xl hover:bg-primary-400 hover:shadow-glow-emerald transition-all"
                >
                  Вернуться на сайт
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="text-3xl font-display font-semibold text-text-primary mb-2">
                  Помощь врача
                </h2>
                <p className="text-text-secondary text-sm mb-8">
                  Консультация полностью <span className="text-text-primary">анонимна и бесплатна</span>. 24/7.
                </p>

                <div className="space-y-5">
                  <div className="relative group">
                    <input
                      ref={firstInputRef}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" "
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-text-primary focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-colors peer"
                    />
                    <label htmlFor="name" className="absolute left-5 top-4 text-text-muted transition-all peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-surface-darker peer-focus:px-2 peer-focus:text-primary-400 rounded-full peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-surface-darker peer-[:not(:placeholder-shown)]:px-2">
                      Как к вам обращаться?
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      placeholder=" "
                      required
                      id="phone"
                      className={`w-full bg-white/5 border rounded-2xl py-4 px-5 text-text-primary focus:outline-none transition-colors peer ${errors.phone ? 'border-accent-500 focus:border-accent-400' : 'border-white/10 focus:border-primary-400 focus:bg-white/10'}`}
                    />
                    <label htmlFor="phone" className={`absolute left-5 top-4 transition-all peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-surface-darker peer-focus:px-2 rounded-full peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-surface-darker peer-[:not(:placeholder-shown)]:px-2 ${errors.phone ? 'text-accent-500 font-medium' : 'text-text-muted peer-focus:text-primary-400'}`}>
                      Телефон *
                    </label>
                    {errors.phone && <p className="text-accent-500 text-[11px] mt-1.5 ml-2 absolute -bottom-5">{errors.phone}</p>}
                  </div>

                  <div className="relative">
                    <select
                      value={problemType}
                      onChange={(e) => setProblemType(e.target.value)}
                      title="Выберите тип проблемы"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-text-primary focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-colors appearance-none"
                    >
                      <option value="" className="bg-surface-darker">Укажите тип проблемы (необязательно)</option>
                      <option value="narko" className="bg-surface-darker">Наркомания</option>
                      <option value="alko" className="bg-surface-darker">Алкоголизм</option>
                      <option value="behavior" className="bg-surface-darker">Игромания / Поведенческая</option>
                      <option value="relative" className="bg-surface-darker">Помощь родственникам</option>
                    </select>
                    <div className="absolute right-5 top-[18px] pointer-events-none">
                      <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-8 mb-8">
                  <label className="flex items-start gap-4 cursor-pointer group rounded-xl p-2 -ml-2 hover:bg-white/5 transition-colors">
                    <div className="relative flex items-center justify-center mt-1">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => { setConsent(e.target.checked); setErrors(prev => ({ ...prev, consent: undefined })); }}
                        className="peer appearance-none w-5 h-5 rounded-lg border-2 border-white/20 checked:border-primary-500 checked:bg-primary-500 transition-all cursor-pointer"
                        required
                        title="Я согласен с политикой конфиденциальности"
                      />
                      <svg className="absolute w-3 h-3 text-surface-darker opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-xs leading-relaxed transition-colors ${errors.consent ? 'text-accent-500' : 'text-text-muted group-hover:text-text-secondary'}`}>
                      Я даю согласие на обработку данных согласно{' '}
                      <a href="/privacy" className="text-primary-500/80 hover:text-primary-400 hover:underline" target="_blank">
                        Политике конфиденциальности (152-ФЗ)
                      </a>.
                    </span>
                  </label>
                  {errors.consent && <p className="text-accent-500 text-[11px] ml-9 -mt-1">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-500 text-surface-darker font-bold rounded-2xl hover:bg-primary-400 hover:shadow-glow-emerald transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] hover:animate-[shimmer_1.5s_infinite]" />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-surface-darker/30 border-t-surface-darker rounded-full animate-spin" />
                      Отправка запроса...
                    </>
                  ) : (
                    'Заказать звонок врача'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
