import React from 'react'

const FeatureCard = (props) => {
  console.log(props)
  return (
    <div className='w-60 h-80 bg-white p-5 flex flex-col justify-around items-center rounded-2xl shadow-lg'>
        <div>
        <img alt='image' src={props?.data?.imageurl} className='w-10 mb-5'></img>
        <h1>{props?.data?.feature}</h1>
        </div>
        <p className='text-xs text-center'>{props?.data?.description}</p>

    </div>
  )
}

export default FeatureCard