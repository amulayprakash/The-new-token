export default function Footer() {
  return (
    <footer className="w-full min-h-[50vh] flex flex-col items-center justify-end pointer-events-none relative z-10 pb-12 px-6 font-sans">
      <div className="absolute inset-0 bg-slate-950 pointer-events-none z-[-1]" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-teal-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-6xl pointer-events-auto bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[40px] p-12 md:p-16 text-center shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl relative overflow-hidden group">
        
        {/* Animated Inner Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white tracking-tighter">
          Integrate TSDT Today
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg lg:text-xl font-light">
          Access the API endpoints, explore the governance portal, or read the multi-party authorization protocols. Built for genuine resilience and deep liquidity.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="#" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-sm">Whitepaper</a>
          <a href="#" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-sm">Governance Portal</a>
          <a href="#" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-sm">System Dashboards</a>
          <a href="#" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-sm">API References</a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm font-light">
          <p>&copy; 2026 TSDT Protocol. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
             <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Regulatory Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
