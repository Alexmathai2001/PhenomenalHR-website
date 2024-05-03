import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

const Clients = () => {
  const [client, setClient] = useState([]);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const call = async () => {
      try {
        const response = await axios.get('https://staging.phenomenalhr.com/api/v1/clients');
        setClient(response?.data?.data || []);
      } catch (error) {
        console.error('Error fetching client data:', error);
      }
    };
    call();

    // Set up the slider animation
    const slider = sliderRef.current;
    if (slider) {
      const startSlider = () => {
        intervalRef.current = setInterval(() => {
          slider.scrollLeft += 1;
          if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
          }
        }, 50);
      };

      startSlider();

      // Clean up the interval on component unmount
      return () => clearInterval(intervalRef.current);
    }
  }, []);

  return (
    <div className="px-5 w-full font-poppins my-10">
      <p className="flex justify-center text-2xl lg:text-4xl font-semibold text-[#00B8A2] xl:my-10">Who are our clients?</p>
      <div className="flex overflow-hidden my-20" ref={sliderRef}>
        <div className="flex animate-marquee whitespace-nowrap items-center gap-6">
          {client.length > 0 ? (
            client.map((data, index) => (
              <div key={index} className="flex-none mr-10 max-w-[150px] lg:max-w-[200px]">
                <img
                  src={data?.media[0]?.original_url}
                  className="w-24 lg:w-32 object-contain saturate-0 hover:saturate-100 transition duration-200 ease-in-out hover:scale-105"
                  alt="image"
                />
                <p>{data?.message}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="md:flex hidden animate-marquee whitespace-nowrap xl:ms-[50rem] items-center gap-6">
          {client.length > 0 ? (
            client.map((data, index) => (
              <div key={index} className="flex-none mr-10 max-w-[150px] lg:max-w-[200px]">
                <img
                  src={data?.media[0]?.original_url}
                  className="w-24 lg:w-32 object-contain saturate-0 hover:saturate-100 transition duration-200 ease-in-out hover:scale-105"
                  alt="image"
                />
                <p>{data?.message}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;