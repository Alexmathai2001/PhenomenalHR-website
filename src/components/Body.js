import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import ServicePage from './ServicePage'
import AboutUsPage from './AboutUsPage'
import ContactUsPage from './ContactUsPage'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path : '/',
          element : <HomePage />
        },
        {
          path : '/services',
          element : <ServicePage />
        },
        {
          path : '/aboutus',
          element : <AboutUsPage />
        },
        {
          path : '/contactus',
          element : <ContactUsPage />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body