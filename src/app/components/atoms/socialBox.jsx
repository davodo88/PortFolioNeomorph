import React from 'react'

import Image from 'next/image'

import Instagram from '../../../images/Instagram.png'
import LinkedIn from '../../../images/LinkedIn.png'
import GitHub from '../../../images/GitHub.png'



const rrss = [
  { 'icon': Instagram, 'url': 'https://www.instagram.com/davodo88' },
  { 'icon': LinkedIn, 'url': 'https://www.linkedin.com/in/david-sanchez-rodenas' },
  { 'icon': GitHub, 'url': 'https://github.com/davodo88' },
]



const SocialBox = () => {
  return (
    <ul className=' shadow-buttonShadow border-black flex items-center justify-center px-6 py-4 gap-x-4 rounded
    dark:border-[1px] dark:border-[#b380ff]'>
      {
        rrss.map((red, index) => {
          return (
            <button key={index}
              className='p-2 shadow-buttonShadow hover:bg-[#b380ff] hover:scale-125
              transition-all duration-300 rounded dark:border-[1px] dark:border-[#b380ff]'>
              <a href={red.url}>
                <Image src={red.icon}
                  width={20}
                  height={20}
                  alt='logo RRSS'
                />
              </a>
            </button>
          )
        })
      }
    </ul>

  )
}

export default SocialBox 