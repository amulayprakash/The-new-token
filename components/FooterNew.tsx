"use client";

import Link from "next/link";
import { JSX } from "react";

/* ── SVG icons ─────────────────────────────────────────────────────────── */
const icons: Record<string, JSX.Element> = {
  Twitter: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  Facebook: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  GitHub: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Telegram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  Whitepaper: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  "Terms of Service": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  "Privacy Policy": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

/* ── Footer link data ───────────────────────────────────────────────────── */
const footerLinks: Record<string, { label: string; href: string; external: boolean }[]> = {
  Protocol: [
    { label: "Whitepaper", href: "/whitepaper", external: true },
  ],
  Community: [
    { label: "Twitter",   href: "https://x.com/USBTNetwork",                               external: true },
    { label: "Telegram",  href: "https://t.me/usbtoffice",                                  external: true },
    { label: "Instagram", href: "https://www.instagram.com/usbt.official/",                 external: true },
    { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61587755409227",   external: true },
    { label: "GitHub",    href: "https://github.com/official-usbt",                         external: true },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms-of-service", external: false },
    { label: "Privacy Policy",   href: "/privacy-policy",   external: false },
  ],
};

/* ── Social icon buttons (logo area) ───────────────────────────────────── */
const socialIcons = [
  { label: "Twitter",   href: "https://x.com/USBTNetwork",                             icon: "Twitter"   },
  { label: "Telegram",  href: "https://t.me/usbtoffice",                               icon: "Telegram"  },
  { label: "Instagram", href: "https://www.instagram.com/usbt.official/",              icon: "Instagram" },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61587755409227",icon: "Facebook"  },
  { label: "GitHub",    href: "https://github.com/official-usbt",                      icon: "GitHub"    },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top glow line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00ffd1]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-16 lg:py-24">
        {/* Top row: logo + links */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 mb-10 md:mb-16">

          {/* Logo section */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
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
                USBT
              </span>
            </div>

            <p className="text-white/30 leading-relaxed max-w-sm text-sm mx-auto lg:mx-0">
              The Tokenized Settlement Digital Token — providing enterprise
              participants with predictable digital value transfer and
              settlement.
            </p>

            {/* Social icon buttons */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              {socialIcons.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-[#00ffd1] hover:bg-white/[0.06] transition-all duration-300"
                >
                  {icons[icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-center lg:text-left">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => {
                    const icon = icons[link.label];
                    const inner = (
                      <span className="flex items-center gap-2 justify-center lg:justify-start">
                        {icon && (
                          <span className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                            {icon}
                          </span>
                        )}
                        {link.label}
                      </span>
                    );
                    return (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-sm text-white/25 hover:text-white/60 transition-colors duration-300"
                          >
                            {inner}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group text-sm text-white/25 hover:text-white/60 transition-colors duration-300"
                          >
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04] text-center md:text-left">
          <p className="text-xs text-white/15">
            © 2026 USBT Protocol. All rights reserved.
          </p>
          <p className="text-xs text-white/15">
            Built for institutional settlement.
          </p>
        </div>
      </div>
    </footer>
  );
}
