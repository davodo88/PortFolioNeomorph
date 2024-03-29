"use client"


import React, { useState } from "react";
import { classNames } from "../../../utils/utils";
import Button from '../components/atoms/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import DarkModeButton from "./atoms/darkModeButton";







const nav = [
  { Title: 'HOME', target: '/' },
  { Title: 'ABOUT ME', target: '/about' },
  { Title: 'PORTFOLIO', target: '/portfolio' },
  { Title: 'CONTACT', target: '/contact' },
]




const NavBar = () => {


  const [menu, setMenu] = useState(true)


  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true)
    console.log(menu)
  }





  return (

    <section className="w-screen ">
      <Button handleNavbar={handleNavbar}
        icon={<FontAwesomeIcon icon={menu ? faXmark : faBars}
        />}
      />
      <div id="mobileNavBar"
        className={classNames(
          "absolute top-0 z-10 md:hidden transition-all duration-700 ease-in-out  bg-gray-500/20 dark:bg-whiteBG/20 backdrop-blur-lg text-black rounded-br-xl flex items-center justify-center",
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
                      className="px-8 py-2 text-center 
                      transition-all duration-300 hover:scale-105 
                      text-[#427eaf] dark:text-gray-300 font-Tryker font-extrabold">
                      <Link href={navs.target}
                        className="flex justify-center ">
                        <span className="">
                          {navs.Title}
                        </span>
                      </Link>
                    </button>
                  )
                })}
              </ul>
            </div>
          )}
          <DarkModeButton
          />
        </div>
      </div>
      <div id="mdNavBar"
        className={classNames('hidden md:flex', menu ? '' : '')}>
        <button onClick={handleNavbar}
          className="absolute top-10 left-8 z-50  transition-all duration-75 active:scale-105 
          shadow-lightTL text-[#427eaf] dark:text-gray-500 rounded w-8 h-8 flex dark:bg-gray-700 justify-center items-center dark:shadow-darkTL dark:border-2  dark:border-[#427eaf]"
        >
          <span>
            <FontAwesomeIcon icon={
              menu ? faBars : faXmark
            } />
          </span>
        </button>
        <ul className={classNames('hidden md:flex min-w-min w-[50%] gap-4 justify-around absolute  top-0  p-4 left-[10%] transition-all ', menu ? 'opacity-0' : 'top-4')}>
          {nav.map((navs, index) => {
            return (
              <li key={index}
                className="font-Tryker flex justify-center items-center w-max py-2 px-4 rounded text-[#427eaf] dark:text-gray-400">
                <Link href={navs.target}>
                  {navs.Title}
                </Link>
              </li>
            )
          })}
          <div className="absolute top-6 -right-12">
            <DarkModeButton />
          </div>
        </ul>
      </div>
    </section>
  )
};

export default NavBar;
