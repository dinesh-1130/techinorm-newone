// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// export default function AlignedPartners() {
//   const navigate = useNavigate();
//   // useEffect(() => {
//   //   AOS.init({ duration: 800, once: true });
//   // }, []);

//   return (
//     <section className="w-full min-h-screen bg-white px-6 sm:px-12 py-10 relative flex flex-col sm:flex-row items-stretch justify-between overflow-hidden">
//       {/* Top Heading Slightly Right */}
//       <div
//         className="relative sm:absolute top-10 left-10 sm:top-40 sm:left-44 z-10 max-w-[600px]"
//         data-aos="fade-up"
//       >
//         <h2 className="font-monument font-light sm:font-extralight tracking-wide leading-[1.1] text-[28px] sm:text-[40px] md:text-[40px] text-left">
//           <div className="text-black mb-2">Beyond Clients</div>
//           <div className="text-[#8064ff] whitespace-nowrap">
//             Aligned Partners
//           </div>
//         </h2>
//       </div>

//       {/* Bottom Content Slightly Left */}
//       <div
//         className="ml-auto mt-4 sm:mt-auto mb-10 mr-6 sm:mb-40 sm:mr-40 w-full max-w-xl text-left space-y-6"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base font-garet">
//           We believe the best outcomes happen when we’re fully aligned – not
//           just as service providers, but as strategic partners.
//         </p>
//         <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base font-garet">
//           From the very first conversation, we work to understand your business
//           like it’s our own. We challenge assumptions, co-create bold solutions,
//           and take full ownership of the outcome.
//         </p>
//         <p className="text-gray-900 text-[15px] sm:text-base font-garet">
//           Because we don’t measure success by deliverables.
//           <br />
//           We measure it by the{" "}
//           <span className="text-[#8064ff] font-medium font-garet">impact!</span>
//         </p>
//         <button
//           className="bg-[#8064ff] text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:opacity-90 transition font-garet"
//           onClick={() => navigate("/contact/#contactForm")}
//         >
//           Lets Build Together!
//         </button>
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function AlignedPartners() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);

  return (
    <section className="w-full min-h-screen bg-white px-6 sm:px-12 py-10 relative flex flex-col sm:flex-row items-stretch justify-between overflow-hidden">
      {/* Top Heading Slightly Right */}
      <div
        className="relative sm:absolute top-10 left-10 sm:top-40 sm:left-44 z-10 max-w-[600px] mobile-heading"
        data-aos="fade-up"
      >
        <h2 className="font-monument font-light sm:font-extralight tracking-wide leading-[1.1] text-[28px] sm:text-[40px] md:text-[40px] text-left">
          <div className="text-black mb-2">Beyond Clients</div>
          <div className="text-[#8064ff] whitespace-nowrap mobile-break-text">
            Aligned Partners
          </div>
        </h2>
      </div>

      {/* Bottom Content Slightly Left */}
      <div
        className="ml-auto mt-4 sm:mt-auto mb-10 mr-6 sm:mb-40 sm:mr-40 w-full max-w-xl text-left space-y-6 mobile-content"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base font-garet">
          We believe the best outcomes happen when we're fully aligned – not
          just as service providers, but as strategic partners.
        </p>
        <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base font-garet">
          From the very first conversation, we work to understand your business
          like it's our own. We challenge assumptions, co-create bold solutions,
          and take full ownership of the outcome.
        </p>
        <p className="text-gray-900 text-[15px] sm:text-base font-garet">
          Because we don't measure success by deliverables.
          <br />
          We measure it by the{" "}
          <span className="text-[#8064ff] font-medium font-garet">impact!</span>
        </p>
        <button
          className="bg-[#8064ff] text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:opacity-90 transition font-garet mobile-button"
          onClick={() => navigate("/contact/#contactForm")}
        >
          Lets Build Together!
        </button>
      </div>

      {/* Mobile-Only Styles - Add this CSS to your stylesheet */}
      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-heading {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            margin-bottom: 2rem;
            text-align: center;
            max-width: 100%;
            padding: 0 1rem;
          }

          .mobile-heading h2 {
            font-size: 24px !important;
            text-align: center;
          }

          .mobile-break-text {
            white-space: normal !important;
          }

          .mobile-content {
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: 0 !important;
            text-align: center;
            padding: 0 1rem;
            max-width: 100%;
          }

          .mobile-content p {
            font-size: 14px !important;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .mobile-button {
            width: 100%;
            margin-top: 1.5rem !important;
            padding: 12px 20px !important;
            font-size: 16px !important;
          }

          section {
            padding: 2rem 1rem !important;
            min-height: auto !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-heading h2 {
            font-size: 22px !important;
          }

          .mobile-content p {
            font-size: 13px !important;
          }

          section {
            padding: 1.5rem 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
