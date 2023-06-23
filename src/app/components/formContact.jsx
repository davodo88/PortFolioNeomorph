"use client";


import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone, faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";



const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  const form = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('davodoEmailForWork2023', 'FirstTemplate', form.current, '8Jqzmid2iVVZeoP9U')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    console.log(name, email, phone, note)
    setName('')
    setEmail('')
    setPhone('')
    setNote('')


  }


  return (
    <section className=" flex items-center font-Madurai justify-center w-full md:w-2/3 gap-y-10 h-max  mt-10   dark:bg-gray-900">
      <form onSubmit={handleSubmit} ref={form}
        className="flex flex-col justify-center items-center gap-4 my-10 p-4 w-full h-full">
        <div className="flex flex-col w-full md:flex-row gap-4">

          <div className="flex  w-full rounded shadow-buttonShadow dark:shadow-none dark:border-none dark:bg-gray-700">

            <span className="w-10 h-10 flex justify-center items-center text-gray-500 dark:bg-gray-600  dark:border-none rounded bg-gray-400/25">
              <FontAwesomeIcon icon={faUser} />
            </span>

            <input
              required
              type="text"
              name="from_name"
              label="name"
              value={name}
              placeholder="User name"
              onChange={(e) => setName(e.target.value)}
              className="shadow-lightTL py-2 px-4 rounded text-purpleWidow w-full font-Madurai text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-none"
            />
          </div>

          <div className="flex  w-full rounded shadow-buttonShadow dark:shadow-none dark:border-none dark:bg-gray-700">

            <span className="w-10 h-10 flex justify-center items-center text-gray-500 dark:bg-gray-600  dark:border-none rounded bg-gray-400/25">
              <FontAwesomeIcon icon={faPhone} />
            </span>

            <input
              required
              type='tel'
              name="phone_contact"
              placeholder='User Phone'
              pattern="[0-9]{9}"
              label='Contact Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow-lightTL py-2 px-4 rounded text-purpleWidow w-full font-Madurai text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-none "
            />
          </div>
        </div>
        <div className="flex  w-full rounded shadow-buttonShadow dark:shadow-none dark:border-none dark:bg-gray-700">
          <span className="w-10 h-10 flex justify-center items-center text-gray-500 dark:bg-gray-600  dark:border-none rounded bg-gray-400/25">
            <FontAwesomeIcon icon={faAt} />
          </span>
          <input
            required
            type="text"
            name="user_email"
            label="email"
            placeholder='User Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-lightTL py-2 px-4 text-purpleWidow w-full font-Madurai text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-none rounded"
          />
        </div>
        <div className="flex  w-full rounded shadow-buttonShadow relative dark:shadow-none mb-10  dark:bg-gray-700">
          <span className="w-10 h-auto flex justify-center items-start pt-3 text-gray-500 bg-gray-400/25 dark:bg-gray-600  dark:border-none rounded">
            <FontAwesomeIcon icon={faComment} />
          </span>
          <textarea
            name="message"
            value={note} rows="4"
            placeholder='Your message..'
            onChange={(e) => setNote(e.target.value)}
            className="shadow-lightTL py-2 px-4 text-purpleWidow w-full font-Madurai text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-none rounded"
            required />
          <button type="submit"
            className="bg-[#8364E8] dark:bg-gray-700 dark:border-[1px]  dark:border-[#8364E8] rounded p-4 text-whiteBG dark:text-gray-400 shadow-buttonShadow dark:shadow-none flex justify-center items-center absolute -bottom-14 right-0 font-Madurai w-full md:w-20 h-10"
          >
            <span className="font-Nunito">Send</span>
          </button>
        </div>
      </form>
    </section >
  )
}
export default Form