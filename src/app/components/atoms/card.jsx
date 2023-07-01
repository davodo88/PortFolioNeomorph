import React from 'react'
import Image from 'next/image'

const Card = ({ title, image, description }) => {
  return (
    <div className='flex flex-col w-72 md:w-full h-96 md:h-full rounded bg-gray-200  dark:shadow-none dark:bg-gray-700'
    >
      <div className='w-full h-1/2 md:h-3/5 '>
        <Image src={image} className='w-full h-full rounded-t' />
      </div>
      <div className='p-8 flex flex-col items-start justify-center'>
        <h1 className='flex font-NewsCycle mb-2 font-bold  text-[#427eaf] dark:text-gray-200 text-3xl'>
          {title}
        </h1>
        <h3 className='font-Tryker font-light text-base text-gray-500 dark:text-gray-400'>
          {description}
        </h3>
      </div>
    </div>
  )
}

export default Card