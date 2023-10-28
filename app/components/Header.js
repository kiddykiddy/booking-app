"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#000080');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColor('#ffffff');
        setTextColor('#000080)');
      } else {
        setColor('transparent');
        setTextColor('#000080)');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className="max-w-[1240px] px-5 m-auto flex justify-between items-center p-1 #000080">
        <Link href="/">
        <Image src="/logo.png" width={60} height={60} alt="Wellness og Fodpleje by dk logo" />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-5 font-medium text-xl hover:text-gray-500">
            <Link href="/">Start</Link>
          </li>
          <li className="p-5 font-medium text-xl hover:text-gray-500">
            <Link href='/service'>Behandlinger</Link>
          </li>
          <li className="p-5 font-medium text-xl hover:text-gray-500">
            <Link href='/kontakt'>Kontakt</Link>
          </li>
          <li className="p-5 font-medium text-xl hover:text-gray-500">
            <Link className="p-2 rounded-lg bg-zinc-200" href="/book">Book</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose className="cursor-pointer" size={30} style={{ color: `${textColor}` }}/>
          ) : (
            <AiOutlineMenu className="cursor-pointer" size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-[-100%] bottom-0 flex justify-center items-start pt-48 w-full h-screen bg-white text-center ease-in duration-200 transform translate-x-0'
              : 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start pt-48 w-full h-screen bg-white text-center ease-in duration-200 transform translate-x-full'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-5 font-medium text-blue-900 text-2xl hover:text-gray-500'>
              <Link href='/'>Start</Link>
            </li>
            <li onClick={handleNav} className='p-5 font-medium text-blue-900 text-2xl hover:text-gray-500'>
              <Link href='/service'>Behandlinger</Link>
            </li>
            <li onClick={handleNav} className='p-5 font-medium text-blue-900 text-2xl hover:text-gray-500'>
              <Link href='/kontakt'>Kontakt</Link>
            </li>
            <li onClick={handleNav} className='p-5 font-medium text-blue-900 text-2xl hover:text-gray-500'>
              <Link className="p-3 rounded-lg bg-zinc-200" href='/book'>Book</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
