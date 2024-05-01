import React, { useState } from 'react'
import FeatureCard from './FeatureCard'
import { features } from '../constants'

const Features = () => {

  const [feature,setfeature] = useState(features)

  return (
    
    <div className='px-10 w-full font-poppins'>
        <p className="flex justify-center text-2xl lg:text-4xl font-semibold text-[#00B8A2] xl:my-10">Why choose us?</p>
        {/* feature card container */}
        <div className='my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-16 '>
          {feature.map((data,i) => (
              <FeatureCard data = {data}/>
          ))}

        </div>

    </div>
  )
}

export default Features