import MotionArtEffect_Logo from "../assets/MotionArtEffect-logo.png";
import CompatibleSection from "./CompatibleSection";
import FeaturedSection from "./FeaturedSection";
import IntroSection from "./IntroSection";
import Navbar from "./Navbar";
import PurchaseSection from "./PurchaseSection";
import Rating from "./Rating";
import ValueSection from "./ValueSection";

const Layout = ({ canvasRef }) => {
  const handleMouseEvent = (event) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const canvasEvent = new MouseEvent(event.type, {
        bubbles: true,
        cancelable: true,
        clientX: event.clientX - rect.left,
        clientY: event.clientY - rect.top,
      });
      canvasRef.current.dispatchEvent(canvasEvent);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-full justify-between items-center overflow-y-scroll"
      onMouseMove={handleMouseEvent}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <div className="lg:px-36 px-5">
        <Navbar />
        <IntroSection />
        <Rating />
        <PurchaseSection />
        <ValueSection />
        <CompatibleSection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default Layout;
