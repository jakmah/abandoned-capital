import Image from "next/image";

const svgLogos = [
  { file: "/logos/logo-v1-hexagon.svg", name: "V1 — Hexagon + Diamond + A", desc: "Originál: geometrický hexagon s diamantem a písmenem A" },
  { file: "/logos/logo-v2-shield.svg", name: "V2 — Shield + AC Monogram", desc: "Štít s integrovaným monogramem AC" },
  { file: "/logos/logo-v3-minimal.svg", name: "V3 — Ultra Minimal", desc: "Čistě minimalistické A jako vzestupný peak" },
  { file: "/logos/logo-v4-circle.svg", name: "V4 — Circle Frame", desc: "Kruhový rám s písmenem A a akcentem" },
  { file: "/logos/logo-v5-columns.svg", name: "V5 — Neoclassical Columns", desc: "Neoklasické sloupy — finance/kapitál" },
  { file: "/logos/logo-v6-chart.svg", name: "V6 — Trading Chart A", desc: "Trading chart tvořící písmeno A" },
];

const aiLogos = [
  { file: "/logos/ai-logo-1.png", name: "AI V1 — Gold Monogram" },
  { file: "/logos/ai-logo-2.png", name: "AI V2 — Hexagonal Icon" },
  { file: "/logos/ai-logo-3.png", name: "AI V3 — Abstract A" },
];

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-light tracking-[0.15em] uppercase text-center mb-4">
          <span className="text-[#c9a84c]">Logo Variants</span>
        </h1>
        <p className="text-center text-white/40 text-sm mb-16">
          Abandoned Capital LLC — vyberte preferovanou variantu
        </p>

        {/* SVG Variants */}
        <h2 className="text-sm tracking-[0.4em] uppercase text-[#c9a84c]/60 mb-8">
          SVG Varianty (vektorové)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {svgLogos.map((logo) => (
            <div key={logo.file} className="border border-white/5 p-6 hover:border-[#c9a84c]/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Image src={logo.file} alt={logo.name} width={160} height={160} />
              </div>
              <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase mb-1">
                {logo.name}
              </h3>
              <p className="text-white/30 text-xs">{logo.desc}</p>
            </div>
          ))}
        </div>

        {/* AI Generated */}
        <h2 className="text-sm tracking-[0.4em] uppercase text-[#c9a84c]/60 mb-8">
          AI Generované (Pollinations.ai)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aiLogos.map((logo) => (
            <div key={logo.file} className="border border-white/5 p-4 hover:border-[#c9a84c]/30 transition-colors">
              <div className="flex justify-center mb-4">
                <Image src={logo.file} alt={logo.name} width={200} height={200} className="rounded" />
              </div>
              <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase">
                {logo.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/" className="text-[#c9a84c]/40 text-xs tracking-widest uppercase hover:text-[#c9a84c] transition-colors">
            &larr; Zpět na web
          </a>
        </div>
      </div>
    </div>
  );
}
