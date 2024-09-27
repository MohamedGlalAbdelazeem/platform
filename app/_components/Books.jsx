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
import Image from "next/image";
function Books() {
  return (
    <section className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#97355E] p-8 sm:p-12 md:p-16 rounded-2xl my-10 flex flex-col lg:flex-row items-center lg:gap-6">
        {/* Left side - Text, Swiper, and Button */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-[24px] font-extrabold text-[#F799C0]">
            Explore Essential Medical Books!
          </h1>
          <p className="mt-3 text-base font-normal sm:text-lg md:text-lg text-white">
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
              className="mySwiper relative "
              style={{
                background: "z-10 linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 1))"
              }}
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
            <Link href="/pages/Medical-books" className="flex items-center px-4 text-lg py-2 border border-transparent   font-bold text-white  rounded-md">
              Show All Books
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 w-full ml-32">
          <Image
           src="/book.svg"
           width={"382"}
           height={"404"}
           className="rounded-3xl h-[404px] w-[382px] object-cover "  
           alt="Main book image"/>
        </div>
      </div>
    </section>
  );
}

export default Books;
