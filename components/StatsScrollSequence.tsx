"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Constants ─── */
const FRAME_COUNT = 121;
const FRAME_PATH = (i: number) =>
  `/assets/frames-webp/ezgif-frame-${String(i).padStart(3, "0")}.webp`;

const STATS = [
  { label: "Total Volume Processed", value: 2.4, suffix: "B+", prefix: "$", decimals: 2 },
  { label: "Settlements Completed", value: 48, suffix: "K+", prefix: "", decimals: 0 },
  { label: "Network Uptime", value: 99.99, suffix: "%", prefix: "", decimals: 2 },
  { label: "Institutional Partners", value: 120, suffix: "+", prefix: "", decimals: 0 },
] as const;

/* ─── Desktop Canvas + Scroll Animation ─── */
const MAX_CANVAS_RES = 1200; // cap internal resolution for GPU perf; CSS handles display size

function DesktopSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [canvasDisplaySize, setCanvasDisplaySize] = useState(400);
  const lastFrameRef = useRef(-1);

  /* preload all frames */
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = FRAME_PATH(i);
      img.decoding = "async";
      const done = () => {
        count++;
        setLoadProgress(Math.round((count / FRAME_COUNT) * 100));
        if (count === FRAME_COUNT) setLoaded(true);
      };
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  /* imperative canvas draw — skips redundant same-frame draws */
  const draw = useCallback(
    (frameIndex: number) => {
      if (frameIndex === lastFrameRef.current) return; // skip duplicate
      lastFrameRef.current = frameIndex;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const img = imagesRef.current[frameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        /* contain-fit */
        const imgR = img.naturalWidth / img.naturalHeight;
        const canR = canvas.width / canvas.height;
        let dw: number, dh: number;
        if (canR > imgR) {
          dh = canvas.height;
          dw = dh * imgR;
        } else {
          dw = canvas.width;
          dh = dw / imgR;
        }
        const dx = (canvas.width - dw) / 2;
        const dy = (canvas.height - dh) / 2;

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, dx, dy, dw, dh);
      } else {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    },
    []
  );


  /* resize canvas — cap internal resolution, CSS scales display */
  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      const displaySize = Math.min(window.innerWidth * 0.65, window.innerHeight * 0.85);
      setCanvasDisplaySize(displaySize);
      if (!c) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const internalSize = Math.min(displaySize * dpr, MAX_CANVAS_RES);
      c.width = internalSize;
      c.height = internalSize;
      c.style.width = `${displaySize}px`;
      c.style.height = `${displaySize}px`;
      lastFrameRef.current = -1; // force redraw
      if (loaded) draw(0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [loaded, draw]);

  /* GSAP scroll timeline */
  useGSAP(
    () => {
      if (!loaded || !sectionRef.current) return;

      const anim = { frame: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.0, // smooth scroll tracking without lag
        },
      });

      /* ── Frame sequence — no snap for continuous interpolation ── */
      tl.to(
        anim,
        {
          frame: FRAME_COUNT - 1,
          ease: "none",
          duration: 4,
          onUpdate: () => draw(Math.round(anim.frame)),
        },
        0
      );

      /* ── Vertical heading fade in ── */
      tl.fromTo(
        headingRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 },
        0
      );

      /* ── Stat cards spiral out from behind center animation ── */
      const statsPanel = sectionRef.current.querySelector('.stats-right-panel');
      const canvasEl = canvasRef.current;

      STATS.forEach((stat, i) => {
        const startAt = 0.4 + i * 0.45;
        const card = statRefs.current[i];
        const num = numberRefs.current[i];
        const lbl = labelRefs.current[i];

        if (card && statsPanel && canvasEl) {
          /* Calculate the offset from card's final position to canvas center */
          const cardRect = card.getBoundingClientRect();
          const canvasRect = canvasEl.getBoundingClientRect();
          const canvasCenterX = canvasRect.left + canvasRect.width / 2;
          const canvasCenterY = canvasRect.top + canvasRect.height / 2;
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const deltaX = canvasCenterX - cardCenterX;
          const deltaY = canvasCenterY - cardCenterY;

          /* Spiral angles — each card exits at a different angle */
          const spiralAngles = [-35, -15, 15, 35];
          const rotation = spiralAngles[i];

          tl.fromTo(
            card,
            {
              opacity: 0,
              x: deltaX,
              y: deltaY,
              scale: 0.3,
              rotation: rotation,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              ease: "power3.out",
              duration: 0.9,
            },
            startAt
          );
        }

        /* Count-up the number */
        if (num) {
          const proxy = { val: 0 };
          tl.to(
            proxy,
            {
              val: stat.value,
              duration: 0.6,
              ease: "power2.out",
              onUpdate: () => {
                const display =
                  stat.decimals > 0
                    ? proxy.val.toFixed(stat.decimals)
                    : Math.floor(proxy.val).toString();
                num.textContent = `${stat.prefix}${display}${stat.suffix}`;
              },
            },
            startAt + 0.2
          );
        }

        if (lbl) {
          tl.fromTo(
            lbl,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 },
            startAt + 0.35
          );
        }
      });
    },
    { dependencies: [loaded], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative"
      style={{ height: "450vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Subtle ambient glow behind animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00ffd1]/[0.03] blur-[120px]" />
        </div>

        {/* Loading placeholder — shown while frames are fetching */}
        {!loaded && (
          <div
            className="absolute z-[1] flex items-center justify-center"
            style={{
              top: "50%",
              left: "calc(420px + (100% - 420px - 450px) / 2)",
              transform: "translate(-50%, -50%)",
              width: `${canvasDisplaySize}px`,
              height: `${canvasDisplaySize}px`,
            }}
          >
            {/* Outer pulsing ring */}
            <div className="absolute inset-0 rounded-full border border-[#00ffd1]/10 animate-pulse" />

            {/* Spinning progress arc using conic-gradient */}
            <div
              className="absolute inset-4 rounded-full"
              style={{
                background: `conic-gradient(#00ffd1 ${loadProgress * 3.6}deg, transparent ${loadProgress * 3.6}deg)`,
                opacity: 0.25,
                transition: "background 0.3s ease",
              }}
            />
            <div className="absolute inset-5 rounded-full bg-black" />

            {/* Inner spinning ring */}
            <div
              className="absolute inset-8 rounded-full border border-[#00ffd1]/20"
              style={{ animation: "spin 3s linear infinite" }}
            />
            <div
              className="absolute inset-8 rounded-full border-t border-[#00ffd1]/60 rounded-full"
              style={{ animation: "spin 1.5s linear infinite" }}
            />

            {/* Center content */}
            <div className="relative flex flex-col items-center gap-3">
              {/* Logo mark */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ffd1]/20 to-[#0077b6]/20 border border-[#00ffd1]/20 flex items-center justify-center">
                <span
                  className="text-[#00ffd1] font-bold text-2xl"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  T
                </span>
              </div>

              {/* Progress */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#00ffd1] font-bold text-lg tabular-nums" style={{ fontFamily: "var(--font-space)" }}>
                  {loadProgress}%
                </span>
                <span className="text-white/25 text-[10px] tracking-widest uppercase">
                  Loading
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-24 h-[1px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00ffd1]/60 to-[#00ffd1] rounded-full transition-all duration-300"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-full bg-[#00ffd1]/[0.03] blur-2xl animate-pulse" />
          </div>
        )}

        {/* Canvas — full brightness so animation is clearly visible */}
        <canvas
          ref={canvasRef}
          className="absolute z-[1]"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease",
            top: "50%",
            left: "calc(420px + (100% - 420px - 450px) / 2)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Subtle gradient overlays for readability */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 15%, transparent 30%, transparent 55%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Content overlay — three-zone horizontal layout */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">

          {/* ── LEFT ZONE: Vertical heading ── */}
          <div
            ref={headingRef}
            className="stats-vertical-heading flex-shrink-0 flex items-center justify-center opacity-0"
            style={{ width: "420px" }}
          >
            <div className="relative">
              {/* Decorative accent line */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-[1px] h-6 bg-gradient-to-b from-transparent to-[#00ffd1]/40" />

              {/* Subtitle */}
              <span
                className="vertical-text block text-[10px] font-semibold tracking-[0.35em] uppercase text-[#00ffd1]/50 mb-6"
              >
                Performance Metrics
              </span>

              {/* Main heading */}
              <h2
                className="vertical-text text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-gradient glow-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Numbers Don&apos;t Lie
              </h2>

              {/* Decorative accent line */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-[1px] h-6 bg-gradient-to-t from-transparent to-[#00ffd1]/40" />
            </div>
          </div>

          {/* ── CENTER ZONE: Canvas animation (spacer) ── */}
          <div className="flex-1" />

          {/* ── RIGHT ZONE: Stat cards emerging from behind circle ── */}
          <div className="stats-right-panel flex-shrink-0 flex flex-col justify-evenly h-full pr-0 py-8" style={{ width: "450px" }}>
            {STATS.map((stat, i) => (
              <div
                key={i}
                ref={(el) => { statRefs.current[i] = el; }}
                className="stat-card-emerge group relative py-5 px-6 rounded-2xl opacity-0"
              >
                {/* Animated top accent line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffd1]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ffd1]/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ffd1]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number */}
                <span
                  ref={(el) => { numberRefs.current[i] = el; }}
                  className="relative z-10 block text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 tabular-nums stats-number-glow"
                  style={{ fontFamily: "var(--font-heading)", fontFeatureSettings: '"tnum"' }}
                >
                  {stat.prefix}0{stat.suffix}
                </span>

                {/* Accent divider */}
                <div className="w-8 h-[1px] mb-2 bg-gradient-to-r from-[#00ffd1]/30 to-transparent" />

                {/* Label */}
                <div
                  ref={(el) => { labelRefs.current[i] = el; }}
                  className="relative z-10 text-[10px] sm:text-xs text-white/40 font-medium tracking-wider uppercase opacity-0"
                >
                  {stat.label}
                </div>

                {/* Hover glow behind card */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[#00ffd1]/[0.04] to-transparent pointer-events-none" />

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#00ffd1]/15 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile Fallback — static stats, no canvas ─── */
function MobileFallback() {
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
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Numbers Don&apos;t Lie.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 px-1">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`group relative text-center p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl glass hover:bg-white/[0.04] transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-[#00ffd1]/5 to-transparent pointer-events-none" />
              <div
                className="relative z-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 tabular-nums"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.prefix}
                {stat.decimals > 0 ? stat.value.toFixed(stat.decimals) : stat.value}
                {stat.suffix}
              </div>
              <div className="relative z-10 text-xs sm:text-sm md:text-base text-white/30 font-medium">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#00ffd1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export — responsive switch ─── */
export default function StatsScrollSequence() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* SSR: render nothing until mounted to avoid hydration mismatch */
  if (!mounted) return null;

  return isDesktop ? <DesktopSequence /> : <MobileFallback />;
}
