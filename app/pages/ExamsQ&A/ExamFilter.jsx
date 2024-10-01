'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiRangeSlider from "multi-range-slider-react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "../All-courses/allCourses.css"

const ExamFilter = () => {
  const baseUrl = 'http://localhost:5000/api/';
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [search , setSearch]  = useState(false);

  function handleSearchClicked() {
    setSearch(!search);
  }
  function handleSearchClose() {
    setSearch(false);
  }
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}Category/GetAllCategories`);
        if (response.data.isSuccess) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}SubCategory/GetAllSubCategories`);
        if (response.data.isSuccess) {
          setSubCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching subcategories", error);
      }
    };
    fetchCategories();
    fetchSubCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = subCategories.filter(subCat => subCat.categoryId === parseInt(selectedCategory));
      setFilteredSubCategories(filtered);
    } else {
      setFilteredSubCategories(subCategories); 
    }
  }, [selectedCategory, subCategories]);

  return (
    <div className="z-50 mt-1 rounded-xl justify-center w-full  mx-auto bg-white divide-x divide-black flex flex-wrap ">
      <div className=" w-max mx-auto bg-white shadow-xl border divide-x divide-blacke flex justify-center items-center flex-wrap  rounded-xl overflow-hidden">
        {/* Category Section */}
        <div className="w-[250px]  gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-100 transition-all">
          <label htmlFor="categories" className="block text-base font-normal text-black w-1/3 sm:w-auto">Category</label>
          <select
            id="categories"
            className="bg-[#FDE7FF]  text-black text-base font-normal rounded-xl block w-2/3 sm:w-full py-1 px-3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id} className='bg-white p-2 shadow-lg rounded-xl'>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Category Section */}
        <div className="w-[300px] gap-2 px-2 py-2 flex items-center text-sm outline-none hover:bg-gray-100 transition-all">
          <label htmlFor="subCategory" className="w-[105px] block text-base font-normal text-black">Sub Category</label>
          <select
            id="subCategory"
            className="bg-[#FDE7FF]   text-black text-base font-normal rounded-xl block w-[150px] py-1 px-1">
            <option value="">All Subcategories</option>
            {filteredSubCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id} className='bg-white p-2 shadow-lg rounded-xl'>
                {subCategory.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing Section */}
        <div className="w-full sm:w-[350px] gap-3 px-5 py-5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-100 transition-all">
          <label htmlFor="pricing" className="block text-sm font-medium text-gray-900 w-1/3 sm:w-auto">Pricing</label>
         
          <MultiRangeSlider
            className="w-full"
            min={10}
            max={100}
            step={5}

            // These values should come from your state
            minValue={10}
            maxValue={100}
            onInput={(e) => {
              console.log(e); 
            }}
          />
        </div>


         {/* search icon */}
        <div  onClick={handleSearchClicked} className="cursor-pointer gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all w-full sm:w-auto justify-center sm:justify-start">
          <FaSearch  className="text-2xl text-bgColor " />
        </div>
        {search && (
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl px-8 py-6 relative">
                <IoMdCloseCircleOutline  onClick={handleSearchClose} className='cursor-pointer float-right text-2xl mb-6 text-red-500' />
                 <h1 className='font-bold text-[#E2508D]'>You can search any course by title</h1>
                <div className="flex flex-wrap gap-4 mt-10">
                    <div className="flex flex-1 px-4 py-2.5 items-center gap-3 rounded-lg border border-gray-300 focus-within:border-blue-600 min-w-[220px]">
                       <FaSearch className='text-lg ' />
                        <input type="email" placeholder="search By Using Title here" className="w-full outline-none bg-transparent text-gray-500 text-base" />
                    </div>
                    <button type="button" className="px-5 py-2.5 rounded-lg text-white text-base font-normal    bg-[#E2508D]">Search</button>
                </div>
            </div>
        </div>
          )
        }
        {/* search icon */}
      </div>
    </div>
  );
};
export default ExamFilter;
