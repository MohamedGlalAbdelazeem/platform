"use client"
import headerItms from '../data/DataMenu';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered, FaHeart, FaBell, FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">MedLearn Hub</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm">
            {headerItms.map((item, index) => (
              <Link key={index} href={item.link} className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                {item.item}
              </Link>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-500 dark:text-white hover:text-gray-500/75 dark:hover:text-white/75">
                Courses <IoIosArrowDown />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/pages/Our-courses" className="block px-4 py-2 text-gray-700 dark:text-white">Our Courses</Link>
                <Link href="/pages/All-courses" className="block px-4 py-2 text-gray-700 dark:text-white">All Courses</Link>
              </div>
            </div>
          </nav>
          
          {/* User and Menu Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              <FaHeart className="text-white text-2xl cursor-pointer" />
              <FaBell className="text-white text-2xl cursor-pointer" />
              {isLogin && (
                <div className="relative group">
                  <FaCircleUser className="text-3xl text-gray-500 dark:text-white cursor-pointer" />
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-white">Log out</a>
                  </div>
                </div>
              )}
              {!isLogin && (
                <>
                  <Link href="/sign-in" className="rounded-md bg-teal-600 px-5 py-3 text-sm text-white dark:hover:bg-teal-500">Sign in</Link>
                  <Link href="#" className="rounded-md border-2 bg-gray-100 px-5 py-2 text-sm text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">Get Started</Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden rounded bg-gray-100 p-2 text-gray-600 dark:bg-gray-800 dark:text-white">
              <FaBarsStaggered className="text-4xl border-2 border-white p-2 rounded-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=" md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
            <nav className="flex flex-col items-center gap-4 py-4 text-sm">
              {headerItms.map((item, index) => (
                <Link key={index} href={item.link} className="text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                  {item.item}
                </Link>
              ))}
              <div className="flex gap-6">
                <FaHeart className="text-white text-2xl cursor-pointer" />
                <FaBell className="text-white text-2xl cursor-pointer" />
              </div>
              <div className="flex items-center gap-6">
                <Link href="/sign-in" className="rounded-md bg-teal-600 px-5 py-3 text-sm text-white dark:hover:bg-teal-500">Sign in</Link>
                <Link href="#" className="rounded-md border-2 bg-gray-100 px-5 py-2 text-sm text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">Get Started</Link>
              </div>
              {isLogin && (
                <div className="relative group">
                  <FaCircleUser className="text-3xl text-gray-500 dark:text-white cursor-pointer" />
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
                    <a href="#" className="block px-4 py-2 text-gray-700 dark:text-white">Log out</a>
                  </div>
                </div>
              )}
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-500 dark:text-white hover:text-gray-500/75 dark:hover:text-white/75">
                  Courses <IoIosArrowDown />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/pages/Our-courses" className="block px-4 py-2 text-gray-700 dark:text-white">Our Courses</Link>
                  <Link href="/pages/All-courses" className="block px-4 py-2 text-gray-700 dark:text-white">All Courses</Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
