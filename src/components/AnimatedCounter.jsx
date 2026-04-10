import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * AnimatedCounter — counts up from 0 to target with easing.
 * 
 * Inspired by 21st.dev number animations.
 * Pure React + rAF — zero external deps.
 * 
 * @param {number} target - The number to count up to
 * @param {string} suffix - Text after the number (e.g., '+', 'лет')
 * @param {string} prefix - Text before the number (e.g., '₽', '$')
 * @param {number} duration - Animation duration in ms (default 2000)
 * @param {string} className - Additional CSS classes
 */
export default function AnimatedCounter({ 
  target, 
  suffix = '', 
  prefix = '', 
  duration = 2000, 
  className = '' 
}) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const hasAnimated = useRef(false);
  const rafRef = useRef(null);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic for satisfying deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easedProgress * target));
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      animate();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, animate]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{count}{suffix}
    </span>
  );
}
