import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:h-60 h-40 bg-[#EAFFFD] px-5 py-8 w-full font-poppins'>
        <div className=' flex justify-between '>
        <div className='flex items-center gap-3 w-7/12'>
            <img alt='image' src='/images/logo.png' className='w-8 h-8'></img>
            <p className='font-medium font-poppins text-xs md:text-sm' >PHENOMENAL HR</p>
        </div>
        <div className='flex justify-around w-5/12'>
            <div className='md:flex flex-col gap-3 items-center hidden'>
                <p className='text-gray-600'>Links</p>
                <Link className='block text-xs font-medium'>Home</Link>
                <Link className='block text-xs font-medium'>Service</Link>
                <Link className='block text-xs font-medium'>About Us</Link>
                <Link className='block text-xs font-medium'>Contact Us</Link>
            </div>
            <div className='lex flex-col items-center'>
                <p>Socials</p>
                <div className='mt-5 flex justify-between gap-6 '>
                    <Link to={'https://www.instagram.com/phenomenal_hr'}><img alt='image' src='/images/icons/instagram.png' className='w-6'></img></Link>
                    <Link to={'https://www.linkedin.com/company/phenomenal-hr-consulting/'}><img alt='image' src='/images/icons/linkedin.png' className='w-6'></img></Link>
                </div>
            </div>
        </div>
        </div>
        <div className='flex justify-center mt-6 text-sm'>© 2024 Phenomenal HR Private Limited</div>

    </div>
  )
}

export default Footer