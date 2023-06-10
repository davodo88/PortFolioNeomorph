"use client"

import React from 'react'



const Button = ({ handleNavbar, icon }) => {


  return (
    <button onClick={handleNavbar}
      className="top-11 left-8 z-50 absolute md:hidden transition-all duration-75 active:scale-105
      shadow-buttonShadow rounded-full w-8 h-8 flex justify-center items-center">
      <span className=' rounded-full'>
        {icon}
      </span>
    </button>
  )
}

export default Button