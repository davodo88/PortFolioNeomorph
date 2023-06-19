import Image from 'next/image'
import React from 'react'


import HTML from '../../../images/htmlLogo.png'
import CSS from '../../../images/csslogo.png'
import JS from '../../../images/JavaScriptLogo.png'
import REACT from '../../../images/ReactLogo.png'
import TAILWIND from '../../../images/TailwindLogo.png'
import GitHub from '../../../../public/github.svg'


const skill = [
  { 'icon': HTML, 'descrition': 'HTML5' },
  { 'icon': CSS, 'descrition': 'CSS3' },
  { 'icon': JS, 'descrition': ' JavaScript' },
  { 'icon': REACT, 'descrition': 'React.JS' },
  { 'icon': TAILWIND, 'descrition': 'Tailwind.CSS' },
  { 'icon': GitHub, 'descrition': 'Git & GitHub' },
]


const SkillsBox = () => {

  return (
    <ul className='h-max shadow-buttonShadow border-gray-300 grid grid-rows-3 md:grid-cols-2 items-center md:items-left grid-flow-col px-6 py-4 gap-4 rounded
    border-[1px] dark:border-[#b380ff] dark:shadow-darkShadow'>
      {
        skill.map((red, index) => {
          return (
            <li key={index}
              className='flex m-auto md:w-1/3 md:hover:w-3/4 p-2 pr-1 
              transition-all duration-500 group overflow-hidden'>
              <Image
                src={red.icon}
                width={'auto'}
                height={'auto'}
                alt='logo technology'
                loading='lazy'
                className='p-2 w-20 h-20 md:m-0 shadow-buttonShadow bg-white  dark:bg-gray-800 hover:bg-[#b380ff] hover:scale-105
              transition-all duration-300 rounded dark:shadow-darkShadow border-[1px] dark:border-[#b380ff] dark:text-whiteBG'
              />
              <span className='flex items-center text-justify mx-4 p-2 invisible md:group-hover:visible transition-all duration-1000'>{red.descrition}</span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillsBox