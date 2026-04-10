import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * useParallax — GPU-accelerated scroll-driven parallax hook.
 * 
 * Per antigravity-design-expert skill:
 * - Uses `will-change: transform` for GPU compositing
 * - Uses `requestAnimationFrame` for buttery-smooth 60fps
 * - Respects `prefers-reduced-motion: reduce`
 * - SSR-safe (returns 0 on server)
 * 
 * @param {number} speed - Parallax speed factor. 0 = no movement, 1 = full scroll speed
 *   - Background layers: 0.1-0.3 (slow, deep)
 *   - Mid layers: 0.4-0.6 (medium depth)
 *   - Foreground: 0.8-1.0 (fast, close)
 * @param {string} direction - 'vertical' or 'horizontal'
 * @returns {{ ref, style }} - Attach ref and style to your element
 */
export function useParallax(speed = 0.3, direction = 'vertical') {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Per antigravity-design-expert: disable for prefers-reduced-motion
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion.current) return;

    const handleScroll = () => {
      if (rafRef.current) return; // Throttle to one rAF per frame
      
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        setOffset(scrollY * speed);
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  const style = reducedMotion.current ? {} : {
    transform: direction === 'vertical' 
      ? `translate3d(0, ${offset}px, 0)` 
      : `translate3d(${offset}px, 0, 0)`,
    willChange: 'transform',
  };

  return { ref, style, offset };
}

/**
 * useMouseParallax — mouse-driven 3D tilt effect.
 * Creates spatial depth per antigravity-design-expert principles.
 * 
 * @param {number} intensity - How strong the effect is (0.01 = subtle, 0.05 = noticeable)
 * @returns {{ ref, style, onMouseMove, onMouseLeave }}
 */
export function useMouseParallax(intensity = 0.02) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  const onMouseMove = useCallback((e) => {
    if (reducedMotion.current || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = (e.clientX - centerX) * intensity;
    const rotateX = -(e.clientY - centerY) * intensity;
    
    setTransform({ rotateX, rotateY });
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  const style = {
    transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
    transition: 'transform 0.15s ease-out',
    willChange: 'transform',
  };

  return { ref, style, onMouseMove, onMouseLeave };
}

/**
 * useScrollProgress — returns scroll progress 0→1 for a section.
 * Useful for CSS-variable driven animations.
 * 
 * @returns {{ ref, progress }}
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) { rafRef.current = null; return; }
        
        const rect = ref.current.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        
        // 0 when element enters viewport from bottom, 1 when it exits from top
        const raw = 1 - (rect.top / viewHeight);
        setProgress(Math.max(0, Math.min(1, raw)));
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { ref, progress };
}
