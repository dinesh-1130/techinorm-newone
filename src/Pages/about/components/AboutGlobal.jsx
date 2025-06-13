// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import LeftOverlay from "/assets/Overlayleft.png";
// import RightOverlay from "/assets/Overlayright.png";

// import flag1 from "/assets/Flag1.png";
// import flag2 from "/assets/Flag2.png";
// import flag3 from "/assets/Flag3.png";
// import flag4 from "/assets/Flag4.png";
// import flag5 from "/assets/Flag5.png";
// import flag6 from "/assets/Flag6.png";
// import flag7 from "/assets/Flag7.png";
// import flag8 from "/assets/Flag8.png";

// const AboutGlobal = () => {
//   // useGSAP(() => {
//   //   // Animate left flags
//   //   gsap.from(".left-flag", {
//   //     xPercent: -100,
//   //     opacity: 0,
//   //     duration: 1,
//   //     stagger: 0.2,
//   //     ease: "power2.out",
//   //     delay: 0.7,
//   //   });

//   //   // Animate right flags
//   //   gsap.from(".right-flag", {
//   //     xPercent: 100,
//   //     opacity: 0,
//   //     duration: 1,
//   //     stagger: 0.2,
//   //     ease: "power2.out",
//   //     delay: 0.7,
//   //   });

//   //   // Animate the statistics with counter effect
//   //   gsap.from(".stat-item", {
//   //     y: 40,
//   //     opacity: 0,
//   //     duration: 1,
//   //     stagger: 0.2,
//   //     delay: 0.5,
//   //     ease: "power2.out",
//   //   });

//   //   // Counter animations for numbers
//   //   const counters = [
//   //     { element: ".counter-offices", target: 8 },
//   //     { element: ".counter-partners", target: 20 },
//   //     { element: ".counter-projects", target: 163 },
//   //   ];

//   //   counters.forEach((counter, index) => {
//   //     gsap.fromTo(
//   //       counter.element,
//   //       { textContent: 0 },
//   //       {
//   //         textContent: counter.target,
//   //         duration: 2,
//   //         delay: 1 + index * 0.3,
//   //         ease: "power2.out",
//   //         snap: { textContent: 1 },
//   //         onUpdate: function () {
//   //           this.targets()[0].textContent =
//   //             Math.ceil(this.targets()[0].textContent) + "+";
//   //         },
//   //       }
//   //     );
//   //   });
//   // });

//   return (
//     <div className="abt-global flex flex-col bg-black py-[250px] items-center justify-center relative overflow-hidden">
//       <img
//         src={LeftOverlay}
//         alt=""
//         className="hidden xl:block absolute h-[750px] left-0 top-0 invert"
//       />
//       <img
//         src={RightOverlay}
//         alt=""
//         className="hidden xl:block absolute h-[750px] right-0 top-0 invert"
//       />

//       <div className="flag-overlays">
//         {/* Left flags */}
//         <img
//           src={flag1}
//           alt="flag"
//           className="left-flag animate-bounce hidden xl:block absolute w-[100px] h-[60px] rounded-md left-[14%] top-[16%]"
//           data-aos="fade-right"
//         />
//         <img
//           src={flag2}
//           alt="flag"
//           className="left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[10%] top-[38%]"
//           data-aos="fade-right"
//           data-aos-delay="200"
//         />
//         <img
//           src={flag3}
//           alt="flag"
//           className="left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[16%] top-[70%]"
//           data-aos="fade-right"
//           data-aos-delay="300"
//         />
//         <img
//           src={flag4}
//           alt="flag"
//           className="left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[9%] top-[85%]"
//           data-aos="fade-right"
//           data-aos-delay="400"
//         />

//         {/* Right flags */}
//         <img
//           src={flag5}
//           alt="flag"
//           className="right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[14%] top-[16%]"
//         />
//         <img
//           src={flag6}
//           alt="flag"
//           className="right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[10%] top-[38%]"
//         />
//         <img
//           src={flag7}
//           alt="flag"
//           className="right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[16%] top-[70%]"
//         />
//         <img
//           src={flag8}
//           alt="flag"
//           className="right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[9%] top-[85%]"
//         />
//       </div>

