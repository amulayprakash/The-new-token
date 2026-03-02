export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center pointer-events-none relative z-10">
      <div className="text-center pointer-events-auto mt-20 relative">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-8 drop-shadow-2xl">
          USBT: The Engineered <br/> Settlement Asset
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide backdrop-blur-xl bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80 shadow-2xl">
          For enterprise participants, corporate treasury managers, liquidity providers, and fintech institutions requiring predictable digital value transfer and settlement without speculative volatility.
        </p>
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-5 rounded-full bg-teal-500 hover:bg-teal-400 hover:scale-105 active:scale-95 transition-all duration-300 text-slate-950 font-bold shadow-[0_0_40px_rgba(20,184,166,0.4)] text-lg">
            Explore Documentation
          </button>
          <button className="w-full md:w-auto px-10 py-5 rounded-full bg-slate-900/80 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-700 text-white font-semibold shadow-2xl backdrop-blur-md text-lg">
            Institutional Access
          </button>
        </div>
      </div>
    </section>
  );
}
