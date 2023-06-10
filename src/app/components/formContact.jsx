"use client";


import React, { useState } from "react"




const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone, note)
    setName('')
    setEmail('')
    setPhone('')
    setNote('')
  }


  return (
    <section className=" flex flex-col items-center font-DancingScript justify-center px-16 md:w-2/3 gap-y-10 h-max m-4 rounded shadow-shadowTL border-[1px] border-gray-300">

      <form onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 py-4 md:w-1/2 md:gap-x-4 h-max">
        <input
          required
          type="text"
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="flex py-2 shadow-buttonShadow font-DancingScript text-purpleWidow text-center focus:outline-none bg-whiteBG rounded"
        />
        <input
          required
          type="text"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="words@example.com"
          className="shadow-buttonShadow py-2 text-purpleWidow font-DancingScript text-center focus:outline-none bg-whiteBG rounded"
        />
        <input
          required
          type='tel'
          pattern="[0-9]{9}"
          label='Contact Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contact Phone"
          className="shadow-buttonShadow text-center py-2 text-purpleWidow font-DancingScript focus:outline-none bg-whiteBG rounded"
        />
        <textarea
          name="note"
          placeholder="Here your Idea.."
          value={note} rows="4"
          onChange={(e) => setNote(e.target.value)}
          className="shadow-lightTL text-center flex  font-DancingScript text-purpleWidow focus:outline-none bg-whiteBG rounded"
          required />
        <button type="submit"
          className="shadow-buttonShadow hover:scale-105 hover:bg-purpleWidow/50 hover:text-whiteBG duration-00 px-4 bg-gray-300 font-DancingScript transition-all py-2 text-gray-400 rounded"
        >
          Contact
        </button>
      </form>
    </section >
  )
}
export default Form