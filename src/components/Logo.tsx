export default function Logo({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagonal frame */}
      <path
        d="M60 8L108 32V80L60 112L12 80V32L60 8Z"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner diamond */}
      <path
        d="M60 24L92 52L60 88L28 52L60 24Z"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Central A letterform */}
      <path
        d="M44 76L60 36L76 76M50 64H70"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Accent dot */}
      <circle cx="60" cy="96" r="2.5" fill="#c9a84c" />
      <defs>
        <linearGradient id="goldGrad" x1="12" y1="8" x2="108" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="50%" stopColor="#e2ca7a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
