import React, { useEffect, useState } from 'react'

const DarkModeButton = () => {


  const initialStateDarkMode = localStorage.getItem('theme') === 'dark'



  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      initialStateDarkMode || 'light'
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
    <button onClick={() => setDarkMode(!darkMode)}>DarkModeButton</button>
  )
}

export default DarkModeButton