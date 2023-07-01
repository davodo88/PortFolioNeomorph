import React from 'react'
import Image from 'next/image'

import David from '../../images/yo3.jpg'
import SkillsBox from '../components/atoms/skillsBox'


const About = () => {
  return (
    <section className='flex flex-col gap-y-14 w-full h-full bg-whiteBG dark:bg-gray-900 py-32 dark:text-whiteBG my-auto'>
      <div className='flex flex-col gap-y-10 md:flex-row justify-center items-center w-full h-max p-8'>
        <div className='flex md:order-2 w-full h-max'>
          <Image src={David} width={'full'} height={'full'} alt='profile photo'
            className='rounded object-fit flex'
          />
        </div>
        <div className='flex flex-col justify-center items-center bg-whiteBG dark:bg-gray-900 w-full h-max md:h-full p-6 gap-y-4'>
          <h1 className='flex items-center justify-center text-center w-full font-Tryker font-bold text-5xl'>
            DAVID SANCHEZ
          </h1>
          <h3 className='flex justify-center items-center text-center w-full font-semibold font-NewsCycle text-[#427eaf] text-xl'>
            Junior Front-End Developer
          </h3>
          <p className='flex w-full md:w-2/3 mt-4 px-4 font-Tryker justify-center items-center text-center text-sm text-gray-600 dark:text-gray-300'>
            Hi, I'm David! I really want to learn and improve day by day. Lover of technologies and good work.
          </p>
        </div>
      </div>
      <div className='w-full h-max flex flex-col p-4 rounded text-center font-DancingScript gap-y-5'>
        <h1 className='font-Tryker w-32 h-10 font-bold text-3xl text-[#427eaf] m-auto'>
          My Skills
        </h1>
        <SkillsBox />
      </div>
    </section>
  )
}

export default About