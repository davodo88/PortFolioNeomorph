"use client";

import "./globals.css";
import SocialBox from "./components/atoms/socialBox";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col px-4 bg-zinc-300 dark:bg-gray-900 justify-center items-center">
      <header className="h-full flex flex-col md:inline-flex justify-center items-center gap-10">
        <section className=" flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl  text-black dark:text-gray-300 font-Tryker flex text-center ">
            DAVID SANCHEZ
          </h1>
          <h3 className="text-[#427eaf] font-NewsCycle text-lg">
            Front-End junior Developer
          </h3>
        </section>
        <SocialBox />
      </header>
    </div>
  );
}
