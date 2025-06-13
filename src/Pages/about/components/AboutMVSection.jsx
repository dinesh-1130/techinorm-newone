import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";

const AboutMVSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-wrapper",
        start: "center center",
        end: "+=500",
        scrub: 1.5,
        pin: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".about-para", {
      maxWidth: "40%",
      fontSize: "1rem",
      display: "flex",
      flexDirection: "column",
      duration: 3,
      ease: "power2.Out",
      delay: 0.5,
    }).to(
      ".about-title",
      {
        color: "#7F61FF",
        fontFamily: "Monument,sans-serif",
        fontSize: "2rem",
        duration: 3,
        ease: "power2.Out",
        delay: 0.5,
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='py-[129px]'>
      <div className='container mx-auto px-4 about-wrapper'>
        <div className='hidden lg:block'>
          <div className='about-para  text-4xl font-semibold px-10 leading-normal max-w-full font-garet'>
            <span className='about-title text-4xl'>Techinorm</span>{" "}
            <span className=''>
              is a full spectrum technology partner helping startups, scaleups,
              and enterprises solve real world challenges with digital
              precision. From disruptive blockchain protocols and enterprise
              grade mobile apps to performance marketing and product strategy,
              we build solutions that last, scale, and deliver.
            </span>
          </div>
        </div>
        <div className='block lg:hidden'>
          <div className=' text-xl font-semibold px-10 leading-normal max-w-full font-garet flex flex-col gap-4 tracking-tight text-justify'>
            <span className=' text-4xl font-monument text-[#7F61FF]'>
              Techinorm
            </span>{" "}
            <span className=''>
              is a full spectrum technology partner helping startups, scaleups,
              and enterprises solve real world challenges with digital
              precision. From disruptive blockchain protocols and enterprise
              grade mobile apps to performance marketing and product strategy,
              we build solutions that last, scale, and deliver.
            </span>
          </div>
        </div>
      </div>
      <MissionVisionSection />
    </div>
  );
};

export default AboutMVSection;

// const MissionVisionSection = () => {
//   // const circleRef = useRef(null);
//   const contentRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const Data = [
//     {
//       title: "Our Mission",
//       content:
//         "Build digital products that solve real-world problems, create lasting value, and sustainable impact.",
//     },
//     {
//       title: "Our Vision",
//       content:
//         "To be the partner of choice for organizations building the next generation of digital products, platforms, and ecosystems across industries and global markets.",
//     },
//     {
//       title: "Our Thinking",
//       content:
//         "“We don’t just write code. We solve the right problems, the right way.”  We combine engineering excellence with strategic depth. Our teams are trained to think beyond features, to understand why a product exists, who it serves, and how it can evolve with the market.",
//     },
//     {
//       title: "Our Commitment",
//       content:
//         "“We operate as an extension of your team, offering flexible, collaborative, and transparent delivery models tailored to your needs. We provide end-to-end delivery, from idea to launch and beyond",
//     },
//   ];

//   useEffect(() => {
//     contentRefs.current = contentRefs.current.slice(0, Data.length);

//     contentRefs.current.forEach((el, i) => {
//       ScrollTrigger.create({
//         trigger: el,
//         start: "top 60%",
//         end: "20% center",
//         markers: true,
//         onEnter: () => {
//           setActiveIndex(i);
//           //   gsap.to(circleRef.current, {
//           //     width: 500 + i * 80,
//           //     height: 500 + i * 80,
//           //     duration: 0.5,
//           //     ease: "power2.out",
//           //   });
//         },
//         onEnterBack: () => {
//           setActiveIndex(i);
//           //   gsap.to(circleRef.current, {
//           //     width: 500 + i * 80,
//           //     height: 500 + i * 80,
//           //     duration: 0.5,
//           //     ease: "power2.out",
//           //   });
//         },
//       });
//     });
//   }, []);

//   useGSAP(() => {
//     gsap.to(".mission-section", {
//       opacity: 1,
//       duration: 2,
//       delay: 0.5,
//       ease: "expo",
//       stagger: 0.5,
//     });
//   });

