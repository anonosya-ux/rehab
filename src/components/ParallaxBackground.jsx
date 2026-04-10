import { useParallax } from '@/hooks/useParallax';

/**
 * ParallaxBackground — multi-layer floating ambient background for Light Medical Theme.
 */
export default function ParallaxBackground() {
  const layer1 = useParallax(0.05);
  const layer2 = useParallax(0.12);
  const layer4 = useParallax(0.08);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-surface-soft">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-white opacity-80" />

      {/* Layer 1: Subtle blue shapes */}
      <div style={layer1.style}>
        <div 
          className="floating-shape absolute top-[10%] left-[15%] w-[600px] h-[150px] rounded-full bg-gradient-to-r from-primary-200/20 to-transparent blur-[4px]"
          style={{ 
            transform: `${layer1.style.transform || ''} rotate(12deg)`,
          }}
        />
        <div 
          className="floating-shape-reverse absolute top-[65%] right-[-5%] w-[500px] h-[120px] rounded-full bg-gradient-to-r from-accent-200/20 to-transparent blur-[4px]"
          style={{ transform: `rotate(-15deg)` }}
        />
      </div>

      {/* Layer 2: Mid shapes */}
      <div style={layer2.style}>
        <div 
          className="floating-shape-slow absolute top-[35%] right-[10%] w-[350px] h-[90px] rounded-full bg-gradient-to-r from-primary-100/30 to-transparent border border-white/50 blur-[2px]"
          style={{ transform: `rotate(-8deg)` }}
        />
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
