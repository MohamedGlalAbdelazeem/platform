'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// import required modules
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
      }
    };
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
        {blogCategory.map((item,index)=>{
                return(
                  <SwiperSlide key={index}>
                     <div key={index} className="bg-slate-100 text-left rounded-2xl p-1 overflow-hidden shadow-lg">
                    <div className="relative ">
                            <Image 
                             className="w-full rounded-b-[20px] rounded-t-[30px] "
                             width={"400"}
                             height={"400"}
                             src={`http://localhost:5000/${item?.imageURL}`}
                             alt="blog image" 
                             />
                    </div>
                    <div className="px-1 py-4">
                        <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2> {item?.title}</h2>
                        </div>
                        <p className="leading-6 text-gray-500 my-1 text-sm">
                        {item?.content}
                        </p>
                    </div>
                    <div className="px-2 gap-3 py-1  flex flex-row items-center">
                        <Link  href={`/pages/Our-blogs/${item?.id}`}  className="border-2 border-black text-center  p-3 w-full rounded-3xl">See More</Link>
                        <span className="flex items-center gap-1 bg-slate-500 p-3 rounded-full"> 
                          <AiFillLike  className="text-white text-2xl" />
                          <p className="font-bold text-white">{item?.likesNumber}</p>
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
