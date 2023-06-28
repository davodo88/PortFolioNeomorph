"use client"

import React from 'react'



const Button = ({ handleNavbar, icon }) => {


  return (
    <button onClick={handleNavbar}
      className="top-11 left-8 z-50 absolute md:hidden transition-all duration-75 active:scale-105 
      shadow-lightTL rounded w-10 h-10 flex 
      bg-gray-300 dark:bg-gray-700 justify-center items-center dark:shadow-darkTL dark:border-[1px] 
      dark:border-[#427eaf]">
      <span className=' rounded text-[#427eaf]'>
        {icon}
      </span>
    </button>
  )
}

export default Button