//       <div className="flex flex-col gap-10 justify-center items-center z-10">
//         <h1
//           className="main-heading font-monument text-4xl xl:text-5xl"
//           data-aos="fade-up"
//         >
//           <span className="text-[#7F61FF]">Global Presence</span>
//         </h1>
//         <p
//           className="description-text max-w-xl tracking-tight text-center text-gray-500"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           While our roots are digital, our reach is global. We work with clients
//           across North America, Europe, MENA, and APAC — with delivery hubs that
//           support remote, hybrid, and on-site collaboration.
//         </p>
//         <div className="flex flex-col md:flex-row gap-24 items-center">
//           <div className="stat-item flex flex-col gap-4 items-center justify-center">
//             <h2 className="counter-offices text-[#7F61FF] font-monument text-4xl">
//               8+
//             </h2>
//             <p className="font-bold text-white/50">Global Offices</p>
//           </div>
//           <div className="stat-item flex flex-col gap-4 items-center justify-center">
//             <h2 className="counter-partners text-[#7F61FF] font-monument text-4xl">
//               20+
//             </h2>
//             <p className="font-bold text-white/50">Partners</p>
//           </div>
//           <div className="stat-item flex flex-col gap-4 items-center justify-center">
//             <h2 className="counter-projects text-[#7F61FF] font-monument text-4xl">
//               163+
//             </h2>
//             <p className="font-bold text-white/50">Projects</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutGlobal;

// import { useEffect } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import LeftOverlay from "/assets/Overlayleft.png";
// import RightOverlay from "/assets/Overlayright.png";

// import flag1 from "/assets/Flag1.png";
// import flag2 from "/assets/Flag2.png";
// import flag3 from "/assets/Flag3.png";
// import flag4 from "/assets/Flag4.png";
// import flag5 from "/assets/Flag5.png";
// import flag6 from "/assets/Flag6.png";
// import flag7 from "/assets/Flag7.png";
// import flag8 from "/assets/Flag8.png";

// const AboutGlobal = () => {

//   useGSAP(() => {
//     gsap.from(".stat-item", {
//       y: 40,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       delay: 0.5,
//       ease: "power2.out",
//     });

//     const counters = [
//       { element: ".counter-offices", target: 8 },
//       { element: ".counter-partners", target: 20 },
//       { element: ".counter-projects", target: 163 },
//     ];

//     counters.forEach((counter, index) => {
//       gsap.fromTo(
//         counter.element,
//         { textContent: 0 },
//         {
//           textContent: counter.target,
//           duration: 2,
//           delay: 1 + index * 0.3,
//           ease: "power2.out",
//           snap: { textContent: 1 },
//           onUpdate: function () {
//             this.targets()[0].textContent =
//               Math.ceil(this.targets()[0].textContent) + "+";
//           },
//         }
//       );
//     });
//   });

//   return (
//     <div className="abt-global flex flex-col bg-black py-[250px] items-center justify-center relative overflow-hidden">
//       <img
//         src={LeftOverlay}
//         alt=""
//         className="hidden xl:block absolute h-[750px] left-0 top-0 invert"
//       />
//       <img
//         src={RightOverlay}
//         alt=""
//         className="hidden xl:block absolute h-[750px] right-0 top-0 invert"
//       />

//       <div className="flag-overlays">
//         {/* Left flags */}
//         <img
//           src={flag1}
//           alt="flag"
//           className="left-flag animate-bounce absolute w-[100px] h-[60px] rounded-md left-[14%] top-[16%]"
//           data-aos="fade-right"
//         />
//         <img
//           src={flag2}
//           alt="flag"
//           className="left-flag animate-bounce absolute w-[100px] h-[60px] rounded-md left-[10%] top-[38%]"
//           data-aos="fade-right"
//           data-aos-delay="200"
//         />
//         <img
//           src={flag3}
//           alt="flag"
//           className="left-flag animate-bounce absolute w-[100px] h-[60px] rounded-md left-[16%] top-[70%]"
//           data-aos="fade-right"
//           data-aos-delay="300"
//         />
//         <img
//           src={flag4}
//           alt="flag"
//           className="left-flag animate-bounce absolute w-[100px] h-[60px] rounded-md left-[9%] top-[85%]"
//           data-aos="fade-right"
//           data-aos-delay="400"
//         />

