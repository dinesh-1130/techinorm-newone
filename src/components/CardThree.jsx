// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { ArrowUpRight } from 'lucide-react';

// // // // // const Phase3CardsScroll = () => {
// // // // //   const containerRef = useRef(null);
// // // // //   const stickyRef = useRef(null);
// // // // //   const animationInitialized = useRef(false);

// // // // //   const phase3Ref = useRef(null);
// // // // //   const firstRowRef = useRef(null);
// // // // //   const secondRowRef = useRef(null);
// // // // //   const secondRowCardRefs = useRef([]);

// // // // //   const firstRowCards = [
// // // // //     'Web\nDevelopment',
// // // // //     'Mobile\nDevelopment',
// // // // //     'Artificial\nIntelligence',
// // // // //     'Blockchain'
// // // // //   ];

// // // // //   const secondRowCards = [
// // // // //     'Marketing\nServices',
// // // // //     'Solution\nConsulting',
// // // // //     'Product\nEngineering',
// // // // //     'Maintenance\nSupport',
// // // // //     'Product\nPrototyping',
// // // // //   ];

// // // // //   const initializeAnimation = () => {
// // // // //     if (animationInitialized.current || !window.gsap || !window.ScrollTrigger) return;

// // // // //     const gsap = window.gsap;
// // // // //     gsap.registerPlugin(window.ScrollTrigger);

// // // // //     // Kill any existing ScrollTriggers to prevent conflicts
// // // // //     window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());

// // // // //     // Reset all elements to initial state
// // // // //     gsap.set([phase3Ref.current], { clearProps: "all" });
// // // // //     gsap.set([firstRowRef.current, secondRowRef.current], { clearProps: "all" });
// // // // //     gsap.set([...secondRowCardRefs.current], { clearProps: "all" });

// // // // //     // Set initial positions
// // // // //     gsap.set(firstRowRef.current, { translateX: 90 });
// // // // //     gsap.set(secondRowRef.current, { translateX: 560 });
// // // // //     gsap.set(phase3Ref.current, { opacity: 1, y: 0 });

// // // // //     const masterTl = gsap.timeline({
// // // // //       scrollTrigger: {
// // // // //         trigger: containerRef.current,
// // // // //         start: 'top top',
// // // // //         end: '+=435%',
// // // // //         scrub: 1,
// // // // //         pin: stickyRef.current,
// // // // //         anticipatePin: 1,
// // // // //         refreshPriority: -1,
// // // // //         invalidateOnRefresh: true,
// // // // //         onUpdate: (self) => {
// // // // //           // Ensure smooth forward and backward scrolling
// // // // //           if (self.direction === 1) {
// // // // //             // Forward scroll
// // // // //             masterTl.timeScale(1);
// // // // //           } else {
// // // // //             // Backward scroll
// // // // //             masterTl.timeScale(1);
// // // // //           }
// // // // //         }
// // // // //       },
// // // // //     });

// // // // //     masterTl
// // // // //       // Second row slides in
// // // // //       .to(secondRowRef.current, {
// // // // //         x: '-40%',
// // // // //         duration: 2.5,
// // // // //         ease: 'power2.inOut',
// // // // //       })
// // // // //       // Product Prototyping card (last card in second row) zooms in
// // // // //       .to(secondRowCardRefs.current[secondRowCards.length - 1], {
// // // // //         scale: 10,
// // // // //         duration: 0.4,
// // // // //         ease: 'power2.inOut',
// // // // //         transformOrigin: '  center',
// // // // //       })
// // // // //       // Final fade out
// // // // //       .to(phase3Ref.current, {
// // // // //         opacity: 0,
// // // // //         scale: 0.9,
// // // // //         duration: 0.5,
// // // // //         ease: 'power2.inOut',
// // // // //         delay: 0.5
// // // // //       });

// // // // //     animationInitialized.current = true;
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     // Check if GSAP is already loaded
// // // // //     if (window.gsap && window.ScrollTrigger) {
// // // // //       initializeAnimation();
// // // // //       return;
// // // // //     }

// // // // //     // Load GSAP if not already loaded
// // // // //     if (!window.gsap) {
// // // // //       const script1 = document.createElement('script');
// // // // //       script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// // // // //       script1.async = true;
// // // // //       document.head.appendChild(script1);

// // // // //       script1.onload = () => {
// // // // //         const script2 = document.createElement('script');
// // // // //         script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
// // // // //         script2.async = true;
// // // // //         document.head.appendChild(script2);

// // // // //         script2.onload = () => {
// // // // //           // Small delay to ensure everything is properly loaded
// // // // //           setTimeout(initializeAnimation, 100);
// // // // //         };
// // // // //       };
// // // // //     }

// // // // //     // Cleanup function
// // // // //     return () => {
// // // // //       animationInitialized.current = false;
// // // // //       if (window.ScrollTrigger) {
// // // // //         window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   // Handle window resize
// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       if (window.ScrollTrigger) {
// // // // //         window.ScrollTrigger.refresh();
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener('resize', handleResize);
// // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // //   }, []);

// // // // //   const renderGridCard = (title, index, isSecondRow = false) => {
// // // // //     const cardRef = isSecondRow ? (el) => (secondRowCardRefs.current[index] = el) : null;

// // // // //     return (
// // // // //       <div
// // // // //         ref={cardRef}
// // // // //         className={`group w-[280px] h-[360px] border border-gray-300 relative px-6 py-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
// // // // //           isSecondRow ? 'bg-black hover:bg-purple-600' : 'bg-black hover:bg-black'
// // // // //         }`}
// // // // //       >
// // // // //         {isSecondRow && (
// // // // //           <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer z-10">
// // // // //             <ArrowUpRight className="w-5 h-5 text-black" />
// // // // //           </div>
// // // // //         )}

