'use client'
import React, { useRef, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function RelatedBlogs() {
  return (
    <>
     <div className='w-full'>
      <h1 className='text-left text-2xl font-bold mb-2 mt-20 '>Related Blogs</h1>
     </div>
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // Responsive breakpoints
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper" >
        {
            ["a","f","f","a","f","f"].map((item,index)=>{
                return(
                  <SwiperSlide key={index}>
                     <div key={index} className=" rounded-3xl  p-3 overflow-hidden shadow-lg">
                    <div className="relative ">
                            <img className="w-full rounded-b-[20px] rounded-t-[30px] "
                                src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Sunset in the mountains" />
                    </div>
                    <div className="px-2 py-4">
                        <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2>Innovations in Medical Learning</h2>
                        </div>
                        <p className="leading-6 text-gray-500 my-1 text-sm">
                        Stay ahead in the world of medicine with expert articles, the latest research updates, and insights into cutting-edge medical advancements...                        </p>
                    </div>
                    <div className="px-6 gap-3 py-1 flex flex-row items-center">
                        <button className="border-2 border-black  p-3 w-full rounded-3xl">See More</button>
                        <span className="bg-slate-500 p-3 rounded-full"> <FaHeart className="text-red-500 text-2xl" /> </span>
                    </div>
                </div>
                  </SwiperSlide>
                );
            })
        }
      </Swiper>
    </>
  );
}
