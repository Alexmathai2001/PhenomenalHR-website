import React from 'react'

const FeatureCard = () => {
  return (
    <div className='w-60 h-80 bg-white p-5 flex flex-col justify-around items-center rounded-2xl shadow-lg'>
        <div>
        <img src='/images/icons/Bookmark.png' className='w-10 mb-5'></img>
        <h1>Faster</h1>
        </div>
        <p className='text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>

    </div>
  )
}

export default FeatureCard