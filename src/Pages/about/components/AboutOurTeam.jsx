import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const AboutOurTeam = () => {
  const Members = [
    {
      name: "Sarin Ram S R",
      role: "Strategic Sales & Partnership Director",
      image: "/assets/team/sarinRam_crop.png",
    },
    {
      name: "Arun Rajamohan",
      role: "Strategic Marketing & Operations Director",
      image: "/assets/team/arunRajamohan_crop.png",
    },
    {
      name: "Sutheesh S",
      role: "Global Technical Director",
      image: "/assets/team/sutheesh_crop.png",
    },
    {
      name: "Dominik Shutsha Luambo",
      role: "Strategic Business Director",
      image: "/assets/team/Dominik_crop.png",
    },
    {
      name: "Milivoje Batista",
      role: "International Business Director",
      image: "/assets/team/milivoje_crop.png",
    },
    {
      name: "Igor Zakharov",
      role: "Channel Partner  Russia & UAE",
      image: "/assets/team/Igor_crop.png",
    },
    {
      name: "Greg Heath",
      role: "Channel Partner Spain",
      image: "/assets/team/Greg_crop.png",
    },
    {
      name: "Mumtaz R",
      role: "Regional Director USA & Canada",
      image: "/assets/team/Mumtaz_crop.png",
    },
    {
      name: "Aruna Pereira Handem",
      role: "Strategic Technical Director ",
      image: "/assets/team/Aruna_crop.png",
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const splitTitle = SplitText.create(".team-head", {
      type: "lines",
      mask: true,
    });
    const splitPara = SplitText.create(".team-para", {
      type: "lines",
      mask: true,
    });
    gsap.from(".ourTeam-wrapper", {
      scrollTrigger: {
        trigger: ".ourTeam-wrapper",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      backgroundColor: "#FFF",
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(splitTitle.lines, {
      delay: 0.2,
      duration: 1,
      y: 200,
      ease: "expo",
    });
    gsap.from(splitPara.lines, {
      delay: 0.3,
      deuration: 1,
      y: 200,
      ease: "expo",
    });
    // gsap.to(".member-cards", {
    //   scrollTrigger: {
    //     trigger: ".ourTeam-wrapper",
    //     start: "top 80%",
    //     toggleActions: "play none none reverse",
    //   },
    //   delay: 0.4,
    //   duration: 2,
    //   ease: "expo",
    //   height: "auto",
    //   stagger: 0.02,
    // });
  }, {});

  return (
    <div className="ourTeam-wrapper bg-black text-white py-[70px] xl:py-[140px] relative">
      <div className="container mx-auto px-4">
        <h2
          className="team-head text-center font-monument text-3xl xl:text-5xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Meet Our {""} <span className="text-[#7F61FF]">Leadership Team</span>
        </h2>
        <p
          className="team-para text-center mx-auto leading-normal text-[#656565] mt-[30px] xl:mt-[60px] max-w-[700px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are product thinkers, engineers, creatives, and problem-solvers —
          brought together by a shared mission to build with clarity, quality,
          and care.
        </p>

        <div className="mt-[80px] flex flex-col justify-center items-center relative py-10">
          <ConditionToRevel />
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-[60px]">
            {Members.map((member, index) => (
              <div
                className="max-w-[292px] member-cards overflow-hidden"
                key={index}
              >
                <div className="h-[305px] w-[292px] rounded-lg overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-[#656565]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;

const ConditionToRevel = () => {
  const GoogleSheetUrl = import.meta.env.VITE_GoogleSheetUrl;
  const GoogleSheetId = import.meta.env.VITE_GoogleSheetId;
  const [formData, setformData] = useState({
    email: "",
    type: "subscribe",
  });
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(GoogleSheetUrl, {
      method: "POST",
      mode: "no-cors",

      headers: {
        "Content-Type": "application/x-form-urlencoded",
      },
      body: JSON.stringify(formData, {
        type: "subscribe",
        email: formData.email,
        token: GoogleSheetId,
      }),
    });
    if (!response.ok) {
      localStorage.setItem("subscribe", true);
      gsap.to(".conditional-team", {
        height: 0,
        duration: 2,
        ease: "expo.inOut",
        delay: 0.5,
      });
    }
    const subscribe = localStorage.getItem("subscribe");
    if (subscribe === "true") {
      gsap.to(".conditional-team", {
        height: 0,
        duration: 0.5,
        ease: "expo.inOut",
        // delay: 0.5,
      });
    }
  };
  return (
    <div className="conditional-team absolute w-full h-full top-0 left-0 backdrop-blur-lg z-[1] overflow-hidden">
      <div className="flex justify-center items-start mt-[100px] h-full w-full">
        <form
          onSubmit={HandleSubmit}
          className="bg-black/40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[500px]"
        >
          <label className="text-xl font-semibold text-white">
            We’d love to get to know you too, please share your email to
            discover more about who we are.
          </label>
          <div className="relative w-full mt-8">
            <input
              type="text"
              placeholder="Email"
              className="p-4 bg-black/50 rounded-md w-full outline-none font-bold tracking-wider"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
            />
            <button className="absolute top-1 right-1">
              <div className="bg-[#7F61FF] text-white p-3 rounded-md flex items-center justify-center hover:bg-[#6a4cd9] transition-colors duration-300">
                <ArrowUpRight />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
