// import React, { useEffect, useRef } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Phase2CardsScroll = () => {
//   const containerRef = useRef(null);
//   const stickyRef = useRef(null);
//   const animationInitialized = useRef(false);

//   const phase2Ref = useRef(null);
//   const phase2TrackRef = useRef(null);
//   const phase2CardRefs = useRef([]);

//   const navigate = useNavigate();

//   const phase2Cards = [
//     "Web\nDevelopment",
//     "Marketing\nServices",
//     "Solution\nConsulting",
//     "Product\nEngineering",
//     "Maintenance\nSupport",
//     "Product\nPrototyping",
//   ];

//   const initializeAnimation = () => {
//     if (!window.gsap || !window.ScrollTrigger) return;

//     animationInitialized.current = false;

//     const gsap = window.gsap;
//     gsap.registerPlugin(window.ScrollTrigger);
//     window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//     const cardWidth = 300;
//     const gap = 64;
//     const shiftPerCard = cardWidth + gap;
//     const phase2InitialX = window.innerWidth - shiftPerCard * 3;

//     gsap.set([phase2Ref.current], { clearProps: "all" });
//     gsap.set([phase2TrackRef.current], { clearProps: "all" });
//     gsap.set([...phase2CardRefs.current], { clearProps: "all" });

//     gsap.set(phase2TrackRef.current, { x: phase2InitialX });

//     const masterTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=400%",
//         scrub: 1,
//         pin: stickyRef.current,
//         anticipatePin: 1,
//         refreshPriority: -1,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           masterTl.timeScale(self.direction === 1 ? 1 : 1);
//         },
//       },
//     });

//     masterTl
//       .to(phase2TrackRef.current, {
//         x: -1300,
//         ease: "none",
//         duration: 3,
//         delay: 1.5,
//       })
//       .to(phase2CardRefs.current[phase2Cards.length - 1], {
//         scale: 8,
//         duration: 0.3,
//         ease: "power2.inOut",
//         transformOrigin: "center center",
//         onComplete: () => {
//           sessionStorage.setItem("enteredFromZoom", "true");
//           navigate("/home");
//         },
//       });

//     animationInitialized.current = true;
//     window.ScrollTrigger.refresh();
//   };

//   useEffect(() => {
//     if (window.gsap && window.ScrollTrigger) {
//       initializeAnimation();
//       return;
//     }

//     if (!window.gsap) {
//       const script1 = document.createElement("script");
//       script1.src =
//         "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
//       script1.async = true;
//       document.head.appendChild(script1);

//       script1.onload = () => {
//         const script2 = document.createElement("script");
//         script2.src =
//           "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
//         script2.async = true;
//         document.head.appendChild(script2);

//         script2.onload = () => {
//           setTimeout(initializeAnimation, 100);
//         };
//       };
//     }

