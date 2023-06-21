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
    <div className='flex mx-auto w-32 h-8 justify-around items-center transition-transform duration-500 '>

      <button onClick={() => setDarkMode(!darkMode)}
        className='w-[50px] h-7  rounded-full bg-gray-300 dark:bg-gray-700 shadow-buttonShadow
        dark:shadow-none'
      >
        <div className={classNames('flex w-full transition-all duration-500',
          darkMode ? 'translate-x-1/2' : 'justify-start')}>
          <span className={classNames('transition-all diration-1000 w-1/2 h-6 rounded-full', darkMode ?
            'bg-purpleWidow text-whiteBG ' : 'bg-white text-purpleWidow ')}>
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun}
              className='transition-all duration-500' />
          </span>
        </div>
      </button>

    </div>
  )
}

export default DarkModeButton