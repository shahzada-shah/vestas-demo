import React from "react";
import { OffShoreTurbines } from "../data";
import NewItemsSlider from "./NewItemsSlider";

const OffShoreProducts = () => {
  // Destructure OffShoreTurbines data
  const { title, subtitle, link, icon } = OffShoreTurbines;

  return (
    <section className="section">
      <div className="container mx-auto lg:mb-20">
        <div className="flex flex-col lg:flex-row">
          {/* Title and subtitle */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[300px] lg:mt-[30px] lg:mb-[40px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-10">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              {/* Link */}
              <a
                href="#"
                className="hover:border-b border-primary lg:items-center font-medium transition-all"
              >
                {link}
              </a>
              {/* Icon */}
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          {/* Slider */}
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffShoreProducts;
