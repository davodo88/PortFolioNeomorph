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
  { 'icon': TAILWIND, 'descrition': 'Tailwind' },
  { 'icon': GitHub, 'descrition': 'Git & GitHub' },
]


const SkillsBox = () => {

  return (
    <ul className='h-max w-full md:w-2/3 m-auto grid grid-rows-3 md:grid-cols-2 items-center md:items-left grid-flow-col py-4 gap-4'
    >
      {
        skill.map((red, index) => {
          return (
            <li key={index}
              className='bg-gray-400/50  md:dark:bg-gray-700 rounded flex m-auto md:w-3/4 p-2 shadow-buttonShadow dark:shadow-none md:bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300'>
              <Image
                src={red.icon}
                width={'auto'}
                height={'auto'}
                alt='logo technology'
                loading='lazy'
                className='p-2 w-20 h-20 md:m-0   md:dark:bg-gray-600 hover:scale-105
              transition-all duration-300 rounded dark:shadow-none  dark:text-whiteBG'
              />
              <span className='md:flex w-full text-gray-500 dark:text-gray-300 hidden font-Hind  font-semibold items-center justify-center text-justify mx-4 p-2'>
                {red.descrition}
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillsBox