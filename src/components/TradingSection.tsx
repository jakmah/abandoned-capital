export default function TradingSection() {
  const strategies = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#B8976A" strokeWidth="1.2">
          <polyline points="4,24 10,16 16,20 22,8 28,12" />
          <circle cx="28" cy="12" r="2" fill="#B8976A" />
        </svg>
      ),
      title: "Systematic Trading",
      desc: "Quantitative models driven by proprietary research, deploying algorithmic strategies across liquid markets with robust backtesting and live monitoring frameworks.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#B8976A" strokeWidth="1.2">
          <rect x="4" y="14" width="5" height="14" rx="1" />
          <rect x="13.5" y="8" width="5" height="20" rx="1" />
          <rect x="23" y="4" width="5" height="24" rx="1" />
        </svg>
      ),
      title: "Discretionary Macro",
      desc: "Fundamental analysis of global macroeconomic trends, central bank policy, and geopolitical dynamics to identify asymmetric opportunities across asset classes.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#B8976A" strokeWidth="1.2">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 4C16 4 20 12 20 16C20 20 16 28 16 28" />
          <path d="M16 4C16 4 12 12 12 16C12 20 16 28 16 28" />
          <line x1="4" y1="16" x2="28" y2="16" />
        </svg>
      ),
      title: "Cross-Border Arbitrage",
      desc: "Exploiting pricing inefficiencies across jurisdictions, time zones, and market microstructures with precision execution and minimal market impact.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#B8976A" strokeWidth="1.2">
          <path d="M6 28L6 12L12 12L12 28" />
          <path d="M13 28L13 6L19 6L19 28" />
          <path d="M20 28L20 16L26 16L26 28" />
        </svg>
      ),
      title: "Volatility Strategies",
      desc: "Options and derivatives-based approaches targeting volatility premium capture, tail risk hedging, and convexity optimization across multiple tenors.",
    },
  ];

  return (
    <section id="trading" className="py-32 px-6 bg-navy/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold/60 text-xs tracking-[0.5em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-white/90">
            Trading Strategies
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((s) => (
            <div
              key={s.title}
              className="p-8 bg-[#0B1120]/60 border border-white/5 hover:border-gold/20 transition-all duration-500 group"
            >
              <div className="mb-5 opacity-60 group-hover:opacity-100 transition-opacity">
                {s.icon}
              </div>
              <h3 className="text-gold text-sm tracking-widest uppercase mb-3">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Performance indicator bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "24/7", label: "Market Coverage" },
            { value: "Multi-Asset", label: "Portfolio Scope" },
            { value: "Proprietary", label: "Capital Base" },
            { value: "Cayman Is.", label: "Jurisdiction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-gold text-lg tracking-wider font-light">
                {stat.value}
              </div>
              <div className="text-white/30 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
