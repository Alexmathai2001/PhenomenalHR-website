import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    
    <div className='px-10 w-full font-poppins'>
        <p className='flex justify-center text-4xl font-semibold text-[#00B8A2]'>Features</p>
        {/* feature card container */}
        <div className='my-16 grid grid-cols-5  gap-5 '>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />

        </div>

    </div>
  )
}

export default Features