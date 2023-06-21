"use client"

import React from 'react'



const Button = ({ handleNavbar, icon }) => {


  return (
    <button onClick={handleNavbar}
      className="top-11 left-8 z-50 absolute md:hidden transition-all duration-75 active:scale-105 
      shadow-buttonShadow rounded w-8 h-8 flex dark:bg-gray-800 justify-center items-center dark:shadow-darkShadow">
      <span className=' rounded text-[#b893f0]'>
        {icon}
      </span>
    </button>
  )
}

export default Button


