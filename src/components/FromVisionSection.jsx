import React, { useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function IfItMatters() {
  const headingRef = useRef(null);

  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);

  const data = [
    {
      title: "We Don’t Sell Services –\nWe Share Skin In The Game",
      desc: "You’re not a client. You’re a partner. That means aligned goals, shared wins, and long-term trust.",
    },
    {
      title: "Tech + Marketing+ Support,\nAll Under One Roof",
      desc: "We don’t stop at launch. We build with scale in mind – and growth baked in.",
    },
    {
      title: "End-To-End Execution",
      desc: "From idea validation to deployment and support, we handle the full journey – without handoffs or gaps.",
    },
    {
      title: "Global Experience,\nStartup Agility",
      desc: "From idea validation to deployment and support, we handle the full journey – without handoffs or gaps.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white pb-20">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Heading */}
      <div className="pt-28 sm:pt-32 xl:py-96  px-4 text-center relative z-10">
        <h2
          ref={headingRef}
          className="font-monument text-white text-[28px] sm:text-[40px] md:text-[52px] leading-tight"
          data-aos="fade-up"
        >
          If It Matters Tomorrow,
          <br />
          <span className="text-[#8064ff]">We Build It Today.</span>
        </h2>
      </div>

      {/* Subtext Content */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20 flex flex-col gap-20 px-6 sm:px-16 pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-6 sm:gap-16"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="w-full sm:w-1/2 text-left text-white font-garet text-[24px] sm:text-[28px] whitespace-pre-line leading-snug">
              {item.title}
            </div>
            <div className="w-full sm:w-1/2 text-left text-gray-400 font-garet text-[15px] sm:text-[16px] leading-relaxed">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
