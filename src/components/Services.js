import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../constants';

const Services = () => {
  const initialVisibleServices = 5; // Number of services initially visible
  const [visibleServices, setVisibleServices] = useState(initialVisibleServices); // Number of currently visible services
  const [prevVisibleServices, setPrevVisibleServices] = useState(initialVisibleServices); // Store previous number of visible services

  const handleShowMore = () => {
    setPrevVisibleServices(visibleServices); // Store previous state
    setVisibleServices(services.length); // Show all services
  };

  const handleShowLess = () => {
    setVisibleServices(initialVisibleServices); // Revert to initial state
  };

  return (
    <div className='font-poppins'>
      <p className='flex justify-center text-2xl md:text-3xl md:mb-5 font-semibold text-[#00B8A2]'>What are our services?</p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center'>
        {services.slice(0, visibleServices).map((data, index) => (
          <ServiceCard key={index} service={data} />
        ))}
      </div>
      {visibleServices < services.length ? (
        <div className='flex justify-center mt-4'>
          <button
            className='bg-[#00B8A2] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#009688] transition-colors'
            onClick={handleShowMore}
          >
            See More
          </button>
        </div>
      ) : (
        <div className='flex justify-center mt-4'>
          <button
            className='bg-[#00B8A2] text-white px-4 py-2 rounded-md hover:bg-[#009688] transition-colors'
            onClick={handleShowLess}
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
