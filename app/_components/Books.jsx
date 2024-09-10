'use client'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './books.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Books() {
  return (
    <section className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-300 p-8 sm:p-12 md:p-16 rounded-2xl my-10 flex flex-col lg:flex-row items-center lg:gap-6">
        {/* Left side - Text, Swiper, and Button */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl font-extrabold text-gray-800">
            Explore Essential Medical Books!
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-500">
            Discover a curated selection of medical books to support your learning and professional growth. Browse through detailed descriptions and download resources directly from our Telegram channel.
          </p>
          
          {/* Swiper Component */}
          <div className="my-6 hidden lg:flex sm:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={6}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp4WM0yFsxwkNRMrMvv2Gbl0BqN0zfOLulA&s" alt="Book 1" className="rounded-lg shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIEmcB6jdeHGCxiIQJhuleEpp3VMK0F-ngg&s" alt="Book 2" className="rounded-lg shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzzdo3wb_zBqS0YZh86MTBUhMJd3NNeI9xQpaGSku0Z6kjv-HhEpj-lUxtpt8Nw6LiBI&usqp=CAU" alt="Book 4" className="rounded-lg shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://medicosage.com/wp-content/uploads/2021/11/Carol-dunham.webp" alt="Book 5" className="rounded-lg shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp4WM0yFsxwkNRMrMvv2Gbl0BqN0zfOLulA&s" alt="Book 1" className="rounded-lg shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIEmcB6jdeHGCxiIQJhuleEpp3VMK0F-ngg&s" alt="Book 2" className="rounded-lg shadow-md" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Button */}
          <div className="mt-5 flex justify-center lg:justify-start">
            <Link href="/pages/Medical-books" className="flex items-center px-4 py-2 border border-transparent text-sm font-bold text-gray-800 bg-indigo-100 hover:bg-indigo-200 rounded-md">
              Show All Books
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Right side - Big Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img className="rounded-3xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.pinimg.com/originals/ac/ee/6b/acee6bad92436f7c7ca99f9c6fe8fb32.png" alt="Main book image"/>
        </div>
      </div>
    </section>
  );
}

export default Books;
