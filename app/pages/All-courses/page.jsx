'use client';

import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import "./allCourses.css" 
import useCheckUser from "@/app/(auth)/ChekUser";
function page() {
  const handleClicked = useCheckUser();  
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };


  return (
  <>
  <div className="bg-gray-200 ">
    <div className="text-center max-w-3xl p-28 max-md:max-w-md mx-auto">
      <div>
        <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">Explore Our Medical Courses</h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
        Enhance your medical expertise with courses designed for healthcare professionals and students. Dive deeper into specific fields or explore new topics with expert-led learning experiences. Plus, you can upload your own courses to share your knowledge with others
        </p>
        <div className="mt-2 flex items-center justify-center max-sm:flex-col">
          <button type="button"
            onClick={handleClicked}  // Ensure this is a function
            className="hover:bg-transparent  border transition-all  font-bold text-lg rounded px-2 py-3">
              Upload Your Course
            </button>
            <FaArrowRightLong />
        </div>
      </div>
    </div>
  </div>

     {/* filteration  */}
      <div className="-mt-9 w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
      <div className="w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
       <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="countries" className="block  text-sm font-medium text-gray-900">Category</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2  ">
              <option defaultValue>All (225)</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
        </div>
        <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="countries" className="block text-sm font-medium text-gray-900">SubCategory</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2  ">
              <option defaultValue>All (285)</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
        </div>
     <div className="w-[350px] gap-3 px-5 py-5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="countries" className="block  text-sm font-medium text-gray-900"> Pricing</label>
            <MultiRangeSlider
             className="w-full"
              min={10}
              max={100}
              step={5}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
        </div>
   
     <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
        <FaSearch  className="text-2xl"/>
        </div>
      </div>
     </div>
     {/* filteration  */}
      
      {/* courses */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
              {["A", "v", "f","A", "v", "f", "A", "v", "f"].map((item, index) => (
                  <div key={index} className="rounded-3xl p-3 overflow-hidden shadow-lg">
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