"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ── Tokenomics Data ── */
const segments = [
  {
    label: "Liquidity Pools",
    pct: 35,
    color: "#00ffd1",
    desc: "Deep liquidity across major DEX & CEX pairs for instant settlement.",
  },
  {
    label: "Treasury Reserve",
    pct: 25,
    color: "#0077b6",
    desc: "Protocol-owned reserves backing stability and growth initiatives.",
  },
  {
    label: "Ecosystem Growth",
    pct: 20,
    color: "#7c3aed",
    desc: "Grants, partnerships, and developer incentives to expand the ecosystem.",
  },
  {
    label: "Team & Advisors",
    pct: 12,
    color: "#f59e0b",
    desc: "Vested allocation for core contributors with 24-month linear unlock.",
  },
  {
    label: "Community Rewards",
    pct: 8,
    color: "#ef4444",
    desc: "Staking rewards, airdrops, and governance participation incentives.",
  },
];

const stats = [
  { value: "10+", label: "CEX Listed" },
  { value: "50K+", label: "Holders" },
  { value: "100%", label: "Audited" },
];

/* ── Helpers ── */
const RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~314.16
const VIEWBOX = 140;
const CENTER = VIEWBOX / 2; // 70

/**
 * Compute the midpoint angle (in radians) of each donut segment so we can
 * shift the active segment outward along that direction.
 */
function getSegmentAngles() {
  let acc = 0;
  return segments.map((seg) => {
    const startAngle = (acc / 100) * 360;
    acc += seg.pct;
    const endAngle = (acc / 100) * 360;
    const mid = ((startAngle + endAngle) / 2) * (Math.PI / 180);
    return { startDeg: startAngle, midRad: mid };
  });
}

