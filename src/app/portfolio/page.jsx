import React from 'react'
import Card from '../components/atoms/card'


import image1 from '../../images/template1.png'
import image2 from '../../images/template2.png'
import image3 from '../../images/template3.png'
import Todos from '../../images/appTareas.png'
import Link from 'next/link'



const template = [
  {
    'title': 'Template1',
    'image': image1,
    'direction': 'https://template1-beta.vercel.app/',
    'description': 'Designer Architect template with React.js and Next.js'
  },
  {
    'title': 'Template2', 'image': image2, 'direction': 'https://template-2-roan.vercel.app/',
    'description': 'Yoga saloon template with React.js and Next.js'
  },
  {
    'title': 'Template3', 'image': image3, 'direction': 'https://template-3-beta.vercel.app/',
    'description': 'Pizzeria template with React.js and Next.js'
  },
  {
    'title': 'AppTodos', 'image': Todos, 'direction': 'https://todo-react-tailwind-rho.vercel.app/',
    'description': 'Task app with Vite and React.js'
  },

]

const Portfolio = () => {
  return (
    <section
      className='w-screen h-full gap-y-20 py-28 px-6 flex flex-col justify-around items-center'
    >
      <h1 className='uppercase flex w-max m-auto text-3xl md:text-5xl text-[#427eaf] dark:text-gray-400 font-Montserrat font-bold'>
        my projects
      </h1>
      <div className='grid md:grid-cols-2 gap-12 place-items-center'>
        {template.map((temp, index) => {
          return (
            <div key={index} className='relative flex flex-col w-72 md:w-full h-96 md:h-full rounded bg-whiteBG shadow-buttonShadow dark:shadow-darkCard dark:bg-gray-800'>
              <Card
                title={temp.title}
                image={temp.image}
                description={temp.description}
              />
              <button className='w-20 absolute bottom-5
            right-5 bg-gray-300/50 dark:bg-gray-700 shadow-buttonShadow dark:shadow-darkTL text-[#427eaf] dark:text-gray-300 hover:scale-105 rounded py-1 font-Hind'>
                <Link href={temp.direction}>
                  <span>Show</span>
                </Link>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio