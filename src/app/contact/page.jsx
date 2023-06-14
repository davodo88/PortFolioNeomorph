import React from 'react'
import Form from '../components/formContact'

const ContactPage = () => {
  return (
    <div className='flex flex-col w-full h-max px-4 py-10
        bg-whiteBG  items-center m-auto'>
      <h1 className="text-3xl flex w-2/3 text-center text-purpleWidow font-bold my-10">
        Work together for a good idea?
      </h1>
      <Form />
    </div>
  )
}

export default ContactPage