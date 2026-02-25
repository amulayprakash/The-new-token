"use client";

const footerLinks = {
  Protocol: ["Documentation", "Whitepaper", "Smart Contracts", "Audits"],
  Ecosystem: ["Governance", "Staking", "Bridge", "Explorer"],
  Community: ["Discord", "Twitter", "Telegram", "Medium"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top glow line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00ffd1]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-16 lg:py-24">
        {/* Top row: logo + links */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 mb-10 md:mb-16">
          {/* Logo section */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ffd1] to-[#0077b6] flex items-center justify-center">
                <span
                  className="text-black font-bold text-lg"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  T
                </span>
              </div>
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: "var(--font-space)" }}
              >
                TSDT
              </span>
            </div>
            <p className="text-white/30 leading-relaxed max-w-sm text-sm">
              The Tokenized Settlement Digital Token — providing enterprise
              participants with predictable digital value transfer and
              settlement.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {["Twitter", "Discord", "Telegram", "GitHub"].map((platform) => (
                <button
                  key={platform}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-[#00ffd1] hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                  aria-label={platform}
                >
                  <span className="text-xs font-bold">{platform[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/25 hover:text-white/60 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04] text-center md:text-left">
          <p className="text-xs text-white/15">
            © 2026 TSDT Protocol. All rights reserved.
          </p>
          <p className="text-xs text-white/15">
            Built for institutional settlement.
          </p>
        </div>
      </div>
    </footer>
  );
}
