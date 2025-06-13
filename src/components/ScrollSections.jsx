// // import { useEffect, useState, useRef } from "react";
// // import { ArrowUpRight } from "lucide-react";
// // // import AOS from "aos";
// // // import "aos/dist/aos.css";

// // const sections = [
// //   {
// //     title: ["Artificial", "Intelligence"],
// //     description:
// //       "Develop custom AI solutions that automate processes, enhance decision making, and unlock data driven growth. From predictive analytics to generative models, we build scalable machine learning systems tailored to your business needs.",
// //     image: "/assets/ai-1.png",
// //   },
// //   {
// //     title: ["Blockchain"],
// //     description:
// //       "Build secure, decentralized blockchain applications that drive transparency, traceability, and trust. We design and develop smart contracts, dApps, and blockchain infrastructure for real-world use cases across industries.",
// //     image: "/assets/bl-1.png",
// //   },
// //   {
// //     title: ["Mobile", "Development"],
// //     description:
// //       "Launch high performance iOS and Android apps with seamless user experience and reliable cross platform functionality. We specialize in custom mobile app development using native and hybrid technologies.",
// //     image: "/assets/mb-1.png",
// //   },
// //   {
// //     title: ["Web", "Development"],
// //     description:
// //       "Create responsive, secure, and scalable websites and web applications tailored to your business goals. Our web development services cover frontend, backend, and full stack solutions built for performance and growth.",
// //     image: "/assets/wb-1.png",
// //   },
// // ];

