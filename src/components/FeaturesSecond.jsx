import React from "react";

import { features } from "../data";

const FeaturesSecond = () => {
  // Destructure data from the features object
  const { title, subtitle, subTitle2, image } = features.feature2;
  
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          
          {/* Text */}
          <div className="flex-1 flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <p className="subtitle">{subTitle2}</p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src={image.type}
              alt=""
              className="drop-shadow-2xl rounded-md"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
