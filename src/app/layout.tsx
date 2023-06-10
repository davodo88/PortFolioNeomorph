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
      <body className="flex flex-col md:flex-row w-screen h-max bg-whiteBG">
        <span>
          <Image
            src={David}
            width={100}
            height={100}
            alt="My Logo"
            className="absolute top-10 right-10"
          />
        </span>
        <section className="w-1/4 h-max">
          <Menu />
        </section>
        <section className="flex flex-col h-screen w-3/4 justify-between">
          <section className="w-full h-full">{children}</section>
        </section>
      </body>
    </html>
  );
}
