import React from "react";
import thunder_logo from "../assets/motionarteffect-img9.png";
import thumbUp_logo from "../assets/motionarteffect-img6.png";
import moon_logo from "../assets/motionarteffect-img7.png";

const FeaturedSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-y-6 text-white">
      <h1 className="text-4xl text-center">
        An All-Round Plugin With <br /> Powerful Features
      </h1>
      <p className="text-sm text-center">
        Whether you're a seasoned web designer or just starting out, Motion Art{" "}
        <br />
        for Elementor seamlessly integrates with the Elementor platform,
        providing you <br /> with a seamless and intuitive experience.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4 mt-10">
        <div className="flex flex-col items-start bg-[#100923] rounded-3xl p-8 gap-x-4 gap-y-4">
          <img src={thunder_logo} alt="tunder-logo" className="w-fit h-fit " />
          <h2 className="text-2xl">Light Weight</h2>
          <p className="text-sm">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
        <div className="flex flex-col items-start bg-[#100923] rounded-3xl p-8 gap-x-4 gap-y-4">
          <img src={thumbUp_logo} alt="tunder-logo" className="w-fit h-fit " />
          <h2 className="text-2xl">100% Responsive</h2>
          <p className="text-sm">
            Create a consistent visual experience across all devices.
          </p>
        </div>
        <div className="flex flex-col items-start bg-[#100923] rounded-3xl p-8 gap-x-4 gap-y-4 lg:col-span-1 md:col-span-2">
          <img src={moon_logo} alt="tunder-logo" className="w-fit h-fit " />
          <h2 className="text-2xl">User Friendly Interface</h2>
          <p className="text-sm">
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
