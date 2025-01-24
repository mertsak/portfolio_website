"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 border-b border-white border-opacity-60">
      {/* Logo */}
      <div className="text-2xl font-bold bg-white text-black p-1 rounded-md flex justify-center items-center space-x-[2px]">
        <span className="bg-black text-white rounded-md px-2 py-[3px]">
          Mert
        </span>{" "}
        <span>Sakınç</span>
      </div>

      {/* Resposive Menü */}

      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`text-white text-xl font-semibold px-2 py-1 ${
              pathname === link.href
                ? "bg-white text-black rounded-md duration-300 "
                : ""
            } `}
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <div className="z-50 md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen ? (
        <nav className="flex flex-col justify-center items-center space-y-6 absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ease-in-out opacity-100">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-white text-xl font-semibold px-2 py-1 ${
                pathname === link.href
                  ? "bg-white text-black rounded-md duration-300 "
                  : ""
              } `}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="flex flex-col justify-center items-center space-y-6 absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none">
          {/* Menü kapalıyken görünmez yapıyoruz */}
        </nav>
      )}
    </header>
  );
};

export default Header;
