// // export default PageOne;
// import { useEffect } from "react";
// import HeroTechinorm from "./HeroTechinorm";
// import ScrollSections from "./ScrollSections";
// import Card from "./Card";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const PageOne = () => {
//   useEffect(() => {
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }
//     window.scrollTo(0, 0);
//   }, []);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(".scrollsection", {
//       scrollTrigger: {
//         trigger: ".scrollsection",
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         pin: true,
//       },
//       scale: 0.7,
//       opacity: 0,
//       ease: "power2.out",
//       duration: 0.2,
//       delay: 0.2,
//     });
//   }, {});

//   return (
//     <div>
//       <HeroTechinorm />
//       <div className="relative min-h-screen">
//         <div className="h-screen sticky top-0 left-0 w-full z-10 scrollsection">
//           <ScrollSections />
//         </div>
//         <div className="absolute w-full h-full -top-10 ">
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageOne;
import { useEffect } from "react";
import HeroTechinorm from "./HeroTechinorm";
import ScrollSections from "./ScrollSections";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PageOne = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(".scrollsection", {
  //     scrollTrigger: {
  //       trigger: ".scrollsection",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       pin: true,
  //     },
  //     scale: 0.7,
  //     opacity: 0,
  //     ease: "power2.out",
  //     duration: 0.2,
  //     delay: 0.2,
  //   });
  // }, {});

  return (
    <div>
      <HeroTechinorm />
      <div className="relative min-h-screen">
        <div className="h-screen sticky top-0 left-0 w-full z-10 ">
          <ScrollSections />
          <Card />
        </div>
        {/* <div className="absolute w-full h-full -top-10 "></div> */}
      </div>
    </div>
  );
};

export default PageOne;