//     return () => {
//       animationInitialized.current = false;
//       if (window.ScrollTrigger) {
//         window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.ScrollTrigger) {
//         window.ScrollTrigger.refresh();
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full" style={{ height: "400vh" }}>
//       <div
//         ref={stickyRef}
//         className="sticky top-0 h-screen bg-white overflow-hidden relative"
//       >
//         <div ref={phase2Ref} className="absolute inset-0 flex items-center">
//           <div className="w-screen">
//             <div ref={phase2TrackRef} className="flex gap-[64px] px-[64px]">
//               {phase2Cards.map((title, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (phase2CardRefs.current[index] = el)}
//                   className="relative w-[300px] h-[360px] shrink-0"
//                 >
//                   {index === 0 ? (
//                     <div className="relative">
//                       <div className="absolute w-[300px] h-[360px] bg-black border border-gray-300 transform -translate-x-12 -translate-y-6 z-0 shadow-lg"></div>
//                       <div className="absolute w-[300px] h-[360px] bg-black border border-gray-300 transform -translate-x-8 -translate-y-4 z-10 shadow-lg"></div>
//                       <div className="absolute w-[300px] h-[360px] bg-black border border-gray-300 transform -translate-x-4 -translate-y-2 z-20 shadow-lg"></div>
//                       <div className="relative w-[300px] h-[360px] bg-black border border-gray-300 flex flex-col justify-between p-8 z-30 shadow-2xl">
//                         <h2 className="text-white text-2xl font-bold leading-tight whitespace-pre-line font-garet">
//                           {title}
//                         </h2>
//                         <div className="flex justify-end">
//                           <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center cursor-pointer">
//                             <ArrowUpRight className="w-6 h-6 text-black" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="w-[300px] h-[360px] bg-black border border-gray-300 flex flex-col justify-between p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
//                       <h2 className="text-white text-2xl font-bold leading-tight whitespace-pre-line font-garet">
//                         {title}
//                       </h2>
//                       <div className="flex justify-end">
//                         <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer transform hover:scale-110">
//                           <ArrowUpRight className="w-6 h-6 text-black" />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Phase2CardsScroll;
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const Phase2CardsScroll = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const animationInitialized = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const phase2Ref = useRef(null);
  const phase2TrackRef = useRef(null);
  const phase2CardRefs = useRef([]);

  const mobileContainerRef = useRef(null);
  const mobileCardRefs = useRef([]);

  const phase2Cards = [
    "Web\nDevelopment",
    "Marketing\nServices",
    "Solution\nConsulting",
    "Product\nEngineering",
    "Maintenance\nSupport",
    "Product\nPrototyping",
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const initializeDesktopAnimation = () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    animationInitialized.current = false;

    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);
    window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const cardWidth = 300;
    const gap = 64;
    const shiftPerCard = cardWidth + gap;
    const phase2InitialX = window.innerWidth - shiftPerCard * 3;

    gsap.set([phase2Ref.current], { clearProps: "all" });
    gsap.set([phase2TrackRef.current], { clearProps: "all" });
    gsap.set([...phase2CardRefs.current], { clearProps: "all" });

    gsap.set(phase2TrackRef.current, { x: phase2InitialX });

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: stickyRef.current,
        anticipatePin: 1,
        refreshPriority: -1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          masterTl.timeScale(self.direction === 1 ? 1 : 1);
        },
      },
    });

    masterTl
      .to(phase2TrackRef.current, {
        x: -1300,
        ease: "none",
        duration: 3,
        delay: 1.5,
      })
      .to(phase2CardRefs.current[phase2Cards.length - 1], {
        scale: 8,
        duration: 0.3,
        ease: "power2.inOut",
        transformOrigin: "center center",
        onComplete: () => {
          sessionStorage.setItem("enteredFromZoom", "true");
          setTimeout(() => {
            window.location.href = "/home";
          }, 100);
        },
      });

    animationInitialized.current = true;
    window.ScrollTrigger.refresh();
  };

  const initializeMobileAnimation = () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);
    window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    mobileCardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        display: "block",
        clearProps: "all",
      });

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    window.ScrollTrigger.refresh();
  };

  const initializeAnimation = () => {
    if (isMobile) {
      initializeMobileAnimation();
    } else {
      initializeDesktopAnimation();
    }
  };

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      initializeAnimation();
      return;
    }

    if (!window.gsap) {
      const script1 = document.createElement("script");
      script1.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script1.async = true;
      document.head.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        script2.async = true;
        document.head.appendChild(script2);

        script2.onload = () => {
          setTimeout(initializeAnimation, 100);
        };
      };
    }

    return () => {
      animationInitialized.current = false;
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopDesign = () => (
    <div ref={containerRef} className="w-full" style={{ height: "400vh" }}>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen bg-white overflow-hidden relative"
      >
        <div ref={phase2Ref} className="absolute inset-0 flex items-center">
          <div className="w-screen">
            <div ref={phase2TrackRef} className="flex gap-[64px] px-[64px]">
              {phase2Cards.map((title, index) => (
                <div
                  key={index}
                  ref={(el) => (phase2CardRefs.current[index] = el)}
                  className="relative w-[300px] h-[360px] shrink-0"
                >
                  {index === 0 ? (
                    <div className="relative">
                      <div className="absolute w-[300px] h-[360px] bg-black border border-gray-300 transform -translate-x-12 -translate-y-6 z-0 shadow-lg"></div>
                      <div className="absolute w-[300px] h-[360px] bg-black border border-gray-300 transform -translate-x-8 -translate-y-4 z-10 shadow-lg"></div>
                      <div className="absolute w-[300px] h-[360px] bg-black border border-gray-300 transform -translate-x-4 -translate-y-2 z-20 shadow-lg"></div>
                      <div className="relative w-[300px] h-[360px] bg-black border border-gray-300 flex flex-col justify-between p-8 z-30 shadow-2xl">
                        <h2 className="text-white text-2xl font-bold leading-tight whitespace-pre-line font-garet">
                          {title}
                        </h2>
                        <div className="flex justify-end">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center cursor-pointer">
                            <ArrowUpRight className="w-6 h-6 text-black" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[300px] h-[360px] bg-black border border-gray-300 flex flex-col justify-between p-8 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      <h2 className="text-white text-2xl font-bold leading-tight whitespace-pre-line font-garet">
                        {title}
                      </h2>
                      <div className="flex justify-end">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer transform hover:scale-110">
                          <ArrowUpRight className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-50">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );

  const MobileDesign = () => (
    <div ref={mobileContainerRef} className="w-full bg-white min-h-screen">
      <div className="py-8 px-4">
        <div className="flex flex-col gap-8 max-w-sm mx-auto">
          {phase2Cards.map((title, index) => (
            <div
              key={index}
              ref={(el) => (mobileCardRefs.current[index] = el)}
              className="w-full"
            >
              <div className="w-full h-[280px] bg-black border border-gray-300 flex flex-col justify-between p-6 shadow-lg rounded-lg">
                <h2 className="text-white text-xl font-bold leading-tight whitespace-pre-line">
                  {title}
                </h2>
                <div className="flex justify-end">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all cursor-pointer">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              sessionStorage.setItem("enteredFromZoom", "true");
              window.location.href = "/home";
            }}
            className="px-6 py-3 bg-black text-white text-sm rounded-lg shadow hover:bg-gray-800 transition-all"
          >
            Go to Homepage
          </button>
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {isMobile ? <MobileDesign /> : <DesktopDesign />}
    </div>
  );
};

export default Phase2CardsScroll;
