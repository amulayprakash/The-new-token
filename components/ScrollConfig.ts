/**
 * Centralized scroll animation configuration.
 * All tunable parameters for the hero, spiral logo, and feature reveals.
 */

export const scrollConfig = {
  /** Multiplier applied to base scroll distance per breakpoint */
  distanceMultiplier: {
    desktop: 0.5,
    tablet: 0.6,
    mobile: 0.3,
  },

  /** GSAP scrub smoothness (higher = smoother but more lag) */
  scrub: 0.8,

  /** CSS easing for non-GSAP transitions */
  easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",

  /** Logo rotation range in degrees [start, end] */
  rotationRange: [0, 720] as const,

  /** Spiral radius in px per breakpoint */
  spiralRadius: {
    desktop: 48,
    tablet: 36,
    mobile: 18,
  },

  /** Spiral path parameters */
  spiral: {
    /** Inner radius offset (px) */
    a: 0,
    /** Growth rate per revolution */
    b: 1,
    /** Angular velocity multiplier */
    k: 4 * Math.PI, // 2 full revolutions over scroll
  },

  /** Feature card reveal settings */
  featureReveal: {
    /** IntersectionObserver thresholds */
    thresholds: [0.15, 0.5],
    /** Stagger delay between cards (ms) */
    staggerMs: 150,
    /** Slide distance from right (px) */
    slideDistance: 60,
  },

  /** Base scroll end for CanvasScrollSequence (in vh units, e.g. 400 = 400%) */
  baseScrollEnd: 400,
};

/**
 * Returns the current breakpoint multiplier based on window width.
 */
export function getBreakpointMultiplier(): number {
  if (typeof window === "undefined") return scrollConfig.distanceMultiplier.desktop;
  const w = window.innerWidth;
  if (w < 768) return scrollConfig.distanceMultiplier.mobile;
  if (w < 1024) return scrollConfig.distanceMultiplier.tablet;
  return scrollConfig.distanceMultiplier.desktop;
}

/**
 * Returns the spiral radius for the current breakpoint.
 */
export function getSpiralRadius(): number {
  if (typeof window === "undefined") return scrollConfig.spiralRadius.desktop;
  const w = window.innerWidth;
  if (w < 768) return scrollConfig.spiralRadius.mobile;
  if (w < 1024) return scrollConfig.spiralRadius.tablet;
  return scrollConfig.spiralRadius.desktop;
}

/**
 * Detects if user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
