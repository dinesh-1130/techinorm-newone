import Aos from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import ProtectedRoute from "./components/ProtectedRoute"; // adjust the path as needed
import ContactUs from "./Pages/contact/ContactUs";
import AboutUs from "./Pages/about/AboutUs";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    Aos.refresh();
  }, []);

  return (
    // <div className="font-garet bg-white text-black">
    <Router>
      <ScrollToHash />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <PageTwo />
            // </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
