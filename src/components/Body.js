import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path : '/',
          element : <HomePage />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body