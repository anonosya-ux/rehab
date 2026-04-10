import { useState, useCallback } from 'react';
import { useContactModal } from '@/components/ContactModal';
import { useInView } from '@/hooks/useInView';

const QUESTIONS = [
  {
    id: 'substance',
    question: 'С какой проблемой вы столкнулись?',
    options: [
      { value: 'alcohol', label: 'Алкогольная зависимость', icon: '🍷' },
      { value: 'drugs', label: 'Наркотическая зависимость', icon: '💊' },
      { value: 'gambling', label: 'Игромания / лудомания', icon: '🎰' },
      { value: 'other', label: 'Другое (РПП, гаджет-зависимость)', icon: '📱' },
    ],
  },
  {
    id: 'duration_problem',
    question: 'Как давно существует проблема?',
    options: [
      { value: 'recent', label: 'Менее 1 года', icon: '📅', weight: 1 },
      { value: 'medium', label: '1-3 года', icon: '📆', weight: 2 },
      { value: 'long', label: '3-7 лет', icon: '🗓️', weight: 3 },
      { value: 'chronic', label: 'Более 7 лет', icon: '⏳', weight: 4 },
    ],
  },
  {
    id: 'attempts',
    question: 'Были ли ранее попытки лечения?',
    options: [
      { value: 'none', label: 'Нет, впервые обращаемся', icon: '🆕', weight: 1 },
      { value: 'self', label: 'Самостоятельные попытки', icon: '💪', weight: 2 },
      { value: 'rehab_once', label: 'Одна попытка в центре', icon: '🏥', weight: 3 },
      { value: 'rehab_many', label: 'Несколько попыток', icon: '🔄', weight: 4 },
    ],
  },
  {
    id: 'motivation',
    question: 'Насколько пациент мотивирован?',
    options: [
      { value: 'high', label: 'Сам хочет лечиться', icon: '🎯', weight: 1 },
      { value: 'medium', label: 'Готов, но сомневается', icon: '🤔', weight: 2 },
      { value: 'low', label: 'Не признаёт проблему', icon: '😤', weight: 3 },
      { value: 'none', label: 'Категорически против', icon: '🚫', weight: 4 },
    ],
  },
  {
    id: 'budget',
    question: 'Какой бюджет вы рассматриваете?',
    options: [
      { value: 'base', label: '80 – 120 тыс. ₽/мес', icon: '💰', program: 'Базовый' },
      { value: 'standard', label: '150 – 200 тыс. ₽/мес', icon: '💎', program: 'Стандарт+' },
      { value: 'intensive', label: '250 – 300 тыс. ₽/мес', icon: '🔥', program: 'Интенсив' },
      { value: 'vip', label: '420 – 500 тыс. ₽/мес', icon: '👑', program: 'V.I.P.' },
    ],
  },
];

