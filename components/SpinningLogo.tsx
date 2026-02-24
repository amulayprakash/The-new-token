"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpinningLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !logoRef.current) return;

    // Spin logo based on scroll of the entire right-side container
    gsap.to(logoRef.current, {
      rotation: 360 * 2, // Rotate twice over the scroll length
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When the sticky container reaches top
        end: "bottom bottom", // Not strictly needed when scrubbing parent
        endTrigger: "#features-container", // Let the features container size dictate scroll length
        scrub: 0.5,
      }
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="sticky top-0 h-screen w-full flex items-center justify-center pt-24 pb-12 pointer-events-none"
    >
      <div className="relative w-[30vmax] h-[30vmax] max-w-[400px] max-h-[400px]">
         {/* Subtle ambient glow behind the logo */}
        <div className="absolute inset-0 bg-teal-500/10 blur-[80px] rounded-full" />
        <img 
          ref={logoRef}
          src="/logo.png" 
          alt="Spinning TSDT Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(20,184,166,0.4)] brightness-125 pointer-events-auto" 
        />
      </div>
    </div>
  );
}
