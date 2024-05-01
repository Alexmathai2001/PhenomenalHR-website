import React from "react";
import { Link } from "react-router-dom";

const Howitworks = () => {
  return (
    <div className="px-10 lg:px-32 font-poppins">
      <p className="flex justify-center text-2xl lg:text-4xl font-semibold text-[#00B8A2] xl:my-10">
        How do we work?
      </p>

      <div className="md:flex justify-around md:gap-10 md:w-full">
        <div className="flex flex-col items-center md:w-1/3">
          <span class="material-symbols-outlined text-[#00B8A2] mb-2 text-3xl md:text-6xl">
            support_agent
          </span>
          <p className="my-3 text-lg md:text-xl font-semibold text-center capitalize"><span className="text-[#00B8A2]">Step 1 : </span>Consultation</p>
      <p className="text-center font-light text-sm md:text-base">Click on <Link to={'/contactus'} className="font-medium text-[#00B8A2]">contact us</Link> to book a free 45 minutes consultation call to discuss the specific requirements from the founders.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <span class="material-symbols-outlined text-[#00B8A2] mb-2 text-3xl md:text-6xl">
            description
          </span>
          <p className="my-3 text-lg md:text-xl font-semibold text-center capitalize"><span className="text-[#00B8A2]">Step 2 : </span>Needs analysis</p>
      <p className="text-center font-light text-sm md:text-base">We gather further information on the needs and understand the gaps by evaluating current health of the organization on various KPIs.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <span class="material-symbols-outlined text-[#00B8A2] mb-2 text-3xl md:text-6xl">
            dashboard_customize
          </span>
          <p className="my-3 text-lg md:text-xl font-semibold text-center capitalize"><span className="text-[#00B8A2]">Step 3 : </span>Custom proposal</p>
      <p className="text-center font-light text-sm md:text-base">We put together a custom proposal along with deliverable lists & timelines.On agreeing, we start working, sometimes the very same day!</p>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
