"use client"


import React, { useState } from "react";
import { classNames } from "../../../utils/utils";
import Button from '../components/atoms/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";







const nav = [
  { Title: 'Home', target: '/' },
  { Title: 'About Me', target: '/about' },
  { Title: 'Portfolio', target: '/portfolio' },
  { Title: 'Contact', target: '/contact' },
]




const NavBar = () => {


  const [menu, setMenu] = useState(false)


  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true)
    console.log(menu)
  }





  return (

    <section className="font-Montserrat w-screen ">
      <Button handleNavbar={handleNavbar}
        icon={<FontAwesomeIcon icon={menu ? faXmark : faBars}
        />}
      />
      <div id="mobileNavBar"
        className={classNames(
          "absolute top-0 z-10 md:hidden transition-all duration-700 ease-in-out  bg-gray-500/20 dark:bg-whiteBG/20 backdrop-blur text-black rounded-br-xl flex items-center justify-center font-Montserrat",
          menu ? "left-0 h-screen w-full" : "-left-full  md:-left-[50%] h-screen w-screen")}
      >
        <div className="flex flex-col text-black gap-16 py-16 w-full px-5 md:hidden relative justify-center items-center">
          {menu && (
            <div className="flex flex-col w-2/3 md:hidden">
              <ul className="flex flex-col  w-full gap-6">
                {nav.map((navs, index) => {
                  return (
                    <button onClick={handleNavbar}
                      key={index}
                      className="px-8 py-2 shadow-lightTL rounded text-center bg-zinc-300
                      active:scale-105 transition-all duration-300 hover:scale-105 
                      text-[#8364E8] focus:bg-purpleWidow dark:shadow-none  dark:bg-gray-800    dark:text-gray-400">
                      <Link href={navs.target}
                        className="flex justify-center">
                        {navs.Title}
                      </Link>
                    </button>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div id="mdNavBar"
        className={classNames('hidden md:flex  ', menu ? '' : '')}>
        <button onClick={handleNavbar}
          className="absolute top-10 left-8 z-50  transition-all duration-75 active:scale-105 
          shadow-buttonShadow text-[#8364E8] dark:text-gray-500 rounded w-8 h-8 flex dark:bg-gray-700 justify-center items-center dark:shadow-none dark:border-2  dark:border-[#8364E8]"
        >
          <span>
            <FontAwesomeIcon icon={
              menu ? faBars : faXmark
            } />
          </span>
        </button>
        <ul className={classNames('hidden md:flex min-w-min w-[40%] gap-4 justify-around absolute top-0  p-4 left-[10%] transition-all ', menu ? 'opacity-0' : 'top-4')}>
          {nav.map((navs, index) => {
            return (
              <li key={index}
                className="flex justify-center items-center w-28 py-2 px-4 rounded text-[#8364E8] shadow-buttonShadow bg-zinc-300  hover:scale-105 transition-all duration-150 dark:shadow-none dark:bg-gray-700  dark:text-gray-400">
                <Link href={navs.target}>
                  {navs.Title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div >
    </section >
  )
};

export default NavBar;
