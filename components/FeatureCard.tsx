"use client";

import { useRef, useEffect, useState } from "react";
import { scrollConfig } from "./ScrollConfig";

interface FeatureCardProps {
  icon: React.ReactNode;
  headline: string;
  description: string;
  ctaLabel?: string;
  expandedContent?: string;
  accentColor?: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  headline,
  description,
  ctaLabel = "Learn more",
  expandedContent,
  accentColor = "teal",
  index = 0,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Check reduced motion
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered reveal
            const delay =
              index * scrollConfig.featureReveal.staggerMs;
            setTimeout(() => setIsVisible(true), reduced ? 0 : delay);
            observer.unobserve(card);
          }
        });
      },
      {
        threshold: scrollConfig.featureReveal.thresholds,
      }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  const colorMap: Record<string, { border: string; glow: string; accent: string }> = {
    teal: {
      border: "hover:border-teal-500/30",
      glow: "from-teal-500/10 via-transparent to-cyan-500/10",
      accent: "text-teal-400",
    },
    emerald: {
      border: "hover:border-emerald-500/30",
      glow: "from-emerald-500/10 via-transparent to-green-500/10",
      accent: "text-emerald-400",
    },
    blue: {
      border: "hover:border-blue-500/30",
      glow: "from-blue-500/10 via-transparent to-indigo-500/10",
      accent: "text-blue-400",
    },
    amber: {
      border: "hover:border-amber-500/30",
      glow: "from-amber-500/10 via-transparent to-orange-500/10",
      accent: "text-amber-400",
    },
  };

  const colors = colorMap[accentColor] || colorMap.teal;

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/[0.06] ${colors.border}
        bg-white/[0.02] backdrop-blur-xl
        transition-all duration-700
        ${isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 translate-x-[${scrollConfig.featureReveal.slideDistance}px]`
        }
        hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]
        focus-within:ring-2 focus-within:ring-teal-500/50 focus-within:ring-offset-2 focus-within:ring-offset-slate-950
      `}
      style={{
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${scrollConfig.featureReveal.slideDistance}px)`,
        opacity: isVisible ? 1 : 0,
        transition: `all 0.7s ${scrollConfig.easing}`,
      }}
    >
      {/* Ambient hover glow */}
      <div
        className={`absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r ${colors.glow} blur-3xl pointer-events-none`}
      />

      {/* Glass inner bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 p-6 lg:p-8">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-5
            group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-500 ${colors.accent}`}
        >
          {icon}
        </div>

        {/* Headline */}
        <h4 className="text-lg font-semibold text-white tracking-tight mb-2">
          {headline}
        </h4>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed font-light">
          {description}
        </p>

        {/* Expandable content */}
        {expandedContent && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 text-sm font-medium ${colors.accent} hover:underline underline-offset-4
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:rounded-sm
                transition-colors duration-300 cursor-pointer`}
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Show less" : ctaLabel} →
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${scrollConfig.easing}`}
              style={{
                maxHeight: isExpanded ? "200px" : "0",
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <p className="pt-3 text-sm text-slate-500 leading-relaxed font-light">
                {expandedContent}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Top edge highlight */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
