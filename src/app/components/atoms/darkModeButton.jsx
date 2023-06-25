"use client"

import React, { useEffect, useState } from 'react'
import { classNames } from "../../../../utils/utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'




const DarkModeButton = () => {





  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('theme') || 'dark'
    } else {
      'dark'
    }
  })


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])


  return (
    <>
      <div className='flex mx-auto w-16  h-6 justify-around items-center transition-transform duration-500 '>

        <button onClick={() => setDarkMode(!darkMode)}
          className={classNames('w-full h-full  rounded-full  shadow-buttonShadow dark:shadow-darkShadow', darkMode ?
            'bg-gradient-to-r from-[#427eaf] to-[#2f4e6b]' : 'bg-gradient-to-r from-gray-400 to-gray-300')}
        >
          <div className={classNames('flex w-full h-6 my-auto transition-all  duration-500',
            darkMode ? 'translate-x-9' : 'translate-x-1')}>
            <span className={classNames('transition-all duration-500 w-5 h-5 rounded-full my-auto', darkMode ?
              'bg-gray-300/75' : 'bg-white  ')}
            >
            </span>
          </div>
        </button>
      </div>
    </>
  )
}

export default DarkModeButton