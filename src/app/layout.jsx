import "./globals.css";

import Menu from "./components/menu";

import Image from "next/image";
import David from "../images/DavidLogoMorado.png";

export const metadata = {
  title: "David Sanchez",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center bg-whiteBG dark:bg-gray-800 ">
        <span>
          <Image
            src={David}
            width={100}
            height={100}
            alt="My Logo"
            className="absolute top-8 right-8"
          />
        </span>
        <section className="flex md:w-1/4 h-max">
          <Menu />
        </section>
        <section className="flex flex-col justify-center items-center h-screen w-3/4 ">
          {children}
        </section>
      </body>
    </html>
  );
}
