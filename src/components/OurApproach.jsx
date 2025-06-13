import { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const approachContent = [
  {
    title: ["Discover &", "Consult"],
    description: [
      "Strategic Workshops,",
      "Market & Tech Analysis,",
      "Problem Definition.",
    ],
  },
  {
    title: ["Build &", "Integrate"],
    description: [
      "Agile Development,",
      "MVP Development,",
      "API & Backend Integration, Web + Mobile Delivery.",
    ],
  },
  {
    title: ["Optimize &", "Scale"],
    description: [
      "Analytics & Optimization,",
      "A/B Testing & Feedback Loops,",
      "Feature Expansion.",
    ],
  },
  {
    title: ["Architect &", "Design"],
    description: [
      "System Architecture,",
      "UX/UI Design,",
      "Prototype Testing.",
    ],
  },
  {
    title: ["Launch &", "Market"],
    description: [
      "GTM Strategy,",
      "Performance Marketing,",
      "SEO + Paid Media, Launch & Growth Campaigns.",
    ],
  },
  {
    title: ["Support &", "Grow"],
    description: [
      "24/7 Maintenance & Support,",
      "Product Iterations,",
      "Strategic Tech + Marketing Guidance.",
    ],
  },
];

export default function OurApproach() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  // Scroll tracking for desktop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentSlide(index);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % approachContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + approachContent.length) % approachContent.length
    );
  };

  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row py-16 bg-black text-white overflow-hidden">
      {/* Left Section */}
      <div
        className="w-full lg:w-[360px] flex flex-col justify-center items-start px-6 py-8 lg:py-0"
        data-aos="fade-up"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-monument leading-tight mb-6 lg:mb-10 flex items-end gap-6">
          Our
          <br />
          Approach
          <span className="flex flex-col justify-end items-start ml-10 mb-2">
            <div className="thee-dot-pagenation flex flex-col gap-2">
              {[0, 1, 2].map((dotIndex) => (
                <div
                  key={dotIndex}
                  className={`dot w-3 h-3 rounded-full transition-colors duration-300 ${
                    Math.floor(currentSlide / 2) === dotIndex
                      ? "bg-white"
                      : "bg-white/50"
                  }`}
                ></div>
              ))}
            </div>
          </span>
        </h2>
        <button className="bg-white text-black px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest font-semibold inline-flex items-center">
          The Blueprint Behind Every Breakthrough
          {/* <ArrowRight className="ml-2 w-10 h-10" /> */}
        </button>
      </div>

      {/* Right Section */}
      <div
        className="flex-grow flex items-center lg:ml-40 lg:pl-20 px-6 lg:px-0 pb-8 lg:pb-0"
        data-aos="fade-up"
      >
        {/* Mobile View */}
        <div className="w-full lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {approachContent.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="border-b border-gray-300 pb-8">
                      <div className="mb-4">
                        <h3 className="text-2xl sm:text-3xl font-garet text-white leading-snug">
                          {item.title.map((line, idx) => (
                            <div key={idx}>{line}</div>
                          ))}
                        </h3>
                      </div>
                      <div className="text-base sm:text-lg text-white leading-relaxed font-garet">
                        {item.description.map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <div className="flex space-x-2">
                {approachContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-black" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
                disabled={currentSlide === approachContent.length - 1}
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
              {currentSlide + 1} of {approachContent.length}
            </div>
          </div>
        </div>

        {/* Desktop Scrollable View */}
        <div
          ref={scrollContainerRef}
          className="w-full max-h-none lg:max-h-[540px] overflow-visible lg:overflow-y-auto scrollbar-hidden hidden lg:block"
        >
          <div className="divide-y divide-gray-300 pr-0 lg:pr-10">
            {approachContent.map((item, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-start py-8 lg:py-16"
              >
                <div className="w-full lg:w-1/3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-garet text-white leading-snug">
                    {item.title.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </h3>
                </div>
                <div className="w-full lg:w-2/3 text-base sm:text-lg text-white leading-relaxed font-garet">
                  {item.description.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
