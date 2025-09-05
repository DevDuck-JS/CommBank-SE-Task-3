import React from "react";
import HeroBackground from "../assets/HeroImage2.png";

const Background = () => {
  return (
    <div className="relative">
      <img
        src={HeroBackground}
        alt=""
        className="md:w-full lg:max-w-[772.7px] absolute right-0 top-0 z-10"
      />
    </div>
  );
};

export default Background;
