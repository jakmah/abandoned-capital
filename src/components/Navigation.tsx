"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#trading", label: "Trading" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={40} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">
              Abandoned
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/40">
              Capital
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wider uppercase text-white/50 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/60 hover:text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B1120]/95 border-t border-white/5 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-wider uppercase text-white/50 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
