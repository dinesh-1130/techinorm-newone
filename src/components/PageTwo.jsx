import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardThree from "./CardThree";
import OurApproach from "./OurApproach";
import Budjet from "./Budjet";
import AlignedPartners from "./AlignedPartners";
import FromVisionSection from "./FromVisionSection";
import Vector from "./Vector";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageTwo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const navigation = performance.getEntriesByType("navigation")[0];
    const isReload =
      navigation?.type === "reload" || performance.navigation?.type === 1;

    if (isReload) {
      sessionStorage.removeItem("enteredFromZoom");

      // 🔁 Delay to ensure PageOne's useEffect runs AFTER redirect
      setTimeout(() => {
        window.location.replace("/");
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <CardThree />
      <OurApproach />
      <Budjet />
      <AlignedPartners />
      <FromVisionSection />
      <Vector />
      <Footer />
    </div>
  );
};

export default PageTwo;
