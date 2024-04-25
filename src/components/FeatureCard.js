import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className='w-60 h-auto bg-white p-5 flex flex-col justify-around items-center rounded-2xl shadow-lg group hover:bg-gray-100 transition duration-200 ease-in-out'>
  <div>
    <img alt='image' src={props?.data?.imageurl} className='w-10 mb-5 group-hover:w-12 duration-200 ease-in-out'></img>
    <h1 className='group-hover:text-[#00B8A2] duration-200 ease-in-out'>{props?.data?.feature}</h1>
  </div>
  <p className='text-xs text-center'>{props?.data?.description}</p>
</div>

  )
}

export default FeatureCard