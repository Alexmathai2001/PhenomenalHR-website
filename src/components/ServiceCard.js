import React, { useState } from "react";

const ServiceCard = (props) => {
console.log(props)

  return (

      <div className="w-full sm:w-5/6 md:w-full xl:w-5/6 h-auto p-5 hover:-translate-y-4 transition duration-200 ease-in-out border-[1px] border-[#00B8A2] flex flex-col items-center rounded-md bg-[#EAFFFD] hover:bg-white hover:shadow-lg mt-5">
        <p className="text-green-700 font-semibold capitalize text-lg mb-3 text-center">
          {props?.service?.serviceName} 
        </p>
        <p className="text-sm text-center text-green-700 font-light">
        {props?.service?.serviceDesc}
        </p>
      </div>
    


    
      
  );
};

export default ServiceCard;
