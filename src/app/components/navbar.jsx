"use client"


import React, { useState } from "react";
import { classNames } from "../../../utils/utils";
import Button from '../components/atoms/button'
import DarModeButton from '../components/atoms/darkModeButton'
import ImagePort from "./atoms/imagePort";
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
  }





  return (

    <section className="font-DancingScript w-auto">
      <Button handleNavbar={handleNavbar}
        icon={<FontAwesomeIcon icon={menu ? faXmark : faBars}
        />}
      />
      <div
        className={classNames(
          "absolute top-0 z-10 transition-all duration-1000 ease-in-out  bg-whiteBG/20 backdrop-blur text-black  w-1/2 h-96  rounded-br-xl",
          menu ? "left-0 h-screen w-full" : "-left-full  md:-left-[50%]")}
      >
        <div className="flex flex-col text-gray-500  gap-16 py-16  px-5 md:hidden relative justify-center items-center">
          <div className="w-2/3 h-2/3">
            <ImagePort />
          </div>
          {menu && (
            <div className="flex flex-col w-2/3 ">
              <ul className="flex flex-col  w-full gap-6">
                {nav.map((navs, index) => {
                  return (
                    <button onClick={handleNavbar}
                      key={index}
                      className="px-8 py-2 shadow-lightTL rounded text-ceneter bg-whiteBG
                      active:scale-105 transition-all duration-300 hover:scale-105 focus:bg-purpleWidow dark:shadow-darkShadow dark:bg-gray-800 dark:border-[1px] dark:border-purpleWidow dark:text-gray-400">
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
          <DarModeButton />
        </div>
      </div>
      <div className="hidden md:flex flex-col text-gray-600 px-2 gap-8 z-20 py-10 bg-whiteBGjustify-evenly items-center">
        <div className="w-2/3 h-1/3 flex items-center justify-center">
          <ImagePort />
        </div>
        <ul className="flex flex-col gap-y-4 w-2/3 ">
          {nav.map((navs, index) => {
            return (
              <li key={index}
                className=" shadow-buttonShadow hover:text-white bg-whiteBG rounded text-center py-2 hover:bg-purpleWidow/50 hover:scale-105 transition-all duration-150 active:bg-purpleWidow dark:border-purpleWidow focus:bg-purpleWidow flex justify-center items-center dark:shadow-darkShadow dark:bg-gray-800 dark:border-[1px] dark:text-gray-400">
                <Link href={navs.target}>
                  {navs.Title}
                </Link>
              </li>
            )
          })}
        </ul>
        <DarModeButton />

      </div>
    </section>
  )
};

export default NavBar;