// // // // //         <h2
// // // // //           className={`text-white text-xl font-bold font-sans leading-tight whitespace-pre-line transition-all duration-300 ${
// // // // //             isSecondRow ? 'group-hover:text-black' : ''
// // // // //           }`}
// // // // //         >
// // // // //           {title}
// // // // //         </h2>

// // // // //         {!isSecondRow && (
// // // // //           <div className="flex justify-end">
// // // // //             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer">
// // // // //               <ArrowUpRight className="w-5 h-5 text-black" />
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div ref={containerRef} className="w-full" style={{ height: '400vh' }}>
// // // // //       <div ref={stickyRef} className="sticky top-0 h-screen bg-white overflow-hidden relative">
// // // // //         {/* Phase 3 */}
// // // // //         <div ref={phase3Ref} className="absolute inset-0 flex flex-col items-center justify-center px-8">
// // // // //           <div ref={firstRowRef} className="flex gap-8 mb-4">
// // // // //             {firstRowCards.map((title, index) => (
// // // // //               <div key={index}>{renderGridCard(title, index)}</div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="relative w-full flex justify-center" style={{ transform: 'translateY(40px)' }}>
// // // // //             <div ref={secondRowRef} className="flex gap-8 absolute">
// // // // //               {secondRowCards.map((title, index) => (
// // // // //                 <div key={index}>{renderGridCard(title, index, true)}</div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Phase3CardsScroll;

// // // // import React, { useEffect, useRef } from 'react';
// // // // import { ArrowUpRight } from 'lucide-react';

// // // // const Phase3CardsScroll = () => {
// // // //   const containerRef = useRef(null);
// // // //   const stickyRef = useRef(null);
// // // //   const animationInitialized = useRef(false);

// // // //   const phase3Ref = useRef(null);
// // // //   const firstRowRef = useRef(null);
// // // //   const secondRowRef = useRef(null);
// // // //   const secondRowCardRefs = useRef([]);

// // // //   const firstRowCards = [
// // // //     'Web\nDevelopment',
// // // //     'Mobile\nDevelopment',
// // // //     'Artificial\nIntelligence',
// // // //     'Blockchain'
// // // //   ];

// // // //   const secondRowCards = [
// // // //     'Marketing\nServices',
// // // //     'Solution\nConsulting',
// // // //     'Product\nEngineering',
// // // //     'Maintenance\nSupport',
// // // //     'Product\nPrototyping',
// // // //   ];

// // // //   const initializeAnimation = () => {
// // // //     if (animationInitialized.current || !window.gsap || !window.ScrollTrigger) return;

// // // //     const gsap = window.gsap;
// // // //     gsap.registerPlugin(window.ScrollTrigger);

// // // //     window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());

// // // //     gsap.set([phase3Ref.current], { clearProps: "all" });
// // // //     gsap.set([firstRowRef.current, secondRowRef.current], { clearProps: "all" });
// // // //     gsap.set([...secondRowCardRefs.current], { clearProps: "all" });

// // // //     gsap.set(firstRowRef.current, { translateX: 90 });
// // // //     gsap.set(secondRowRef.current, { translateX: 560 });
// // // //     gsap.set(phase3Ref.current, { opacity: 1, y: 0 });

// // // //     const masterTl = gsap.timeline({
// // // //       scrollTrigger: {
// // // //         trigger: containerRef.current,
// // // //         start: 'top top',
// // // //         end: '+=450%',
// // // //         scrub: 1,
// // // //         pin: stickyRef.current,
// // // //         anticipatePin: 1,
// // // //         refreshPriority: -1,
// // // //         invalidateOnRefresh: true,
// // // //         onUpdate: (self) => {
// // // //           masterTl.timeScale(self.direction === 1 ? 1 : 1);
// // // //         }
// // // //       },
// // // //     });

// // // //     masterTl
// // // //       .to(secondRowRef.current, {
// // // //         x: '-40%',
// // // //         duration: 2.5,
// // // //         ease: 'power2.inOut',
// // // //       })
// // // //       .to(secondRowCardRefs.current[secondRowCards.length - 1], {
// // // //         scale: 20,
// // // //         duration: 0.4,
// // // //         ease: 'power2.inOut',
// // // //         transformOrigin: 'center center',
// // // //       })
// // // //       .to(phase3Ref.current, {
// // // //         opacity: 0,
// // // //         scale: 0.9,
// // // //         duration: 0.5,
// // // //         ease: 'power2.inOut',
// // // //         delay: 0.5
// // // //       });

// // // //     animationInitialized.current = true;
// // // //   };

// // // //   useEffect(() => {
// // // //     if (window.gsap && window.ScrollTrigger) {
// // // //       initializeAnimation();
// // // //       return;
// // // //     }

// // // //     if (!window.gsap) {
// // // //       const script1 = document.createElement('script');
// // // //       script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// // // //       script1.async = true;
// // // //       document.head.appendChild(script1);

// // // //       script1.onload = () => {
// // // //         const script2 = document.createElement('script');
// // // //         script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
// // // //         script2.async = true;
// // // //         document.head.appendChild(script2);

// // // //         script2.onload = () => {
// // // //           setTimeout(initializeAnimation, 100);
// // // //         };
// // // //       };
// // // //     }

