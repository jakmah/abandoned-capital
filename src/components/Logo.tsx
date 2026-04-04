import Image from "next/image";

export default function Logo({
  className = "",
  size = 48,
  showText = false,
}: {
  className?: string;
  size?: number;
  showText?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Abandoned Capital"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
      {showText && (
        <div className="flex flex-col items-center mt-3">
          <span
            className="text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ color: "#E8E6E1" }}
          >
            Abandoned
          </span>
          <span
            className="text-[10px] tracking-[0.4em] uppercase mt-0.5"
            style={{ color: "rgba(232,230,225,0.4)" }}
          >
            Capital
          </span>
        </div>
      )}
    </div>
  );
}
