import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="text-xs tracking-[0.3em] uppercase text-white/30">
              Abandoned Capital LLC
            </span>
          </div>

          <div className="flex gap-8">
            {["About", "Trading", "Leadership", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-wider uppercase text-white/20 hover:text-gold/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20 tracking-wider">
            &copy; {new Date().getFullYear()} Abandoned Capital LLC. All rights reserved.
          </p>
          <p className="text-[11px] text-white/15 tracking-wider">
            Registered in the Cayman Islands
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-white/10 leading-relaxed max-w-3xl mx-auto">
            This website is for informational purposes only. Nothing contained herein constitutes
            an offer, solicitation, or recommendation to buy or sell any financial instrument.
            Abandoned Capital LLC trades exclusively with its own proprietary capital.
          </p>
        </div>
      </div>
    </footer>
  );
}
