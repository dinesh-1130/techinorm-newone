const QuoteSection = () => {
  return (
    <div className="py-[200px] xl:py-[500px] relative">
      <video
        muted
        autoPlay
        loop
        className="w-full h-full object-cover absolute inset-0"
      >
        <source src="/assets/new.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-20 right-10 z-[1]">
        <h2
          className="text-right text-white font-monument text-4xl md:text-6xl xl:text-8xl leading-[110%] tracking-tight"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          At The <br /> Heart of Every <br />
          Breakthrough Is a <br />{" "}
          <span className="text-[#7F61FF]">Human connection</span>
        </h2>
      </div>
    </div>
  );
};

export default QuoteSection;
