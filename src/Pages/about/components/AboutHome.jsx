// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import { SplitText } from "gsap/SplitText";

// // const AboutHome = () => {
// //   useGSAP(() => {
// //     gsap.registerPlugin();
// //     const abtTitle = SplitText.create(".abt-title", {
// //       type: "lines,chars",
// //       mask: true,
// //     });
// //     const abtTitle2 = SplitText.create(".abt-title2", {
// //       type: "lines,chars",
// //       mask: true,
// //     });
// //     gsap.from(abtTitle.lines, {
// //       duration: 0.5,
// //       opacity: 0,
// //       y: 50,
// //       ease: "power2.out",
// //       stagger: 0.05,
// //     });
// //     gsap.from(abtTitle2.lines, {
// //       duration: 0.5,
// //       opacity: 0,
// //       y: 50,
// //       ease: "power2.out",
// //       stagger: 0.05,
// //       delay: 0.3,
// //     });
// //   }, {});
// //   return (
// //     <div className="relative">
// //       <div className="container mx-auto h-screen flex flex-col justify-center items-center">
// //         <h1 className="font-monument tracking-wide flex flex-col items-center text-2xl xl:text-5xl gap-4 leading-relaxed">
// //           <span className="abt-title">Bold ideas.</span>
// //           <span className="abt-title2 text-[#7F61FF]">Built With Purpose</span>
// //         </h1>
// //         {/* <p className="">
// //           Techinorm is a full spectrum technology partner helping startups,
// //           scaleups, and enterprises solve real world challenges with digital
// //           precision. From disruptive blockchain protocols and enterprise grade
// //           mobile apps to performance marketing and product strategy, we build
// //           solutions that last, scale, and deliver.
// //         </p> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutHome;

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// // import Logo from "../assets/Image/TechinormLogo.png";
// import ScrollTrigger from "gsap/src/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// const AboutHome = () => {
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".hero-text",
//         start: "top 60%",
//         end: "bottom 40%",
//         scrub: true,
//         // markers: true, // set true for debugging
//       },
//     });

//     tl.from(".hero-text", {
//       ease: "expo",
//       duration: 0.5,
//       // delay: 0.5,
//       opacity: 0,
//     })
//       .to(".hero-text", {
//         translateX: "-840px",
//         ease: "back.out(1)",
//         delay: 1,
//         duration: 1,
//       })
//       // Third animation: Bring in the "Techinorm" text
//       .fromTo(
//         ".techinorm",
//         {
//           x: 830,
//           opacity: 0,
//           ease: "expo",
//         },
//         {
//           x: -100,
//           opacity: 1,
//           // ease: "back.out(1.7)",
//           ease: "expo",
//           duration: 0.8,
//         },
//         "-=.5" // Start slightly before the previous animation finishes
//       );
//   });
//   return (
//     <div className="h-screen sticky top-0 flex justify-center items-center">
//       <div className="font-monument text-[50px] leading-tight overflow-hidden relative">
//         <h1 className="hero-text flex relative gap-4 w-[800px] text-center">
//           Bold ideas.
//         </h1>
//         <h1 className="techinorm absolute top-0 right-4 opacity-0 text-primary flex items-center gap-8">
//           {/* <img src={Logo} alt="techinorm" className="h-14" /> */}
//           <span className="text-[#7F61FF]">Built With Purpose</span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default AboutHome;

import { useEffect, useRef, useState } from "react";

