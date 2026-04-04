import Image from "next/image";

export default function Logo({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Abandoned Capital"
      width={size}
      height={Math.round(size * 0.75)}
      className={`object-contain ${className}`}
      priority
    />
  );
}