export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const chartWrapRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const legendWrapRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pctRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRowRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const angles = useMemo(getSegmentAngles, []);

  /* ── Hover handlers ── */
  const handleHover = useCallback((i: number) => setActiveIndex(i), []);
  const handleLeave = useCallback(() => setActiveIndex(null), []);

  /* ── GSAP scroll-triggered entrance ── */
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.8,
        },
      });

      /* Header fade-up */
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 },
        0
      );

      /* Ambient glow */
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, ease: "power2.out", duration: 0.8 },
        0
      );

      /* Donut chart scale-in with rotation */
      tl.fromTo(
        chartWrapRef.current,
        { opacity: 0, scale: 0.3, rotation: -120 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          ease: "back.out(1.4)",
          duration: 1.2,
        },
        0.1
      );

      /* Ring segments draw on */
      const circles = ringRef.current?.querySelectorAll(".ring-segment");
      if (circles) {
        circles.forEach((c) => {
          (c as SVGCircleElement).style.strokeDashoffset = `${CIRCUMFERENCE}`;
        });
        tl.to(
          circles,
          {
            strokeDashoffset: (i: number) => {
              return CIRCUMFERENCE - (CIRCUMFERENCE * segments[i].pct) / 100;
            },
            duration: 1.2,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.3
        );
      }

      /* Center text pop */
      tl.fromTo(
        centerTextRef.current,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)", duration: 0.8 },
        0.7
      );

      /* Legend wrapper fade in as a whole */
      tl.fromTo(
        legendWrapRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 },
        0.4
      );

      /* Individual legend cards stagger in */
      const items = itemsRef.current.filter(Boolean);
      tl.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        },
        0.5
      );

      /* Percentage counters count up */
      items.forEach((_, i) => {
        const pctEl = pctRefs.current[i];
        if (pctEl) {
          const proxy = { val: 0 };
          tl.to(
            proxy,
            {
              val: segments[i].pct,
              duration: 0.5,
              ease: "power2.out",
              onUpdate: () => {
                pctEl.textContent = `${Math.floor(proxy.val)}%`;
              },
            },
            0.5 + i * 0.08
          );
        }
      });

      /* Stat pills stagger in */
      const statEls = statsRowRef.current?.querySelectorAll(".stat-pill");
      if (statEls) {
        tl.fromTo(
          statEls,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          },
          0.9
        );
      }
    },
    { scope: sectionRef }
  );

  /* ── Render ── */
  let accumulatedOffset = 0;

  return (
    <section
      id="tokenomics"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      onMouseLeave={handleLeave}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,209,0.08) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div ref={headerRef} className="mb-12 md:mb-20 opacity-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#00ffd1] to-transparent" />
            <span className="text-sm font-medium tracking-widest uppercase text-[#00ffd1]/70">
              Distribution
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Tokenomics.
          </h2>
        </div>

        {/* ── Content Grid ── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* ── Donut Chart Column ── */}
          <div className="relative flex-shrink-0 flex flex-col items-center gap-8">
            <div
              ref={chartWrapRef}
              className="relative opacity-0"
            >
              <svg
                ref={ringRef}
                viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] -rotate-90"
                style={{ filter: "drop-shadow(0 0 30px rgba(0,255,209,0.08))" }}
              >
                <defs>
                  {segments.map((seg, i) => (
                    <filter key={i} id={`glow-${i}`}>
                      <feGaussianBlur
                        stdDeviation="3"
                        result="coloredBlur"
                      />
                      <feFlood
                        floodColor={seg.color}
                        floodOpacity="0.6"
                        result="glowColor"
                      />
                      <feComposite
                        in="glowColor"
                        in2="coloredBlur"
                        operator="in"
                        result="softGlow"
                      />
                      <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  ))}
                </defs>

                {segments.map((seg, i) => {
                  const dashLen = (CIRCUMFERENCE * seg.pct) / 100;
                  const dashArray = `${dashLen} ${CIRCUMFERENCE - dashLen}`;
                  const rotation = (accumulatedOffset / 100) * 360;
                  accumulatedOffset += seg.pct;

                  const isActive = activeIndex === i;
                  const isInactive =
                    activeIndex !== null && activeIndex !== i;

                  // Shift outward on hover
                  const shiftDist = isActive ? 5 : 0;
                  const dx = Math.cos(angles[i].midRad) * shiftDist;
                  const dy = Math.sin(angles[i].midRad) * shiftDist;

                  return (
                    <circle
                      key={i}
                      className="ring-segment"
                      cx={CENTER + dx}
                      cy={CENTER + dy}
                      r={RADIUS}
                      fill="none"
                      stroke={seg.color}
                      strokeWidth={isActive ? 11 : 8}
                      strokeDasharray={dashArray}
                      strokeDashoffset={CIRCUMFERENCE}
                      strokeLinecap="round"
                      transform={`rotate(${rotation} ${CENTER + dx} ${CENTER + dy})`}
                      style={{
                        opacity: isInactive ? 0.3 : isActive ? 1 : 0.85,
                        filter: isActive ? `url(#glow-${i})` : "none",
                        transition:
                          "opacity 0.35s ease, stroke-width 0.35s ease, filter 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => handleHover(i)}
                    />
                  );
                })}

                {/* Center background */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r="38"
                  fill="rgba(0,0,0,0.85)"
                />
              </svg>

              {/* Center text — shows total or hovered segment */}
              <div
                ref={centerTextRef}
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none"
              >
                {activeIndex === null ? (
                  <>
                    <div
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      1B
                    </div>
                    <div className="text-xs sm:text-sm text-white/40 mt-1">
                      Total Supply
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="text-xl sm:text-2xl md:text-3xl font-bold"
                      style={{
                        fontFamily: "var(--font-space)",
                        color: segments[activeIndex].color,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {segments[activeIndex].pct}%
                    </div>
                    <div className="text-xs sm:text-sm text-white/60 mt-1 text-center px-4 max-w-[180px]">
                      {segments[activeIndex].label}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* ── Stat Pills ── */}
            <div
              ref={statsRowRef}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="stat-pill flex items-center gap-2 px-4 py-2 rounded-full opacity-0"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="text-sm md:text-base font-bold text-[#00ffd1]"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs md:text-sm text-white/50">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Legend Cards ── */}
          <div ref={legendWrapRef} className="flex-1 space-y-2 md:space-y-3 w-full opacity-0">
            {segments.map((seg, i) => {
              const isActive = activeIndex === i;
              const isInactive = activeIndex !== null && activeIndex !== i;

              return (
                <div
                  key={i}
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  className="tokenomics-card group"
                  style={{
                    borderLeft: `3px solid ${isActive ? seg.color : "transparent"}`,
                    background: isActive
                      ? `linear-gradient(90deg, ${seg.color}0a, transparent 60%)`
                      : "transparent",
                    opacity: isInactive ? 0.45 : 1,
                    transform: isActive ? "translateX(4px)" : "translateX(0)",
                  }}
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={handleLeave}
                >
                  <div className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer">
                    {/* Color dot */}
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: seg.color,
                        boxShadow: isActive
                          ? `0 0 16px ${seg.color}80, 0 0 32px ${seg.color}30`
                          : `0 0 8px ${seg.color}30`,
                        transform: isActive ? "scale(1.4)" : "scale(1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                    />

                    {/* Label + progress bar */}
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm md:text-base">
                        {seg.label}
                      </div>
                      {/* Progress bar */}
                      <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${seg.pct}%`,
                            backgroundColor: seg.color,
                            opacity: isActive ? 1 : 0.5,
                            boxShadow: isActive
                              ? `0 0 8px ${seg.color}60`
                              : "none",
                            transition: "opacity 0.3s ease, box-shadow 0.3s ease",
                          }}
                        />
                      </div>
                      {/* Description — only show on active with smooth height transition */}
                      <div
                        style={{
                          maxHeight: isActive ? "60px" : "0px",
                          opacity: isActive ? 1 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.4s ease, opacity 0.3s ease",
                        }}
                      >
                        <p className="text-xs text-white/40 mt-2 leading-relaxed">
                          {seg.desc}
                        </p>
                      </div>
                    </div>

                    {/* Percentage counter */}
                    <div
                      ref={(el) => {
                        pctRefs.current[i] = el;
                      }}
                      className="text-xl md:text-2xl font-bold tabular-nums"
                      style={{
                        fontFamily: "var(--font-space)",
                        fontFeatureSettings: '"tnum"',
                        color: isActive ? seg.color : "rgba(255,255,255,0.7)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      0%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
