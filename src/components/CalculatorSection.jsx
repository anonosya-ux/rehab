import { useState, useEffect } from 'react';

const CalculatorSection = () => {
  const [stage, setStage] = useState(1);
  const [packet, setPacket] = useState('base');
  const [duration, setDuration] = useState(3);
  const [totalCost, setTotalCost] = useState(0);

  const packetRates = {
    base: 80000,
    intensive: 150000,
    vip: 500000
  };

  useEffect(() => {
    let cost = packetRates[packet] * duration;
    // Stage multipliers
    if (stage === 2) cost *= 1.2;
    if (stage === 3) cost *= 1.5;
    
    setTotalCost(cost);
  }, [stage, packet, duration]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-semibold mb-6 text-white drop-shadow-md">
            Калькулятор <span className="text-primary italic">стоимости</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Рассчитайте примерную стоимость курса реабилитации исходя из индивидуальных параметров. 
            Точная сумма определяется врачом после первичной консультации.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(45,212,191,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Parameters Selection */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Stage Selection */}
              <div>
                <label className="block text-white/80 text-sm uppercase tracking-wider font-semibold mb-4">
                  Стадия зависимости
                </label>
                <div className="flex bg-white/5 p-1 rounded-xl glass-panel">
                  {['Легкая', 'Средняя', 'Тяжелая'].map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setStage(idx + 1)}
                      className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${stage === idx + 1 ? 'bg-primary text-background shadow-lg' : 'text-white/60 hover:text-white'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Packet Selection */}
              <div>
                <label className="block text-white/80 text-sm uppercase tracking-wider font-semibold mb-4">
                  Пакет услуг
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'base', name: 'Базовый', desc: 'В Жуково' },
                    { id: 'intensive', name: 'Интенсив', desc: 'В Москве' },
                    { id: 'vip', name: 'VIP', desc: 'Спец условия' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPacket(p.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 border ${packet === p.id ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(45,212,191,0.2)]' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                    >
                      <div className={`font-semibold mb-1 ${packet === p.id ? 'text-primary' : 'text-white'}`}>{p.name}</div>
                      <div className="text-xs text-white/50">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white/80 text-sm uppercase tracking-wider font-semibold">
                    Длительность (месяцев)
                  </label>
                  <span className="text-primary font-bold text-lg">{duration} мес.</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={duration} 
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>1</span>
                  <span>6</span>
                  <span>12</span>
                </div>
              </div>
            </div>

            {/* Total Display */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-6">
                  Примерная стоимость
                </h3>
                <div className="text-4xl md:text-5xl font-playfair font-bold text-primary drop-shadow-md mb-2">
                  {formatPrice(totalCost)}
                </div>
                <div className="text-sm text-white/40 mt-4">
                  Сумма не является публичной офертой и может быть скорректирована после диагностики.
                </div>
              </div>

              <div className="w-full mt-8">
                <button className="w-full py-4 bg-primary text-background font-semibold rounded-full hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all duration-300 hover:scale-[1.02]">
                  Получить расчет стоимости
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
