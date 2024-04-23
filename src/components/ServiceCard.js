import React from "react";

const ServiceCard = () => {
  return (
      <div className="w-full sm:w-5/6 md:w-full xl:w-5/6 h-auto p-5 border-[1px] border-[#00B8A2] flex flex-col items-center rounded-md bg-[#EAFFFD] mt-5">
        <p className="text-green-700 font-semibold capitalize text-lg mb-3 text-center">
          Training and Development
        </p>
        <p className="text-sm text-center text-green-700 font-light">
          Assessing, selecting, and implementing HRIS (Human Resources
          Information Systems) and other technology solutions to streamline HR
          processes and improve data management.
        </p>
      </div>
  );
};

export default ServiceCard;
