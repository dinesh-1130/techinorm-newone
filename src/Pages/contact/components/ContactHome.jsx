import React from "react";

const ContactHome = () => {
  return (
    <div className='py-[100px]'>
      <div className='h-full w-full flex flex-col lg:flex-row justify-center items-center gap-8 py-[200px] sm:py-0'>
        <h1
          className='font-monument text-4xl tracking-tight leading-snug'
          data-aos='fade-right'
          data-aos-duration='1000'>
          We'd Love To <br /> Hear From{" "}
          <span className='text-[#7F61FF]'>You.</span>
        </h1>
        <p
          className='max-w-[350px] tracking-tight font-medium antialiased text-gray-500 text-xl xl:pt-[250px] gap-2'
          data-aos='fade-left'
          data-aos-duration='1000'>
          Whether you're curious about our solutions,{" "}
          <span className='text-black font-bold'>
            need a demo, or have a partnership idea,
          </span>{" "}
          our team is ready to answer all your questions.
        </p>
      </div>
    </div>
  );
};

export default ContactHome;
