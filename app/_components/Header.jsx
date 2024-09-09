'use client'
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi2";
import { TbHeartFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaRoadBarrier } from "react-icons/fa6";
import Link from 'next/link';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);  

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleCoursesClick = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className='flex shadow-lg py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50'>
      <div className='w-full flex flex-wrap items-center lg:gap-y-4 '>
        <Link href="/" className='font-extrabold text-lg'>
          Naser's Academy
        </Link>

        <div id="collapseMenu"
          className={`max-lg:hidden lg:!flex lg:items-center lg:flex-1 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 ${isMenuOpen ? 'block' : 'hidden'}`} >
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3' onClick={handleMenuClick}>
          <FaRoadBarrier />
          </button>

          <ul className='lg:ml-14 lg:flex lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="#">
                <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
              </a>
            </li>
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'
            >
              <Link href="/" className='text-[#333] block text-sm font-semibold'>Home</Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'
              onMouseEnter={handleCoursesClick} 
              onMouseLeave={handleCoursesClick}
            >
              <a href='#' className='text-[#333] flex items-center text-sm font-semibold'>
                Courses 
               <MdKeyboardArrowDown className='text-lg' />
              </a>
              {isCoursesOpen && (
                <ul className='absolute left-0 top-full bg-white shadow-md py-2'>
                  <li className='px-4 py-2  hover:bg-gray-100'>
                    <Link href="/pages/All-courses" className="text-sm text-gray-700 block">All Courses</Link>
                  </li>
                  <li className='px-4 py-2 hover:bg-gray-100'>
                    <Link href="/Our-courses" className="text-sm text-gray-700 block">Our Courses</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'
            >
              <a href="#" className='text-[#333] block text-sm font-semibold'>Exams (Q&A)</a>
            </li>
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'
            >
              <a href="#" className='text-[#333] block text-sm font-semibold'>Blogs</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'   >
              <a href="#" className='text-[#333] block text-sm font-semibold'>Medical Books</a>
            </li>
          </ul>
        </div>

        <div className='flex  items-center'>
          <ul className="flex">
           <li>
              <div className="flex mx-3 flex-col justify-center items-center cursor-pointer">
                 <TbHeartFilled  className='text-3xl' />
              </div>
            </li>
            <li>
              <div className="flex flex-col mx-3 justify-center items-center cursor-pointer">
               <FaBell className='text-3xl' />
              </div>
            </li>
            <li>
              <div className=" text-lg  mx-3 py-1 flex flex-col justify-center items-center cursor-pointer">
                <Link href={"/"}>Sign in</Link>
              </div>
            </li>
            <li>
              <div className=" text-lg mx-3 rounded-lg py-1 flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 px-6">
                <Link href={"/"}>Get Started</Link>
              </div>
            </li>
          {/* profile*/}
            {/* <li onClick={handleProfileClick} >
              <div className="flex   gap-3 justify-center items-center cursor-pointer">
                <HiUserCircle className='text-4xl' />
                <span>Hesham Mousa</span>
              </div>
              <div className={`bg-slate-200  z-20 rounded-2xl shadow-lg py-2 px-6 sm:min-w-[200px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-5 top-20 ${isProfileOpen ? 'block' : 'hidden'}`}  >
                <div className='text-lg mt-1  flex flex-col'>
                 <Link href="/pages/Profile" className='my-2'>Profile</Link>
                 <Link href="/" className='my-1'>Log out</Link>
                </div>
              </div>
            </li> */}
          {/* profile */} 
          </ul>
          <button id="toggleOpen" className='lg:hidden ml-7' onClick={handleMenuClick}>
             <FaBars />
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
