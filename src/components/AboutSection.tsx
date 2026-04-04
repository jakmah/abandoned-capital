export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold/60 text-xs tracking-[0.5em] uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-white/90">
            About the Firm
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-white/50 leading-relaxed text-lg font-light">
              Abandoned Capital LLC is a proprietary principal trading company
              incorporated in the Cayman Islands. We deploy our own capital
              across global markets, employing systematic and discretionary
              strategies to generate superior risk-adjusted returns.
            </p>
            <p className="text-white/40 leading-relaxed mt-6">
              Founded with a mandate to operate at the intersection of
              quantitative research and market intuition, we maintain a
              disciplined approach to capital allocation, risk management, and
              portfolio construction.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Proprietary Capital",
                desc: "We trade exclusively with our own capital, ensuring full alignment of interests and independent decision-making.",
              },
              {
                title: "Global Markets",
                desc: "Our strategies span equities, fixed income, currencies, and derivatives across major global exchanges.",
              },
              {
                title: "Risk Discipline",
                desc: "Rigorous risk management frameworks govern every aspect of our trading operations and capital deployment.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l border-gold/20 pl-6">
                <h3 className="text-gold text-sm tracking-widest uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
