import React from "react";

const Vision = () => {
  return (
    <div className="w-full bg-[#EAFFFD] h-auto my-6 px-10">
      
      <div className="w-full flex justify-around items-center">
        <div>
        <p className=" w-full sm:text-lg lg:text-2xl font-bold text-green-700 py-4">
        Our Vision
      </p>
        <p className="pb-10 text-sm font-light text-gray-600 md:w-2/2">
          Phenomenal HR envisions a future where HR is not merely
          administrative, but becomes a strategic powerhouse driving
          organizational success. We are committed to crafting and maintaining
          robust HR strategies that cultivate employee growth and engagement
          while simultaneously boosting revenue, ushering in an era where
          businesses flourish through the power of their people.
        </p>
        </div>

        <img
          src="/images/visionimg.png"
          className="hidden md:block w-1/3"
          alt="vision-img"
        ></img>
      </div>
    </div>
  );
};

export default Vision;
