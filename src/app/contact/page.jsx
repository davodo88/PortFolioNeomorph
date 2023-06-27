import React from 'react'
import Form from '../components/formContact'

const ContactPage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-zinc-300 pt-28 dark:bg-gray-900'>
      <h1 className="flex w-2/3 px-4 justify-center text-center text-3xl md:text-5xl text-[#427eaf] dark:text-gray-300 font-Montserrat">
        DO YOU HAVE ANY IDEA?
      </h1>
      <h3 className='flex w-2/3 px-4 justify-center text-center text-xl text-[#427eaf] dark:text-gray-400 font-Lora'>
        Please contact me...
      </h3>
      <div className='flex justify-center items-center w-full px-4'>
        <Form />
      </div>
    </div>
  )
}

export default ContactPage