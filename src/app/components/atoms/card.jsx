import React from 'react'
import Image from 'next/image'

const Card = ({ title, image, description }) => {
  return (
    <div className='flex flex-col w-72 md:w-full h-96 md:h-full rounded-lg bg-whiteBG shadow-buttonShadow dark:shadow-none dark:bg-gray-800'
    >
      <div className='w-full h-1/2'>
        <Image src={image} className='w-full h-full rounded-t-lg' />
      </div>
      <div className='p-8 flex flex-col items-start justify-center'>
        <h1 className='flex font-Permanent mb-2   text-gray-800 dark:text-gray-50 text-2xl'>{title}</h1>
        <h3 className='font-Kalam text-gray-500 dark:text-gray-300'>
          {description}
        </h3>
      </div>

    </div>
  )
}

export default Card