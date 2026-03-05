import React from "react";
import banner_1 from "../../assets/banner_1.svg";
import banner_2 from "../../assets/banner_2.svg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-4">
      <div className="relative">
        <img src={banner_1}></img>
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          In-Progress
        </p>
      </div>
      <div className="relative">
        <img src={banner_2}></img>
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Resolved
        </p>
      </div>
    </div>
  );
};

export default Banner;
