import React, { useEffect, useState } from 'react'

const DarkModeButton = () => {






  const [darkMode, setDarkMode] = useState(localStorage.theme)


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