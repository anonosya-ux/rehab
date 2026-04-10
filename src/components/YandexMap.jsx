import { useState, useEffect } from 'react';

/**
 * YandexMap Component — uses standard lazy-loaded iframe for performance
 * without requiring an API key. 
 */
export default function YandexMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy load map to improve initial page load performance
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden glass-heavy shadow-glow-emerald border border-white/10 group">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-darker/50">
          <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
        </div>
      )}
      
      {isLoaded && (
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755863&z=10&theme=dark" 
          title="Наш адрес на Яндекс Карте"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: 'relative', filter: 'contrast(1.1) brightness(0.9) grayscale(0.2)' }}
          className="transition-opacity duration-1000 animate-fade-in"
        ></iframe>
      )}

      {/* Decorative Overlay */}
      <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/20 rounded-[32px] pointer-events-none transition-colors duration-500" />
    </div>
  );
}
