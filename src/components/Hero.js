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
    <div className='lg:mt-20 font-poppins md:px-20 sm:px-10 px-5 w-full flex justify-between items-center lg:h-auto h-96'>
      <div className='relative overflow-hidden animate-fadeInLeft py-5 flex flex-col items-center lg:block'>
        <p className='xl:text-5xl text-2xl font-normal w-full sm:w-8/12 md:w-6/12 xl:w-8/12 mb-8 text-center lg:text-left'>We help companies <span className='font-semibold text-[#00B8A2]'>hire,train,develop </span>and retain top talent. </p>
        <Link to={'/contactus'} className='border-[#00B8A2] border-2 px-4 py-2 bg-[#EAFFFD] text-[#00B8A2] hover:bg-[#00B8A2] hover:text-white text-medium rounded-lg transition ease-in-out duration-200'>Book free consultation now</Link>
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