//         {/* Right flags */}
//         <img
//           src={flag5}
//           alt="flag"
//           className="right-flag animate-bounce absolute w-[100px] h-[60px] rounded-md right-[14%] top-[16%]"
//           data-aos="fade-left"
//         />
//         <img
//           src={flag6}
//           alt="flag"
//           className="right-flag animate-bounce absolute w-[100px] h-[60px] rounded-md right-[10%] top-[38%]"
//           data-aos="fade-left"
//           data-aos-delay="200"
//         />
//         <img
//           src={flag7}
//           alt="flag"
//           className="right-flag animate-bounce absolute w-[100px] h-[60px] rounded-md right-[16%] top-[70%]"
//           data-aos="fade-left"
//           data-aos-delay="300"
//         />
//         <img
//           src={flag8}
//           alt="flag"
//           className="right-flag animate-bounce absolute w-[100px] h-[60px] rounded-md right-[9%] top-[85%]"
//           data-aos="fade-left"
//           data-aos-delay="400"
//         />
//       </div>

//       <div className="flex flex-col gap-10 justify-center items-center z-10">
//         <h1
//           className="main-heading font-monument text-4xl xl:text-5xl"
//           data-aos="fade-up"
//         >
//           <span className="text-[#7F61FF]">Global Presence</span>
//         </h1>
//         <p
//           className="description-text max-w-xl tracking-tight text-center text-gray-500"
//           data-aos="fade-up"
//           data-aos-delay="500"
//         >
//           While our roots are digital, our reach is global. We work with clients
//           across North America, Europe, MENA, and APAC — with delivery hubs that
//           support remote, hybrid, and on-site collaboration.
//         </p>
//         <div
//           className="flex flex-col md:flex-row gap-24 items-center"
//           data-aos="fade-up"
//           data-aos-delay="500"
//         >
//           <div className="stat-item flex flex-col gap-4 items-center justify-center">
//             <h2 className="counter-offices text-[#7F61FF] font-monument text-4xl">
//               8+
//             </h2>
//             <p className="font-bold text-white/50">Global Offices</p>
//           </div>
//           <div className="stat-item flex flex-col gap-4 items-center justify-center">
//             <h2 className="counter-partners text-[#7F61FF] font-monument text-4xl">
//               20+
//             </h2>
//             <p className="font-bold text-white/50">Partners</p>
//           </div>
//           <div className="stat-item flex flex-col gap-4 items-center justify-center">
//             <h2 className="counter-projects text-[#7F61FF] font-monument text-4xl">
//               163+
//             </h2>
//             <p className="font-bold text-white/50">Projects</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutGlobal;

import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AOS from "aos";
// import "aos/dist/aos.css";

import LeftOverlay from "/assets/Overlayleft.png";
import RightOverlay from "/assets/Overlayright.png";

import flag1 from "/assets/Flag1.png";
import flag2 from "/assets/Flag2.png";
import flag3 from "/assets/Flag3.png";
import flag4 from "/assets/Flag4.png";
import flag5 from "/assets/Flag5.png";
import flag6 from "/assets/Flag6.png";
import flag7 from "/assets/Flag7.png";
import flag8 from "/assets/Flag8.png";

