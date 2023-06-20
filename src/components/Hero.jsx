import React from "react";
import { hero } from "../data";
import Stats from "./Stats";

const Hero = () => {
  // Destructure hero
  const { title, subtitle, buttonText, buttonText1 } = hero;

  return (
    <section className="h-[925px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-0">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]">
          {title}
        </h1>
        <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl">
          {subtitle}
        </h2>
        {/* Buttons */}
        <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(225,225,225,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]">
          {buttonText1}
        </button>
        <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(225,225,225,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px] ml-4">
          {buttonText}
        </button>
        {/* Stats */}
        <div className="-top-[60px] relative">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
