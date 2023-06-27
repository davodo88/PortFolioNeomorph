"use client";


import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone, faComment } from "@fortawesome/free-solid-svg-icons";



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

          <div className="flex gap-x-1 w-full rounded  dark:border-none">
            <span className="w-10 h-10 flex justify-center items-center text-gray-400 dark:bg-gray-600  dark:border-none dark:shadow-darkTL rounded bg-gray-200 shadow-lightTL">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              required
              type="text"
              name="from_name"
              label="name"
              value={name}
              placeholder="User Name"
              onChange={(e) => setName(e.target.value)}
              className="shadow-lightinset py-2 px-4 rounded text-purpleWidow w-full font-Hind text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-darkShadow"
            />
          </div>

          <div className="flex gap-x-1 w-full rounded  dark:border-none">

            <span className="w-10 h-10 flex justify-center items-center text-gray-400 dark:bg-gray-600  dark:border-none dark:shadow-darkTL rounded bg-gray-200 shadow-lightTL">
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
              className="shadow-lightinset py-2 px-4 rounded text-purpleWidow w-full font-Hind text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-darkShadow"
            />
          </div>
        </div>
        <div className="flex gap-x-1 w-full rounded  dark:border-none">
          <span className="w-10 h-10 flex justify-center items-center text-gray-400 dark:bg-gray-600  dark:border-none dark:shadow-darkTL rounded bg-gray-200 shadow-lightTL">
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
            className="shadow-lightinset py-2 px-4 text-purpleWidow w-full font-Hind text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-darkShadow rounded"
          />
        </div>
        <div className="flex flex-col gap-x-1 w-full rounded h-48 dark:border-none relative ">
          <div className="flex gap-x-1">
            <span className="w-10 h-auto flex justify-center items-start pt-3 text-gray-400 dark:bg-gray-600  dark:border-none dark:shadow-darkTL rounded bg-gray-200 shadow-lightTL">
              <FontAwesomeIcon icon={faComment} />
            </span>
            <textarea
              name="message"
              value={note} rows="4"
              placeholder='Your Message..'
              onChange={(e) => setNote(e.target.value)}
              className="shadow-lightinset py-2 px-4 text-purpleWidow w-full font-Hind text-left focus:outline-none bg-whiteBG dark:bg-gray-700 dark:shadow-darkShadow rounded"
              required />
          </div>
          <button type="submit"
            className="flex w-full md:w-20 absolute bottom-3 items-center justify-center right-0 bg-[#427eaf] dark:bg-gray-800 dark:border-[1px]  dark:border-[#427eaf] rounded p-2 text-whiteBG dark:text-gray-400 shadow-buttonShadow dark:shadow-darkTL "
          >
            <span className="font-Montserrat">SEND</span>
          </button>
        </div>
      </form>
    </section >
  )
}
export default Form