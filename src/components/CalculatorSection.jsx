import { useState, useEffect } from 'react';
import { useContactModal } from '@/components/ContactModal';
import { useInView } from '@/hooks/useInView';

const PACKETS = {
  base:      { name: 'Базовый',   price: 80000,  room: '4-местное', icon: '🏠' },
  standard:  { name: 'Стандарт+', price: 150000, room: '3-местное', icon: '⭐' },
  intensive: { name: 'Интенсив',  price: 250000, room: '2-местное', icon: '🔥' },
  vip:       { name: 'V.I.P.',    price: 420000, room: '1-местное', icon: '👑' },
};

const STAGES = [
  { id: 1, label: 'Лёгкая', mult: 1.0, desc: 'Начальная стадия' },
  { id: 2, label: 'Средняя', mult: 1.2, desc: 'Сформированная зависимость' },
  { id: 3, label: 'Тяжёлая', mult: 1.5, desc: 'Хроническая стадия' },
];

const formatPrice = (price) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);

export default function CalculatorSection() {
  const [stage, setStage] = useState(1);
  const [packet, setPacket] = useState('standard');
  const [duration, setDuration] = useState(3);
  const [totalCost, setTotalCost] = useState(0);
  const { setOpen } = useContactModal();
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const base = PACKETS[packet].price;
    const mult = STAGES.find(s => s.id === stage)?.mult || 1;
    setTotalCost(base * duration * mult);
  }, [stage, packet, duration]);

  // Savings calculation for motivation
  const savings = packet === 'vip' ? 0 : 
    Math.round((PACKETS.vip.price * duration * STAGES.find(s => s.id === stage).mult - totalCost) / 1000) * 1000;

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative z-10" 
      id="calculator-section"
      style={{
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      <div className="container-main max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs text-accent-400 uppercase tracking-widest mb-3 font-medium">Прозрачная стоимость</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Калькулятор <span className="gradient-text">стоимости</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Рассчитайте примерную стоимость курса реабилитации. 
            Точная сумма определяется врачом после бесплатной консультации.
          </p>
        </div>

        <div className="glass-heavy p-6 md:p-10 rounded-3xl border-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left side — controls */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Stage */}
              <div>
                <label className="block text-text-secondary text-xs uppercase tracking-widest font-semibold mb-3">
                  Стадия зависимости
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {STAGES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setStage(s.id)}
                      className={`py-3 px-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                        stage === s.id 
                          ? 'border-primary-400 bg-primary-50 text-primary-800 shadow-[0_4px_14px_0_rgba(59,130,246,0.1)]' 
                          : 'border-surface-dark bg-surface-light text-text-secondary hover:border-primary-300 hover:bg-surface-muted'
                      }`}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className="text-[10px] text-text-muted mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Packet */}
              <div>
                <label className="block text-text-secondary text-xs uppercase tracking-widest font-semibold mb-3">
                  Пакет услуг
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(PACKETS).map(([id, p]) => (
                    <button
                      key={id}
                      onClick={() => setPacket(id)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                        packet === id 
                          ? 'border-primary-400 bg-primary-50 shadow-[0_4px_14px_0_rgba(59,130,246,0.15)]' 
                          : 'border-surface-dark bg-surface-light hover:border-primary-300 hover:bg-surface-muted'
                      }`}
                    >
                      <div className="text-xl mb-1">{p.icon}</div>
                      <div className={`text-sm font-semibold ${packet === id ? 'text-primary-800' : 'text-text-primary'}`}>{p.name}</div>
                      <div className="text-[10px] text-text-muted mt-0.5">{formatPrice(p.price)}/мес</div>
                      <div className="text-[10px] text-text-muted">{p.room}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-text-secondary text-xs uppercase tracking-widest font-semibold">
                    Длительность
                  </label>
                  <span className="text-accent-400 font-bold text-lg tabular-nums">{duration} мес.</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={duration} 
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full h-2 bg-primary-100 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  aria-label="Длительность лечения в месяцах"
                />
                <div className="flex justify-between text-[10px] text-text-muted mt-2">
                  <span>1 мес</span>
                  <span>3 мес (мин.)</span>
                  <span>6 мес (оптим.)</span>
                  <span>12 мес</span>
                </div>
              </div>
            </div>

            {/* Right side — result */}
            <div className="glass rounded-2xl p-6 flex flex-col justify-between">
              <div className="text-center">
                <h3 className="text-text-muted text-xs uppercase tracking-widest font-semibold mb-4">
                  Примерная стоимость
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-accent-400 tabular-nums mb-1">
                  {formatPrice(totalCost)}
                </div>
                <div className="text-xs text-text-muted">
                  за {duration} мес. · {PACKETS[packet].name}
                </div>
                
                {savings > 0 && (
                  <div className="mt-4 px-3 py-2 rounded-lg bg-accent-500/5 border border-accent-400/10 text-xs text-accent-300">
                    Экономия {formatPrice(savings)} vs VIP
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <button 
                  onClick={() => setOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-accent-500 to-accent-400 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  Получить точный расчёт
                </button>
                <a 
                  href="tel:+74954141113"
                  className="w-full py-3 glass text-text-primary font-medium rounded-xl hover:bg-surface-muted transition-all duration-300 flex items-center justify-center gap-2 text-sm border-surface-dark"
                >
                  📞 Позвонить
                </a>
              </div>

              <p className="text-[10px] text-text-muted text-center mt-4 leading-relaxed">
                Не является публичной офертой. 
                Точная стоимость определяется после диагностики.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
