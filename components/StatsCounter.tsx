"use client";

import { useRef, useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { label: "Total Volume Processed", value: 2.4, suffix: "B+", prefix: "$" },
  { label: "Settlements Completed", value: 48, suffix: "K+" },
  { label: "Network Uptime", value: 99.99, suffix: "%" },
  { label: "Institutional Partners", value: 120, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
  isVisible,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  isVisible: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = startValue + (value - startValue) * eased;
      setCurrent(val);

      if (progress < 1) {
        ref.current = requestAnimationFrame(tick);
      }
    };

    ref.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current);
  }, [isVisible, value]);

  const formatted = value % 1 !== 0 ? current.toFixed(2) : Math.floor(current).toString();

  return (
    <span className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="relative section-padding">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,209,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00ffd1]/50" />
            <span className="text-sm font-medium tracking-widest uppercase text-[#00ffd1]/70">
              Performance
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00ffd1]/50" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-gradient"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Numbers Don&apos;t Lie.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative text-center p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl glass hover:bg-white/[0.04] transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-[#00ffd1]/5 to-transparent pointer-events-none" />

              <div
                className="relative z-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3"
                style={{ fontFamily: "var(--font-space)" }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isVisible={isVisible}
                />
              </div>
              <div className="relative z-10 text-xs sm:text-sm md:text-base text-white/30 font-medium">
                {stat.label}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#00ffd1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
