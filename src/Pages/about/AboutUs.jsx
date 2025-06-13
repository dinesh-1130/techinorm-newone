import AboutCTA from "./components/AboutCTA";
import AboutGlobal from "./components/AboutGlobal";
import AboutHome from "./components/AboutHome";
import AboutMVSection from "./components/AboutMVSection";
import AboutOurTeam from "./components/AboutOurTeam";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AboutHome />
      <AboutMVSection />
      <AboutOurTeam />
      <AboutGlobal />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default AboutUs;
