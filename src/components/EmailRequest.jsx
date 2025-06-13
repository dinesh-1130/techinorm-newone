import gsap from "gsap";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const EmailRequest = ({ setRequestCall }) => {
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
    <div className="conditional-team absolute w-full h-full top-0 left-0 backdrop-blur-lg z-30 overflow-hidden font-garet">
      <div className="flex justify-center items-start mt-[100px] h-full w-full">
        <form
          onSubmit={HandleSubmit}
          className="bg-black/40 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[500px]"
        >
          <div className="flex justify-between items-center w-full">
            <div className="w-full"></div>
            <X
              className="cursor-pointer text-white"
              onClick={() => setRequestCall(false)}
            />
          </div>
          <label className="text-xl font-semibold text-white">
            This page is currently in the works. Please share your email, and
            we’ll notify you when its live!
          </label>
          <div className="relative w-full mt-8">
            <input
              type="text"
              placeholder="Email"
              className="p-4 bg-black/50 text-white rounded-md w-full outline-none font-bold tracking-wider"
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

export default EmailRequest;
