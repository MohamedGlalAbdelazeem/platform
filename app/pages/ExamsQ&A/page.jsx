 
import Banner from "../../_components/Banner";
import { FaSearch } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import Link from "next/link";



function page() {
  return (
   <>
   <div className="py-4">
   <Banner 
    title={"Test Your Knowledge with MedLearn Hub"}
    body={"At MedLearn Hub, we believe in continuous learning and assessment to help you master your field. Our Tests and Questions section is designed to evaluate your knowledge across various medical subjects through structured multiple-choice questions (MCQs). Whether you’re a medical professional or a student, our tests help you gauge your understanding and track your progress."}
   />
   </div>
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
                          <Link href="/pages/Exam-details" className="text-center border-2 border-black bg-black text-white  p-2 w-full rounded-xl">Start Your Free Test  </Link>
                          <button className="border-2 border-black  p-2 w-full rounded-xl"> Go To Premium  </button>
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