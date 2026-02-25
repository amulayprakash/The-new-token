import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollTextHighlight from "@/components/ScrollTextHighlight";
import FeatureShowcase from "@/components/FeatureShowcase";
import StatsScrollSequence from "@/components/StatsScrollSequence";
import TokenomicsSection from "@/components/TokenomicsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/FooterNew";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white">
      {/* Fixed particle background */}
      <ParticleCanvas />

      {/* Floating navbar */}
      <Navbar />

      {/* Hero section with 3D coin and scroll animations */}
      <HeroSection />

      {/* Scroll text highlight section */}
      <div className="relative z-10 section-padding max-w-5xl mx-auto text-center md:text-left">
        <ScrollTextHighlight
          text="TSDT is not just another token. It is a settlement primitive — engineered from the ground up for institutional capital flows, zero-slippage execution, and absolute price stability across every market condition."
        />
      </div>

      {/* Feature showcase */}
      <FeatureShowcase />

      {/* Stats — scroll-driven frame animation (desktop) / static grid (mobile) */}
      <StatsScrollSequence />

      {/* Tokenomics */}
      <TokenomicsSection />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
