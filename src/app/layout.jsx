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
      <body className="relative flex items-center h-full py-12 justify-center bg-whiteBG dark:bg-gray-800 ">
        <div className="absolute bottom-5 left-[1/2]">
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
        <section className="flex justify-center items-stretch md:w-1/4 h-full">
          <Menu />
        </section>
        <section className="flex flex-col justify-center items-center h-full w-3/4 ">
          {children}
        </section>
      </body>
    </html>
  );
}
