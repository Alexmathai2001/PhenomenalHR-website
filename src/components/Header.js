import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-6  h-20 bg-[#EAFFFD] flex justify-between items-center px-3 py-2 w-full'>
        <div className='flex items-center gap-3'>
            <img src='/images/logo.png' className='md:w-14 w-8'></img>
            <p className='font-semibold font-poppins text-sm lg:text-base'>PHENOMENAL HR</p>
        </div>
        <div className='hidden gap-20 md:gap-6 font-poppins me-10 md:flex'>
            <Link to={'/'} className='font-semibold text-[#00B8A2] '>Home</Link>
            <Link to={'/services'} className='font-medium'>Service</Link>
            <Link to={'/aboutus'} className='font-medium'>About Us</Link>
            <Link to={'/contactus'} className='font-medium'>Contact Us</Link>
        </div>
        <button className='md:hidden'>
          <img src='/images/logo.png' className='w-6'></img>
        </button>

    </div>
  )
}

export default Header