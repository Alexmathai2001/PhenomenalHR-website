import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='m-6  h-60 bg-[#EAFFFD] px-5 py-8 w-full font-poppins'>
        <div className=' flex justify-between '>
        <div className='flex items-center gap-3 w-7/12'>
            <img src='/images/logo.png' className='w-16 h-16'></img>
            <p className='font-medium font-poppins'>PHENOMENAL HR</p>
        </div>
        <div className='flex justify-around w-5/12'>
            <div className='flex flex-col gap-3 items-center'>
                <p className='text-gray-600'>Links</p>
                <Link className='block text-xs font-medium'>Home</Link>
                <Link className='block text-xs font-medium'>Service</Link>
                <Link className='block text-xs font-medium'>About Us</Link>
                <Link className='block text-xs font-medium'>Contact Us</Link>
            </div>
            <div className='lex flex-col items-center'>
                <p>Socials</p>
                <div className='mt-5 flex justify-between gap-6 '>
                    <Link><img src='/images/icons/instagram.png' className='w-6'></img></Link>
                    <Link><img src='/images/icons/instagram.png' className='w-6'></img></Link>
                </div>
            </div>
        </div>
        </div>
        <div className='flex justify-center mt-6 text-sm'>© 2024 Phenomenal HR Private Limited</div>

    </div>
  )
}

export default Footer