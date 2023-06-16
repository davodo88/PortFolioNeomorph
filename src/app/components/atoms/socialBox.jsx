import React from 'react'

import Image from 'next/image'

import Instagram from '../../../../public/instagram.svg'
import LinkedIn from '../../../../public/linkedIn.svg'
import GitHub from '../../../../public/github.svg'
import Link from 'next/link'




const rrss = [
  { 'icon': Instagram, 'url': 'https://www.instagram.com/davodo88' },
  { 'icon': LinkedIn, 'url': 'https://www.linkedin.com/in/david-sanchez-rodenas' },
  { 'icon': GitHub, 'url': 'https://github.com/davodo88' },
]



const SocialBox = () => {
  return (
    <ul className=' shadow-buttonShadow border-black flex items-center justify-center px-6 py-4 gap-x-4 rounded
    dark:border-[1px] dark:border-[#b380ff] dark:shadow-darkShadow'>
      {
        rrss.map((red, index) => {
          return (
            <button key={index}
              className='p-2 shadow-buttonShadow bg-white dark:bg-gray-800 hover:bg-[#b380ff] hover:scale-125
              transition-all duration-300 rounded dark:shadow-darkShadow dark:border-[1px] dark:border-[#b380ff] dark:text-whiteBG'>
              <Link href={red.url}>
                <Image src={red.icon}
                  width={20}
                  height={20}
                  alt='logo RRSS'
                  loading='lazy'
                />
              </Link>
            </button>
          )
        })
      }
    </ul>

  )
}

export default SocialBox 