// // // //     return () => {
// // // //       animationInitialized.current = false;
// // // //       if (window.ScrollTrigger) {
// // // //         window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       if (window.ScrollTrigger) {
// // // //         window.ScrollTrigger.refresh();
// // // //       }
// // // //     };

// // // //     window.addEventListener('resize', handleResize);
// // // //     return () => window.removeEventListener('resize', handleResize);
// // // //   }, []);

// // // //   const renderGridCard = (title, index, isSecondRow = false) => {
// // // //     const isLastCard = isSecondRow && index === secondRowCards.length - 1;
// // // //     const cardRef = isSecondRow ? (el) => (secondRowCardRefs.current[index] = el) : null;

// // // //     const baseClasses = "w-[280px] h-[360px] border border-gray-300 relative px-6 py-6 flex flex-col justify-between transform transition-all duration-300";
// // // //     const hoverClasses =
// // // //       isSecondRow && isLastCard
// // // //         ? '' // no hover
// // // //         : 'hover:scale-105 hover:shadow-2xl hover:bg-purple-600';

// // // //     return (
// // // //       <div
// // // //         ref={cardRef}
// // // //         className={`group ${baseClasses} bg-black ${hoverClasses}`}
// // // //       >
// // // //         {(isSecondRow && !isLastCard) || !isSecondRow ? (
// // // //           <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer z-10">
// // // //             <ArrowUpRight className="w-5 h-5 text-black" />
// // // //           </div>
// // // //         ) : null}

// // // //         <h2
// // // //           className={`text-white text-xl font-bold font-sans leading-tight whitespace-pre-line transition-all duration-300
// // // //             ${isSecondRow && !isLastCard ? 'group-hover:text-black' : ''}`}
// // // //         >
// // // //           {title}
// // // //         </h2>

// // // //         {!isSecondRow && (
// // // //           <div className="flex justify-end">
// // // //             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer">
// // // //               <ArrowUpRight className="w-5 h-5 text-black" />
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div ref={containerRef} className="w-full" style={{ height: '400vh' }}>
// // // //       <div ref={stickyRef} className="sticky top-0 h-screen bg-white overflow-hidden relative">
// // // //         <div ref={phase3Ref} className="absolute inset-0 flex flex-col items-center justify-center px-8">
// // // //           <div ref={firstRowRef} className="flex gap-8 mb-4">
// // // //             {firstRowCards.map((title, index) => (
// // // //               <div key={index}>{renderGridCard(title, index)}</div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="relative w-full flex justify-center" style={{ transform: 'translateY(40px)' }}>
// // // //             <div ref={secondRowRef} className="flex gap-8 absolute">
// // // //               {secondRowCards.map((title, index) => (
// // // //                 <div key={index}>{renderGridCard(title, index, true)}</div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Phase3CardsScroll;
// // // import React, { useEffect, useRef, useState } from "react";
// // // import { ArrowUpRight, X } from "lucide-react";
// // // import gsap from "gsap";

// // // const Phase3CardsScroll = () => {
// // //   const containerRef = useRef(null);
// // //   const stickyRef = useRef(null);
// // //   const animationInitialized = useRef(false);

// // //   const scrollRef = useRef(null);

// // //   const phase3Ref = useRef(null);
// // //   const firstRowRef = useRef(null);
// // //   const secondRowRef = useRef(null);
// // //   const secondRowCardRefs = useRef([]);

// // //   const [requestCall, setRequestCall] = useState(false);

// // //   const firstRowCards = [
// // //     "Artificial\nIntelligence",
// // //     "Blockchain\nDevelopment",
// // //     "Mobile\nDevelopment",
// // //     "Web\nDevelopment",
// // //   ];

// // //   const secondRowCards = [
// // //     "Marketing\nServices",
// // //     "Solution\nConsulting",
// // //     "Product\nEngineering",
// // //     "Maintenance\nSupport",
// // //     "Product\nPrototyping",
// // //   ];

// // //   const initializeAnimation = () => {
// // //     if (animationInitialized.current || !window.gsap || !window.ScrollTrigger)
// // //       return;

// // //     const gsap = window.gsap;
// // //     gsap.registerPlugin(window.ScrollTrigger);

// // //     window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

// // //     gsap.set([phase3Ref.current], { clearProps: "all" });
// // //     gsap.set([firstRowRef.current, secondRowRef.current], {
// // //       clearProps: "all",
// // //     });
// // //     gsap.set([...secondRowCardRefs.current], { clearProps: "all" });

// // //     gsap.set(firstRowRef.current, { translateX: 90 });
// // //     gsap.set(secondRowRef.current, { translateX: 560 });
// // //     gsap.set(phase3Ref.current, { opacity: 1, y: 0 });

// // //     const masterTl = gsap.timeline({
// // //       scrollTrigger: {
// // //         trigger: containerRef.current,
// // //         start: "top top",
// // //         end: "+=400vh",
// // //         scrub: 1,
// // //         pin: stickyRef.current,
// // //         anticipatePin: 1,
// // //         refreshPriority: 1,
// // //         invalidateOnRefresh: true,
// // //         onUpdate: (self) => {
// // //           masterTl.timeScale(self.direction === 1 ? 1 : 1);
// // //         },
// // //       },
// // //     });

// // //     masterTl
// // //       .to(secondRowRef.current, {
// // //         x: "-40%",
// // //         duration: 100,
// // //         ease: "power2.inOut", // or "expo.inOut"
// // //         delay: 1,
// // //       })

