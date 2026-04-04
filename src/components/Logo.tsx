import Image from "next/image";

export default function Logo({ className = "", size = 48, showText = false }: { className?: string; size?: number; showText?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized A mark — triangle with crossbar, inspired by brandmark */}
        <path
          d="M60 12L104 100H16L60 12Z"
          stroke="#B8976A"
          strokeWidth="1.8"
          fill="none"
        />
        <line x1="32" y1="72" x2="88" y2="72" stroke="#B8976A" strokeWidth="1.2" />
        {/* Accent dot — brandmark style */}
        <circle cx="60" cy="110" r="2.5" fill="#D4BC96" />
      </svg>
      {showText && (
        <div className="flex flex-col items-center mt-3">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase" style={{ color: '#E8E6E1' }}>
            Abandoned
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase mt-0.5" style={{ color: 'rgba(232,230,225,0.4)' }}>
            Capital
          </span>
        </div>
      )}
    </div>
  );
}
