"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    tag: "Liquidity",
    title: "Multi-Pool Liquidity Architecture",
    description:
      "A cascading pool system that ensures deep, persistent liquidity across all trading pairs. Automated rebalancing algorithms maintain optimal capital efficiency while preventing fragmentation.",
    stats: [
      { label: "Pool Depth", value: "$2.4B+" },
      { label: "Slippage", value: "< 0.01%" },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    gradient: "from-[#00ffd1]/10 via-transparent to-[#0077b6]/10",
  },
  {
    tag: "Stability",
    title: "Algorithmic Stability Engine",
    description:
      "Advanced stabilization mechanisms that maintain perfect peg accuracy through dynamic supply adjustments, collateral optimization, and real-time market analysis — ensuring zero deviation from target value.",
    stats: [
      { label: "Peg Accuracy", value: "99.98%" },
      { label: "Recovery", value: "< 3s" },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M16 32L22 20L28 28L36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="20" r="2" fill="currentColor" />
        <circle cx="28" cy="28" r="2" fill="currentColor" />
      </svg>
    ),
    gradient: "from-[#7c3aed]/10 via-transparent to-[#00ffd1]/10",
  },
  {
    tag: "Settlement",
    title: "Zero-Slippage Settlement",
    description:
      "Enterprise-grade settlement infrastructure delivering deterministic execution. Every transaction settles at the exact quoted price — no hidden fees, no price impact, no surprises.",
    stats: [
      { label: "Settlement", value: "Instant" },
      { label: "Finality", value: "2 blocks" },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <path d="M12 36L24 12L36 36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M18 28h12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="24" cy="12" r="3" fill="currentColor" />
        <circle cx="12" cy="36" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="36" cy="36" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    gradient: "from-[#f59e0b]/10 via-transparent to-[#ef4444]/5",
  },
  {
    tag: "Security",
    title: "Enterprise Security Framework",
    description:
      "Multi-layered security architecture with formal verification, continuous auditing, and real-time threat detection. Built to institutional compliance standards with SOC 2 Type II certification.",
    stats: [
      { label: "Audits", value: "3 Firms" },
      { label: "Uptime", value: "99.99%" },
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <path d="M24 4L40 12V24C40 34 33 40 24 44C15 40 8 34 8 24V12L24 4Z" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M20 24L23 27L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-[#00ffd1]/10 via-transparent to-[#22d3ee]/10",
  },
];

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;


        const icon = card.querySelector(".feature-icon");
        const stats = card.querySelectorAll(".feature-stat");

        // Card entrance
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Icon animation
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0.5, rotation: -20 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Stats stagger
        if (stats.length) {
          gsap.fromTo(
            stats,
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative section-padding"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-24">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#00ffd1] to-transparent" />
          <span className="text-sm font-medium tracking-widest uppercase text-[#00ffd1]/70">
            Core Technology
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient text-center md:text-left"
          style={{ fontFamily: "var(--font-space)" }}
        >
          Built Different.
        </h2>
      </div>

      {/* Feature cards */}
      <div className="max-w-7xl mx-auto space-y-5 md:space-y-12">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="group relative rounded-3xl overflow-hidden glass hover:bg-white/[0.04] transition-all duration-700"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
            />

            <div className="feature-inner relative z-10 p-5 sm:p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-16 items-center lg:items-start text-center lg:text-left">
                {/* Left: Text content */}
                <div className="flex-1">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ffd1]" />
                    <span className="text-xs font-medium tracking-wider uppercase text-white/50">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-white mb-3 md:mb-4"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-white/40 leading-relaxed max-w-xl">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center lg:justify-start gap-6 md:gap-8 mt-5 md:mt-8">
                    {feature.stats.map((stat, j) => (
                      <div key={j} className="feature-stat">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00ffd1]" style={{ fontFamily: "var(--font-space)" }}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/30 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Icon */}
                <div className="feature-icon flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-2xl glass flex items-center justify-center text-[#00ffd1] group-hover:scale-110 transition-transform duration-700">
                  {feature.icon}
                </div>
              </div>
            </div>

            {/* Top edge glow */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00ffd1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
