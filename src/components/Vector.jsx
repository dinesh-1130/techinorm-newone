// // import React, { useEffect } from 'react';
// // import AOS from 'aos';
// // import "aos/dist/aos.css";

// export default function TechinormIntro() {
//   // useEffect(() => {
//   //   AOS.init({ duration: 800, once: true });
//   // }, []);

//   return (
//     <section className="min-h-screen w-full bg-[#F5F5FC] flex items-center justify-center px-6 sm:px-16 lg:px-24 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1400px] w-full gap-16">
//         {/* Left Side - Heading slightly above and Image unchanged */}
//         <div className="flex flex-col items-start relative">
//           {/* Heading moved slightly above */}
//           <div className="-mt-6" data-aos="fade-up">
//             <h2 className="font-monument text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] text-black">
//               <span className="text-[#8B5CF6]">Techinorm:</span>
//               <br />
//               Normalizing Technology
//               <br />
//               For Everyone
//             </h2>
//           </div>

//           {/* Image remains in original place */}
//           <div className="mt-32" data-aos="fade-up">
//             <img
//               src="/assets/vector-2.png"
//               alt="Vector Arrow"
//               className="w-[300px] sm:w-[380px] md:w-[440px]"
//             />
//           </div>
//         </div>

//         {/* Right Side - Text content moved further down */}
//         <div
//           className="flex flex-col justify-start items-start text-left text-gray-600 font-garet text-[11px] sm:text-[13px] md:text-[14px] leading-[1.9] space-y-6 mt-60"
//           data-aos="fade-up"
//         >
//           <p>
//             At Techinorm, we believe technology should be accessible, reliable,
//             and seamlessly integrated into everyday business – that's why our
//             name means{" "}
//             <span className="font-semibold text-black">
//               "normalizing technology."
//             </span>
//           </p>
//           <p>
//             We're on a mission to make advanced tech simple and natural,
//             transforming complex AI, blockchain, and software solutions into
//             everyday tools that empower real growth. Our developers are more
//             than coders; they are passionate problem-solvers and innovators who
//             combine deep technical knowledge with creativity and precision.
//           </p>
//           <p>
//             Together, we craft scalable, high-quality products and seamless
//             experiences that help our partners innovate confidently and thrive
//             in a digital world.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import "aos/dist/aos.css";

export default function TechinormIntro() {
  const [mobileLayout, setMobileLayout] = useState(1);

  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);

  return (
    <section className="min-h-screen w-full bg-[#F5F5FC] flex items-center justify-center px-6 sm:px-16 lg:px-24 py-16">
      {/* Desktop Layout - Original */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 max-w-[1400px] w-full gap-16">
        {/* Left Side - Heading slightly above and Image unchanged */}
        <div className="flex flex-col items-start relative">
          {/* Heading moved slightly above */}
          <div className="-mt-6" data-aos="fade-up">
            <h2 className="font-monument text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] text-black">
              <span className="text-[#8B5CF6]">Techinorm:</span>
              <br />
              Normalizing Technology
              <br />
              For Everyone
            </h2>
          </div>

          {/* Image remains in original place */}
          <div className="mt-32" data-aos="fade-up">
            <img
              src="/assets/vector-2.png"
              alt="Vector Arrow"
              className="w-[300px] sm:w-[380px] md:w-[440px]"
            />
          </div>
        </div>

        {/* Right Side - Text content moved further down */}
        <div
          className="flex flex-col justify-start items-start text-left text-gray-600 font-garet text-[11px] sm:text-[13px] md:text-[14px] leading-[1.9] space-y-6 mt-60"
          data-aos="fade-up"
        >
          <p>
            At Techinorm, we believe technology should be accessible, reliable,
            and seamlessly integrated into everyday business – that's why our
            name means{" "}
            <span className="font-semibold text-black">
              "normalizing technology."
            </span>
          </p>
          <p>
            We're on a mission to make advanced tech simple and natural,
            transforming complex AI, blockchain, and software solutions into
            everyday tools that empower real growth. Our developers are more
            than coders; they are passionate problem-solvers and innovators who
            combine deep technical knowledge with creativity and precision.
          </p>
          <p>
            Together, we craft scalable, high-quality products and seamless
            experiences that help our partners innovate confidently and thrive
            in a digital world.
          </p>
        </div>
      </div>

      {/* Mobile Layout 1: Stacked with Feature Cards */}
      {mobileLayout === 1 && (
        <div className="md:hidden w-full max-w-md space-y-8">
          {/* Header Section */}
          <div className="text-center" data-aos="fade-down">
            <h2 className="font-monument text-[24px] leading-[1.2] text-black mb-6">
              <span className="text-[#8B5CF6]">Techinorm:</span>
              <br />
              Normalizing Technology
              <br />
              For Everyone
            </h2>
            <div className="flex justify-center">
              <img
                src="/assets/vector-2.png"
                alt="Vector Arrow"
                className="w-[200px] opacity-80"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#8B5CF6]/10"
              data-aos="slide-up"
              data-aos-delay="100"
            >
              <div className="flex items-start space-x-4">
                {/* <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🎯</span>
                </div> */}
                <p className="text-gray-700 font-garet text-sm leading-relaxed">
                  At Techinorm, we believe technology should be accessible,
                  reliable, and seamlessly integrated into everyday business –
                  that's why our name means{" "}
                  <span className="font-semibold text-black">
                    "normalizing technology."
                  </span>
                </p>
              </div>
            </div>

            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#8B5CF6]/10"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              <div className="flex items-start space-x-4">
                {/* <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🚀</span>
                </div> */}
                <p className="text-gray-700 font-garet text-sm leading-relaxed">
                  We're on a mission to make advanced tech simple and natural,
                  transforming complex AI, blockchain, and software solutions
                  into everyday tools that empower real growth.
                </p>
              </div>
            </div>

            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#8B5CF6]/10"
              data-aos="slide-up"
              data-aos-delay="300"
            >
              <div className="flex items-start space-x-4">
                {/* <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">⭐</span>
                </div> */}
                <p className="text-gray-700 font-garet text-sm leading-relaxed">
                  Together, we craft scalable, high-quality products and
                  seamless experiences that help our partners innovate
                  confidently and thrive in a digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
