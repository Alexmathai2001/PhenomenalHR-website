import React from 'react'

const Clients = () => {
  return (
    <div className='px-10 w-full font-poppins'>
        <p className='flex justify-center text-4xl font-bold text-[#00B8A2]'>Clients</p>
        <div className='flex justify-evenly items-center my-16'>
            <img src='/images/clients/logo.jpg' className='w-10 object-contain saturate-0'></img>
            <img src='/images/clients/jrj.png' className='w-40 object-contain saturate-0'></img>
            <img src='/images/clients/tristar.png' className='w-40 object-contain saturate-0'></img>
            <p className='text-xl font-semibold'>Pixie Dust Stories</p>
        </div>


    </div>
  )
}

export default Clients