// // //       .to(secondRowCardRefs.current[secondRowCards.length - 1], {
// // //         scale: 20,
// // //         duration: 0.7,
// // //         ease: "power2.inOut",
// // //         transformOrigin: "center center",
// // //       })
// // //       .to(phase3Ref.current, {
// // //         scale: 8,
// // //         duration: 1.5,
// // //         ease: "power2.Out",

// // //         delay: 12,
// // //         // onComplete: () => {
// // //         //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });

// // //         // },
// // //       });

// // //     // masterTl
// // //     //   .to(secondRowRef.current, {
// // //     //     x: "-40%",
// // //     //     duration: 100,
// // //     //     // ease: "power2.inOut", // or "expo.inOut"
// // //     //     delay: 1,
// // //     //   })

// // //     //   .to(secondRowCardRefs.current[secondRowCards.length - 1], {
// // //     //     scale: 20,
// // //     //     duration: 0.7,
// // //     //     ease: "power2.inOut",
// // //     //     transformOrigin: "center center",
// // //     //   })
// // //     //   .to(phase3Ref.current, {
// // //     //     scale: 8,
// // //     //     duration: 1.5,
// // //     //     ease: "power2.Out",

// // //     //     delay: 12,
// // //     //     // onComplete: () => {
// // //     //     //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
// // //     //     // },
// // //     //   });

// // //     // masterTl
// // //     //   .to(secondRowRef.current, {
// // //     //     x: "-40%",
// // //     //     ease: "expo",
// // //     //     // duration: 100,
// // //     //   })
// // //     //   .to(secondRowCardRefs.current[secondRowCards.length - 1], {
// // //     //     scale: 20,
// // //     //     duration: 0.5, // changed from "20" to a number
// // //     //     ease: "power2.inOut",
// // //     //     transformOrigin: "center center",
// // //     //     // delay: 0.5,
// // //     //   })
// // //     //   .to(phase3Ref.current, {
// // //     //     scale: 0.9,
// // //     //     duration: 0.05,
// // //     //     ease: "power2.inOut",
// // //     //   });

// // //     animationInitialized.current = true;
// // //   };

// // //   useEffect(() => {
// // //     if (window.gsap && window.ScrollTrigger) {
// // //       initializeAnimation();
// // //       return;
// // //     }

// // //     if (!window.gsap) {
// // //       const script1 = document.createElement("script");
// // //       script1.src =
// // //         "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
// // //       script1.async = true;
// // //       document.head.appendChild(script1);

// // //       script1.onload = () => {
// // //         const script2 = document.createElement("script");
// // //         script2.src =
// // //           "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
// // //         script2.async = true;
// // //         document.head.appendChild(script2);

// // //         script2.onload = () => {
// // //           setTimeout(initializeAnimation, 100);
// // //         };
// // //       };
// // //     }

