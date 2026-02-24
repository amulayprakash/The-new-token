import Hero from "./sections/Hero";
import MultiPoolArchitecture from "./sections/MultiPoolArchitecture";
import StabilityFramework from "./sections/StabilityFramework";
import Footer from "./sections/Footer";

export default function UIOverlay() {
  return (
    <div className="relative z-20 w-full pointer-events-none" style={{ height: "500vh" }}>
      {/* 
        This wrapper is 500vh to match the canvas scroll trigger.
        We place individual sections along the scroll depth using absolute positioning and sticky behaviors.
        We enable pointer-events on the children elements so buttons works.
      */}
      <div className="absolute top-0 w-full pointer-events-auto">
        <Hero />
      </div>
      
      <div className="absolute top-[100vh] w-full pointer-events-auto">
        <MultiPoolArchitecture />
      </div>

      <div className="absolute top-[250vh] w-full pointer-events-auto">
        <StabilityFramework />
      </div>

      <div className="absolute bottom-0 w-full pointer-events-auto">
        <Footer />
      </div>
    </div>
  );
}
