import "./globals.css";

import Menu from "./components/menu";

import Image from "next/image";
import David from "../images/DavidLogoMorado.png";

export const metadata = {
  title: "David Sanchez",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row  w-screen h-screen">
        <span>
          <Image
            src={David}
            width={100}
            height={100}
            alt="My Logo"
            className="absolute top-10 right-10"
          />
        </span>
        <section className="w-1/4 ">
          <Menu />
        </section>
        <section className="flex flex-col  w-3/4 justify-between">
          <section className="w-screen md:w-auto h-auto">{children}</section>
          {/* <footer className="flex justify-center items-center bg-whiteBG w-screen bottom-0 left-0 absolute">
            <h1>David Sanchez</h1>
          </footer> */}
        </section>
      </body>
    </html>
  );
}
