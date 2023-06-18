import React from 'react'
import Image from 'next/image'

import David from '../../images/David.jpg'
import SkillsBox from '../components/atoms/skillsBox'


const About = () => {
  return (
    <section className='flex flex-col w-full h-full px-4 py-16 gap-5 justify-center items-center bg-whiteBG dark:bg-gray-800 dark:text-whiteBG '>
      <div className='flex flex-col group 
        dark:border-[#b380ff] dark:shadow-darkShadow rounded md:inline-flex justify-end relative w-ful h-max md:w-2/3 md:h-96 border-[1px] border-gray-300 shadow-buttonShadow 
      '>
        <Image src={David} width={'full'} height={'full'} alt='another time of me'
          className='rounded   w-full h-1/2 md:h-full md:absolute top-0 right-0  dark:md:shadow-darkShadow 
          md:group-hover:h-1/2 md:group-hover:top-0  transition-all duration-500 object-cover'
        />
        <div className='flex flex-col bg-whiteBG dark:bg-gray-800 w-full h-1/2  p-6 gap-y-2 text-center'>
          <h1 className='flex capitalize font-bold font-DancingScript text-5xl'>
            david sanchez
          </h1>
          <h3 className='flex font-semibold font-DancingScript text-purpleWidow text-2xl'>Junior Front-End Developer</h3>
          <p className='flex font-DancingScript'>
            Hi, I'm David! I really want to learn and improve day by day. Lover of technologies and good work.
          </p>
        </div>
      </div>
      <div className='w-full h-max flex flex-col p-4 rounded border-[1px] border-gray-300 dark:border-purpleWidow dark:shadow-darkShadow text-center font-DancingScript gap-y-5'>
        <h1 className='font-DancingScript font-bold text-xl text-purpleWidow'>My Skills</h1>
        <SkillsBox />
      </div>
    </section>
  )
}

export default About