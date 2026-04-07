export default function FloatingCTA() {
  return (
    <>
      {/* Mobile Floating Call Button */}
      <a
        href="tel:+74954141113"
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center shadow-elevated hover:shadow-glow transition-all duration-300 active:scale-95 animate-pulse-soft"
        aria-label="Позвонить: +7 495 414-11-13"
        id="floating-call-button"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Desktop Floating CTA */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3 px-5 py-3 rounded-2xl glass shadow-elevated hover:shadow-glow transition-all duration-300 cursor-pointer group hover:-translate-y-1"
        id="floating-cta-desktop"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-text-muted">Бесплатная консультация 24/7</div>
          <a href="tel:+74954141113" className="text-sm font-semibold text-accent-400 group-hover:text-accent-300 transition-colors">
            +7 495 414-11-13
          </a>
        </div>
      </div>
    </>
  )
}
