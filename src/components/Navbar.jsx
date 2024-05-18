import React from "react";

import MotionArtEffect_Logo from "../assets/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-8 ">
      <img src={MotionArtEffect_Logo} alt="MotionArtEffect_logo" />
      <div
        className=" bg-white text-black py-3 px-10 hover:border-white hover:text-white 
            border-2 rounded-md cursor-pointer hover:bg-transparent lg:block md:hidden hidden transition-all"
      >
        Purchase Now
      </div>
    </div>
  );
};

export default Navbar;
