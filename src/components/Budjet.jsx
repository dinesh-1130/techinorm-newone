import { useEffect, useState } from "react";
import EmailRequest from "./EmailRequest";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function BuildBudgetCTA() {
  const [requestCall, setRequestCall] = useState(false);
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  //   AOS.refresh();
  // }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden px-6 py-12 flex flex-col justify-between bg-[#F5F5FC]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-5"
      >
        <source src="/assets/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {requestCall && <EmailRequest setRequestCall={setRequestCall} />}

      {/* Top Left Block - Desktop */}
      <div
        className="hidden lg:block absolute top-32 left-40 z-20"
        data-aos="fade-down-right"
      >
        <h2 className="font-monument text-[32px] sm:text-[40px] leading-snug text-black">
          Build Your Own
          <br />
          <div className="text-[#8B5CF6] text-center">Application.</div>
        </h2>
        <div className="text-center mt-4">
          <button
            className="bg-[#8B5CF6] text-white font-garet text-sm px-5 py-2 rounded shadow-md hover:scale-105 transition"
            onClick={() => setRequestCall(true)}
          >
            Try Now!
          </button>
        </div>
      </div>

      {/* Bottom Right Block - Desktop */}
      <div
        className="hidden lg:block absolute bottom-32 right-36 z-20"
        data-aos="fade-up-left"
      >
        <h2 className="font-monument text-[32px] sm:text-[40px] leading-snug text-black text-right">
          Know How Much It
          <br />
          <div className="text-center">
            Takes To <span className="text-[#8B5CF6]">Build.</span>
          </div>
        </h2>
        <div className="text-center mt-4">
          <button
            className="bg-[#8B5CF6] text-white font-garet text-sm px-5 py-2 rounded shadow-md hover:scale-105 transition"
            onClick={() => setRequestCall(true)}
          >
            Budget Identifier
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col justify-center items-center h-full space-y-12 z-20">
        {/* Mobile Card 1 */}
        <div
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-sm w-full"
          data-aos="fade-up"
        >
          <div className="text-center">
            <h2 className="font-monument text-[24px] leading-tight text-black mb-6">
              Build Your Own
              <br />
              <span className="text-[#8B5CF6]">Application.</span>
            </h2>
            <p className="text-gray-600 font-garet text-sm mb-6">
              Transform your ideas into reality with our cutting-edge
              development platform.
            </p>
            <button
              className="bg-[#8B5CF6] text-white font-garet text-sm px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
              onClick={() => setRequestCall(true)}
            >
              Try Now!
            </button>
          </div>
        </div>

        {/* Mobile Card 2 */}
        <div
          className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#8B5CF6]/20 max-w-sm w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center">
            <h2 className="font-monument text-[24px] leading-tight text-black mb-6">
              Know How Much It
              <br />
              Takes To <span className="text-[#8B5CF6]">Build.</span>
            </h2>
            <p className="text-gray-600 font-garet text-sm mb-6">
              Get accurate cost estimates and timeline projections for your
              project.
            </p>
            <button
              className="bg-white text-[#8B5CF6] border-2 border-[#8B5CF6] font-garet text-sm px-8 py-3 rounded-full shadow-lg hover:bg-[#8B5CF6] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
              onClick={() => setRequestCall(true)}
            >
              Budget Identifier
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Background Decoration */}
      <div className="lg:hidden absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-4 w-16 h-16 bg-[#8B5CF6]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-8 w-20 h-20 bg-[#8B5CF6]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
