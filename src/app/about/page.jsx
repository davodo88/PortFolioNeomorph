import React from 'react'
import Image from 'next/image'

import David from '../../images/David.jpg'
import SkillsBox from '../components/atoms/skillsBox'


const About = () => {
  return (
    <section className='flex flex-col w-full h-full px-4 py-24 gap-5 justify-center items-center bg-whiteBG dark:bg-gray-800 dark:text-whiteBG '>
      <div className='flex justify-around w-full h-max'>
        <div className='flex md:order-2 w-1/2'>
          <Image src={David} width={'full'} height={'full'} alt='profile photo'
            className='rounded object-fit flex'
          />
        </div>
        <div className='flex flex-col bg-whiteBG dark:bg-gray-800 w-max h-1/2 md:h-full m-auto p-6 gap-y-2 '>
          <h1 className='flex capitalize font-bold font-Nunito text-5xl justify-center'>
            david sanchez
          </h1>
          <h3 className='flex justify-center font-semibold font-Nunito text-[#b893f0] text-2xl'>Junior Front-End Developer</h3>
          <p className='flex px-4 font-Nunito justify-center'>
            Hi, I'm David! I really want to learn and improve day by day. Lover of technologies and good work.
          </p>
        </div>
      </div>
      <div className='w-full h-max flex flex-col p-4 rounded text-center font-DancingScript gap-y-5'>
        <h1 className='font-DancingScript font-bold text-xl text-[#b893f0]'>My Skills</h1>
        <SkillsBox />
      </div>
    </section >
  )
}

export default About