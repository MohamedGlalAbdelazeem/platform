'use client';
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import OurCoursesBanner from "./OurCoursesBanner";
 


function page() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
  <>
      <div className="bg-gray-200 ">
        <div className="text-center max-w-3xl p-40  max-md:max-w-md mx-auto">
          <OurCoursesBanner/>
        </div>
      </div>
        <div className="-mt-36 max-w-screen-xl mx-auto sm:p-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 -pt-64">
              {["A", "v", "f", "A", "v", "f"].map((item, index) => (
                  <div key={index} className="rounded-3xl p-3   overflow-hidden shadow-lg">
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
                              <h3>20$</h3>
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
              ))}
          </div>
        </div>
      {/* courses */}
   </>
  )
}
export default page