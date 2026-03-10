"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  scrollConfig,
  getBreakpointMultiplier,
  prefersReducedMotion,
} from "./ScrollConfig";

gsap.registerPlugin(ScrollTrigger);

export default function CanvasScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const frameCount = 192;

  useEffect(() => {
    const preloadImages = () => {
      const images: HTMLImageElement[] = [];
      let loaded = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/assets/frames/ezgif-frame-${paddedIndex}.jpg`;

        const onLoadOrError = () => {
          loaded++;
          if (loaded === frameCount) setImagesLoaded(true);
        };

        img.onload = onLoadOrError;
        img.onerror = onLoadOrError;
        images.push(img);
      }
      imagesRef.current = images;
    };

    preloadImages();
  }, [frameCount]);

  useGSAP(
    () => {
      if (!imagesLoaded) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d", { alpha: false });
      if (!context) return;

      const images = imagesRef.current;
      const animationObj = { frame: 0 };
      const reduced = prefersReducedMotion();

      const render = () => {
        const frameIndex = Math.floor(animationObj.frame);
        const img = images[frameIndex];

        if (img && img.complete && img.naturalWidth > 0) {
          const imageRatio = img.width / img.height;
          const canvasRatio = canvas.width / canvas.height;
          let scale = 1;

          if (canvasRatio > imageRatio) {
            scale = canvas.height / img.height;
          } else {
            scale = canvas.width / img.width;
          }

          if (scale === 0 || !isFinite(scale)) scale = 1;
          scale *= 0.85;

          const renderWidth = img.width * scale;
          const renderHeight = img.height * scale;
          const x = canvas.width / 2 - renderWidth / 2;
          const y = canvas.height / 2 - renderHeight / 2;

          context.fillStyle = "#000000";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, x, y, renderWidth, renderHeight);
        } else {
          context.fillStyle = "#000000";
          context.fillRect(0, 0, canvas.width, canvas.height);
        }
      };

      setTimeout(render, 50);

      if (reduced) {
        render();
        return;
      }

      // Scroll distance with configurable multiplier
      const multiplier = getBreakpointMultiplier();
      const scrollEnd = `+=${scrollConfig.baseScrollEnd * multiplier}%`;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: scrollEnd,
          scrub: scrollConfig.scrub,
          pin: true,
        },
      });

      // Fade out hero text early
      tl.to(
        textRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: -30,
          ease: "power2.inOut",
          duration: 0.5,
        },
        0
      );

      // Play frame sequence
      tl.to(
        animationObj,
        {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          onUpdate: render,
          duration: 3,
        },
        0
      );

      // Ambient glow
      tl.to(
        glowRef.current,
        {
          opacity: 0.8,
          scale: 1.2,
          ease: "power2.out",
          duration: 1,
        },
        2
      );

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { dependencies: [imagesLoaded], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden font-sans"
    >
      {/* Deep background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black z-0 pointer-events-none" />

      {/* Center glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-teal-500/10 blur-[100px] rounded-full z-0 opacity-0 pointer-events-none"
      />

      {/* 3D Sequence Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-[1] mix-blend-screen opacity-90 transition-opacity duration-1000"
        style={{ filter: "contrast(1.2)" }}
      />

      {/* Hero Content Overlay — centered, clean, below the 3D animation */}
      <div
        ref={textRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center pointer-events-none"
      >
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="text-sm font-medium tracking-wide text-slate-300">
            The Institutional Standard
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 pb-2">
          Engineered for <br />
          Absolute Stability
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          The Tokenized Settlement Digital Token (USBT) provides enterprise
          participants and corporate treasuries with predictable digital value
          transfer—eliminating speculative volatility.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
          <a href="#stats" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-slate-200 transition-all duration-300 font-semibold text-base shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center">
            Explore Ecosystem
          </a>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/10 border border-white/10 transition-all duration-300 text-white font-medium text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            Read Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
