import React from "react";
import section_image from "../assets/motionarteffect-img11.png";

const ValueSection = () => {
  return (
    <div className="flex flex-col items-center mt-20 text-white">
      <h1 className="text-4xl text-center leading-normal">
        Apply On Any Section Or Enable <br /> For Whole Page
      </h1>
      <div className="grid md:grid-cols-2 mt-20 gap-x-4 gap-y-4">
        <div className="bg-[#100923] p-8 rounded-3xl h-fit w-fit">
          <div>
            <h2 className="text-3xl">Apply On Section</h2>
            <p className="leading-relaxed mt-4 text-sm">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
          </div>
          <img src={section_image} alt="" className="mt-8" />
        </div>
        <div className="bg-[#100923] p-8 rounded-3xl h-fit md:mt-16 sm:mt-0">
          <div>
            <h2 className="text-3xl">Apply On Section</h2>
            <p className="leading-relaxed mt-4 text-sm">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
          </div>
          <img src={section_image} alt="" className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
