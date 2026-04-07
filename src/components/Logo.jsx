export default function Logo({ className = "h-10 w-auto" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Target Rings (Blue) */}
        <circle cx="45" cy="55" r="38" stroke="currentColor" strokeWidth="8" className="text-primary-600" />
        <circle cx="45" cy="55" r="22" stroke="currentColor" strokeWidth="8" className="text-primary-600" />
        <circle cx="45" cy="55" r="8" fill="currentColor" className="text-primary-600" />
        
        {/* Red Arrow */}
        <path 
          d="M95 15 L75 20 L80 30 L45 55 L55 45 L65 50 L75 10 Z" 
          fill="currentColor" 
          className="text-accent-500"
        />
        <path 
          d="M100 10 L45 55 L55 55 Z" 
          fill="currentColor" 
          className="text-accent-500"
        />
        <polygon points="98,5 42,55 55,55 100,10" fill="currentColor" className="text-accent-500" />
        
        {/* Actually, a cleaner Arrow pointing to center */}
        <g className="text-accent-500" fill="currentColor">
          <polygon points="90,10 65,15 75,25 45,50 50,45 60,35 75,5 98,2" />
          <path d="M42 58 L95 12 L85 8 L40 50 Z" />
          <polygon points="95,10 75,25 90,30" />
        </g>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold leading-none tracking-wide text-primary-600 group-hover:text-primary-500 transition-colors">ЦЕЛЬ</span>
        <span className="text-[0.65rem] tracking-[0.2em] font-medium text-accent-500 uppercase leading-tight mt-0.5">ЦПА</span>
      </div>
    </div>
  );
}
