export default function MultiPoolArchitecture() {
  return (
    <section className="w-full flex flex-col items-start justify-center px-6 lg:px-12 py-24 relative z-10 font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-3xl pointer-events-auto relative z-10 mx-auto">
        <div className="mb-16 border-l border-white/10 pl-6">
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-teal-400 mb-4">Architecture Layer</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
            Multi-Pool Liquidity
          </h3>
          <p className="mt-6 text-slate-400 text-lg font-light leading-relaxed">
            Engineered to absorb volatility and maintain precise 1:1 settlement equilibrium across any market condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary Peg */}
          <div className="col-span-1 md:col-span-2 group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 ease-out hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(45,212,191,0.15)]">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />
            
            {/* Ambient hover glow */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-teal-500/10 via-transparent to-blue-500/10 blur-2xl" />

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[280px]">
              <div className="absolute top-8 right-8">
                <div className="w-12 h-12 rounded-full border border-teal-500/30 flex items-center justify-center bg-teal-500/5 backdrop-blur-md">
                  <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]" />
                </div>
              </div>
              <h4 className="text-3xl font-semibold mb-3 text-white tracking-tight">Primary Peg Reference</h4>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg font-light">
                Continuous price discovery and public reference value, fully backed by audited real-world assets in real time.
              </p>
            </div>
          </div>

          {/* Treasury Stabilization */}
          <div className="col-span-1 group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 ease-out hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.05)]">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[240px]">
              <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:border-teal-500/30 transition-all duration-500">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white tracking-tight">Treasury Stabilization</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Algorithmic reserve management deploying capital efficiency protocols to maintain perfect 1:1 equilibrium.
                </p>
              </div>
            </div>
          </div>

          {/* Volatility Absorption */}
          <div className="col-span-1 group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 ease-out hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.05)]">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[240px]">
              <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:border-teal-500/30 transition-all duration-500">
                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white tracking-tight">Volatility Absorption</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Operates as a dynamic high-viscosity buffer blocking external market shocks and preventing peg deviation.
                </p>
              </div>
            </div>
          </div>

          {/* Ecosystem Utility */}
          <div className="col-span-1 md:col-span-2 group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 transition-all duration-700 ease-out hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.05)]">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-800/20 rounded-full blur-[60px]" />
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
              <h4 className="text-2xl font-semibold mb-3 text-white tracking-tight">Ecosystem Utility</h4>
              <p className="text-slate-400 text-base leading-relaxed max-w-2xl font-light">
                Zero-slippage pathways for institutional capital allocation and cross-border settlement. Seamless integration with existing enterprise financial stacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
