export default function StabilityFramework() {
  return (
    <section className="w-full flex flex-col items-start justify-center px-6 lg:px-12 py-24 relative z-10 font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-900/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-3xl pointer-events-auto relative z-10 mx-auto">
        <div className="mb-16 border-l border-white/10 pl-6">
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-emerald-400 mb-4">Mechanism Layer</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
            Stability Framework
          </h3>
          <p className="mt-6 text-slate-400 text-lg font-light leading-relaxed">
            Algorithmic supply elasticity ensures that the total circulating TSDT identically matches verifiable on-chain collateral at all times.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          {/* Mint-on-Demand */}
          <div className="group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 ease-out hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(52,211,153,0.15)] flex flex-col md:flex-row min-h-[300px]">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />
            <div className="relative z-10 p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-semibold mb-3 text-white tracking-tight">Mint-on-Demand</h4>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                As institutional demand scales and liquidity enters the Primary Peg pool, the protocol autonomously mints new TSDT.
              </p>
            </div>
            
            <div className="relative z-10 p-8 md:w-1/2 flex items-end justify-center overflow-hidden h-[200px] md:h-auto">
               <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="flex items-end justify-between w-full h-[150px] gap-2 relative z-10">
                 {[30, 45, 40, 65, 55, 80, 75, 95].map((h, i) => (
                   <div key={i} className="w-full bg-emerald-500/30 border-t border-emerald-400/50 group-hover:bg-emerald-400/60 transition-all duration-700 rounded-t-sm" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} />
                 ))}
               </div>
            </div>
          </div>

          {/* Burn Mechanism */}
          <div className="group relative p-[1px] rounded-[32px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 ease-out hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.05)] flex flex-col md:flex-row min-h-[300px]">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" />
            <div className="relative z-10 p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-semibold mb-3 text-white tracking-tight">Burn Mechanism</h4>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                During supply contraction events, tokens are excised from active circulation and dissolved seamlessly.
              </p>
            </div>

            <div className="relative z-10 p-8 md:w-1/2 flex items-end justify-center overflow-hidden h-[200px] md:h-auto">
               <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-slate-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="flex items-end justify-between w-full h-[150px] gap-2 relative z-10">
                 {[95, 80, 85, 60, 65, 45, 50, 30].map((h, i) => (
                   <div key={i} className="w-full bg-slate-500/30 border-t border-slate-400/50 group-hover:bg-slate-400/60 transition-all duration-700 rounded-t-sm" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} />
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
