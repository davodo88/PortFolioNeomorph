import React from 'react'
import Form from '../components/formContact'

const ContactPage = () => {
  return (
    <div className='flex flex-col w-full px-4 py-20
        bg-whiteBG justify-center items-center'>
      <h1 className="text-3xl flex text-center text-purpleWidow font-bold m-10">
        Work together for a good idea?
      </h1>
      <Form />
    </div>
  )
}

export default ContactPage