//   return (
//     <div className="container mx-auto px-4 py-16 about-Mission">
//       <div className="flex flex-col xl:flex-row justify-center items-center gap-[200px]">
//         {/* Left Column: Text */}
//         <div className=" flex flex-col gap-10 about-container">
//           {Data.map((data, index) => (
//             <div
//               key={index}
//               ref={(el) => (contentRefs.current[index] = el)}
//               className="mission-section transition-transform ease-in-out duration-500 opacity-0"
//             >
//               <h2
//                 className={`text-3xl font-bold font-monument tracking-wide ${
//                   activeIndex === index ? "text-black" : "text-gray-400"
//                 }`}
//               >
//                 {data.title}
//               </h2>
//               {activeIndex === index && (
//                 <p className="text-lg max-w-[400px] mt-4 text-[#7F61FF] font-bold transition ease-in-out duration-500">
//                   {data.content}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right Column: Image Circle */}
//         <div className="flex items-center w-[500px] h-[500px] justify-end">
//           <div className="flex flex-col gap-2">
//             {Data.map((s, index) => (
//               <div
//                 key={index}
//                 className={`h-[100px] w-[200px] bg-black relative ${
//                   activeIndex - 1 === index ? "opacity-100" : "opacity-50"
//                 } transition-opacity duration-500`}
//                 style={{ marginLeft: `${index * -100}px` }}
//               >
//                 <div className="absolute bottom-0 right-0 h-[90px] w-[190px] bg-white"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const MissionVisionSection = () => {
  // const circleRef = useRef(null);
  const contentRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const Data = [
    {
      title: "Our Mission",
      content:
        "Build digital products that solve real-world problems, create lasting value, and sustainable impact.",
    },
    {
      title: "Our Vision",
      content:
        "To be the partner of choice for organizations building the next generation of digital products, platforms, and ecosystems across industries and global markets.",
    },
    {
      title: "Our Thinking",
      content:
        "We don't just write code. We solve the right problems, the right way. We combine engineering excellence with strategic depth. Our teams are trained to think beyond features, to understand why a product exists, who it serves, and how it can evolve with the market.",
    },
    {
      title: "Our Commitment",
      content:
        "We operate as an extension of your team, offering flexible, collaborative, and transparent delivery models tailored to your needs. We provide end-to-end delivery, from idea to launch and beyond",
    },
  ];

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, Data.length);

    contentRefs.current.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "bottom 70%",
        end: "bottom 70%",
        scrub: true,
        onEnter: () => {
          setActiveIndex(i);
          //   gsap.to(circleRef.current, {
          //     width: 500 + i * 80,
          //     height: 500 + i * 80,
          //     duration: 0.5,
          //     ease: "power2.out",
          //   });
        },
        onEnterBack: () => {
          setActiveIndex(i);
          //   gsap.to(circleRef.current, {
          //     width: 500 + i * 80,
          //     height: 500 + i * 80,
          //     duration: 0.5,
          //     ease: "power2.out",
          //   });
        },
      });
    });
  }, []);

  useGSAP(() => {
    gsap.to(".mission-section", {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      ease: "expo",
      stagger: 0.5,
    });
  });

  return (
    <div className='container mx-auto px-4 py-16 about-Mission'>
      <div className='flex flex-col xl:flex-row justify-center items-center gap-[200px]'>
        {/* Left Column: Text */}
        <div className=' flex flex-col gap-10 about-container'>
          {Data.map((data, index) => (
            <div
              key={index}
              ref={el => (contentRefs.current[index] = el)}
              className='mission-section transition-transform ease-in-out duration-500 opacity-0'>
              <h2
                className={`text-3xl font-bold font-monument tracking-wide ${
                  activeIndex === index ? "text-black" : "text-gray-400"
                }`}>
                {data.title}
              </h2>
              {activeIndex === index && (
                <p className='text-lg max-w-[400px] mt-4 text-[#7F61FF] font-bold transition-all ease-in-out duration-500'>
                  {data.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Image Circle */}
        <div className='hidden  steps lg:flex items-center w-[500px] h-[500px] justify-end'>
          <div className='flex flex-col-reverse gap-2'>
            {Data.map((s, index) => (
              <div
                key={index}
                className={`h-[100px] w-[200px] bg-black relative ${
                  activeIndex === index ? "opacity-100" : "opacity-20"
                } transition-opacity duration-500`}
                style={{ marginLeft: `${(Data.length - 1 - index) * -100}px` }}>
                <div className='absolute bottom-0 right-0 h-[90px] w-[190px] bg-white'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
