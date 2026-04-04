export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold/60 text-xs tracking-[0.5em] uppercase mb-4">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-white/90">
            Principal
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          {/* CEO placeholder avatar */}
          <div className="w-28 h-28 mx-auto mb-8 border border-gold/20 rounded-full flex items-center justify-center bg-charcoal/50">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#c9a84c" strokeWidth="1">
              <circle cx="20" cy="14" r="7" />
              <path d="M6 36C6 28 12 24 20 24C28 24 34 28 34 36" />
            </svg>
          </div>

          <h3 className="text-xl tracking-[0.15em] uppercase text-white/80 mb-1">
            George Powell
          </h3>
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-8">
            Chief Executive Officer &amp; Ultimate Beneficial Owner
          </p>

          <p className="text-white/40 leading-relaxed font-light">
            Directing the strategic vision and trading operations of Abandoned
            Capital LLC, with a focus on proprietary capital deployment and
            risk-calibrated portfolio management across global financial
            markets.
          </p>

          <div className="mt-10 flex justify-center gap-8">
            <a
              href="mailto:george@abandoned.capital"
              className="text-gold/50 hover:text-gold text-xs tracking-widest uppercase transition-colors"
            >
              Email
            </a>
            <span className="text-white/10">|</span>
            <a
              href="#contact"
              className="text-gold/50 hover:text-gold text-xs tracking-widest uppercase transition-colors"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
