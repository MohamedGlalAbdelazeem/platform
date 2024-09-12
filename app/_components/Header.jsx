"use client";
import headerItms from '../data/DataMenu';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered, FaHeart, FaBell, FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">MedLearn Hub</Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm">
            {headerItms.map((item, index) => (
              <div key={index} className="relative group">
                <Link href={item.link || "#"} className="flex items-center gap-2 text-xl">
                  {item.item} {item.subItems && <IoIosArrowDown />}
                </Link>
                {item.subItems && (
                  <div className="absolute mt-1 w-32 rounded-lg bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 dark:text-white">
                        {subItem.item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Profile icon */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              <Link href={"/pages/Mywish-list"}>
                <FaHeart className="text-2xl cursor-pointer" />
              </Link> 
              <FaBell className="text-2xl cursor-pointer" />
              {isLogin && (
                <div className="relative group">
                  <FaCircleUser className="text-3xl cursor-pointer" />
                  <div className="absolute -right-20 mt-5 w-28 rounded-xl bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-white">Log out</a>
                  </div>
                </div>
              )}
              {!isLogin && (
                <>
                  <Link href="/sign-in" className="px-5 py-3 text-xl">Sign in</Link>
                  <Link href="/sign-up" className="rounded-md border-2 bg-gray-300 px-5 py-2 text-xl">Get Started</Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden rounded-3xl bg-gray-800 p-2">
              <FaBarsStaggered className="text-4xl text-white border-2 border-white p-2 rounded-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
            <nav className="flex flex-col items-center gap-4 py-4 text-sm">
              {headerItms.map((item, index) => (
                <div key={index} className="w-full">
                  <button
                    className="flex items-center justify-between w-full text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.item} {item.subItems && <IoIosArrowDown />}
                  </button>
                  {item.subItems && activeDropdown === index && (
                    <div className="mt-2 w-full bg-gray-100 dark:bg-gray-800">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-500 dark:text-white">
                          {subItem.item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-6">
                <Link href={"/pages/Mywish-list"}>
                  <FaHeart className="text-white text-2xl cursor-pointer" />
                </Link> 
                <FaBell className="text-white text-2xl cursor-pointer" />
              </div>
               {
                isLogin === true ?  
                (
                   <div className="relative group">
                  <FaCircleUser className="text-3xl cursor-pointer text-white" />
                  <div className="absolute -right-20 mt-5 w-28 rounded-xl bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-white">Log out</a>
                  </div>
                </div>
                ) : 
                (
                  <div className="flex items-center gap-6">
                  <Link href="/sign-in" className="rounded-md bg-teal-600 px-5 py-3 text-sm text-white dark:hover:bg-teal-500">Sign in</Link>
                  <Link href="/sign-up" className="rounded-md border-2 bg-gray-100 px-5 py-2 text-sm text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">Get Started</Link>
                </div>
                )
               }
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;


 