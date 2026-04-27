"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const ring3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo(
        coinRef.current,
        { scale: 0.6, opacity: 0, rotateY: -90 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.5, ease: "expo.out", delay: 0.3 }
      );

      gsap.fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.6 }
      );

      // Rings entrance
      [ring1Ref, ring2Ref, ring3Ref].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { scale: 0.3, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.8 + i * 0.2 }
        );
      });

      // Scroll-driven coin rotation + scale (explicit fromTo so reverse works)
      gsap.fromTo(coinRef.current,
        { rotateY: 0, scale: 1, y: 0 },
        {
          rotateY: 180,
          scale: 0.7,
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // Scroll-driven text fade (explicit fromTo so text reappears on scroll-up)
      gsap.fromTo(textRef.current,
        { y: 0, opacity: 1 },
        {
          y: -80,
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "40% top",
            end: "85% top",
            scrub: 1,
          },
        }
      );

      // Rings parallax (explicit fromTo)
      [ring1Ref, ring2Ref, ring3Ref].forEach((ref, i) => {
        gsap.fromTo(ref.current,
          { y: 0, scale: 1, opacity: 1 },
          {
            y: -50 * (i + 1),
            scale: 1 + i * 0.3,
            opacity: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "10% top",
              end: "70% top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen md:min-h-[120vh] flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,209,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* Concentric rings */}
      <div
        ref={ring1Ref}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[500px] md:h-[500px] rounded-full border border-[#00ffd1]/10 pointer-events-none"
      />
      <div
        ref={ring2Ref}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[700px] md:h-[700px] rounded-full border border-[#00ffd1]/5 pointer-events-none"
      />
      <div
        ref={ring3Ref}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[900px] md:h-[900px] rounded-full border border-[#00ffd1]/[0.02] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-2 sm:px-6 max-w-5xl w-full">
        {/* 3D Coin */}
        <div
          ref={coinRef}
          className="relative mb-8 md:mb-12"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]"
               style={{ transformStyle: "preserve-3d" }}>
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="USBT  Logo"
              width={320}
              height={320}
              priority
              className="w-full h-full object-contain animate-float drop-shadow-[0_0_60px_rgba(0,255,209,0.3)]"
            />

            {/* Rotating outer orbit */}
            <div className="absolute inset-[-20px] animate-spin-slow pointer-events-none">
              <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#00ffd1] shadow-[0_0_10px_#00ffd1]" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div ref={textRef}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 md:mb-8 px-4 py-1.5 md:px-5 md:py-2 rounded-full glass animate-border-glow">
            <div className="w-2 h-2 rounded-full bg-[#00ffd1] animate-glow-pulse" />
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-white/70">
              The Settlement Standard
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tighter leading-[0.9] mb-5 md:mb-8"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="text-gradient">Engineered for</span>
            <br />
            <span className="text-gradient-accent">Absolute Stability</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg lg:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light mb-8 md:mb-12">
            The Tokenized Settlement Digital Token provides enterprise
            participants and corporate treasuries with predictable digital value
            transfer — eliminating speculative volatility.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full sm:w-auto">
            <a href="#stats" className="group w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-2xl bg-white text-black font-semibold text-sm md:text-base transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer text-center">
              Explore Ecosystem
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a href="/USBT%20-%20Whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-2xl border-2 border-[#00ffd1] bg-[#00ffd1] hover:bg-[#00ffe5] transition-all duration-300 text-black font-bold text-sm md:text-base cursor-pointer hover:scale-[1.03] text-center shadow-[0_0_40px_rgba(0,255,209,0.7),0_0_80px_rgba(0,255,209,0.3)] hover:shadow-[0_0_60px_rgba(0,255,209,1),0_0_120px_rgba(0,255,209,0.5)]">
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read Whitepaper
              </span>
            </a>
          </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}
