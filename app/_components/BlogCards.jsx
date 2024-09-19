'use client';
import { useState, useEffect } from "react";
import { AiFillLike } from "react-icons/ai";

import axios from "axios";
import Link from "next/link";
function BlogCards() {
  const baseUrl = 'http://localhost:5000/api/';
  const imageUrl = 'http://localhost:5000/';
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${baseUrl}Blog`);
        setBlogs(response?.data?.data); 
        setLoading(false);
      } catch (err) {
        setError("Not Blogs Found! Please Try again");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center relative left-[420px] top-2  mx-auto items-center h-96 w-full">
        <div className=" w-20 h-20 border-[10px] border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return <p className="font-bold text-lg text-red-500">{error}</p>;
  }
  return (
   <>
      {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              console.log(blog),
              
              <div  key={index} className="hover:opacity-50 rounded-3xl p-3 overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    className="w-full rounded-b-[20px] rounded-t-[30px]" 
                    src={`${imageUrl}${blog?.imageURL}`}
                    alt={blog.title || "Blog Image"} 
                  />
                </div>
                <div className="px-2 py-4">
                  <div className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                    <h2>{blog?.title}</h2>
                  </div>
                  <p className="leading-6 text-gray-500 my-1 line-clamp-3  text-sm">
                    {blog?.intro || "No description available..."}
                  </p>
                </div>
                <div className="px-6 gap-3 py-1 flex flex-row  items-center">
                  <Link href={`/pages/Our-blogs/${blog?.id}`} className="text-center border-2 border-black p-3 w-full rounded-3xl">
                    See More
                  </Link>
                  <span className="flex gap-1 text-white bg-slate-500 p-3 rounded-full">
                    <AiFillLike  className="text-white text-2xl"/>
                    <p className="font-bold">{blog?.likesNumber}</p>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full mx-auto text-center">
              <h1 className="text-3xl text-center">No Blogs Added!! </h1>
            </div>
          )}
   </>
  )
}

export default BlogCards