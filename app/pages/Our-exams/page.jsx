 
import Banner from "../../_components/Banner";
import { FaSearch } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import Link from "next/link";



function page() {
  return (
   <>
   <div className="py-4">
   <Banner 
    title={"My Premium Exams"} />
   </div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="  grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
              {
              ["A","v","A","v","f","A","f","A"].map((item, index)=>{
                  return(
                      <div key={index} className="rounded-xl  bg-slate-200 p-3 overflow-hidden shadow-lg">
                      <div className="px-1 py-2">
                          <div className="my-2 font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                              <h2>Anatomy</h2>
                          </div>
                          <ul className="w-full">
                            <li className="flex items-center gap-2 my-3">
                                <span><IoTimeSharp /></span>
                                <h3 className="text-sm">50 Questions For Free Plan</h3>
                            </li>
                            <li className="flex items-center gap-2 my-3">
                                <span><IoTimeSharp /></span>
                                <h3 className="text-sm">50 Questions For Free Plan</h3>
                            </li>
                            <li className="flex items-center gap-2 my-3">
                                <span><IoTimeSharp /></span>
                                <h3 className="text-sm">50 Questions For Free Plan</h3>
                            </li>
                          </ul>
                      </div>
                      <div className="px-2 gap-3 py-1 flex flex-col items-center">
                          <Link href="/pages/Exam-details" className="text-center border-2 border-black bg-black text-white  p-2 w-full rounded-xl">Start Your Test Now </Link>
                      </div>
                  </div>
                  )
              })
              }
          </div>
        </div>
  
   </>
  )
}
export default page