"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-navy/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold/60 text-xs tracking-[0.5em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-white/90">
            Contact
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
                Registered Office
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Abandoned Capital LLC
                <br />
                PO Box 309, Ugland House
                <br />
                South Church Street
                <br />
                George Town, Grand Cayman
                <br />
                KY1-1104, Cayman Islands
              </p>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
                General Inquiries
              </h3>
              <p className="text-white/50 text-sm">
                <a href="mailto:info@abandoned.capital" className="hover:text-gold transition-colors">
                  info@abandoned.capital
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
                CEO Direct
              </h3>
              <p className="text-white/50 text-sm">
                <a href="mailto:george@abandoned.capital" className="hover:text-gold transition-colors">
                  george@abandoned.capital
                </a>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold/50 text-white/70 py-3 text-sm outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold/50 text-white/70 py-3 text-sm outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold/50 text-white/70 py-3 text-sm outline-none transition-colors"
                placeholder="Inquiry subject"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-white/30 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-white/10 focus:border-gold/50 text-white/70 py-3 text-sm outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-10 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
