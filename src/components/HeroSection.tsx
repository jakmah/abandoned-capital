import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B1120]/80" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,151,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,151,106,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo size={280} />
        </div>

        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 animate-pulse-line" />

        <p className="text-lg md:text-xl font-light text-white/60 tracking-wide max-w-2xl mx-auto leading-relaxed">
          Proprietary Principal Trading
        </p>
        <p className="text-sm text-white/35 mt-3 tracking-widest uppercase">
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
    </section>
  );
}
