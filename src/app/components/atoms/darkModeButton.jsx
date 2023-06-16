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
    <div className='flex w-32 h-8 items-center transition-transform duration-500'>
      <FontAwesomeIcon icon={faSun} />
      <button onClick={() => setDarkMode(!darkMode)}
        className='w-[50px] h-8 border-[2px] rounded'
      >
        <div className={classNames('flex  w-full',
          darkMode ? 'justify-end' : 'justify-start')}>
          <span className='bg-white w-1/2 h-6 rounded-full'>{''}</span>
        </div>
      </button>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  )
}

export default DarkModeButton