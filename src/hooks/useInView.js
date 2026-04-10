import { useState, useEffect, useRef } from 'react';

/**
 * useInView hook for performant scroll animations using IntersectionObserver.
 * Tracks when an element enters the viewport.
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Example: 0.1 (10% visible)
 * @param {boolean} options.triggerOnce - Unobseve after first trigger
 * @returns {Array} [ref, inView]
 */
export function useInView({ threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preference (antigravity-design-expert skill)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setInView(true); // Automatically show content if reduced motion is preferred
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, inView];
}
