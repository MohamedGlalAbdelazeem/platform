'use client';
import MedicalBookBanner from "./MedicalBookBanner";

function page() {
  return (
   <>
    <MedicalBookBanner/>
     {/* filteration  */}
  
      {/* books */}
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3">
              {["A","v","f","A","v","f","A","v","f","A","v","f"].map((item, index)=>{
                  return(
                      <div key={index} className="bg-white rounded-2xl p-2 overflow-hidden shadow-xl  ">
                      <div className="relative ">
                              <img className="w-full h-[293px] rounded-2xl "
                                  src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  alt="Sunset in the mountains" />
                      </div>
                      <div className="px-2 py-4">
                          <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                              <h2 className="font-bold">Essentials of Cardiology</h2>
                          </div>
                          <p className="leading-6 text-gray-500 my-1 line-clamp-3 text-sm">
                          Stay ahead in the world of medicine with expert articles, the latest ..                       
                          </p>
                      </div>
                      <div className="px-1 gap-1 py-1 flex flex-row items-center">
                          <a href="" className= "cursor-pointer flex items-center justify-around border-2 border-bgFontColor bg-bgFontColor text-white  p-2 w-full rounded-3xl">
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