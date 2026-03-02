"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffd1]/[0.04] blur-[120px] rounded-full animate-glow-pulse" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2
          className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-5 md:mb-8 leading-[0.9]"
          style={{ fontFamily: "var(--font-space)" }}
        >
          <span className="text-gradient">Ready to</span>
          <br />
          <span className="text-gradient-accent">Get Started?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12">
          Join the institutional standard for digital settlement. 
          Experience zero-slippage, algorithmic stability, and enterprise-grade security.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-[#00ffd1] text-black font-bold text-base md:text-lg transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,209,0.4)] hover:scale-[1.03] cursor-pointer overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Acquire USBT 
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-2xl glass glow-border text-white font-semibold text-base md:text-lg transition-all duration-500 hover:bg-white/10 hover:scale-[1.03] cursor-pointer">
            View Documentation
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-10 md:mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/20 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Audited by 3 Firms</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Enterprise Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
