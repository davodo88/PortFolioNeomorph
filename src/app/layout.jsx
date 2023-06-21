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
      <body className="relative flex-col items-center h-max  justify-center bg-whiteBG dark:bg-gray-800 ">
        <div className="absolute bottom-5 left-[1/2] md:left-10">
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
        <section className="flex justify-center items-stretch w-full h-max md:absolute md:top-0 ">
          <Menu />
        </section>
        <section className="flex flex-col justify-center items-center h-max w-full ">
          {children}
        </section>
      </body>
    </html>
  );
}
