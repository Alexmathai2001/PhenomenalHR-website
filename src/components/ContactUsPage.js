import React from 'react'
import Header from './Header'
import ContactUs from './ContactUs'
import Footer from './Footer'

const ContactUsPage = () => {
  return (
    <div>
        <Header />
        <div className='my-3'>
        <ContactUs />
        </div>
        <Footer />
    </div>
  )
}

export default ContactUsPage