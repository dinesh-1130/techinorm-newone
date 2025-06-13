import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

const DeliverSection = () => {
  // useGSAP(() => {
  //   // Animate left flags

  //   // Counter animations for numbers
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
  //         delay: 1 + index * 0.2,
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
    <div className='flex flex-col py-[250px] items-center justify-center relative overflow-hidden'>
      <img
        src={LeftOverlay}
        alt=''
        className='hidden xl:block absolute h-[750px] left-0 top-0'
      />
      <img
        src={RightOverlay}
        alt=''
        className='hidden xl:block absolute h-[750px] right-0 top-0'
      />

      <div className='flag-overlays'>
        {/* Left flags */}
        <img
          src={flag1}
          alt='flag'
          className='left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[14%] top-[16%]'
          data-aos='fade-right'
        />
        <img
          src={flag2}
          alt='flag'
          className='left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[10%] top-[38%]'
          data-aos='fade-right'
          data-aos-delay='100'
        />
        <img
          src={flag3}
          alt='flag'
          className='left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[16%] top-[70%]'
          data-aos='fade-right'
          data-aos-delay='200'
        />
        <img
          src={flag4}
          alt='flag'
          className='left-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md left-[9%] top-[85%]'
          data-aos='fade-right'
          data-aos-delay='300'
        />

        {/* Right flags */}
        <img
          src={flag5}
          alt='flag'
          className='right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[14%] top-[16%]'
          data-aos='fade-left'
          data-aos-delay='400'
        />
        <img
          src={flag6}
          alt='flag'
          className='right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[10%] top-[38%]'
          data-aos='fade-left'
          data-aos-delay='500'
        />
        <img
          src={flag7}
          alt='flag'
          className='right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[16%] top-[70%]'
          data-aos='fade-left'
          data-aos-delay='600'
        />
        <img
          src={flag8}
          alt='flag'
          className='right-flag hidden animate-bounce xl:block absolute w-[100px] h-[60px] rounded-md right-[9%] top-[85%]'
          data-aos='fade-left'
          data-aos-delay='700'
        />
      </div>

      <div className='flex flex-col gap-10 justify-center items-center z-10 px-8'>
        <h1
          className=' font-monument text-center text-4xl xl:text-5xl'
          data-aos='fade-up'
          data-aos-delay='500'>
          Delivering Worldwide <br /> with{" "}
          <span className='text-[#7F61FF]'>Proven impact.</span>
        </h1>
        <p
          className=' max-w-xl tracking-tight text-center text-gray-500'
          data-aos='fade-up'
          data-aos-delay='500'>
          From startups to global enterprises, we’ve partnered with clients
          across North America, Europe, MENA, and APAC
        </p>
        <div className='flex flex-col sm:flex-row gap-24 items-center'>
          <div className='stat-item flex flex-col gap-4 items-center justify-center'>
            <h2 className='counter-offices text-[#7F61FF] font-monument text-4xl'>
              8+
            </h2>
            <p className='font-bold'>Global Offices</p>
          </div>
          <div className='stat-item flex flex-col gap-4 items-center justify-center'>
            <h2 className='counter-partners text-[#7F61FF] font-monument text-4xl'>
              20+
            </h2>
            <p className='font-bold'>Partners</p>
          </div>
          <div className='stat-item flex flex-col gap-4 items-center justify-center'>
            <h2 className='counter-projects text-[#7F61FF] font-monument text-4xl'>
              163+
            </h2>
            <p className='font-bold'>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverSection;
