"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosLogIn } from "react-icons/io";
import { FaBarsStaggered, FaCircleUser, FaRegUser } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { LuChevronRight } from "react-icons/lu";
import { headerItms } from '../data/DataMenu';
import { getToken, getUser, removeUser } from '../_utils/LocalStorage';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [token, setToken] = useState(getToken());
  const user = getUser();
  const userName = user ? `${user.firstName} ${user.lastName}` : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => setActiveDropdown(index === activeDropdown ? null : index);
  const handleLogout = () => {
    removeUser();
    setToken(null);
  };

  const renderSubItems = (subItems) => (
    <div className="absolute mt-1 w-32 rounded-lg bg-bgColor shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {subItems.map((subItem, index) => (
        <Link key={index} href={subItem.link} className="block px-4 py-2 text-white">
          {subItem.item}
        </Link>
      ))}
    </div>
  );

  const renderHeaderItems = () => (
    headerItms.map((item, index) => (
      <div key={index} className="relative group">
        <Link href={item.link || "#"} className="flex items-center gap-1 text-xl">
          {item.item}
          {item.subItems && <LuChevronRight className="mt-1 text-base" />}
        </Link>
        {item.subItems && renderSubItems(item.subItems)}
      </div>
    ))
  );

  const renderUserMenu = () => (
    <>
      <CiBellOn className="text-3xl font-bold text-textColor cursor-pointer" />
      <div className="relative group">
        <span className="cursor-pointer flex items-center gap-2">
          <FaCircleUser className="text-3xl" />
          <h3 className="text-lg">{userName}</h3>
        </span>
        <div className="absolute right-3 mt-2 w-44 p-3 rounded-xl bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/pages/Profile" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:opacity-50">
            <FaRegUser className="bg-[#F5EDFE] p-2 text-3xl rounded-lg" />
            My Profile
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2 text-secondary hover:opacity-50">
            <IoIosLogIn className="bg-[#FFEBEB] text-secondary rounded-lg text-3xl p-1" />
            Log out
          </button>
        </div>
      </div>
    </>
  );

  const renderMobileMenu = () => (
    <div className="md:hidden absolute top-16 left-0 w-full p-5 bg-primary shadow-lg">
      <nav className="flex flex-col items-center gap-4 py-4 text-sm">
        {headerItms.map((item, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleDropdown(index)}
              className="flex items-center justify-between w-full text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
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
          {token ? renderUserMenu() : (
            <>
              <Link href="/sign-in" className="px-5 py-3 text-white text-xl">Sign in</Link>
              <Link href="/sign-up" className="rounded-md border-2 border-fontColor text-fontColor px-5 py-2 text-xl">Get Started</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-100 ${isScrolled ? 'bg-[#1F0C30E5]' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-xl text-[#A971E0] font-bold">Naser's Academy</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {renderHeaderItems()}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              {token ? renderUserMenu() : (
                <>
                  <Link href="/sign-in" className="px-5 py-3 text-xl">Sign in</Link>
                  <Link href="/sign-up" className="rounded-md border-2 border-fontColor text-fontColor px-5 py-2 text-xl">Get Started</Link>
                </>
              )}
            </div>
            <button onClick={toggleMenu} className="md:hidden rounded-3xl bg-gray-800 p-2">
              <FaBarsStaggered className="text-4xl text-white border-2 border-white p-2 rounded-xl" />
            </button>
          </div>
        </div>
        {isMenuOpen && renderMobileMenu()}
      </div>
    </header>
  );
};
export default Header;
