// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "/assets/Vector.png";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);

//   const location = useLocation();
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll(".dark-section");
//       let isOverDark = false;

//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 80 && rect.bottom > 80) {
//           isOverDark = true;
//         }
//       });

//       setIsDark(isOverDark);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run once on mount

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 py-4 px-6 sm:px-12 lg:px-24 flex backdrop-blur-lg bg-white/10 justify-between items-center transition-all duration-100">
//       {/* Left - Logo and Brand */}
//       <Link to="/" className="flex items-center space-x-2">
//         <img src={logo} alt="Techinorm Logo" className="h-6 sm:h-7" />
//         <span className="text-[#7F61FF] font-monument text-lg sm:text-xl tracking-wide">
//           Techinorm
//         </span>
//       </Link>

//       {/* Center - Navigation Links */}
//       <div
//         className={`hidden md:flex space-x-10 justify-center font-semibold tracking-wide  font-garet text-[#7F61FF] text transition-colors duration-100`}
//       >
//         {location.pathname === "/home" ? (
//           ""
//         ) : (
//           <Link to="/home" className="hover:underline">
//             Home
//           </Link>
//         )}

//         <Link to="/about" className="hover:underline">
//           About
//         </Link>
//         <Link to="/contact" className="hover:underline">
//           Contact
//         </Link>
//       </div>

//       {/* Right - Button */}
//       <div>
//         <Link
//           to={`https://calendar.app.google/YmvmiskhMBbi3krn8`}
//           target="_blank"
//           className="bg-black text-white px-5 py-2 text-sm font-garet rounded-sm"
//         >
//           Book A Call
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/Vector.png";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".dark-section");
      let isOverDark = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          isOverDark = true;
        }
      });

      setIsDark(isOverDark);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 py-4 px-6 sm:px-12 lg:px-24 flex backdrop-blur-lg bg-white/10 justify-between items-center transition-all duration-100">
      {/* Left - Logo and Brand */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Techinorm Logo" className="h-6 sm:h-7" />
        <span className="text-[#7F61FF] font-monument text-lg sm:text-xl tracking-wide">
          Techinorm
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#7F61FF] focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Center - Navigation Links */}
      <div
        className={`hidden md:flex space-x-10 justify-center font-semibold tracking-wide font-garet text-[#7F61FF] transition-colors duration-100`}
      >
        {location.pathname === "/home" ? (
          ""
        ) : (
          <Link to="/home" className="hover:underline">
            Home
          </Link>
        )}
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* Right - Button */}
      <div className="hidden md:block">
        <Link
          to={`https://calendar.app.google/YmvmiskhMBbi3krn8`}
          target="_blank"
          className="bg-black text-white px-5 py-2 text-sm font-garet rounded-sm"
        >
          Book A Call
        </Link>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 font-garet text-[#7F61FF] md:hidden z-40">
          {location.pathname === "/home" ? null : (
            <Link
              to="/home"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          )}
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to={`https://calendar.app.google/YmvmiskhMBbi3krn8`}
            target="_blank"
            className="bg-black text-white px-4 py-2 text-sm rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book A Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
