import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../lotties/lotti.json'
import { Link } from 'react-router-dom';

const Hero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        }
      };
  return (
    <div className='mt-20 font-poppins px-20 w-full flex justify-between items-center'>
        <div>

        <p className='text-4xl font-normal w-6/12 mb-8'>Welcome to <span className='font-semibold text-[#00B8A2]'>PhenomenalHR</span>, where we revolutionize human resource management for businesses.</p>
        <Link className='border-2 border-[#00B8A2] px-2 text-sm text-[#00B8A2] font-semibold py-2 rounded-md'>Know our feature</Link>

        </div>
        <div>
        <Lottie options={defaultOptions}
              height={500}
              width={500}/>
        </div>
        
    </div>
  )
}

export default Hero