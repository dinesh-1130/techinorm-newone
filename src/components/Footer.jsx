// import { FaLinkedinIn } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// export default function Footer() {
//   const location = useLocation();
//   return (
//     <footer
//       className={`bg-black text-white px-6 sm:px-12 lg:px-24 pt-20 pb-10 font-garet ${
//         location.pathname === "/home" ? "rounded-t-2xl" : ""
//       } overflow-hidden`}
//     >
//       <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#3A3A3A] pb-12">
//         {/* Logo & Tagline */}
//         <div className="space-y-6" data-aos="fade-up">
//           <div className="flex items-center gap-2">
//             {/* <img
//               src="/assets/footer-logo.png"
//               alt="Techinorm Logo"
//               className="w-6 h-6"
//             /> */}
//             <span className="text-white text-xl font-monument">Techinorm</span>
//           </div>
//           <div className="text-sm space-y-1 font-garet">
//             <p>Your Vision.</p>
//             <p>Our Innovation.</p>
//             <p className="text-[#8B5CF6]">Shared Success.</p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 pt-4">
//             {/* <a
//               href="#"
//               className="bg-[#1a1a1a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition"
//             >
//               X
//             </a> */}
//             <a
//               href="https://www.linkedin.com/company/techinorm/"
//               target="_blank"
//               className="bg-[#1a1a1a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition"
//             >
//               <FaLinkedinIn className="text-white text-lg" />
//             </a>
//           </div>
//         </div>
//         {/* Services */}
//         <div data-aos="fade-up" data-aos-delay="100">
//           <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">
//             Services
//           </h3>
//           <div className="grid grid-cols-2 gap-y-4 gap-x-14 text-sm">
//             <p className="whitespace-nowrap">Artificial Technology</p>
//             <p className="whitespace-nowrap">Product Engineering</p>
//             <p className="whitespace-nowrap">Blockchain</p>
//             <p className="whitespace-nowrap">Marketing Services</p>
//             <p className="whitespace-nowrap">Mobile Development</p>
//             <p className="whitespace-nowrap">Solution Consulting</p>
//             <p className="whitespace-nowrap">Web Development</p>
//             <p className="whitespace-nowrap">Maintenance Support</p>
//           </div>
//         </div>

//         {/* Company */}
//         <div className="pl-32" data-aos="fade-up" data-aos-delay="200">
//           <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">
//             Company
//           </h3>
//           <div className="space-y-4 text-sm">
//             <p>About</p>
//             {/* <p>Careers</p> */}
//             {/* <p>Newsroom</p> */}
//             {/* <p>Blogs</p> */}
//           </div>
//         </div>

//         {/* Contact */}
//         <div data-aos="fade-up" data-aos-delay="300">
//           <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">
//             Contact
//           </h3>
//           <div className="space-y-3 text-sm ">
//             Connect with{" "}
//             <Link
//               to={`https://wa.me/919746400392`}
//               className="underline underline-offset-1"
//               target="_black"
//             >
//               Whatsapp
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="text-gray-200 text-xs text-center pt-6">
//         ©Copyright 2025 Techinorm &nbsp; | &nbsp; All Rights Reserved &nbsp;
//         {/* | */}
//         {/* &nbsp;
//         <a href="#" className="hover:text-white underline">
//           Terms of Service
//         </a>{" "}
//         &nbsp; | &nbsp;
//         <a href="#" className="hover:text-white underline">
//           Privacy Policy
//         </a> */}
//       </div>
//     </footer>
//   );
// }

import { FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    services: false,
    company: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer
      className={`bg-black text-white px-6 sm:px-12 lg:px-24 pt-20 pb-10 font-garet ${
        location.pathname === "/home" ? "rounded-t-2xl" : ""
      } overflow-hidden`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Logo & Tagline - Mobile Only */}
        <div className="text-center mb-12 block lg:hidden">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white text-xl font-monument">Techinorm</span>
          </div>
          <div className="text-sm space-y-1 font-garet">
            <p>Your Vision.</p>
            <p>Our Innovation.</p>
            <p className="text-[#8B5CF6]">Shared Success.</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 pt-6">
            <a
              href="https://www.linkedin.com/company/techinorm/"
              target="_blank"
              className="bg-[#1a1a1a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Mobile Accordion Sections */}
        <div className="block lg:hidden space-y-4 mb-12">
          {/* Services Section */}
          <div className="border-b border-[#3A3A3A]">
            <button
              onClick={() => toggleSection("services")}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-white font-semibold">Services</span>
              <span className="text-gray-400 text-xl">
                {openSections.services ? "−" : "+"}
              </span>
            </button>
            {openSections.services && (
              <div className="pb-4 space-y-3 text-sm text-gray-300">
                <p>Artificial Technology</p>
                <p>Product Engineering</p>
                <p>Blockchain</p>
                <p>Marketing Services</p>
                <p>Mobile Development</p>
                <p>Solution Consulting</p>
                <p>Web Development</p>
                <p>Maintenance Support</p>
              </div>
            )}
          </div>

          {/* Company Section */}
          <div className="border-b border-[#3A3A3A]">
            <button
              onClick={() => toggleSection("company")}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-white font-semibold">Company</span>
              <span className="text-gray-400 text-xl">
                {openSections.company ? "−" : "+"}
              </span>
            </button>
            {openSections.company && (
              <div className="pb-4 space-y-3 text-sm text-gray-300">
                <p>About</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="border-b border-[#3A3A3A]">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="text-white font-semibold">Contact</span>
              <span className="text-gray-400 text-xl">
                {openSections.contact ? "−" : "+"}
              </span>
            </button>
            {openSections.contact && (
              <div className="pb-4 text-sm text-gray-300">
                Connect with{" "}
                <Link
                  to={`https://wa.me/919746400392`}
                  className="underline underline-offset-1 text-[#8B5CF6]"
                  target="_blank"
                >
                  Whatsapp
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#3A3A3A] pb-12">
          {/* Logo & Tagline */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="flex items-center gap-2">
              {/* <img
                src="/assets/footer-logo.png"
                alt="Techinorm Logo"
                className="w-6 h-6"
              /> */}
              <span className="text-white text-xl font-monument">
                Techinorm
              </span>
            </div>
            <div className="text-sm space-y-1 font-garet">
              <p>Your Vision.</p>
              <p>Our Innovation.</p>
              <p className="text-[#8B5CF6]">Shared Success.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {/* <a
                href="#"
                className="bg-[#1a1a1a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition"
              >
                X
              </a> */}
              <a
                href="https://www.linkedin.com/company/techinorm/"
                target="_blank"
                className="bg-[#1a1a1a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B5CF6] transition"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">
              Services
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-14 text-sm">
              <p className="whitespace-nowrap">Artificial Technology</p>
              <p className="whitespace-nowrap">Product Engineering</p>
              <p className="whitespace-nowrap">Blockchain</p>
              <p className="whitespace-nowrap">Marketing Services</p>
              <p className="whitespace-nowrap">Mobile Development</p>
              <p className="whitespace-nowrap">Solution Consulting</p>
              <p className="whitespace-nowrap">Web Development</p>
              <p className="whitespace-nowrap">Maintenance Support</p>
            </div>
          </div>

          {/* Company */}
          <div className="pl-32" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">
              Company
            </h3>
            <div className="space-y-4 text-sm">
              <p>About</p>
            </div>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              Connect with{" "}
              <Link
                to={`https://wa.me/919746400392`}
                className="underline underline-offset-1"
                target="_blank"
              >
                Whatsapp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-gray-200 text-xs text-center pt-6">
          ©Copyright 2025 Techinorm &nbsp; | &nbsp; All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
