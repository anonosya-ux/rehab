import { useState, useEffect } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Particles } from '@/components/magic-ui/particles';

/**
 * ParallaxBackground — multi-layer floating ambient background for Light Medical Theme.
 */
export default function ParallaxBackground() {
  const layer1 = useParallax(0.05);
  const layer2 = useParallax(0.12);
  const layer4 = useParallax(0.08);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-surface-soft">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-white opacity-80" />
      
      {/* Magic UI Interactive Particles */}
      <div className="absolute inset-0 opacity-[0.25]">
        {mounted && <Particles color="#2DD4BF" quantity={40} ease={60} staticity={40} className="w-full h-full" />}
      </div>

      {/* Layer 1: Ambient soft organic glow */}
      <div style={layer1.style}>
        <div
          className="floating-shape absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary-200/20 blur-[120px]"
          style={{ transform: `${layer1.style.transform || ''}` }}
        />
        <div className="floating-shape-reverse absolute top-[65%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-200/10 blur-[150px]" />
      </div>

      {/* Layer 2: Mid glow */}
      <div style={layer2.style}>
        <div className="floating-shape-slow absolute top-[35%] right-[10%] w-[450px] h-[450px] rounded-full bg-primary-100/30 blur-[100px]" />
      </div>

      {/* Layer 4: Ambient glow orbs */}
      <div style={layer4.style}>
        <div className="absolute top-[15%] left-[25%] w-[400px] h-[400px] bg-primary-200/20 rounded-full blur-[80px] pulse-glow" />
        <div className="absolute top-[50%] right-[15%] w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-[100px] pulse-glow-reverse" />
        <div className="absolute bottom-[10%] left-[40%] w-[300px] h-[300px] bg-accent-100/20 rounded-full blur-[80px] pulse-glow-slow" />
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .floating-shape {
            animation: float 20s ease-in-out infinite;
          }
          .floating-shape-reverse {
            animation: float-reverse 25s ease-in-out infinite;
          }
          .floating-shape-slow {
            animation: float 30s ease-in-out infinite;
          }
          .pulse-glow {
            animation: pulseGlow 8s ease-in-out infinite;
          }
          .pulse-glow-reverse {
            animation: pulseGlow 12s ease-in-out infinite reverse;
          }
          .pulse-glow-slow {
            animation: pulseGlow 15s ease-in-out infinite;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          33% { transform: translateY(-20px) rotate(calc(var(--rotate, 0deg) + 2deg)); }
          66% { transform: translateY(10px) rotate(calc(var(--rotate, 0deg) - 1deg)); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          33% { transform: translateY(15px) rotate(calc(var(--rotate, 0deg) - 3deg)); }
          66% { transform: translateY(-10px) rotate(calc(var(--rotate, 0deg) + 1deg)); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-shape,
          .floating-shape-reverse,
          .floating-shape-slow,
          .pulse-glow,
          .pulse-glow-reverse,
          .pulse-glow-slow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
