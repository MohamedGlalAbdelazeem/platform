'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import RelatedBlogs from "../RelatedBlogs";
function page({params}) {
  const baseUrl = 'http://localhost:5000/api/';
  const imageUrl= 'http://localhost:5000';
  const [blogId, setBlogId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchblogId = async () => {
      try {
        const response = await axios.get(`${baseUrl}Blog/${params.BlogId}`);
        setBlogId(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blogId");
        setLoading(false);
        console.log(error);
      }
    };
    fetchblogId();
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
    <div className="relative bg-gray-300 p-2 flex items-center justify-center -z-10 h-[406px]">
      <div className="absolute inset-0 bg-[#1f0c30f4] opacity-90 z-10"></div>
      <Image
        src="/Banner.jpg"
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        className="z-0"/>
    </div>
    <div className="w-[1030px]  mx-auto  px-3 py-8 -mt-52 z-50">
      <h1 className='text-3xl font-bold text-center text-[#EC8AB3]'>{blogId?.title}</h1>
    <div className="flex flex-row-reverse justify-end flex-wrap ">
     <div className='my-6 bg-gray-200 w-[1030px] h-[423px] rounded-3xl'>
      <Image
        src={`${imageUrl}${blogId?.imageURL}`}
        width={"400"}
        height={"400"}
        alt="blog image"
        className="w-[1030px] h-[423px] rounded-3xl"
      />
    </div>
      <div className="flex  gap-4  flex-wrap ">
          <div className="flex flex-wrap  gap-6">
             <button className="bg-[#FFF4F8] text-black py-1 rounded-lg w-[130px] font-normal ">Category</button>    
             <button className="bg-[#FFF4F8] text-black  px-1 py-1 rounded-lg font-normal w-[150px]">Sub Category</button>    
          </div> 
          <div>
          </div>
      </div>
      <div className="w-full">
          <div className="mt-10">
              <h1 className="font-bold text-lg my-2">Introduction:</h1>
              <p>{blogId?.intro}</p>
          </div>
          <div className="mt-9">
              <h1 className="font-bold text-lg my-2">Main Body:</h1>
              <p className="leading-8"> 
               {blogId?.content}
              </p>
          </div>
          <div className="mt-9">
              <h1 className="font-bold text-lg my-2">Conclusion:</h1>
              <p className="leading-8"> 
                {blogId?.conclusion}
               </p>
          </div>
      </div>
    </div> 
    <RelatedBlogs categoryId={blogId?.categoryId}/>
    </div>
    </>
    
)}
export default page