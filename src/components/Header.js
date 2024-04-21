import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='m-6  h-20 bg-[#EAFFFD] flex justify-between items-center px-3 py-2'>
        <div className='flex items-center gap-3'>
            <img src='/images/logo.png' className='w-14'></img>
            <p className='font-semibold font-poppins'>PHENOMENAL HR</p>
        </div>
        <div className='flex gap-20 font-poppins me-10'>
            <Link to={'/home'} className='font-semibold text-[#00B8A2] '>Home</Link>
            <Link to={'/services'} className='font-medium'>Service</Link>
            <Link to={'/about-us'} className='font-medium'>About Us</Link>
            <Link to={'contact-us'} className='font-medium'>Contact Us</Link>
        </div>

    </div>
  )
}

export default Header