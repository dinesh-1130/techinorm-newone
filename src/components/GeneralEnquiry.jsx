import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#F5F5FC] text-black py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-monument leading-snug">
              We’d Love To <br />
              Hear From <span className="text-[#8A6EFF]">You.</span>
            </h2>
          </div>
          <div className="md:w-1/2 text-gray-500 font-garet text-lg md:text-xl leading-relaxed">
            Whether you’re curious about our solutions, <span className="text-black font-medium">need a demo</span>, or have a <span className="text-black font-medium">partnership idea</span>, our team is ready to answer all your questions.
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* General Inquiries */}
          <div className="text-center">
            <h3 className="text-xl font-semibold font-monument mb-2">General Inquiries</h3>
            <p className="text-gray-500 mb-1 font-garet">Have a question about our services or solutions?</p>
            <p className="text-[#8A6EFF] mb-4 font-garet">Email: dev@techinorm.com</p>
            <button className="bg-[#8A6EFF] hover:bg-[#7455dd] text-white px-6 py-2 rounded-md font-semibold transition">Talk To Us</button>
          </div>

          {/* Sales & Partnerships */}
          <div className="text-center">
            <h3 className="text-xl font-semibold font-monument mb-2">Sales & Partnerships</h3>
            <p className="text-gray-500 mb-1 font-garet">Looking to partner our AI, blockchain & tech offerings?</p>
            <p className="text-[#8A6EFF] mb-4 font-garet">Email: sarin@techinorm.com</p>
            <button className="bg-[#8A6EFF] hover:bg-[#7455dd] text-white px-6 py-2 rounded-md font-semibold transition">Book A Calendar</button>
          </div>

          {/* Strategy & Consulting */}
          <div className="text-center">
            <h3 className="text-xl font-semibold font-monument mb-2">Strategy & Consulting</h3>
            <p className="text-gray-500 mb-1 font-garet">Looking to explore our tech and other offerings?</p>
            <p className="text-[#8A6EFF] mb-4 font-garet">Email: arun@techinorm.com</p>
            <button className="bg-[#8A6EFF] hover:bg-[#7455dd] text-white px-6 py-2 rounded-md font-semibold transition">Book A Calendar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
