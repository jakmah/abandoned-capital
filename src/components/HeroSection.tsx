import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <Logo size={100} />
        </div>

        <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] uppercase mb-2">
          <span className="text-gradient-gold">Abandoned</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-extralight tracking-[0.4em] uppercase text-white/40 mb-10">
          Capital
        </h2>

        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 animate-pulse-line" />

        <p className="text-lg md:text-xl font-light text-white/50 tracking-wide max-w-2xl mx-auto leading-relaxed">
          Proprietary Principal Trading
        </p>
        <p className="text-sm text-white/30 mt-3 tracking-widest uppercase">
          George Town, Cayman Islands
        </p>

        <div className="mt-16 flex justify-center gap-6">
          <a
            href="#about"
            className="px-8 py-3 border border-gold/30 text-gold text-sm tracking-widest uppercase hover:bg-gold/10 transition-all duration-300"
          >
            Discover
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gold/10 border border-gold/20 text-gold text-sm tracking-widest uppercase hover:bg-gold/20 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
