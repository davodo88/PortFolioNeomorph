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
      <FontAwesomeIcon icon={faSun}
        className={classNames('',
          darkMode ? 'text-gray-300' : 'text-gray-800 ')}
      />
      <button onClick={() => setDarkMode(!darkMode)}
        className='w-[50px] h-8 border-[2px] rounded bg-gray-300 dark:bg-gray-700 shadow-buttonShadow
        dark:shadow-none'
      >
        <div className={classNames('flex w-full transition-all duration-1000',
          darkMode ? 'translate-x-1/2' : 'justify-start')}>
          <span className='bg-white w-1/2 h-6 rounded-full'>{''}</span>
        </div>
      </button>
      <FontAwesomeIcon icon={faMoon}
        className={classNames('',
          darkMode ? 'text-gray-300' : 'text-gray-800 ')}
      />
    </div>
  )
}

export default DarkModeButton