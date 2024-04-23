import React from 'react'

const MeetOurTeam = () => {
  return (
    <div>
        <p className="flex justify-center text-xl font-semibold text-[#00B8A2] my-5">
        Meet Our Team
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
        {/* card one */}
        <div className='bg-slate-100 w-60 h-60 rounded-lg my-3 p-6 flex flex-col items-center justify-center gap-3'>
            <img alt='image' src='/images/founder.jpg' className='w-28 h-28 rounded-full object-cover'></img>
            <div className='flex flex-col items-center'>

            <p className='font-bold text-gray-700 text-lg'>Alex Mathai</p>
            <p className='font-light text-gray-500'>Chief Operating Officer</p>
            
            </div>
        </div>
        {/* card one */}
        <div className='bg-slate-100 w-60 h-60 rounded-lg my-3 p-6 flex flex-col items-center justify-center gap-3'>
            <img alt='image' src='/images/founder.jpg' className='w-28 h-28 rounded-full object-cover'></img>
            <div className='flex flex-col items-center'>

            <p className='font-bold text-gray-700 text-lg'>Alex Mathai</p>
            <p className='font-light text-gray-500'>Chief Operating Officer</p>
            
            </div>
        </div>
        {/* card one */}
        <div className='bg-slate-100 w-60 h-60 rounded-lg my-3 p-6 flex flex-col items-center justify-center gap-3'>
            <img alt='team' src='/images/founder.jpg' className='w-28 h-28 rounded-full object-cover'></img>
            <div className='flex flex-col items-center'>

            <p className='font-bold text-gray-700 text-lg'>Alex Mathai</p>
            <p className='font-light text-gray-500'>Chief Operating Officer</p>
            
            </div>
        </div>
        {/* card one */}
        <div className='bg-slate-100 w-60 h-60 rounded-lg my-3 p-6 flex flex-col items-center justify-center gap-3'>
            <img alt='team' src='/images/founder.jpg' className='w-28 h-28 rounded-full object-cover'></img>
            <div className='flex flex-col items-center'>

            <p className='font-bold text-gray-700 text-lg'>Alex Mathai</p>
            <p className='font-light text-gray-500'>Chief Operating Officer</p>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam