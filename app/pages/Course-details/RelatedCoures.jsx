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

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function RelatedCourses() {
  return (
    <>
     <div className='w-full'>
      <h1 className='text-left text-xl font-bold mb-2 '>Related Courses</h1>
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
                    <div className="rounded-3xl p-3 overflow-hidden shadow-lg">
                      <div className="relative">
                        <img
                          className="w-full rounded-b-[50px] rounded-t-[30px]"
                          src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg"
                          alt="Sunset in the mountains"
                        />
                        <div className="flex w-full justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-0 left-0 bg-indigo-600 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          <span><BsArrowDownRightCircleFill /></span>
                          <p>Cardiology</p>
                          <span><BsArrowDownRightCircleFill /></span>
                          <p>Intermediate</p>
                          <span><BsArrowDownRightCircleFill /></span>
                          <p>4.7</p>
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                          <h2>Advanced Cardiology</h2>
                          <h3>$20</h3>
                        </div>
                        <p className="text-gray-500 my-2 text-sm">
                          Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                        </p>
                        <span className="text-sm">Dr. Ahmed El-Sharif</span>
                      </div>
                      <div className="px-6 py-2 flex flex-row items-center">
                        <button className="bg-gray-500 text-white p-3 w-full rounded-3xl">Enroll Now</button>
                      </div>
                      <div className="px-6 gap-3 py-2 flex flex-row items-center">
                        <button className="border-2 border-black p-3 w-full rounded-3xl">See More</button>
                        <span className="bg-slate-500 p-3 rounded-full">
                          <FaHeart className="text-red-500 text-2xl" />
                        </span>
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
