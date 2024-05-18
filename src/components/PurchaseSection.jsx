import React from "react";
import wand_logo from "../assets/motionarteffect-img5.png";
import { FaArrowRightLong } from "react-icons/fa6";

const PurchaseSection = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mt-32 gap-y-10 text-white">
      <div className="flex flex-col col-span-2 pe-5">
        <h2 className="text-4xl md:text-left text-center">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h2>
        <p className="pe-7 mt-6 md:text-left text-center">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <div className=" md:justify-start justify-center flex">
          <div className="w-fit px-7 py-4 mt-6 rounded-2xl text-xl bg-custom-gradient cursor-pointer flex items-center justify-center gap-4">
            Purchase From Envato <span>{<FaArrowRightLong />}</span>
          </div>
        </div>
      </div>
      <div className=" mt-6 flex md:justify-end sm:justify-center justify-center">
        <img src={wand_logo} alt="" />
      </div>
    </div>
  );
};

export default PurchaseSection;
