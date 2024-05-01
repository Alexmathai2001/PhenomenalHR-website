import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Clients = () => {
  const [client, setClient] = useState([])

  useEffect(() => {
    const call = async () => {
      try {
        const response = await axios.get('https://staging.phenomenalhr.com/api/v1/clients')
        setClient(response?.data?.data || [])
      } catch (error) {
        console.error('Error fetching client data:', error)
      }
    }
    call()
  }, [])

  return (
    <div className='px-5 w-full font-poppins my-10'>
      <p className="flex justify-center text-2xl lg:text-4xl font-semibold text-[#00B8A2] xl:my-10">Who are our clients?</p>
      <div className='grid lg:grid-cols-5 grid-cols-3 xl:gap-y-10 justify-items-center items-center my-10'>
        {client.length > 0 ? (
          client.map((data, index) => (
            <div>
            <img
              key={index}
              src={data?.media[0]?.original_url}
              className='w-32 lg:w-40 object-contain saturate-0 hover:saturate-100 transition duration-200 ease-in-out hover:scale-105'
              alt='image'
            />
            <p>{data?.message}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Clients