function getRecommendation(answers) {
  const severity = (answers.duration_problem?.weight || 1) + (answers.attempts?.weight || 1) + (answers.motivation?.weight || 1);
  const budget = answers.budget?.value;
  
  if (budget === 'vip' || severity >= 10) {
    return {
      program: 'V.I.P.',
      duration: '6-12 месяцев',
      desc: 'Максимальная интенсивность. Ведение кандидатом наук, ежедневные BOSlab-сессии. Рекомендуем при тяжёлых случаях и многократных рецидивах.',
      features: ['1-местное проживание', 'BOSlab 7-8 раз/мес', 'Ведение канд. наук', 'Полная диагностика'],
      color: 'from-amber-500/20 to-amber-400/5',
      border: 'border-amber-400/30',
    };
  }
  if (budget === 'intensive' || severity >= 7) {
    return {
      program: 'Интенсив',
      duration: '4-8 месяцев',
      desc: 'Усиленная программа с частыми индивидуальными сессиями и нейропсихологическим исследованием. Оптимальный выбор при средне-тяжёлых случаях.',
      features: ['2-местное проживание', 'BOSlab 5-6 раз/мес', 'Психолог 10-12 р/мес', 'Сопровождение заданий'],
      color: 'from-accent-500/20 to-accent-400/5',
      border: 'border-accent-400/30',
    };
  }
  if (budget === 'standard' || severity >= 4) {
    return {
      program: 'Стандарт+',
      duration: '3-6 месяцев',
      desc: 'Сбалансированная программа. Регулярные сессии с аддиктологом и психологом, патопсихологическое исследование.',
      features: ['3-местное проживание', 'BOSlab 3-4 раза/мес', 'Психолог 6-8 р/мес', 'Патопсихологическое исследование'],
      color: 'from-primary-500/20 to-primary-400/5',
      border: 'border-primary-400/30',
    };
  }
  return {
    program: 'Базовый',
    duration: '2-4 месяца',
    desc: 'Базовая программа реабилитации. Подходит при начальных стадиях и высокой мотивации пациента.',
    features: ['4-местное проживание', 'BOSlab 1-2 раза/мес', 'Психолог 2-4 р/мес', 'Групповая терапия'],
    color: 'from-white/10 to-white/5',
    border: 'border-white/20',
  };
}

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const { setOpen } = useContactModal();
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  const isComplete = currentStep >= QUESTIONS.length;

  const handleAnswer = useCallback((questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 400);
    }
  }, [currentStep]);

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const recommendation = showResult ? getRecommendation(answers) : null;
  const progress = ((currentStep + (showResult ? 1 : 0)) / QUESTIONS.length) * 100;

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative z-10" 
      id="quiz-section"
      style={{
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      <div className="container-main max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Онлайн-тест</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Какая программа <span className="gradient-text">подойдёт?</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            5 вопросов → персональная рекомендация. Ответы конфиденциальны.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="glass p-6 md:p-10 rounded-3xl border border-white/10">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-text-muted">
                {showResult ? 'Результат' : `Вопрос ${currentStep + 1} из ${QUESTIONS.length}`}
              </span>
              <span className="text-xs text-accent-400 font-medium tabular-nums">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question / Result */}
          {!showResult ? (
            <div 
              key={currentStep}
              className="animate-fadeIn"
            >
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6">
                {QUESTIONS[currentStep].question}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUESTIONS[currentStep].options.map((option) => {
                  const isSelected = answers[QUESTIONS[currentStep].id]?.value === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(QUESTIONS[currentStep].id, option)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 border group ${
                        isSelected
                          ? 'border-accent-400/40 bg-accent-500/10 scale-[0.98]'
                          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{option.icon}</span>
                        <span className={`text-sm font-medium ${isSelected ? 'text-accent-300' : 'text-text-primary'}`}>
                          {option.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              {currentStep > 0 && (
                <button 
                  onClick={handleBack}
                  className="mt-6 text-sm text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Назад
                </button>
              )}
            </div>
          ) : (
            /* Result */
            <div className="animate-fadeIn">
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${recommendation.color} border ${recommendation.border} mb-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">Рекомендуемый пакет</div>
                    <div className="text-2xl font-bold text-text-primary">{recommendation.program}</div>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary mb-4">{recommendation.desc}</p>
                
                <div className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold">
                  Рекомендуемый срок: {recommendation.duration}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {recommendation.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                      <svg className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <button 
                  onClick={() => setOpen(true)}
                  className="w-full py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  Записаться на бесплатную консультацию
                </button>
                <div className="flex gap-3">
                  <a 
                    href="tel:+74954141113"
                    className="flex-1 py-3 glass-light text-text-primary font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-sm"
                  >
                    📞 Позвонить
                  </a>
                  <button 
                    onClick={handleReset}
                    className="flex-1 py-3 glass-light text-text-secondary font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-sm"
                  >
                    🔄 Пройти заново
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trust note */}
        <p className="text-center text-[10px] text-text-muted mt-4">
          Тест носит рекомендательный характер. Окончательную программу определяет врач на бесплатной консультации.
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn { animation: none; }
        }
      `}</style>
    </section>
  );
}
