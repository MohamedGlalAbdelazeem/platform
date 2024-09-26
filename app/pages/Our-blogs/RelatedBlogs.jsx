'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";

export default function RelatedBlogs({categoryId}) {

  const baseUrl = 'http://localhost:5000/api/';
  const [blogCategory, setBlogCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchblogCategory = async () => {
      try {
        const response = await axios.get(`${baseUrl}Blog/category/${categoryId}`);
        setBlogCategory(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blogCategory");
        setLoading(false);
        console.log(error);
      }};
    fetchblogCategory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 w-full bg-white">
        <div className="w-20 h-20 border-[10px] border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
     <div className='w-full'>
      <h1 className='text-left text-2xl font-bold mb-2 mt-20 text-textColor'>Related Blogs</h1>
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
        {blogCategory.map((item,index)=>{
                return(
                  <SwiperSlide key={index}>
                     <div key={index} className="bg-slate-100 text-left rounded-2xl p-1 overflow-hidden shadow-lg">
                    <div className="relative ">
                            <Image 
                             className="w-full rounded-b-[20px] rounded-t-[30px] "
                             width={"500"}
                             height={"500"}
                             src={`http://localhost:5000/${item?.imageURL}`}
                             alt="blog image" 
                             />
                    </div>
                    <div className="px-1 py-4">
                        <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2> {item?.title}</h2>
                        </div>
                        <p className="leading-6 text-black my-1 text-sm">
                        {item?.content}
                        </p>
                    </div>
                    <div className="px-2 gap-3 py-1  flex flex-row items-center">
                        <Link  href={`/pages/Our-blogs/${item?.id}`}  className="text-textColor border-2 border-textColor text-center  p-3 w-full rounded-3xl">See More</Link>
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
