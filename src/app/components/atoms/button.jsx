"use client"

import React from 'react'



const Button = ({ handleNavbar, icon }) => {


  return (
    <button onClick={handleNavbar}
      className="top-11 left-8 z-50 absolute md:hidden transition-all duration-75 active:scale-105 
      shadow-buttonShadow rounded w-8 h-8 flex 
      bg-gray-300 dark:bg-gray-700 justify-center items-center dark:shadow-none dark:border-[1px] 
      dark:border-[#8364E8]">
      <span className=' rounded text-gray-400'>
        {icon}
      </span>
    </button>
  )
}

export default Button


