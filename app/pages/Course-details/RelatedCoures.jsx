'use client'
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
      <h1 className='text-left text-xl font-bold mb-2 text-bgFontColor'>Related Courses</h1>
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
                      <div key={index} className="rounded-3xl p-3 overflow-hidden shadow-lg w-[337px]">
                    <div className="relative">
                        <img
                            className="w-[315px] h-[198px] rounded-b-[25px] rounded-t-[15px]"
                            src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Sunset in the mountains"/>
                        <div className="w-full h-10 flex justify-center items-center">
                            <div className="flex w-[260px]  justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4  bg-secondary text-white text-[12px]  duration-500 ease-in-out">
                                <span className="flex items-center gap-2">
                                    <p>Cardiology</p>
                                    <BsArrowDownRightCircleFill />
                                </span>
                                <span className="flex items-center gap-2">
                                    <p>Cardiology</p>
                                    <BsArrowDownRightCircleFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-6">
                        <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2 className="text-[17px] font-normal">Advanced Cardiology</h2>
                            <h3 className="text-[17px] text-textColor font-bold">20$</h3>
                        </div>
                        <p className="text-gray-500 my-2 text-sm">
                            Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                        </p>
                        <span className="text-sm">Dr. Ahmed El-Sharif</span>
                    </div>
                    <div className="px-6 py-2 flex flex-row items-center">
                        <button className="text-[12px] bg-bgFontColor text-white p-3 w-full rounded-3xl">Enroll Now</button>
                    </div>
                    <div className="px-6 gap-3 py-2 flex flex-row items-center">
                        <button className="border-2 border-textColor text-[12px] text-textColor p-3 w-full rounded-3xl">See More</button> 
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
