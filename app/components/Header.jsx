"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#243953");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColor("#ffffff");
        setTextColor("darkgreen)");
      } else {
        setColor("transparent");
        setTextColor("darkgreen)");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] px-5 m-auto flex justify-between items-center p-1 #000080">
        <li className="logo">
          <Link href="/">ZenSpot</Link>
        </li>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="m-5 pb-2 font-medium text-xl navlink">
            <Link href="/">For Business</Link>
          </li>
          <li className="m-5 pb-2 font-medium text-xl navlink">
            <Link href="/">Menu</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose className="cursor-pointer text-red-800" size={35} />
          ) : (
            <AiOutlineMenu className="cursor-pointer text-red-800" size={35} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-[-100%] bottom-0 flex justify-center items-start pt-48 w-full h-screen bg-white text-center ease-in duration-200 transform translate-x-0"
              : "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start pt-48 w-full h-screen bg-white text-center ease-in duration-200 transform translate-x-full"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-5 font-medium text-color text-2xl hover:text-pink-700"
            >
              <Link href="/">For Business</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-5 font-medium text-color text-2xl hover:text-pink-700"
            >
              <Link href="/">Menu</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-5 font-medium text-color text-2xl hover:text-pink-700"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
