import * as React from 'react';
import { useState, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

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

// === Premium Modal via Shadcn Dialog ===
export default function ContactModal() {
  const { open, setOpen } = useContactModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [problemType, setProblemType] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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

  function handleOpenChange(isOpen) {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setPhone('+7 ');
        setProblemType('');
        setConsent(false);
        setErrors({});
      }, 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md glass-heavy rounded-[32px] p-8 md:p-10 shadow-glow-emerald border-surface-dark bg-surface-light overflow-hidden outline-none">
        
        {/* Top-edge internal glint */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-emerald border border-primary/20">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-display font-semibold text-text-primary mb-3">Принято!</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              Врач свяжется с вами в течение 5 минут. Ваш номер в полной безопасности.
            </p>
            <button 
              onClick={() => handleOpenChange(false)} 
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 hover:shadow-glow-emerald transition-all"
            >
              Вернуться на сайт
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <DialogHeader className="text-left mb-6">
              <DialogTitle className="text-3xl font-display font-semibold text-text-primary">
                Помощь врача
              </DialogTitle>
              <DialogDescription className="text-text-secondary text-sm mt-2">
                Консультация полностью <span className="text-text-primary">анонимна и бесплатна</span>. 24/7.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться?"
                  id="name"
                  className="rounded-xl py-6 px-5 border-surface-dark bg-surface-muted/50 focus-visible:ring-primary/50 text-base"
                />
              </div>

              <div className="relative">
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="Телефон *"
                  required
                  id="phone"
                  className={`rounded-xl py-6 px-5 bg-surface-muted/50 text-base ${
                    errors.phone 
                      ? 'border-accent-500 focus-visible:ring-accent-500/50' 
                      : 'border-surface-dark focus-visible:ring-primary/50'
                  }`}
                />
                {errors.phone && <p className="text-accent-500 text-[11px] mt-1.5 ml-2 absolute -bottom-5">{errors.phone}</p>}
              </div>

              <div className="relative mt-2">
                <select
                  value={problemType}
                  onChange={(e) => setProblemType(e.target.value)}
                  title="Выберите тип проблемы"
                  className="flex h-12 w-full items-center justify-between rounded-xl border border-surface-dark bg-surface-muted/50 px-5 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none text-text-primary"
                >
                  <option value="">Укажите тип проблемы (необязательно)</option>
                  <option value="narko">Наркомания</option>
                  <option value="alko">Алкоголизм</option>
                  <option value="behavior">Игромания / Поведенческая</option>
                  <option value="relative">Помощь родственникам</option>
                </select>
                <div className="absolute right-5 top-4 pointer-events-none">
                  <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8 mb-6">
              <label className="flex items-start gap-3 cursor-pointer group rounded-xl p-2 -ml-2 hover:bg-surface-muted/50 transition-colors">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => { setConsent(e.target.checked); setErrors(prev => ({ ...prev, consent: undefined })); }}
                    className="peer appearance-none w-5 h-5 rounded border-2 border-surface-dark checked:border-primary checked:bg-primary transition-all cursor-pointer"
                    required
                  />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-xs leading-relaxed transition-colors ${errors.consent ? 'text-accent-500' : 'text-text-muted group-hover:text-text-secondary'}`}>
                  Я даю согласие на обработку данных согласно{' '}
                  <a href="/privacy" className="text-primary hover:underline hover:text-primary/80" target="_blank">
                    Политике конфиденциальности (152-ФЗ)
                  </a>.
                </span>
              </label>
              {errors.consent && <p className="text-accent-500 text-[11px] ml-9 -mt-1">{errors.consent}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 hover:shadow-glow-emerald transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] hover:animate-[shimmer_1.5s_infinite]" />
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Отправка запроса...
                </>
              ) : (
                'Оставить заявку'
              )}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
