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
      {/* Simplified geometric mark — triangle/mountain with crossbar (stylized A) */}
      <path
        d="M60 16L100 96H20L60 16Z"
        stroke="#B8976A"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="36"
        y1="72"
        x2="84"
        y2="72"
        stroke="#B8976A"
        strokeWidth="1.5"
      />
      {/* Accent dot */}
      <circle cx="60" cy="106" r="2" fill="#B8976A" />
    </svg>
  );
}
