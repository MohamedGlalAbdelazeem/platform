'use client';
import { useState, useEffect } from "react";
import Banner from "../../_components/Banner";
import { FaSearch, FaHeart } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

function Page() {
  const baseUrl = 'http://localhost:5000/api/';
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${baseUrl}Blog`);
        setBlogs(response?.data?.data); 
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 w-full bg-white">
        <div className="w-20 h-20 border-[10px] border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error handling
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {/* Banner */}
      <div className="my-5">
        <Banner 
          title={"Medical Insights & Articles"}
          body={"Explore expert articles on a wide range of medical topics. Our blog is categorized by specialty, ensuring that you can easily find the information you're interested in. Whether you're a student or a healthcare professional, these articles provide in-depth knowledge to enhance your medical expertise."}
        />
      </div>

      {/* Filtering */}
      <div className="-mt-9 w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
        <div className="w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">

          {/* Category */}
          <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="categories" className="block text-sm font-medium text-gray-900">Category</label>
            <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2">
              <option defaultValue>All (225)</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>
          </div>

          {/* SubCategory */}
          <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="subcategories" className="block text-sm font-medium text-gray-900">SubCategory</label>
            <select id="subcategories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2">
              <option defaultValue>All (285)</option>
              <option value="1">SubCategory 1</option>
              <option value="2">SubCategory 2</option>
            </select>
          </div>

          {/* Search */}
          <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <FaSearch className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Blogs Display */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {blogs.length > 0 ? (
          
            blogs.map((blog, index) => (
              <Link href={""} key={index} className="hover:opacity-50 rounded-3xl p-3 overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    className="w-full rounded-b-[20px] rounded-t-[30px]" 
                    src={`${baseUrl}${""}` || "https://via.placeholder.com/500"}
                    alt={blog.title || "Blog Image"} 
                  />
                </div>
                <div className="px-2 py-4">
                  <div className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                    <h2>{blog.title}</h2>
                  </div>
                  <p className="leading-6 text-gray-500 my-1 text-sm">
                    {blog.content || "No description available..."}
                  </p>
                </div>
                <div className="px-6 gap-3 py-1 flex flex-row items-center">
                  <button className="border-2 border-black p-3 w-full rounded-3xl">
                    See More
                  </button>
                  <span className="bg-slate-500 p-3 rounded-full">
                    <FaHeart className="text-red-500 text-2xl" /> 
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full mx-auto text-center">
              <h1 className="text-3xl text-center">No Blogs Added!! </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
