import React from 'react'

const Clients = () => {
  return (
    <div className='px-5 w-full font-poppins my-10'>
        <p className='flex justify-center text-xl xl:text-3xl  font-semibold text-[#00B8A2] '>Clients</p>
        <div className='flex justify-evenly items-center my-5'>
            <img src='/images/clients/logo.jpg' className='w-10 lg:w-20 object-contain saturate-0 hover:saturate-100 transition duration-200 ease-in-out' alt='image'></img>
            <img src='/images/clients/jrj.png' className='w-20 lg:w-40 object-contain saturate-0 hover:saturate-100 transition duration-200 ease-in-out' alt='image'></img>
            <img src='/images/clients/tristar.png' className='w-20 lg:w-40 object-contain saturate-0 hover:saturate-100 transition duration-200 ease-in-out' alt='image'></img>
        </div>


    </div>
  )
}

export default Clients