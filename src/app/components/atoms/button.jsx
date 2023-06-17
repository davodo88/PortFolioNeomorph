"use client"

import React from 'react'



const Button = ({ handleNavbar, icon }) => {


  return (
    <button onClick={handleNavbar}
      className="top-11 left-8 z-50 absolute md:hidden transition-all duration-75 active:scale-105 
      shadow-buttonShadow rounded w-8 h-8 flex dark:bg-gray-800 justify-center items-center dark:border-[1px] dark:border-[#b380ff] dark:shadow-darkShadow">
      <span className=' rounded dark:text-gray-400'>
        {icon}
      </span>
    </button>
  )
}

export default Button


