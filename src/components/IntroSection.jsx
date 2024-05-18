import React from "react";
import "../App.css";

const IntroSection = () => {
  return (
    <div className="text-white grid grid-cols-12 mt-20 gap-y-7 md:ml-7 ml-0">
      <div className="md:col-span-3 sm:col-span-12 text-[17px] col-span-12">
        <div className="sm:flex flex sm:justify-center justify-center md:block ">
          <div className=" md:text-left sm:text-center text-center">
            <span className="gradient-text">Transform </span>
            <br className="md:block hidden" />
            <span className="gradient-text"> Your Website</span>
            <div className="mt-3 text-white">
              With Motion Art <br className="md:block hidden" /> Effect
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:col-span-9 sm:col-span-12 col-span-12 lg:text-[4vw] md:text-[5.6vw] sm:text-[7vw] 
        text-[7vw] leading-tight text-white  sm:flex flex flex-col sm:justify-center justify-center md:block "
      >
        <span className="md:text-left sm:text-center text-center">
          Attract Your <br className="md:block hidden" /> Visitors Attention
          <br className="md:block hidden" /> With Colorful
          <br className="md:block hidden" />
          <span className="gradient-text">Motion Art Effect</span>
        </span>
        <div className="md:text-[15px] text-[12px] md:text-left sm:text-center text-center mt-7">
          Unleash the power of creativity with Motion Art for Elementor - your
          <br />
          ultimate solution for seamlessly integrating captivating animations
          into <br /> your website.
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

// className="md:col-span-9 sm:col-span-12 col-span-12 lg:text-[4.3vw] md:text-[5.6vw] sm:text-[7vw] text-[7vw] leading-tight text-[#bc9ef4] sm:flex flex sm:justify-center justify-center md:block"
