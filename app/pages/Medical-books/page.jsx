'use client';
import MedicalBookBanner from "./MedicalBookBanner";
import { useState , useEffect } from "react";
import axios from "axios";

function page() {
  const baseUrl = 'http://localhost:5000/api/';
  const imageUrl = 'http://localhost:5000/';
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${baseUrl}Book`);
        setBooks(response?.data?.data); 
        setLoading(false);
      } catch (error) {
        console.log(error);
        
        setError("Not books Found! Please Try again");
        setLoading(false);
      }
    };
    fetchBooks();
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
    <MedicalBookBanner/>
     {/* filteration  */}
      {/* books */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3">
              {books.map((item, index)=>{
                console.log('http://localhost:5000/api/',item.thumbnailURL)
                  return(
                      <div key={index} className="bg-white rounded-2xl p-2 overflow-hidden shadow-xl  ">
                      <div className="relative ">
                              <img
                                className="w-full h-[293px] rounded-2xl "
                                src={`${imageUrl}${item?.thumbnailURL}`}
                                alt="Sunset in the mountains" />
                      </div>
                      <div className="px-2 py-4">
                          <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                              <h2 className="font-bold">{item?.title}</h2>
                          </div>
                          <p className="leading-6 text-gray-500 my-1 line-clamp-3 text-sm">
                               {item?.description}              
                          </p>
                      </div>
                      <div className="px-1 gap-1 py-1 flex flex-row items-center">
                          <a href={item?.url || 'https://t.me/'}  target="_blank" className= "cursor-pointer flex items-center justify-around border-2 border-bgFontColor bg-bgFontColor text-white  p-2 w-full rounded-3xl">
                            Download This Book
                          </a>
                      </div>
                  </div>
                  )}) }
          </div>
        </div>
   </>
  )
}
export default page