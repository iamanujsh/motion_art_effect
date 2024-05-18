import React from "react";
import rating_star from "../assets/motionarteffect-img4.png";
import wordpress_logo from "../assets/motionarteffect-img3.png";
import envato_logo from "../assets/motionarteffect-img2.png";
import g_logo from "../assets/motionarteffect-img1.png";

const Rating = () => {
  return (
    <div className="w-full ">
      <div className="text-white text-center mt-24 text-[18px]">
        Trusted by thousands of users around the world
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-x-10 gap-y-10">
        <div className="flex items-center gap-3 justify-center">
          <img src={wordpress_logo} alt="worpressLogo" />
          <div>
            <img src={rating_star} alt="rating" />
            <p className="mt-4 text-gray-400 text-sm">
              <span className="font-semibold">4.5</span>Score, 9 Reviews
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <img src={envato_logo} alt="envato_logo" />
          <div>
            <img src={rating_star} alt="rating" />
            <p className="mt-4 text-gray-400 text-sm">
              <span className="font-semibold">4.5</span>Score, 9 Reviews
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:col-span-1 md:col-span-2 col-span-1  justify-center">
          <img src={g_logo} alt="g_logo" />
          <div>
            <img src={rating_star} alt="rating" />
            <p className="mt-4 text-gray-400 text-sm">
              <span className="font-semibold">4.5</span>Score, 9 Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
