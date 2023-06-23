import "./globals.css";

import Menu from "./components/menu";
import DarkModeButton from "./components/atoms/darkModeButton";

import Image from "next/image";
import David from "../images/DavidLogoMorado.png";

export const metadata = {
  title: "David Sanchez",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex flex-col items-center h-full w-screen justify-center bg-zinc-300 dark:bg-gray-900 ">
        <div className="fixed z-10 bottom-5 left-[1/2] md:left-10">
          <DarkModeButton />
        </div>
        <span>
          <Image
            src={David}
            width={100}
            height={100}
            alt="My Logo"
            className="absolute top-8 right-8"
          />
        </span>
        <section className="flex w-full h-max absolute top-0 ">
          <Menu />
        </section>
        <section className="flex justify-center  items-center h-full w-full">
          {children}
        </section>
      </body>
    </html>
  );
}
