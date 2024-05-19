import React from "react";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 text-sm gap-y-5 md:mt-20 sm:mt-3 bg-custom-gradient p-5 text-white">
      <div className="flex gap-x-6 justify-center md:order-last">
        <div className="cursor-pointer">Documentation</div>
        <div className="cursor-pointer">Support</div>
      </div>
      <div className=" text-center">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </div>
    </div>
  );
};

export default Footer;