export default function AboutHome() {
  const [step, setStep] = useState(0);
  const [normText, setNormText] = useState("ideas.");
  const [techText, setTechText] = useState("Build");
  const [techinormText, setTechinormText] = useState("");
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const timers = [];

  //   // Step 1: Hide "Normalised." letter by letter
  //   timers.push(
  //     setTimeout(() => {
  //       setStep(1);
  //       let i = normText.length;
  //       const interval = setInterval(() => {
  //         i--;
  //         setNormText(normText.substring(0, i));
  //         if (i === 0) {
  //           clearInterval(interval);

  //           // After Normalised is gone, hide Technology + start Techinorm
  //           setTimeout(() => {
  //             setStep(2);
  //             let j = techText.length;
  //             let k = 0;
  //             const techHide = setInterval(() => {
  //               j--;
  //               setTechText(techText.substring(0, j));
  //               if (j === 0) clearInterval(techHide);
  //             }, 70);

  //             const techinormStr = "Built With Purpose";
  //             const techinormShow = setInterval(() => {
  //               if (k <= techinormStr.length) {
  //                 setTechinormText(techinormStr.substring(0, k));
  //                 k++;
  //               } else {
  //                 clearInterval(techinormShow);
  //               }
  //             }, 90);
  //           }, 300);
  //         }
  //       }, 70);
  //     }, 1500)
  //   );

  //   // Final scroll
  //   timers.push(
  //     setTimeout(() => {
  //       scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  //     }, 5000)
  //   );

  //   return () => timers.forEach(clearTimeout);
  // }, []);

  // useEffect(() => {
  //   let isCancelled = false;
  //   const timers = [];

  //   const runAnimation = () => {
  //     setStep(0);
  //     setNormText("ideas.");
  //     setTechText("Build");
  //     setTechinormText("");

  //     // Step 1: Hide "ideas."
  //     timers.push(
  //       setTimeout(() => {
  //         if (isCancelled) return;
  //         setStep(1);
  //         let i = "ideas.".length;
  //         const interval = setInterval(() => {
  //           if (isCancelled) {
  //             clearInterval(interval);
  //             return;
  //           }
  //           i--;
  //           setNormText((prev) => prev.substring(0, i));
  //           if (i === 0) {
  //             clearInterval(interval);

  //             // Step 2: Hide "Build", Show "Built With Purpose"
  //             setTimeout(() => {
  //               if (isCancelled) return;
  //               setStep(2);
  //               let j = "Build".length;
  //               let k = 0;

  //               const techHide = setInterval(() => {
  //                 if (isCancelled) {
  //                   clearInterval(techHide);
  //                   return;
  //                 }
  //                 j--;
  //                 setTechText((prev) => prev.substring(0, j));
  //                 if (j === 0) clearInterval(techHide);
  //               }, 70);

  //               const techinormStr = "Built With Purpose";
  //               const techinormShow = setInterval(() => {
  //                 if (isCancelled) {
  //                   clearInterval(techinormShow);
  //                   return;
  //                 }
  //                 if (k <= techinormStr.length) {
  //                   setTechinormText(techinormStr.substring(0, k));
  //                   k++;
  //                 } else {
  //                   clearInterval(techinormShow);

  //                   // Restart animation after a delay
  //                   timers.push(
  //                     setTimeout(() => {
  //                       if (!isCancelled) runAnimation();
  //                     }, 1500)
  //                   );
  //                 }
  //               }, 90);
  //             }, 300);
  //           }
  //         }, 70);
  //       }, 1500)
  //     );

  //     // Optional scroll once in initial run
  //     // timers.push(
  //     //   setTimeout(() => {
  //     //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  //     //   }, 5000)
  //     // );
  //   };

  //   runAnimation();

  //   return () => {
  //     isCancelled = true;
  //     timers.forEach(clearTimeout);
  //   };
  // }, []);

  useEffect(() => {
    let isCancelled = false;
    const timers = [];

    const runAnimation = () => {
      setStep(0);
      setNormText("ideas.");
      setTechText("Build");
      setTechinormText("");

      // Step 1: Hide "ideas."
      timers.push(
        setTimeout(() => {
          if (isCancelled) return;
          setStep(1);
          let i = "ideas.".length;
          const interval = setInterval(() => {
            if (isCancelled) {
              clearInterval(interval);
              return;
            }
            i--;
            setNormText((prev) => prev.substring(0, i));
            if (i === 0) {
              clearInterval(interval);

              // Step 2: Hide "Build", Show "Built With Purpose"
              setTimeout(() => {
                if (isCancelled) return;
                setStep(2);
                let j = "Build".length;
                let k = 0;

                const techHide = setInterval(() => {
                  if (isCancelled) {
                    clearInterval(techHide);
                    return;
                  }
                  j--;
                  setTechText((prev) => prev.substring(0, j));
                  if (j === 0) clearInterval(techHide);
                }, 40); // faster

                const techinormStr = "Built With Purpose";
                const techinormShow = setInterval(() => {
                  if (isCancelled) {
                    clearInterval(techinormShow);
                    return;
                  }
                  if (k <= techinormStr.length) {
                    setTechinormText(techinormStr.substring(0, k));
                    k++;
                  } else {
                    clearInterval(techinormShow);

                    // Restart animation after a delay
                    timers.push(
                      setTimeout(() => {
                        if (!isCancelled) runAnimation();
                      }, 700) // faster
                    );
                  }
                }, 50); // faster typing
              }, 100); // faster transition
            }
          }, 40); // faster deletion
        }, 700) // faster initial delay
      );

      // Optional scroll once
      // timers.push(
      //   setTimeout(() => {
      //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      //   }, 3000)
      // );
    };

    runAnimation();

    return () => {
      isCancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <section className="h-screen w-full bg-white flex items-center justify-center relative overflow-hidden z-40">
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          {/* Step 0: Show both */}
          {step === 0 && (
            <h1 className="text-4xl sm:text-6xl font-monument text-black">
              Bold ideas.
            </h1>
          )}

          {/* Step 1: Hide only Normalised */}
          {step === 1 && (
            <h1 className="text-4xl sm:text-6xl font-monument text-black">
              Bold <span className="ml-2">{normText}</span>
            </h1>
          )}

          {/* Step 2: Hide Technology, Show Techinorm */}
          {step === 2 && (
            <div className="flex items-center gap-4">
              <h1 className="text-4xl sm:text-6xl font-monument text-[#7F61FF]">
                {techText}
              </h1>
              <div className="flex items-center gap-4">
                {/* <img
                  src="/assets/Vector.png"
                  alt="Techinorm Logo"
                  className="w-16 sm:w-24 h-auto"
                /> */}
                <h1 className="text-2xl sm:text-7xl font-monument text-[#7F61FF]">
                  {techinormText}
                </h1>
              </div>
            </div>
          )}
        </div>
      </section>

      <div ref={scrollRef} className="h-1 bg-transparent" />
    </>
  );
}
