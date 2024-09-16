'use client';
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import RelatedBlogs from "../RelatedBlogs";

function page({params}) {
  const baseUrl = 'http://localhost:5000/api/';
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
    <div className="container mx-auto mt-20 px-16 py-8">
    <div className="flex flex-row-reverse justify-around flex-wrap mt-6">
      <h1 className='text-2xl font-bold'>{blogId?.title}</h1>
     <div className='my-6 bg-gray-200 w-full h-96 rounded-3xl'>
      <Image
      src={`http://localhost:5000/api${blogId?.imageURL}`}
      width={"300"}
      height={"300"}
      alt="blog image"
      />
    </div>
      <div className="w-full flex gap-4 flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-6">
             <button className="bg-slate-600 text-white py-1 rounded-2xl w-[130px]">Category</button>    
             <button className="bg-slate-600 text-white  px-1 py-1 rounded-2xl w-[150px]">Sub Category</button>    
          </div> 
          <div>
            <FaHeart className="bg-slate-300 p-2 text-4xl rounded-full " />
          </div>
      </div>
      <div>
          <div className="mt-20">
              <h1 className="font-bold text-lg my-2">Introduction:</h1>
              <p>Cardiac care has seen tremendous advances over the past decade, thanks to innovations in technology and research. From minimally invasive procedures to improved diagnostic tools, the field of cardiology continues to evolve, offering better outcomes for patients.</p>
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
              As technology continues to evolve, the future of cardiac care looks promising. Innovations like artificial intelligence in diagnostics and improved surgical techniques will likely lead to even better patient outcomes. Staying informed on these advancements is crucial for healthcare professionals working in cardiology.
               </p>
          </div>
      </div>
    </div> 
    <RelatedBlogs categoryId={blogId?.categoryId}/>
  </div>
)}
export default page