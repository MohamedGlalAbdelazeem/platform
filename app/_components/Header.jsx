'use client'
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi2";
import { TbHeartFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaRoadBarrier } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
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
        <a href="#" className='font-extrabold text-lg'>
          Naser's Academy
        </a>

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
              <a href="#" className='text-[#333] block text-sm font-semibold'>Home</a>
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
                    <Link href="/All-courses" className="text-sm text-gray-700 block">All Courses</Link>
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
            <li
              className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'
            >
              <a href="#" className='text-[#333] block text-sm font-semibold'>Medical Books</a>
            </li>
          </ul>

          <div className='lg:mx-8 max-xl:hidden flex items-center bg-gray-100 px-4 h-10 rounded flex-1'>
             <FaSearch />
            <input type='text' placeholder='Search something...' className='w-full outline-none text-sm bg-transparent' />
          </div>
        </div>

        <div className='flex items-center ml-auto'>
          <ul className="flex">
           <li>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                 <TbHeartFilled  className='text-3xl' />
              </div>
            </li>

            <li>
              <div className="flex flex-col justify-center items-center cursor-pointer">
               <FaBell className='text-3xl' />
              </div>
            </li>

            <li onClick={handleProfileClick} >
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <HiUserCircle className='text-3xl' />
              </div>
              <div
                className={`bg-white z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14 ${isProfileOpen ? 'block' : 'hidden'}`}
              >
                <h6 className="font-semibold text-sm">Welcome</h6>
                <p className="text-sm text-gray-500 mt-1">To access account and manage orders</p>
                <button
                  type='button'
                  className="bg-transparent border border-gray-300 hover:border-pink-500 px-4 py-2 mt-4 text-sm text-pink-500 font-semibold"
                >
                  LOGIN / SIGNUP
                </button>
                <hr className="border-b-0 my-4" />
                <ul className="space-y-1.5">
                  {['Order', 'Wishlist', 'Gift Cards', 'Contact Us'].map((item, index) => (
                    <li key={index}><a href='#' className="text-sm text-gray-500 hover:text-pink-500">{item}</a></li>
                  ))}
                </ul>
                <hr className="border-b-0 my-4" />
                <ul className="space-y-1.5">
                  {['Coupons', 'Saved Credits', 'Contact Us', 'Saved Addresses'].map((item, index) => (
                    <li key={index}><a href='#' className="text-sm text-gray-500 hover:text-pink-500">{item}</a></li>
                  ))}
                </ul>
              </div>
            </li>
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
