"use client";

import FeatureCard from "../FeatureCard";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0l-2.83-2.83M9.76 9.76L6.93 6.93" />
      </svg>
    ),
    headline: "Primary Peg Reference",
    description: "Continuous price discovery backed by audited real-world assets in real time.",
    expandedContent:
      "The primary peg pool maintains a fully backed, transparent 1:1 settlement value through continuous on-chain price discovery and audited reserves.",
    accentColor: "teal",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    headline: "Treasury Stabilization",
    description: "Algorithmic reserve management for perfect 1:1 equilibrium maintenance.",
    expandedContent:
      "Capital efficiency protocols deploy reserves dynamically across collateral pools, maintaining the peg under all market conditions without manual intervention.",
    accentColor: "blue",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    headline: "Volatility Absorption",
    description: "Dynamic high-viscosity buffer blocking external market shocks.",
    expandedContent:
      "Operates as a shock absorber by dynamically adjusting pool weights and rebalancing flows, preventing peg deviation during extreme volatility events.",
    accentColor: "amber",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    headline: "Ecosystem Utility",
    description: "Zero-slippage pathways for institutional capital and cross-border settlement.",
    expandedContent:
      "Seamless integration with existing enterprise financial stacks enables frictionless value transfer across jurisdictions with deterministic pricing.",
    accentColor: "teal",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    headline: "Mint-on-Demand",
    description: "Protocol autonomously mints TSDT as institutional demand scales.",
    expandedContent:
      "As liquidity enters the Primary Peg pool, the elastic supply mechanism automatically issues new tokens, maintaining the peg while meeting demand.",
    accentColor: "emerald",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 3.5a6.75 6.75 0 003.362 1.714z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 003.75-3.75c0-2.343-3.75-6.25-3.75-6.25S8.25 11.907 8.25 14.25A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    headline: "Burn Mechanism",
    description: "Supply contraction dissolves tokens seamlessly from circulation.",
    expandedContent:
      "During contraction events, tokens are algorithmically removed from active supply, ensuring circulating TSDT always matches verifiable on-chain collateral.",
    accentColor: "amber",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full flex flex-col px-6 lg:px-10 py-20 lg:py-28 relative z-10 font-sans">
      {/* Section header */}
      <div className="mb-10 border-l-2 border-teal-500/30 pl-6">
        <h2 className="text-xs uppercase tracking-[0.25em] font-medium text-teal-400 mb-3">
          Architecture & Mechanisms
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white leading-tight">
          Multi-Layered
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">
            Liquidity Architecture
          </span>
        </h3>
        <p className="mt-4 text-slate-400 text-base lg:text-lg font-light leading-relaxed max-w-xl">
          Six core mechanisms working in unison to guarantee 1:1 settlement
          equilibrium — no matter the market conditions.
        </p>
      </div>

      {/* Trust stats row */}
      <div className="flex items-center gap-6 mb-10 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          <span className="text-sm text-slate-300 font-medium">Audited</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          <span className="text-sm text-slate-300 font-medium">Enterprise Grade</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
          <span className="text-sm text-slate-300 font-medium">1:1 Backed</span>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-6">
          <div className="text-center">
            <div className="text-xl font-semibold text-white">$1.00</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Price</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-xl font-semibold text-white">$24M</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">Market Cap</div>
          </div>
        </div>
      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.headline}
            icon={feature.icon}
            headline={feature.headline}
            description={feature.description}
            expandedContent={feature.expandedContent}
            accentColor={feature.accentColor}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
