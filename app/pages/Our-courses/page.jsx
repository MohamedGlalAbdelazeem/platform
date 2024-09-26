"use client"
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import OurCoursesBanner from "./OurCoursesBanner";
import ProgressBar from "@ramonak/react-progress-bar";
function page() {

  return (
  <>
        <OurCoursesBanner bg2="#984D9F" bg1="#301a45"/> 
        <div className="max-w-screen-xl mx-auto sm:p-10 z-[1000]">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 -pt-64">
              {["A", "v", "f", "A", "v", "f"].map((item, index) => (
                 <div key={index} className="rounded-3xl p-1 overflow-hidden shadow-xl w-[337px]">
                 <div className="relative">
                     <img
                         className="w-[315px] h-[198px] rounded-b-[36px] rounded-t-[15px]"
                         src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg"
                         alt="Sunset in the mountains"
                     />
                       <div className="w-full h-10 flex justify-center items-center">
                       <div className="flex w-[260px]  justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4  bg-secondary text-white text-[12px]  duration-500 ease-in-out">
                           <span className="flex items-center gap-2">
                               <p>Cardiology</p>
                               <BsArrowDownRightCircleFill />
                           </span>
                           <span className="flex items-center gap-2">
                               <p>Cardiology</p>
                               <BsArrowDownRightCircleFill />
                           </span>
                       </div>
                   </div>
                 </div>
                 <div className="px-6">
                   <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                       <h2 className="text-[17px] font-normal">Advanced Cardiology</h2>
                       <h3 className="text-[17px] text-textColor font-bold">20$</h3>
                   </div>
                   <p className="text-gray-500 my-2 text-sm">
                       Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                   </p>
                   <span className="text-sm">Dr. Ahmed El-Sharif</span>
                   <div className="my-3">
                     <ProgressBar completed={80} />
                   </div>
               </div>
               <div className="px-6 py-2 flex flex-row items-center">
                   <button className="text-[12px] bg-textColor text-white p-3 w-full rounded-3xl">Go to Course </button>
               </div>
             </div>
              ))}
          </div>
        </div>
      {/* courses */}
   </>
  )
}
export default page