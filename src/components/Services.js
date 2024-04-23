import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../constants'

const Services = () => {

const [service,setservice] = useState(services)

  return (
    <div className='font-poppins'>
        <p className='flex justify-center text-2xl md:text-3xl md:mb-5 font-semibold text-[#00B8A2]'>Services</p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center'>

          {service.map((data,index) => (

              <ServiceCard service = {data}/>
          ))}
        </div>
        
        
    </div>
  )
}

export default Services