const AboutGlobal = () => {
  // ✅ AOS Initialization
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //     mirror: false,
  //   });

  //   // Ensure AOS recalculates positions
  //   setTimeout(() => {
  //     AOS.refresh();
  //   }, 500);
  // }, []);

  // ✅ GSAP Counter & Fade-in Animation
  // useGSAP(() => {
  //   gsap.from(".stat-item", {
  //     y: 40,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.2,
  //     delay: 0.5,
  //     ease: "power2.out",
  //   });

  //   const counters = [
  //     { element: ".counter-offices", target: 8 },
  //     { element: ".counter-partners", target: 20 },
  //     { element: ".counter-projects", target: 163 },
  //   ];

  //   counters.forEach((counter, index) => {
  //     gsap.fromTo(
  //       counter.element,
  //       { textContent: 0 },
  //       {
  //         textContent: counter.target,
  //         duration: 2,
  //         delay: 1 + index * 0.3,
  //         ease: "power2.out",
  //         snap: { textContent: 1 },
  //         onUpdate: function () {
  //           this.targets()[0].textContent =
  //             Math.ceil(this.targets()[0].textContent) + "+";
  //         },
  //       }
  //     );
  //   });
  // });

  return (
    <div className=' flex flex-col bg-black py-[250px] items-center justify-center relative overflow-hidden'>
      <img
        src={LeftOverlay}
        alt=''
        className='hidden xl:block absolute h-[750px] left-0 top-0 invert'
      />
      <img
        src={RightOverlay}
        alt=''
        className='hidden xl:block absolute h-[750px] right-0 top-0 invert'
      />

      <div className='flag-overlays'>
        {/* Left flags */}
        <img
          src={flag1}
          alt='flag'
          className='left-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md left-[14%] top-[16%]'
          data-aos='fade-right'
        />
        <img
          src={flag2}
          alt='flag'
          className='left-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md left-[10%] top-[38%]'
          data-aos='fade-right'
          data-aos-delay='200'
        />
        <img
          src={flag3}
          alt='flag'
          className='left-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md left-[16%] top-[70%]'
          data-aos='fade-right'
          data-aos-delay='300'
        />
        <img
          src={flag4}
          alt='flag'
          className='left-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md left-[9%] top-[85%]'
          data-aos='fade-right'
          data-aos-delay='400'
        />

        {/* Right flags */}
        <img
          src={flag5}
          alt='flag'
          className='right-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md right-[14%] top-[16%]'
          data-aos='fade-left'
        />
        <img
          src={flag6}
          alt='flag'
          className='right-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md right-[10%] top-[38%]'
          data-aos='fade-left'
          data-aos-delay='200'
        />
        <img
          src={flag7}
          alt='flag'
          className='right-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md right-[16%] top-[70%]'
          data-aos='fade-left'
          data-aos-delay='300'
        />
        <img
          src={flag8}
          alt='flag'
          className='right-flag hidden xl:block animate-bounce absolute w-[100px] h-[60px] rounded-md right-[9%] top-[85%]'
          data-aos='fade-left'
          data-aos-delay='400'
        />
      </div>

      <div className='flex flex-col gap-10 justify-center items-center z-10 px-4'>
        <h1 className=' font-monument text-4xl xl:text-5xl' data-aos='fade-up'>
          <span className='text-[#7F61FF]'>Global Presence</span>
        </h1>
        <p
          className=' max-w-xl tracking-tight text-center text-gray-500'
          data-aos='fade-up'
          data-aos-delay='300'>
          While our roots are digital, our reach is global. We work with clients
          across North America, Europe, MENA, and APAC — with delivery hubs that
          support remote, hybrid, and on-site collaboration.
        </p>
        <div
          className='flex flex-col sm:flex-row gap-24 items-center'
          data-aos='fade-up'
          data-aos-delay='500'>
          <div className='stat-item flex flex-col gap-4 items-center justify-center'>
            <h2 className='counter-offices text-[#7F61FF] font-monument text-4xl'>
              8+
            </h2>
            <p className='font-bold text-white/50'>Global Offices</p>
          </div>
          <div className='stat-item flex flex-col gap-4 items-center justify-center'>
            <h2 className='counter-partners text-[#7F61FF] font-monument text-4xl'>
              20+
            </h2>
            <p className='font-bold text-white/50'>Partners</p>
          </div>
          <div className='stat-item flex flex-col gap-4 items-center justify-center'>
            <h2 className='counter-projects text-[#7F61FF] font-monument text-4xl'>
              163+
            </h2>
            <p className='font-bold text-white/50'>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGlobal;
