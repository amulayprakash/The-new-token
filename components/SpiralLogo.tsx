"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  scrollConfig,
  prefersReducedMotion,
} from "./ScrollConfig";

gsap.registerPlugin(ScrollTrigger);

export default function SpiralLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    setIsMobile(window.innerWidth < 768);
  }, []);

  const updateSpiralPosition = useCallback(
    (progress: number) => {
      const logo = logoRef.current;
      const trail = trailRef.current;
      if (!logo) return;

      if (reducedMotion || isMobile) {
        // Simple gentle spin for reduced-motion / mobile
        const s = 1 + progress * 0.05;
        logo.style.transform = `scale(${s}) rotate(${progress * 30}deg)`;
        return;
      }

      const t = progress;
      const [, maxRotation] = scrollConfig.rotationRange;

      // Bigger, more dramatic spiral
      // Spiral grows outward then back in (like a breathing motion)
      const spiralPhase = t * Math.PI * 4; // 2 full revolutions
      const maxRadius = 80; // px — much more visible
      const radius = maxRadius * Math.sin(t * Math.PI); // grows, peaks at middle, shrinks back

      const x = radius * Math.cos(spiralPhase);
      const y = radius * Math.sin(spiralPhase) * 0.6; // oval, not circle

      // Continuous rotation
      const rotation = t * maxRotation;

      // Scale pulse — biggest at 50%
      const scale = 1 + Math.sin(t * Math.PI) * 0.12;

      logo.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})`;

      // Update glow trail to follow
      if (trail) {
        trail.style.transform = `translate3d(${x * 0.8}px, ${y * 0.8}px, 0) scale(${1 + t * 0.3})`;
        trail.style.opacity = `${0.15 + t * 0.25}`;
      }
    },
    [reducedMotion, isMobile]
  );

  useGSAP(
    () => {
      if (!containerRef.current || !logoRef.current) return;

      const featuresEl = document.getElementById("features-container");
      if (!featuresEl) return;

      const proxy = { progress: 0 };

      gsap.to(proxy, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: featuresEl,
          start: "top top",
          end: "bottom bottom",
          scrub: scrollConfig.scrub,
        },
        onUpdate: () => updateSpiralPosition(proxy.progress),
      });

      // Glow intensifies as you scroll
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.6,
          scale: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresEl,
            start: "top top",
            end: "bottom bottom",
            scrub: scrollConfig.scrub,
          },
        });
      }
    },
    { dependencies: [updateSpiralPosition] }
  );

  return (
    <div
      ref={containerRef}
      className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-[26vmax] h-[26vmax] max-w-[360px] max-h-[360px]">
        {/* Outer ambient glow */}
        <div
          ref={glowRef}
          className="absolute inset-[-30%] bg-teal-500/8 blur-[120px] rounded-full opacity-20 pointer-events-none"
        />

        {/* Moving glow trail that follows the logo spiral */}
        <div
          ref={trailRef}
          className="absolute inset-[-10%] bg-gradient-to-br from-teal-400/15 to-cyan-400/10 blur-[60px] rounded-full opacity-0 pointer-events-none will-change-transform"
        />

        {/* Logo image */}
        <img
          ref={logoRef}
          src="/logo.png"
          alt="TSDT Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(20,184,166,0.4)] brightness-110 will-change-transform pointer-events-auto"
          style={{ transform: "translate3d(0,0,0)" }}
          draggable={false}
        />
      </div>
    </div>
  );
}
