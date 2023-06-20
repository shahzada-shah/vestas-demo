import React from "react";

import { features } from "../data";

const Features = () => {
  // Destructure data from the features object
  const { title, subtitle, image, buttonText, text, items } = features;

  return (
    <section className="section bg-[#E0E0E0]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          {/* Image */}
          <div className="flex-1 order-1 lg:-order-1 lg:mt-20">
            <img
              src={image.type}
              alt=""
              className="drop-shadow-2xl rounded-md"
            />
          </div>
          {/* Text */}
          <div className="flex-1 flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>

            <div>
              {items.map((item, index) => {
                // Destructure data from each item
                const { title, subtitle, icon } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0" key={index}>
                    <div className="text-2xl mr-4 lg:text-3xl lg:mt-1">
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-3">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
