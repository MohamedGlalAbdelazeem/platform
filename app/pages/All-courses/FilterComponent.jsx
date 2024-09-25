'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiRangeSlider from "multi-range-slider-react";
import "./allCourses.css" 
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const FilterComponent = () => {
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
    <div className="z-50 mt-1 rounded-xl w-full sm:w-max mx-auto bg-gray-200 divide-x divide-white flex flex-wrap sm:flex-nowrap">
      <div className="w-full sm:w-max mx-auto bg-gray-200 border divide-x divide-white flex flex-wrap sm:flex-nowrap rounded-xl overflow-hidden">
        
        {/* Category Section */}
        <div className="w-[250px]  gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
          <label htmlFor="categories" className="block text-base font-normal text-black w-1/3 sm:w-auto">Category</label>
          <select
            id="categories"
            className="bg-[#FDE7FF] border border-gray-300 text-black text-base font-normal rounded-xl block w-2/3 sm:w-full py-1 px-3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Category Section */}
        <div className="w-[300px] gap-2 px-2 py-2 flex items-center text-sm outline-none hover:bg-gray-300 transition-all">
          <label htmlFor="subCategory" className="w-[105px] block text-base font-normal text-black">Sub Category</label>
          <select
            id="subCategory"
            className="bg-[#FDE7FF] border border-gray-300 text-black text-base font-normal rounded-xl block w-[150px] py-1 px-1">
            <option value="">All Subcategories</option>
            {filteredSubCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing Section */}
        <div className="w-full sm:w-[350px] gap-3 px-5 py-5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
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

        <div  onClick={handleSearchClicked} className="cursor-pointer gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all w-full sm:w-auto justify-center sm:justify-start">
          <FaSearch  className="text-2xl " />
        </div>
        {
          search && (
            <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-3xl px-8 py-6 relative">
                <IoMdCloseCircleOutline  onClick={handleSearchClose} className='cursor-pointer float-right text-2xl mb-6 text-red-500' />
                <div class="flex flex-wrap gap-4 mt-10">
                    <div class="flex flex-1 px-4 py-2.5 items-center gap-3 rounded-lg border border-gray-300 focus-within:border-blue-600 min-w-[220px]">
                       <FaSearch className='text-lg ' />
                        <input type="email" placeholder="search By Using Title here" class="w-full outline-none bg-transparent text-gray-500 text-base" />
                    </div>
                    <button type="button" class="px-5 py-2.5 rounded-lg text-white text-base font-normal    bg-[#E2508D]">Search</button>
                </div>
            </div>
        </div>
          )
        }
      </div>
    </div>
  );
};
export default FilterComponent;
