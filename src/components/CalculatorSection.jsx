import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useContactModal } from '@/components/ContactModal';
import { useInView } from '@/hooks/useInView';
import { BorderBeam } from '@/components/magic-ui/border-beam';

const PACKETS = {
  base:      { name: 'Базовый',   price: 80000,  room: '4-местное', icon: '🏠' },
  standard:  { name: 'Стандарт+', price: 150000, room: '3-местное', icon: '⭐' },
  intensive: { name: 'Интенсив',  price: 250000, room: '2-местное', icon: '🔥' },
  vip:       { name: 'V.I.P.',    price: 420000, room: '1-местное', icon: '👑' },
};

const STAGES = [
  { id: 1, label: 'Лёгкая', mult: 1.0, desc: 'Начальная' },
  { id: 2, label: 'Средняя', mult: 1.2, desc: 'Сформированная' },
  { id: 3, label: 'Тяжёлая', mult: 1.5, desc: 'Хроническая' },
];

const formatPrice = (price) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);

export default function CalculatorSection() {
  const [stage, setStage] = useState(1);
  const [packet, setPacket] = useState('standard');
  const [duration, setDuration] = useState(3);
  
  const [totalCost, setTotalCost] = useState(0);
  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, latest => Math.round(latest));
  const displayCost = useTransform(rounded, latest => formatPrice(latest));

  const { setOpen } = useContactModal();
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const base = PACKETS[packet].price;
    const mult = STAGES.find(s => s.id === stage)?.mult || 1;
    const newTotal = base * duration * mult;
    setTotalCost(newTotal);

    // Animate the rolling counter
    animate(countValue, newTotal, {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1] // Custom snappy spring-like ease
    });
  }, [stage, packet, duration, countValue]);

  const savings = packet === 'vip' ? 0 : 
    Math.round((PACKETS.vip.price * duration * STAGES.find(s => s.id === stage).mult - totalCost) / 1000) * 1000;

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative z-10 bg-surface-soft overflow-hidden" 
      id="calculator-section"
    >
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary-200/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-200/50 rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        className="container-main max-w-6xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-primary-200 text-xs text-primary-800 uppercase tracking-widest mb-6 font-bold bg-white/50 backdrop-blur-md shadow-sm">Калькулятор</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-900 mb-6 drop-shadow-sm">
            Прозрачная <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">стоимость</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Настройте параметры программы как вам удобно. Абсолютно никаких скрытых платежей.
          </p>
        </div>

        {/* Main Widget Card */}
        <div className="bg-white/70 backdrop-blur-3xl rounded-[2.5rem] p-4 md:p-10 shadow-[0_20px_80px_rgba(30,58,138,0.07)] border border-white/60">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 md:gap-12">
            
            {/* Left side — controls */}
            <div className="space-y-10 order-2 lg:order-1 pt-6 lg:pt-0">
              
              {/* iOS Segment Control - Stage */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-primary-900 text-sm md:text-base font-bold">
                    Стадия зависимости
                  </label>
                </div>
                <div className="relative flex p-1.5 bg-surface-muted/50 rounded-2xl md:rounded-full isolate overflow-hidden shadow-inner border border-black/5">
                  {STAGES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setStage(s.id)}
                      className="relative flex-1 py-3 px-2 z-10 text-center outline-none transition-colors"
                    >
                      {stage === s.id && (
                        <motion.div 
                          layoutId="stage-active-pill"
                          className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-sm z-0"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className={`relative z-10 font-bold transition-colors ${stage === s.id ? 'text-primary-900' : 'text-text-muted hover:text-text-secondary'}`}>
                        {s.label}
                      </div>
                      <div className={`relative z-10 text-[10px] sm:text-xs transition-colors mt-0.5 ${stage === s.id ? 'text-primary-600' : 'text-text-muted/70'}`}>
                        {s.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* iOS Segment Control - Packet */}
              <div>
                <label className="block text-primary-900 text-sm md:text-base font-bold mb-4">
                  Пакет услуг
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-2">
                  {Object.entries(PACKETS).map(([id, p]) => (
                    <button
                      key={id}
                      onClick={() => setPacket(id)}
                      className={`relative p-4 rounded-3xl text-left transition-all duration-300 border-2 outline-none group ${
                        packet === id 
                          ? 'border-primary-500 bg-gradient-to-b from-primary-50/50 to-white shadow-[0_10px_20px_-10px_rgba(59,130,246,0.3)]' 
                          : 'border-transparent bg-surface-muted/30 hover:bg-surface-muted/80 hover:scale-[1.02]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl mb-3 transition-colors ${packet === id ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30' : 'bg-white text-text-muted group-hover:text-primary-400'}`}>
                        {p.icon}
                      </div>
                      <div className={`text-base font-bold mb-1 transition-colors ${packet === id ? 'text-primary-900' : 'text-text-secondary group-hover:text-primary-900'}`}>
                        {p.name}
                      </div>
                      <div className="text-xs font-semibold text-text-muted">
                        {p.room}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Animated Slider - Duration */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-primary-900 text-sm md:text-base font-bold">
                    Длительность лечения
                  </label>
                  <div className="px-4 py-1.5 bg-accent-50 rounded-full border border-accent-100 flex items-center gap-2 text-accent-700 font-bold">
                    <span>{duration}</span>
                    <span className="text-xs text-accent-500/80">месяцев</span>
                  </div>
                </div>
                
                <div className="relative pt-4 pb-2 px-2">
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={duration} 
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    aria-label="Длительность лечения в месяцах"
                  />
                  {/* Custom Track */}
                  <div className="h-3 bg-surface-muted/60 rounded-full overflow-hidden shadow-inner w-full relative z-0">
                     <motion.div 
                        className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
                        animate={{ width: `${((duration - 1) / 11) * 100}%` }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                     />
                  </div>
                  {/* Custom Thumb */}
                  <motion.div 
                     className="w-8 h-8 bg-white border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.15)] rounded-full absolute top-1/2 -mt-4 -ml-4 z-10 flex items-center justify-center pointer-events-none"
                     animate={{ left: `calc(${((duration - 1) / 11) * 100}% + 8px)` }}
                     transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  >
                     <div className="w-2 h-2 rounded-full bg-primary-500" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between text-[11px] font-semibold text-text-muted/60 mt-4 px-2 tracking-wider">
                  <span>1 мес</span>
                  <span>(мин. рек.) 3 мес</span>
                  <span>12 мес</span>
                </div>
              </div>
            </div>

            {/* Right side — Total Result Card */}
            <div className="order-1 lg:order-2 h-auto lg:h-[100%]">
              <div className="h-full bg-primary-900 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(30,58,138,0.4)]">
                <BorderBeam duration={12} size={350} colorFrom="#38bdf8" colorTo="#2dd4bf" />
                {/* Decorative background glow inside the dark card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-[80px]" />
                
                <div className="relative z-10 text-center lg:text-left mt-4 lg:mt-0">
                  <h3 className="text-primary-200/80 text-xs sm:text-sm uppercase tracking-widest font-bold mb-6">
                    Примерная стоимость
                  </h3>
                  <div className="flex flex-col lg:items-start items-center">
                    <motion.div className="text-5xl sm:text-6xl font-display font-black text-white tabular-nums tracking-tight mb-2 drop-shadow-md">
                      {displayCost}
                    </motion.div>
                    <div className="text-sm font-medium text-primary-200/60 bg-primary-800/50 px-4 py-1.5 rounded-full border border-white/5">
                      за {duration} мес. • {PACKETS[packet].name}
                    </div>
                  </div>
                  
                  {savings > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={savings}
                      className="mt-6 flex lg:justify-start justify-center"
                    >
                      <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-accent-500/10 to-transparent border border-accent-400/20 text-sm font-semibold text-accent-300 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Ваша выгода: {formatPrice(savings)}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="relative z-10 mt-12 space-y-4">
                  <button 
                    onClick={() => setOpen(true)}
                    className="w-full py-5 bg-white text-primary-900 font-black text-lg rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/10"
                  >
                    Зафиксировать цену
                  </button>
                  <a 
                    href="tel:+74954141113"
                    className="w-full py-4 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-base border border-white/20"
                  >
                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Связаться с врачом
                  </a>
                </div>

                <p className="relative z-10 text-[10px] lg:text-xs text-primary-200/40 text-center lg:text-left mt-8 leading-relaxed font-medium max-w-sm">
                  Итоговый расчёт строится на основе очной диагностики состояния резидента. Оставьте заявку, чтобы получить развернутый план.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
