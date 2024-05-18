import React from "react";
import browsers_logo from "../assets/motionarteffect-img8.png";

const CompatibleSection = () => {
  return (
    <div className="bg-[#100923] flex flex-col items-center justify-center gap-y-6 p-10 mt-20 rounded-3xl text-white">
      <h2 className="text-3xl text-center">
        Supported by All Popular Browsers
      </h2>
      <p className="text-sm text-center ">
        Rest assured, Motion Art is designed to be compatible <br /> with all
        major web browsers.
      </p>
      <img src={browsers_logo} alt="" />
    </div>
  );
};

export default CompatibleSection;
