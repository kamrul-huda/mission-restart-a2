import React from "react";
import banner_1 from "../../assets/banner_1.svg";
import banner_2 from "../../assets/banner_2.svg";

const Banner = ({ inProgressTickets, completedTasks }) => {
  return (
    <div className="max-w-7xl mx-auto flex gap-4">
      <div className="relative">
        <img src={banner_1}></img>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="text-white">In-Progress</div>
          <div className="text-white text-center text-4xl font-bold">
            {inProgressTickets.length}
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={banner_2}></img>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="text-white">Resolved</div>
          <p className="text-white text-center text-4xl font-bold">
            {completedTasks.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