// // //     return () => {
// // //       animationInitialized.current = false;
// // //       if (window.ScrollTrigger) {
// // //         window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// // //       }
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.ScrollTrigger) {
// // //         window.ScrollTrigger.refresh();
// // //       }
// // //     };

// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   const renderGridCard = (title, index, isSecondRow = false) => {
// // //     const isLastCard = isSecondRow && index === secondRowCards.length - 1;
// // //     const cardRef = isSecondRow
// // //       ? (el) => (secondRowCardRefs.current[index] = el)
// // //       : null;

// // //     const baseClasses =
// // //       "w-[280px] h-[360px] relative px-6 py-6 flex flex-col justify-between transform transition-all duration-300";
// // //     const hoverClasses =
// // //       isSecondRow && isLastCard
// // //         ? "hover:scale-105 hover:shadow-2xl" // allow zoom only, no bg color
// // //         : "hover:scale-105 hover:shadow-2xl hover:bg-purple-600";

// // //     return (
// // //       <div
// // //         ref={cardRef}
// // //         className={`group ${baseClasses} bg-black ${hoverClasses}`}
// // //         onClick={() => setRequestCall(true)}
// // //       >
// // //         <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer z-10">
// // //           <ArrowUpRight className="w-5 h-5 text-black" />
// // //         </div>

// // //         <h2
// // //           className={`text-white text-xl font-bold font-garet leading-tight whitespace-pre-line transition-all duration-300
// // //             ${isSecondRow && !isLastCard ? "group-hover:text-black" : ""}`}
// // //         >
// // //           {title}
// // //         </h2>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <div ref={containerRef} className="min-h-screen w-full">
// // //         <div
// // //           ref={stickyRef}
// // //           className="top-0 h-screen bg-white overflow-hidden relative"
// // //         >
// // //           {requestCall && <EmailRequest setRequestCall={setRequestCall} />}
// // //           <div
// // //             ref={phase3Ref}
// // //             className="absolute inset-0 flex flex-col items-center justify-center px-8"
// // //           >
// // //             <div ref={firstRowRef} className="flex gap-10 mb-4 font-garet">
// // //               {firstRowCards.map((title, index) => (
// // //                 <div key={index}>{renderGridCard(title, index)}</div>
// // //               ))}
// // //             </div>

// // //             <div
// // //               className="relative w-full flex justify-center"
// // //               style={{ transform: "translateY(40px)" }}
// // //             >
// // //               <div
// // //                 ref={secondRowRef}
// // //                 className="flex gap-8 absolute font-garet"
// // //               >
// // //                 {secondRowCards.map((title, index) => (
// // //                   <div key={index}>{renderGridCard(title, index, true)}</div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div ref={scrollRef} className="h-0 w-full bg-transparent" />
// // //     </>
// // //   );
// // // };

// // // export default Phase3CardsScroll;

// // // const EmailRequest = ({ setRequestCall }) => {
// // //   const GoogleSheetUrl = import.meta.env.VITE_GoogleSheetUrl;
// // //   const GoogleSheetId = import.meta.env.VITE_GoogleSheetId;
// // //   const [formData, setformData] = useState({
// // //     email: "",
// // //     type: "subscribe",
// // //   });
// // //   const HandleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const response = await fetch(GoogleSheetUrl, {
// // //       method: "POST",
// // //       mode: "no-cors",

// // //       headers: {
// // //         "Content-Type": "application/x-form-urlencoded",
// // //       },
// // //       body: JSON.stringify(formData, {
// // //         type: "subscribe",
// // //         email: formData.email,
// // //         token: GoogleSheetId,
// // //       }),
// // //     });
// // //     if (!response.ok) {
// // //       localStorage.setItem("subscribe", true);
// // //       gsap.to(".conditional-team", {
// // //         height: 0,
// // //         duration: 2,
// // //         ease: "expo.inOut",
// // //         delay: 0.5,
// // //       });
// // //     }
// // //     const subscribe = localStorage.getItem("subscribe");
// // //     if (subscribe === "true") {
// // //       gsap.to(".conditional-team", {
// // //         height: 0,
// // //         duration: 0.5,
// // //         ease: "expo.inOut",
// // //         // delay: 0.5,
// // //       });
// // //     }
// // //   };
// // //   return (
// // //     <div className="conditional-team absolute w-full h-full top-0 left-0 backdrop-blur-lg z-[1] overflow-hidden font-garet">
// // //       <div className="flex justify-center items-start mt-[100px] h-full w-full">
// // //         <form
// // //           onSubmit={HandleSubmit}
// // //           className="bg-black/40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[500px]"
// // //         >
// // //           <div className="flex justify-between items-center w-full">
// // //             <div className="w-full"></div>
// // //             <X
// // //               className="cursor-pointer text-white"
// // //               onClick={() => setRequestCall(false)}
// // //             />
// // //           </div>
// // //           <label className="text-xl font-semibold text-white">
// // //             This page is currently in the works. Please share your email, and
// // //             we’ll notify you when its live!
// // //           </label>
// // //           <div className="relative w-full mt-8">
// // //             <input
// // //               type="text"
// // //               placeholder="Email"
// // //               className="p-4 bg-black/50 text-white rounded-md w-full outline-none font-bold tracking-wider"
// // //               value={formData.email}
// // //               onChange={(e) =>
// // //                 setformData({ ...formData, email: e.target.value })
// // //               }
// // //             />
// // //             <button className="absolute top-1 right-1">
// // //               <div className="bg-[#7F61FF] text-white p-3 rounded-md flex items-center justify-center hover:bg-[#6a4cd9] transition-colors duration-300">
// // //                 <ArrowUpRight />
// // //               </div>
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // import React, { useEffect, useRef, useState } from "react";
// // import { ArrowUpRight, X } from "lucide-react";
// // import gsap from "gsap";

// // const Phase3CardsScroll = () => {
// //   const containerRef = useRef(null);
// //   const stickyRef = useRef(null);
// //   const animationInitialized = useRef(false);

// //   const scrollRef = useRef(null);

// //   const phase3Ref = useRef(null);
// //   const firstRowRef = useRef(null);
// //   const secondRowRef = useRef(null);
// //   const secondRowCardRefs = useRef([]);

// //   const [requestCall, setRequestCall] = useState(false);

// //   const firstRowCards = [
// //     "Artificial\nIntelligence",
// //     "Blockchain\nDevelopment",
// //     "Mobile\nDevelopment",
// //     "Web\nDevelopment",
// //   ];

// //   const secondRowCards = [
// //     "Marketing\nServices",
// //     "Solution\nConsulting",
// //     "Product\nEngineering",
// //     "Maintenance\nSupport",
// //     "Product\nPrototyping",
// //   ];

// //   const initializeAnimation = () => {
// //     if (animationInitialized.current || !window.gsap || !window.ScrollTrigger)
// //       return;

// //     const gsap = window.gsap;
// //     gsap.registerPlugin(window.ScrollTrigger);

// //     window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

// //     gsap.set([phase3Ref.current], { clearProps: "all" });
// //     gsap.set([firstRowRef.current, secondRowRef.current], {
// //       clearProps: "all",
// //     });
// //     gsap.set([...secondRowCardRefs.current], { clearProps: "all" });

// //     gsap.set(firstRowRef.current, { translateX: 90 });
// //     gsap.set(secondRowRef.current, { translateX: 560 });
// //     gsap.set(phase3Ref.current, { opacity: 1, y: 0 });

// //     const masterTl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: containerRef.current,
// //         start: "top top",
// //         end: "+=300vh",
// //         scrub: 1,
// //         pin: stickyRef.current,
// //         anticipatePin: 1,
// //         refreshPriority: 1,
// //         invalidateOnRefresh: true,
// //         onUpdate: (self) => {
// //           masterTl.timeScale(self.direction === 1 ? 1 : 1);
// //         },
// //       },
// //     });

// //     masterTl
// //       .to(secondRowRef.current, {
// //         x: "-40%",
// //         duration: 100,
// //         ease: "power2.inOut",
// //         delay: 1,
// //       })
// //       .to(secondRowCardRefs.current[secondRowCards.length - 1], {
// //         scale: 20,
// //         duration: 0.7,
// //         ease: "power2.inOut",
// //         transformOrigin: "center center",
// //       })
// //       .to(phase3Ref.current, {
// //         scale: 8,
// //         duration: 1.5,
// //         ease: "power2.Out",
// //         delay: 12,
// //       });

// //     animationInitialized.current = true;
// //   };

// //   useEffect(() => {
// //     if (window.gsap && window.ScrollTrigger) {
// //       initializeAnimation();
// //       return;
// //     }

// //     if (!window.gsap) {
// //       const script1 = document.createElement("script");
// //       script1.src =
// //         "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
// //       script1.async = true;
// //       document.head.appendChild(script1);

// //       script1.onload = () => {
// //         const script2 = document.createElement("script");
// //         script2.src =
// //           "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
// //         script2.async = true;
// //         document.head.appendChild(script2);

// //         script2.onload = () => {
// //           setTimeout(initializeAnimation, 100);
// //         };
// //       };
// //     }

// //     return () => {
// //       animationInitialized.current = false;
// //       if (window.ScrollTrigger) {
// //         window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //       }
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.ScrollTrigger) {
// //         window.ScrollTrigger.refresh();
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const renderGridCard = (title, index, isSecondRow = false) => {
// //     const isLastCard = isSecondRow && index === secondRowCards.length - 1;
// //     const cardRef = isSecondRow
// //       ? (el) => (secondRowCardRefs.current[index] = el)
// //       : null;

// //     const baseClasses =
// //       "w-[280px] h-[360px] relative px-6 py-6 flex flex-col justify-between transform transition-all duration-300";
// //     const hoverClasses =
// //       isSecondRow && isLastCard
// //         ? "hover:scale-105 hover:shadow-2xl"
// //         : "hover:scale-105 hover:shadow-2xl hover:bg-purple-600";

// //     return (
// //       <div
// //         ref={cardRef}
// //         className={`group ${baseClasses} bg-black ${hoverClasses}`}
// //         onClick={() => setRequestCall(true)}
// //       >
// //         <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer z-10">
// //           <ArrowUpRight className="w-5 h-5 text-black" />
// //         </div>
// //         <h2
// //           className={`text-white text-xl font-bold font-garet leading-tight whitespace-pre-line transition-all duration-300
// //             ${isSecondRow && !isLastCard ? "group-hover:text-black" : ""}`}
// //         >
// //           {title}
// //         </h2>
// //       </div>
// //     );
// //   };

// //   return (
// //     <>
// //       {/* Desktop View */}
// //       <div ref={containerRef} className="min-h-screen w-full hidden md:block">
// //         <div
// //           ref={stickyRef}
// //           className="top-0 h-screen bg-white overflow-hidden relative"
// //         >
// //           {requestCall && <EmailRequest setRequestCall={setRequestCall} />}
// //           <div
// //             ref={phase3Ref}
// //             className="absolute inset-0 flex flex-col items-center justify-center px-8"
// //           >
// //             <div ref={firstRowRef} className="flex gap-10 mb-4 font-garet">
// //               {firstRowCards.map((title, index) => (
// //                 <div key={index}>{renderGridCard(title, index)}</div>
// //               ))}
// //             </div>
// //             <div
// //               className="relative w-full flex justify-center"
// //               style={{ transform: "translateY(40px)" }}
// //             >
// //               <div
// //                 ref={secondRowRef}
// //                 className="flex gap-8 absolute font-garet"
// //               >
// //                 {secondRowCards.map((title, index) => (
// //                   <div key={index}>{renderGridCard(title, index, true)}</div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile View */}
// //       <div className="block md:hidden w-full px-4 py-12 pt-[100px] bg-white font-garet">
// //         <div className="overflow-x-auto">
// //           <div className="flex gap-6 w-max pb-4">
// //             {[...firstRowCards, ...secondRowCards].map((title, index) => (
// //               <div
// //                 key={index}
// //                 className="min-w-[250px] h-[340px] px-6 py-6 bg-black rounded-xl flex flex-col justify-between shadow-md text-white"
// //               >
// //                 <div className="self-end w-10 h-10 bg-white rounded-lg flex items-center justify-center">
// //                   <ArrowUpRight className="w-5 h-5 text-black" />
// //                 </div>
// //                 <h2 className="text-lg font-bold whitespace-pre-line">
// //                   {title}
// //                 </h2>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* <div ref={scrollRef} className="h-0 w-full bg-transparent" /> */}
// //     </>
// //   );
// // };

// // export default Phase3CardsScroll;

// // const EmailRequest = ({ setRequestCall }) => {
// //   const GoogleSheetUrl = import.meta.env.VITE_GoogleSheetUrl;
// //   const GoogleSheetId = import.meta.env.VITE_GoogleSheetId;
// //   const [formData, setformData] = useState({
// //     email: "",
// //     type: "subscribe",
// //   });

// //   const HandleSubmit = async (e) => {
// //     e.preventDefault();
// //     const response = await fetch(GoogleSheetUrl, {
// //       method: "POST",
// //       mode: "no-cors",
// //       headers: {
// //         "Content-Type": "application/x-form-urlencoded",
// //       },
// //       body: JSON.stringify(formData, {
// //         type: "subscribe",
// //         email: formData.email,
// //         token: GoogleSheetId,
// //       }),
// //     });

// //     if (!response.ok) {
// //       localStorage.setItem("subscribe", true);
// //       gsap.to(".conditional-team", {
// //         height: 0,
// //         duration: 2,
// //         ease: "expo.inOut",
// //         delay: 0.5,
// //       });
// //     }

// //     const subscribe = localStorage.getItem("subscribe");
// //     if (subscribe === "true") {
// //       gsap.to(".conditional-team", {
// //         height: 0,
// //         duration: 0.5,
// //         ease: "expo.inOut",
// //       });
// //     }
// //   };

// //   return (
// //     <div className="conditional-team absolute w-full h-full top-0 left-0 backdrop-blur-lg z-[1] overflow-hidden font-garet">
// //       <div className="flex justify-center items-start mt-[100px] h-full w-full">
// //         <form
// //           onSubmit={HandleSubmit}
// //           className="bg-black/40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[500px]"
// //         >
// //           <div className="flex justify-between items-center w-full">
// //             <div className="w-full"></div>
// //             <X
// //               className="cursor-pointer text-white"
// //               onClick={() => setRequestCall(false)}
// //             />
// //           </div>
// //           <label className="text-xl font-semibold text-white">
// //             This page is currently in the works. Please share your email, and
// //             we’ll notify you when it's live!
// //           </label>
// //           <div className="relative w-full mt-8">
// //             <input
// //               type="text"
// //               placeholder="Email"
// //               className="p-4 bg-black/50 text-white rounded-md w-full outline-none font-bold tracking-wider"
// //               value={formData.email}
// //               onChange={(e) =>
// //                 setformData({ ...formData, email: e.target.value })
// //               }
// //             />
// //             <button className="absolute top-1 right-1">
// //               <div className="bg-[#7F61FF] text-white p-3 rounded-md flex items-center justify-center hover:bg-[#6a4cd9] transition-colors duration-300">
// //                 <ArrowUpRight />
// //               </div>
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };
// import React, { useEffect, useRef } from "react";
// import { ArrowUpRight } from "lucide-react";

// const Phase3CardsScroll = () => {
//   const containerRef = useRef(null);
//   const stickyRef = useRef(null);
//   const animationInitialized = useRef(false);

//   const phase3Ref = useRef(null);
//   const firstRowRef = useRef(null);
//   const secondRowRef = useRef(null);
//   const secondRowCardRefs = useRef([]);

//   const firstRowCards = [
//     "Web\nDevelopment",
//     "Mobile\nDevelopment",
//     "Artificial\nIntelligence",
//     "Blockchain",
//   ];

//   const secondRowCards = [
//     "Marketing\nServices",
//     "Solution\nConsulting",
//     "Product\nEngineering",
//     "Maintenance\nSupport",
//     "Product\nPrototyping",
//   ];

//   const initializeAnimation = () => {
//     if (animationInitialized.current || !window.gsap || !window.ScrollTrigger)
//       return;

//     const gsap = window.gsap;
//     gsap.registerPlugin(window.ScrollTrigger);

//     window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//     gsap.set([phase3Ref.current], { clearProps: "all" });
//     gsap.set([firstRowRef.current, secondRowRef.current], {
//       clearProps: "all",
//     });
//     gsap.set([...secondRowCardRefs.current], { clearProps: "all" });

//     gsap.set(firstRowRef.current, { translateX: 90 });
//     gsap.set(secondRowRef.current, { translateX: 560 });
//     gsap.set(phase3Ref.current, { opacity: 1, y: 0 });

//     const masterTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=800%",
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
//       .to(secondRowRef.current, {
//         x: "-40%",
//         duration: 0.2,
//         ease: "power2.inOut",
//       })
//       .to(secondRowCardRefs.current[secondRowCards.length - 1], {
//         scale: 20,
//         duration: 0.4,
//         ease: "power2.inOut",
//         transformOrigin: "center center",
//       })
//       .to(phase3Ref.current, {
//         // opacity: 0,
//         scale: 0.9,
//         duration: 0.3,
//         ease: "power2.inOut",
//         delay: 0.1,
//       });

//     animationInitialized.current = true;
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

//   const renderGridCard = (title, index, isSecondRow = false) => {
//     const isLastCard = isSecondRow && index === secondRowCards.length - 1;
//     const cardRef = isSecondRow
//       ? (el) => (secondRowCardRefs.current[index] = el)
//       : null;

//     const baseClasses =
//       "w-[280px] h-[360px] border border-gray-300 relative px-6 py-6 flex flex-col justify-between transform transition-all duration-300";
//     const hoverClasses =
//       isSecondRow && isLastCard
//         ? "hover:scale-105 hover:shadow-2xl" // allow zoom only, no bg color
//         : "hover:scale-105 hover:shadow-2xl hover:bg-purple-600";

//     return (
//       <div
//         ref={cardRef}
//         className={`group ${baseClasses} bg-black ${hoverClasses}`}
//       >
//         <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer z-10">
//           <ArrowUpRight className="w-5 h-5 text-black" />
//         </div>

//         <h2
//           className={`text-white text-xl font-bold font-sans leading-tight whitespace-pre-line transition-all duration-300
//             ${isSecondRow && !isLastCard ? "group-hover:text-black" : ""}`}
//         >
//           {title}
//         </h2>
//       </div>
//     );
//   };

//   return (
//     <div ref={containerRef} className="w-full" style={{ height: "400vh" }}>
//       <div
//         ref={stickyRef}
//         className="sticky top-0 h-screen bg-white overflow-hidden relative"
//       >
//         <div
//           ref={phase3Ref}
//           className="absolute inset-0 flex flex-col items-center justify-center px-8"
//         >
//           <div ref={firstRowRef} className="flex gap-8 mb-4">
//             {firstRowCards.map((title, index) => (
//               <div key={index}>{renderGridCard(title, index)}</div>
//             ))}
//           </div>

//           <div
//             className="relative w-full flex justify-center"
//             style={{ transform: "translateY(40px)" }}
//           >
//             <div ref={secondRowRef} className="flex gap-8 absolute">
//               {secondRowCards.map((title, index) => (
//                 <div key={index}>{renderGridCard(title, index, true)}</div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Phase3CardsScroll;
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const Phase3CardsScroll = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const animationInitialized = useRef(false);

  const phase3Ref = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const secondRowCardRefs = useRef([]);

  const [requestCall, setRequestCall] = useState(false);

  const firstRowCards = [
    "Web\nDevelopment",
    "Mobile\nDevelopment",
    "Artificial\nIntelligence",
    "Blockchain",
  ];

  const secondRowCards = [
    "Marketing\nServices",
    "Solution\nConsulting",
    "Product\nEngineering",
    "Maintenance\nSupport",
    "Product\nPrototyping",
  ];

  const initializeAnimation = () => {
    if (animationInitialized.current || !window.gsap || !window.ScrollTrigger)
      return;

    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.set([phase3Ref.current], { clearProps: "all" });
    gsap.set([firstRowRef.current, secondRowRef.current], {
      clearProps: "all",
    });
    gsap.set([...secondRowCardRefs.current], { clearProps: "all" });

    gsap.set(firstRowRef.current, { translateX: 90 });
    gsap.set(secondRowRef.current, { translateX: 560 });
    gsap.set(phase3Ref.current, { opacity: 1, y: 0 });

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800%",
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
      .to(secondRowRef.current, {
        x: "-40%",
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(secondRowCardRefs.current[secondRowCards.length - 1], {
        scale: 20,
        duration: 0.4,
        ease: "power2.inOut",
        transformOrigin: "center center",
      })
      .to(phase3Ref.current, {
        // opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut",
        delay: 0.2,
      });

    animationInitialized.current = true;
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
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderGridCard = (title, index, isSecondRow = false) => {
    const isLastCard = isSecondRow && index === secondRowCards.length - 1;
    const cardRef = isSecondRow
      ? (el) => (secondRowCardRefs.current[index] = el)
      : null;

    const baseClasses =
      "w-[280px] h-[360px] border border-gray-300 relative px-6 py-6 flex flex-col justify-between transform transition-all duration-300";
    const hoverClasses =
      isSecondRow && isLastCard
        ? "hover:scale-105 hover:shadow-2xl" // allow zoom only, no bg color
        : "hover:scale-105 hover:shadow-2xl hover:bg-purple-600";

    return (
      <div
        ref={cardRef}
        className={`group ${baseClasses} bg-black ${hoverClasses}`}
        onClick={() => setRequestCall(true)}
      >
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer z-10">
          <ArrowUpRight className="w-5 h-5 text-black" />
        </div>

        <h2
          className={`text-white text-xl font-bold font-sans leading-tight whitespace-pre-line transition-all duration-300
            ${isSecondRow && !isLastCard ? "group-hover:text-black" : ""}`}
        >
          {title}
        </h2>
      </div>
    );
  };

  return (
    <>
      {/* Desktop View */}
      <div
        ref={containerRef}
        className="w-full hidden md:block"
        style={{ height: "400vh" }}
      >
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen bg-white overflow-hidden relative"
        >
          {requestCall && <EmailRequest setRequestCall={setRequestCall} />}
          <div
            ref={phase3Ref}
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
          >
            <div ref={firstRowRef} className="flex gap-8 mb-4">
              {firstRowCards.map((title, index) => (
                <div key={index}>{renderGridCard(title, index)}</div>
              ))}
            </div>

            <div
              className="relative w-full flex justify-center"
              style={{ transform: "translateY(40px)" }}
            >
              <div ref={secondRowRef} className="flex gap-8 absolute">
                {secondRowCards.map((title, index) => (
                  <div key={index}>{renderGridCard(title, index, true)}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden w-full px-4 py-12 pt-[100px] bg-white">
        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max pb-4">
            {[...firstRowCards, ...secondRowCards].map((title, index) => (
              <div
                key={index}
                className="min-w-[250px] h-[340px] px-6 py-6 bg-black rounded-xl flex flex-col justify-between shadow-md text-white"
                onClick={() => setRequestCall(true)}
              >
                <div className="self-end w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-lg font-bold whitespace-pre-line">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
        {requestCall && <EmailRequest setRequestCall={setRequestCall} />}
      </div>
    </>
  );
};

const EmailRequest = ({ setRequestCall }) => {
  const [formData, setformData] = useState({
    email: "",
    type: "subscribe",
  });

  const HandleSubmit = () => {
    // Simulate form submission since we can't use environment variables or localStorage in artifacts
    console.log("Form submitted:", formData);

    // Close the modal after submission
    setTimeout(() => {
      setRequestCall(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 w-full h-full top-0 left-0 backdrop-blur-lg z-50 overflow-hidden">
      <div className="flex justify-center items-start mt-[100px] h-full w-full px-4">
        <div className="bg-black/40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[500px] w-full">
          <div className="flex justify-between items-center w-full">
            <div className="w-full"></div>
            <X
              className="cursor-pointer text-white"
              onClick={() => setRequestCall(false)}
            />
          </div>
          <div className="text-xl font-semibold text-white text-center">
            This page is currently in the works. Please share your email, and
            we'll notify you when it's live!
          </div>
          <div className="relative w-full mt-8">
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-black/50 text-white rounded-md w-full outline-none font-bold tracking-wider"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
            />
            <button onClick={HandleSubmit} className="absolute top-1 right-1">
              <div className="bg-[#7F61FF] text-white p-3 rounded-md flex items-center justify-center hover:bg-[#6a4cd9] transition-colors duration-300">
                <ArrowUpRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase3CardsScroll;
