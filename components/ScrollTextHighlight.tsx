"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextHighlightProps {
  text: string;
  className?: string;
}

export default function ScrollTextHighlight({ text, className = "" }: ScrollTextHighlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || wordsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      // Set all words to dim initially
      gsap.set(wordsRef.current, { color: "rgba(255, 255, 255, 0.12)" });

      // Animate each word to bright on scroll
      gsap.to(wordsRef.current, {
        color: "rgba(255, 255, 255, 1)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`${className}`}>
      <p
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
        style={{ fontFamily: "var(--font-space)" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) wordsRef.current[i] = el;
            }}
            className="inline-block mr-[0.3em] transition-colors duration-200"
            style={{ color: "rgba(255, 255, 255, 0.12)" }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
