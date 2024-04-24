import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../lotties/lotti.json';
import { Link } from 'react-router-dom';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {}
  };

  return (
    <div className='mt-20 font-poppins md:px-20 sm:px-10 px-5 w-full flex justify-between items-center'>
      <div className='relative overflow-hidden animate-fadeInLeft'>
        <p className='xl:text-5xl font-normal w-full sm:w-8/12 md:w-6/12 mb-8'>Welcome to <span className='font-semibold text-[#00B8A2]'>PhenomenalHR</span>, where we revolutionize human resource management for businesses.</p>
        <Link className='border-2 border-[#00B8A2] px-4 py-2 text-[#00B8A2] font-semibold rounded-md inline-block'>Know our features</Link>
      </div>
      <div className='hidden lg:block'>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
