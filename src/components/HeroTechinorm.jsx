// import { useEffect, useRef, useState } from "react";

// export default function HeroIntro() {
//   const [step, setStep] = useState(0);
//   const [normText, setNormText] = useState("Normalised.");
//   const [techText, setTechText] = useState("Technology");
//   const [techinormText, setTechinormText] = useState("");
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const timers = [];

//     // Step 1: Hide "Normalised." letter by letter
//     timers.push(
//       setTimeout(() => {
//         setStep(1);
//         let i = normText.length;
//         const interval = setInterval(() => {
//           i--;
//           setNormText(normText.substring(0, i));
//           if (i === 0) {
//             clearInterval(interval);

//             // After Normalised is gone, hide Technology + start Techinorm
//             setTimeout(() => {
//               setStep(2);
//               let j = techText.length;
//               let k = 0;
//               const techHide = setInterval(() => {
//                 j--;
//                 setTechText(techText.substring(0, j));
//                 if (j === 0) clearInterval(techHide);
//               }, 70);

//               const techinormStr = "Techinorm";
//               const techinormShow = setInterval(() => {
//                 if (k <= techinormStr.length) {
//                   setTechinormText(techinormStr.substring(0, k));
//                   k++;
//                 } else {
//                   clearInterval(techinormShow);
//                 }
//               }, 60);
//             }, 100);
//           }
//         }, 70);
//       }, 500)
//     );

//     // Final scroll
//     timers.push(
//       setTimeout(() => {
//         scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//       }, 2500)
//     );

//     return () => timers.forEach(clearTimeout);
//   }, []);

//   return (
//     // <>
//     <div className="">
//       <section className="h-screen w-screen bg-white overflow-hidden border">
//         <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
//           {/* Step 0: Show both */}
//           {step === 0 && (
//             <h1 className="text-4xl sm:text-6xl font-monument text-black">
//               Technology <span className="ml-2">Normalized.</span>
//             </h1>
//           )}

//           {/* Step 1: Hide only Normalised */}
//           {step === 1 && (
//             <h1 className="text-4xl sm:text-6xl font-monument text-black">
//               Technology <span className="ml-2">{normText}</span>
//             </h1>
//           )}

//           {/* Step 2: Hide Technology, Show Techinorm */}
//           {step === 2 && (
//             <div className="flex items-center gap-4">
//               <h1 className="text-4xl sm:text-6xl font-monument text-[#7F61FF]">
//                 {techText}
//               </h1>
//               <div className="flex items-center gap-4">
//                 <h1 className="text-2xl sm:text-7xl font-monument text-[#7F61FF]">
//                   {techinormText}
//                 </h1>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       <div ref={scrollRef} className="h-0 w-full bg-transparent" />
//     </div>

//     // </>
//   );
// }
import { useEffect, useRef, useState } from "react";

export default function HeroIntro() {
  const [step, setStep] = useState(0);
  const [normText, setNormText] = useState("Normalised.");
  const [techText, setTechText] = useState("Technology");
  const [techinormText, setTechinormText] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    const timers = [];

    // Step 1: Hide "Normalised." letter by letter
    timers.push(
      setTimeout(() => {
        setStep(1);
        let i = normText.length;
        const interval = setInterval(() => {
          i--;
          setNormText(normText.substring(0, i));
          if (i === 0) {
            clearInterval(interval);

            // After Normalised is gone, hide Technology + start Techinorm
            setTimeout(() => {
              setStep(2);
              let j = techText.length;
              let k = 0;
              const techHide = setInterval(() => {
                j--;
                setTechText(techText.substring(0, j));
                if (j === 0) clearInterval(techHide);
              }, 70);

              const techinormStr = "Techinorm";
              const techinormShow = setInterval(() => {
                if (k <= techinormStr.length) {
                  setTechinormText(techinormStr.substring(0, k));
                  k++;
                } else {
                  clearInterval(techinormShow);
                }
              }, 60);
            }, 100);
          }
        }, 70);
      }, 500)
    );

    // Final scroll
    timers.push(
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 2500)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="">
      <section className="h-screen w-screen bg-white overflow-hidden border">
        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center px-4 sm:px-0">
          {/* Step 0: Show both */}
          {step === 0 && (
            <>
              {/* Mobile - Two lines */}
              <div className="text-center sm:hidden">
                <h1 className="text-3xl font-monument text-black">
                  Technology
                </h1>
                <h1 className="text-3xl font-monument text-black mt-2">
                  Normalised.
                </h1>
              </div>
              {/* Desktop - Single line */}
              <h1 className="hidden sm:block text-4xl lg:text-6xl font-monument text-black">
                Technology <span className="ml-2">Normalised.</span>
              </h1>
            </>
          )}

          {/* Step 1: Hide only Normalised */}
          {step === 1 && (
            <>
              {/* Mobile - Two lines */}
              <div className="text-center sm:hidden">
                <h1 className="text-3xl font-monument text-black">
                  Technology
                </h1>
                <h1 className="text-3xl font-monument text-black mt-2">
                  {normText}
                </h1>
              </div>
              {/* Desktop - Single line */}
              <h1 className="hidden sm:block text-4xl lg:text-6xl font-monument text-black">
                Technology <span className="ml-2">{normText}</span>
              </h1>
            </>
          )}

          {/* Step 2: Hide Technology, Show Techinorm */}
          {step === 2 && (
            <>
              {/* Mobile - Two lines */}
              <div className="text-center sm:hidden">
                <h1 className="text-3xl font-monument text-[#7F61FF]">
                  {techText}
                </h1>
                <h1 className="text-4xl font-monument text-[#7F61FF] mt-2">
                  {techinormText}
                </h1>
              </div>
              {/* Desktop - Single line */}
              <div className="hidden sm:flex items-center gap-4">
                <h1 className="text-4xl lg:text-6xl font-monument text-[#7F61FF]">
                  {techText}
                </h1>
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl lg:text-7xl font-monument text-[#7F61FF]">
                    {techinormText}
                  </h1>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <div ref={scrollRef} className="h-0 w-full bg-transparent" />
    </div>
  );
}
