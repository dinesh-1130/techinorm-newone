import { Link } from "react-router-dom";
import CubeVideo from "/assets/CubeVdo.mp4"; // Assuming you have a video file in the assets folder
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutCTA = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".abt-cta-el", {
      x: -800,
      ease: "electric",
      duration: 4,
      delay: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-cta",
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, {});

  return (
    <div className='bg-black py-[126px] about-cta'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col xl:flex-row items-center justify-center gap-[50px]'>
          <div className='cta-video h-[500px] relative overflow-hidden'>
            <video
              className='w-full h-full object-cover relative pointer-events-none'
              autoPlay
              muted
              loop
              playsInline
              aria-hidden='true'>
              <source src={CubeVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='cta-content text-white flex flex-col items-start gap-8 overflow-hidden'>
            <h2 className='font-monument flex flex-col text-4xl'>
              <span className='abt-cta-el'>Let’s Build Something{""}</span>
              <span className='abt-cta-el text-[#7F61FF]'>Meaningful.</span>
            </h2>
            <p className='abt-cta-el text-gray-400 max-w-[500px]'>
              Whether you have an idea, a challenge, or a full roadmap — we’d
              love to hear it.
            </p>
            <Link
              to='https://calendar.app.google/YmvmiskhMBbi3krn8'
              target='_blank'
              className='abt-cta-el mt-8 bg-[#7F61FF] text-white px-6 py-2 hover:bg-[#6a4cd8] transition-colors duration-300'>
              Book A Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
// Note: The above code is a simplified version of the original ContactHome component, adapted for the AboutCTA context.
