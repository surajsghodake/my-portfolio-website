"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "HireMe",
    path: "#hireme",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-slate-950 bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-2 md:px-8 py-4">
        <Link
          href={"/"}
          className="text-xl md:text-3xl text-white font-semibold"
        >
          &lt;SurajGhodake/&gt;
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-2 py-1 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