// // export default function ScrollSections() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [scrolling, setScrolling] = useState(false);
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     // AOS.init({ duration: 800, once: true });
// //     document.body.style.overflow = "hidden";
// //     return () => {
// //       document.body.style.overflow = "auto";
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const handleWheel = (e) => {
// //       if (scrolling) {
// //         e.preventDefault();
// //         return;
// //       }

// //       const isLast = currentIndex === sections.length - 1;
// //       const isFirst = currentIndex === 0;

// //       if (e.deltaY > 0 && !isLast) {
// //         e.preventDefault();
// //         setScrolling(true);
// //         setCurrentIndex((prev) => prev + 1);
// //         setTimeout(() => setScrolling(false), 800);
// //       } else if (e.deltaY < 0 && !isFirst) {
// //         e.preventDefault();
// //         setScrolling(true);
// //         setCurrentIndex((prev) => prev - 1);
// //         setTimeout(() => setScrolling(false), 800);
// //       } else if (e.deltaY > 0 && isLast) {
// //         document.body.style.overflow = "auto";
// //       } else {
// //         e.preventDefault();
// //       }
// //     };

// //     const container = containerRef.current;
// //     container?.addEventListener("wheel", handleWheel, { passive: false });

// //     return () => {
// //       container?.removeEventListener("wheel", handleWheel);
// //     };
// //   }, [currentIndex, scrolling]);

// //   const section = sections[currentIndex];

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="h-screen w-screen overflow-hidden bg-black text-white "
// //     >
// //       <div
// //         key={currentIndex}
// //         className="h-screen w-full px-6  md:px-20 flex items-center justify-center animate-fade-in-up transition-opacity duration-700"
// //       >
// //         <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center md:items-center justify-between">
// //           {/* Left Section with stacked title and arrow below */}
// //           <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 md:gap-8 pl-[150px]">
// //             <div className="flex flex-col gap-2">
// //               {section.title.map((line, idx) => (
// //                 <h2
// //                   key={idx}
// //                   className="text-4xl md:text-6xl font-monument leading-tight"
// //                 >
// //                   {line}
// //                 </h2>
// //               ))}
// //             </div>
// //             <button className="w-12 h-12 rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-300 transition">
// //               <ArrowUpRight className="w-5 h-5" />
// //             </button>
// //           </div>

// //           {/* Right Side: Description + Image */}
// //           <div className="w-full md:w-1/2 flex flex-col items-end text-right space-y-6">
// //             <div className="text-gray-300 text-lg md:text-xl font-garet max-w-xl">
// //               {section.description}
// //             </div>
// //             <div className="relative w-72 md:w-[400px] translate-x-[-40px]">
// //               <img
// //                 src={section.image}
// //                 alt=""
// //                 className="object-contain relative z-10 w-full h-auto"
// //               />
// //               <div className="absolute inset-0 z-20 pointer-events-none">
// //                 <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
// //                 <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
// //                 <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
// //                 <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black to-transparent" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { useEffect, useState, useRef } from "react";

// const sections = [
//   {
//     title: ["Artificial", "Intelligence"],
//     description:
//       "Develop custom AI solutions that automate processes, enhance decision making, and unlock data driven growth. From predictive analytics to generative models, we build scalable machine learning systems tailored to your business needs.",
//     image: "/assets/ai-1.png",
//   },
//   {
//     title: ["Blockchain"],
//     description:
//       "Build secure, decentralized blockchain applications that drive transparency, traceability, and trust. We design and develop smart contracts, dApps, and blockchain infrastructure for real-world use cases across industries.",
//     image: "/assets/bl-1.png",
//   },
//   {
//     title: ["Mobile", "Development"],
//     description:
//       "Launch high performance iOS and Android apps with seamless user experience and reliable cross platform functionality. We specialize in custom mobile app development using native and hybrid technologies.",
//     image: "/assets/mb-1.png",
//   },
//   {
//     title: ["Web", "Development"],
//     description:
//       "Create responsive, secure, and scalable websites and web applications tailored to your business goals. Our web development services cover frontend, backend, and full stack solutions built for performance and growth.",
//     image: "/assets/wb-1.png",
//   },
// ];

// export default function ScrollSections() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (scrolling) {
//         e.preventDefault();
//         return;
//       }

//       const isLast = currentIndex === sections.length - 1;
//       const isFirst = currentIndex === 0;

//       if (e.deltaY > 0 && !isLast) {
//         e.preventDefault();
//         setScrolling(true);
//         setCurrentIndex((prev) => prev + 1);
//         setTimeout(() => setScrolling(false), 800);
//       } else if (e.deltaY < 0 && !isFirst) {
//         e.preventDefault();
//         setScrolling(true);
//         setCurrentIndex((prev) => prev - 1);
//         setTimeout(() => setScrolling(false), 800);
//       } else if (e.deltaY > 0 && isLast) {
//         document.body.style.overflow = "auto";
//       } else {
//         e.preventDefault();
//       }
//     };

//     const container = containerRef.current;
//     container?.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container?.removeEventListener("wheel", handleWheel);
//     };
//   }, [currentIndex, scrolling]);

//   const handleArrowClick = () => {
//     if (currentIndex === sections.length - 1) {
//       // If we're on the last section (Web Development), enable normal scrolling and scroll down
//       document.body.style.overflow = "auto";
//       // Scroll down to the next section
//       window.scrollBy({
//         top: window.innerHeight,
//         behavior: "smooth",
//       });
//     }
//   };

//   const section = sections[currentIndex];
//   const isWebDevelopment = currentIndex === sections.length - 1;

//   return (
//     <div
//       ref={containerRef}
//       className="h-screen w-screen overflow-hidden bg-black text-white"
//     >
//       <div
//         key={currentIndex}
//         className="h-screen w-full px-4 sm:px-6 md:px-20 flex items-center justify-center animate-fade-in-up transition-opacity duration-700"
//       >
//         <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center md:items-center justify-between">
//           {/* Left Section */}
//           <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 md:pl-[150px] text-center md:text-left">
//             <div className="flex flex-col gap-1">
//               {section?.title.map((line, idx) => (
//                 <h2
//                   key={idx}
//                   className="text-3xl sm:text-4xl md:text-6xl font-monument leading-tight"
//                 >
//                   {line}
//                 </h2>
//               ))}
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-4 md:space-y-6 mt-6 md:mt-0">
//             <div className="text-gray-300 text-base sm:text-lg md:text-xl font-garet max-w-md sm:max-w-lg md:max-w-xl">
//               {section.description}
//             </div>
//             <div className="relative w-60 sm:w-72 md:w-[400px]">
//               <img
//                 src={section.image}
//                 alt=""
//                 className="object-contain relative z-10 w-full h-auto"
//               />
//               <div className="absolute inset-0 z-20 pointer-events-none">
//                 <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
//                 <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
//                 <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
//                 <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black to-transparent" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Down Arrow - Only show on Web Development section */}
//       {isWebDevelopment && (
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//           <button
//             onClick={handleArrowClick}
//             className="group cursor-pointer p-4 hover:bg-white/10 rounded-full transition-colors duration-300"
//           >
//             <svg
//               className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300 animate-bounce"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState, useRef } from "react";

const sections = [
  {
    title: ["Artificial", "Intelligence"],
    description:
      "Develop custom AI solutions that automate processes, enhance decision making, and unlock data driven growth. From predictive analytics to generative models, we build scalable machine learning systems tailored to your business needs.",
    image: "/assets/ai-1.png",
  },
  {
    title: ["Blockchain"],
    description:
      "Build secure, decentralized blockchain applications that drive transparency, traceability, and trust. We design and develop smart contracts, dApps, and blockchain infrastructure for real-world use cases across industries.",
    image: "/assets/bl-1.png",
  },
  {
    title: ["Mobile", "Development"],
    description:
      "Launch high performance iOS and Android apps with seamless user experience and reliable cross platform functionality. We specialize in custom mobile app development using native and hybrid technologies.",
    image: "/assets/mb-1.png",
  },
  {
    title: ["Web", "Development"],
    description:
      "Create responsive, secure, and scalable websites and web applications tailored to your business goals. Our web development services cover frontend, backend, and full stack solutions built for performance and growth.",
    image: "/assets/wb-1.png",
  },
];

export default function ScrollSections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrolling) {
        e.preventDefault();
        return;
      }

      const isLast = currentIndex === sections.length - 1;
      const isFirst = currentIndex === 0;

      if (e.deltaY > 0 && !isLast) {
        e.preventDefault();
        setScrolling(true);
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => setScrolling(false), 800);
      } else if (e.deltaY < 0 && !isFirst) {
        e.preventDefault();
        setScrolling(true);
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => setScrolling(false), 800);
      } else if (e.deltaY > 0 && isLast) {
        document.body.style.overflow = "auto";
      } else {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (scrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      const threshold = 50; // Minimum swipe distance

      if (Math.abs(deltaY) < threshold) return;

      const isLast = currentIndex === sections.length - 1;
      const isFirst = currentIndex === 0;

      if (deltaY > 0 && !isLast) {
        // Swipe up - go to next section
        setScrolling(true);
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => setScrolling(false), 800);
      } else if (deltaY < 0 && !isFirst) {
        // Swipe down - go to previous section
        setScrolling(true);
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => setScrolling(false), 800);
      } else if (deltaY > 0 && isLast) {
        // On last section, enable normal scrolling
        document.body.style.overflow = "auto";
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    container?.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    container?.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container?.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchmove", handleTouchMove);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, scrolling]);

  const handleArrowClick = () => {
    if (currentIndex === sections.length - 1) {
      // If we're on the last section (Web Development), enable normal scrolling and scroll down
      document.body.style.overflow = "auto";
      // Scroll down to the next section
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const section = sections[currentIndex];
  const isWebDevelopment = currentIndex === sections.length - 1;

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden bg-black text-white"
    >
      <div
        key={currentIndex}
        className="h-screen w-full px-4 sm:px-6 md:px-20 flex items-center justify-center animate-fade-in-up transition-opacity duration-700"
      >
        <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center md:items-center justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 md:pl-[150px] text-center md:text-left">
            <div className="flex flex-col gap-1">
              {section?.title.map((line, idx) => (
                <h2
                  key={idx}
                  className="text-3xl sm:text-4xl md:text-6xl font-monument leading-tight"
                >
                  {line}
                </h2>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-4 md:space-y-6 mt-6 md:mt-0">
            <div className="text-gray-300 text-base sm:text-lg md:text-xl font-garet max-w-md sm:max-w-lg md:max-w-xl">
              {section.description}
            </div>
            <div className="relative w-60 sm:w-72 md:w-[400px]">
              <img
                src={section.image}
                alt=""
                className="object-contain relative z-10 w-full h-auto"
              />
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
                <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow - Only show on Web Development section */}
      {isWebDevelopment && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <button
            onClick={handleArrowClick}
            className="group cursor-pointer p-4 hover:bg-white/10 rounded-full transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors duration-300 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
