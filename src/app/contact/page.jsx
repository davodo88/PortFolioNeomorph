import React from 'react'
import Form from '../components/formContact'

const ContactPage = () => {
  return (
    <div className='flex flex-col w-screen h-screen px-4 py-28 bg-zinc-300 dark:bg-gray-800  items-center m-auto'>
      <h1 className="text-3xl font-Hind flex w-max capitalize text-center text-[#9f6ee9] font-bold my-10">
        Do You Have Any Idea? <br /> please tell me here..
      </h1>
      <Form />
    </div>
  )
}

export default ContactPage