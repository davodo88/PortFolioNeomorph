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
      <div className='flex mx-auto w-32 h-8 justify-around items-center transition-transform duration-500 '>

        <button onClick={() => setDarkMode(!darkMode)}
          className={classNames('w-[50px] h-7  rounded-full  shadow-buttonShadow dark:shadow-none', darkMode ?
            'bg-gradient-to-r from-[#8364E8] to-[#653ee7]' : 'bg-gradient-to-r from-gray-400 to-gray-300')}
        >
          <div className={classNames('flex w-full h-6 my-auto transition-all duration-500',
            darkMode ? 'translate-x-1/2' : 'justify-start')}>
            <span className={classNames('transition-all duration-500 w-1/2 h-6  rounded-full ', darkMode ?
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