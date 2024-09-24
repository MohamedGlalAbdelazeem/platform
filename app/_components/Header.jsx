"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered, FaBell, FaCircleUser } from "react-icons/fa6";
import { headerItms } from '../data/DataMenu';
const Header = () => {
  const [token, setToken] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const handleLogout = () => {
    localStorage.clear();
    setToken(null); 
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl text-[#A971E0]  font-bold">Naser‘s  academy </Link>
          {/* start Desktop Nav */}
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
          {/* Profile and Bell icons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              {token && (
                <>
                  <FaBell className="text-2xl cursor-pointer" />
                  <div className="relative group">
                    <span className='cursor-pointer flex items-center gap-2'>
                      <FaCircleUser className="text-3xl" /> 
                      <h3 className='text-lg'>mohamed glal</h3>
                    </span>
                    <div className="absolute -right-8 mt-2 w-28 rounded-xl bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
                      <button type='button' onClick={handleLogout} className="block px-4 py-2 text-gray-700 dark:text-white">Log out</button>
                    </div>
                  </div>
                </>
              )}

              {!token && (
                <>
                  <Link href="/sign-in" className="px-5 py-3 text-xl">Sign in</Link>
                  <Link href="/sign-up" className="rounded-md border-2 border-fontColor text-fontColor px-5 py-2 text-xl">Get Started</Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden rounded-3xl bg-gray-800 p-2">
              <FaBarsStaggered className="text-4xl text-white border-2 border-white p-2 rounded-xl" />
            </button>
          </div>
        </div>
        {/* end Desktop Nav */}

       {/* start Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full p-5  bg-primary shadow-lg">
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
              <div className="flex mt-7 w-full justify-between items-center">
                {token && (
                  <>
                    <FaBell className="text-white text-2xl cursor-pointer" />
                    <div className="relative group">
                      <span className='flex items-center gap-1 text-white'>
                        <FaCircleUser className="text-3xl cursor-pointer" /> 
                        <h3 className='text-lg'>mohamed glal</h3>
                      </span> 
                      <div className="absolute -right-10 mt-1 w-28 rounded-xl bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
                        <button type='button' onClick={handleLogout} className="block px-4 py-2 text-gray-700 dark:text-white">Log out</button>
                      </div>
                    </div>
                  </>
                )}
                {!token && (
                  <>
                    <Link href="/sign-in" className="px-5 py-3 text-white text-xl">Sign in</Link>
                    <Link href="/sign-up" className="rounded-md border-2 border-fontColor text-fontColor px-5 py-2 text-xl">Get Started</Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
       {/* end Mobile Menu */}
      </div>
    </header>
  );
};

export default Header;
