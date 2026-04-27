export default function WhitepaperPage() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <a
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </a>
        <a
          href="/USBT%20-%20Whitepaper.pdf"
          download
          className="px-4 py-2 rounded-xl bg-[#00ffd1] text-black font-semibold text-sm hover:bg-[#00e6bc] transition-all duration-300"
        >
          Download PDF
        </a>
      </div>
      <iframe
        src="/USBT%20-%20Whitepaper.pdf"
        className="flex-1 w-full"
        style={{ minHeight: "calc(100vh - 65px)" }}
        title="USBT Whitepaper"
      />
    </div>
  );
}
