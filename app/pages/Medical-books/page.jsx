'use client';
import { FaTelegramPlane } from "react-icons/fa";

import Banner from "../../_components/Banner";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
 


function page() {
  return (
   <>
   <Banner 
   title={"Explore Our Medical Book Collection"}
   body={"Access a comprehensive collection of medical books covering various specialties. Whether you're looking for textbooks, research publications, or practical guides, our medical books section provides valuable resources for healthcare professionals and students. Download books directly through our Telegram channel for convenient access."}
   />
     {/* filteration  */}
    <div className="-mt-9 w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
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

     {/* search   */}
     <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
        <FaSearch  className="text-2xl"/>
        </div>
    {/*  search */}
      </div>
    </div>
    
      {/* books */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3">
              {
              ["A","v","f","A","v","f","A","v","f","A","v","f"].map((item, index)=>{
                  return(
                      <div key={index} className="bg-slate-300 rounded-2xl p-2 overflow-hidden shadow-lg">
                      <div className="relative ">
                              <img className="w-full h-[293px] rounded-2xl "
                                  src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt="Sunset in the mountains" />
                      </div>
                      <div className="px-2 py-4">
                          <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                              <h2>Essentials of Cardiology</h2>
                          </div>
                          <p className="leading-6 text-gray-500 my-1 text-sm">
                          Stay ahead in the world of medicine with expert articles, the latest ..                       
                          </p>
                      </div>
                      <div className="px-1 gap-3 py-1 flex flex-row items-center">
                          <a className="flex items-center justify-around border-2 border-black  p-2 w-full rounded-3xl">Download This Book
                            <FaTelegramPlane className="text-xl" />
                          </a>
                          <span className="bg-slate-500 p-2 rounded-full"> <FaHeart className="text-red-500 text-2xl" /> </span>
                      </div>
                  </div>
                  )
              })
              }
          </div>
        </div>
      {/* books */}
   </>
  )
}
export default page