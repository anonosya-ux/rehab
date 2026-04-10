export default function Logo({ className = "h-12 w-auto" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 120 120" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Target Rings (Medical Blue) */}
        <circle cx="50" cy="60" r="40" stroke="currentColor" strokeWidth="8" className="text-primary-800" />
        <circle cx="50" cy="60" r="26" stroke="currentColor" strokeWidth="8" className="text-primary-800" />
        <circle cx="50" cy="60" r="10" fill="currentColor" className="text-primary-800" />
        
        {/* The Red Arrow pointing to the center */}
        <g className="text-accent-600" fill="currentColor">
          {/* Arrow Head (triangle) reaching the center */}
          <polygon points="50,60 48,45 65,58" />
          {/* Arrow Stem from top right */}
          <polygon points="55,52 105,20 115,25 60,60" />
        </g>
        
        {/* Text "ЦЕЛЬ" sitting on the arrow stem (angled, color: Blue) */}
        <text 
          x="65" 
          y="38" 
          transform="rotate(-33 65 38)" 
          fill="currentColor" 
          className="text-primary-800 font-display font-black text-[18px] tracking-wide"
        >
          ЦЕЛЬ
        </text>
      </svg>
    </div>
  );
}
