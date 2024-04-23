import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import ServicePage from './ServicePage'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path : '/',
          element : <HomePage />
        },
        {
          path : '/services',
          element : <ServicePage />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body