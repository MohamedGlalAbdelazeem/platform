'use client';
import { useState } from "react";
import Banner from "../../_components/Banner";
import MultiRangeSlider from "multi-range-slider-react";
import { FaSearch } from "react-icons/fa";

import "./allCourses.css"

function page() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
   <>
   <Banner 
   title={"Explore Our Medical Courses"}
   body={"Enhance your medical expertise with courses designed for healthcare professionals and students. Dive deeper into specific fields or explore new topics with expert-led learning experiences. Plus, you can upload your own courses to share your knowledge with others."}
   btnTitle={"Upload Your Course"}/>


     {/* filteration  */}
    <div className="-mt-9 mb-20 w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
      <div className="w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
      
       {/*  Category */}
        <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="countries" className="block  text-sm font-medium text-gray-900">Category</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2  ">
              <option defaultValue>All (225)</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
        </div>
         {/* Category */}

        {/* Sub Category */}
        <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="countries" className="block text-sm font-medium text-gray-900">SubCategory</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2  ">
              <option defaultValue>All (285)</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
        </div>
   {/* Sub Category */}

     {/* Ratings   */}
     <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="countries" className="block  text-sm font-medium text-gray-900"> Ratings</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2  ">
              <option defaultValue>5.00</option>
              <option value="test">test</option>
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
        </div>
   {/*  Ratings */}

     {/* Pricing   */}
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
    {/*  Pricing */}
     {/* search   */}
     <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
        <FaSearch  className="text-2xl"/>
        </div>
    {/*  search */}
      </div>
    </div>
   </>
  )
}
export default page