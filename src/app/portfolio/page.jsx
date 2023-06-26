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
    'description': 'Space Designer Architect template with React.js and Next.js'
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
    'description': 'task app with Vite and React.js'
  },

]

const Portfolio = () => {
  return (
    <section className='w-screen h-full grid md:grid-cols-2 gap-12 place-items-center py-28 px-6'
    >
      {template.map((temp, index) => {
        return (
          <div key={index} className='flex flex-col gap-2'>
            <Card
              title={temp.title}
              image={temp.image}
              description={temp.description}
            />
            <button className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-gray-400/50 dark:bg-gray-700 shadow-buttonShadow dark:shadow-darkTL text-gray-300'>
              <Link href={temp.direction}>
                <span>Visit</span>
              </Link>
            </button>
          </div>
        )
      })}
    </section>
  )
}

export default Portfolio