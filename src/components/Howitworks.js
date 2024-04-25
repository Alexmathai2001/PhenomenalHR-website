import React from "react";
import { Link } from "react-router-dom";

const Howitworks = () => {
  return (
    <div className="px-10 font-poppins">
      <p className="flex justify-center text-2xl lg:text-3xl font-semibold text-[#00B8A2] xl:my-10">
        How do we work
      </p>

      <div className="md:flex justify-around md:gap-10 md:w-full">
        <div className="flex flex-col items-center md:w-1/3">
          <span class="material-symbols-outlined text-[#00B8A2] mt-10 mb-2 text-3xl md:text-6xl">
            support_agent
          </span>
          <p className="my-3 text-lg md:text-xl font-semibold text-center capitalize"><span className="text-[#00B8A2]">Step 1 : </span>Consultation</p>
      <p className="text-center font-light text-sm md:text-base">Click on <Link to={'/contactus'} className="font-medium text-[#00B8A2]">contact us</Link> to book a free 45 minutes consultation call. In this call, our team of consultants understand the specific challenges and requirements from the founders or business owners.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <span class="material-symbols-outlined text-[#00B8A2] mt-10 mb-2 text-3xl md:text-6xl">
            description
          </span>
          <p className="my-3 text-lg md:text-xl font-semibold text-center capitalize"><span className="text-[#00B8A2]">Step 2 : </span>Requirement gathering</p>
      <p className="text-center font-light text-sm">We gather further information on the needs and understand the gaps by evaluating current health of the organization on various KPIs.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <span class="material-symbols-outlined text-[#00B8A2] mt-10 mb-2 text-3xl md:text-6xl">
            dashboard_customize
          </span>
          <p className="my-3 text-lg md:text-xl font-semibold text-center capitalize"><span className="text-[#00B8A2]">Step 3 : </span>Custom proposal and terms alignment</p>
      <p className="text-center font-light text-sm">We put together a custom proposal to solve the specific HR challenges along with list of deliverables, timelines and resource needs. On agreeing, we start working, sometimes the very same day!</p>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
