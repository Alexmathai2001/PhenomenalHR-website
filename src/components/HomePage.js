import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Clients from './Clients'
import Features from './Features'
import FAQ from './FAQ'
import Footer from './Footer'
import Services from './Services'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <div className="px-10 my-12 ">
        <Services />
      </div>
        <Clients />
        <Features />
        <FAQ />
        <Footer />
    </div>
  )
}

export default HomePage