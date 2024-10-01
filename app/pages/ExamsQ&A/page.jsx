import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import ExamBanner from "./ExamBanner";
import ExamFilter from "./ExamFilter";



function page() {
  return (
   <>
    <ExamBanner/>
     {/* filteration  */}
     <ExamFilter/>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="  grid grid-cols-1  lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2  gap-6">
              {
              ["A","v","A","v","f","A","f","A"].map((item, index)=>{
                  return(
                      <div key={index} className="rounded-xl   p-3 overflow-hidden shadow-lg">
                      <div className="px-1 py-2">
                          <div className="my-2 font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                              <h2>Anatomy</h2>
                          </div>
                          <ul className="w-full">
                            <li className="flex items-center gap-2 my-3">
                                <span><FaCircleCheck className="text-secondary" /></span>
                                <h3 className="text-sm">50 Questions For Free Plan</h3>
                            </li>
                            <li className="flex items-center gap-2 my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#CC775D" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z"/></svg>
                                <h3 className="text-sm">Intermediate</h3>
                            </li>
                            <li className="flex items-center gap-2 my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26"><path fill="#CC775D" d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2s1.218-.9 1.218-2s-.418-2-1.218-2"/></svg>                                <h3 className="text-sm">+50 Questions For Premium</h3>
                            </li>
                          </ul>
                      </div>
                      <div className="px-2 gap-3 py-1 flex flex-col items-center">
                          <Link href="/pages/Exam-details" className="text-center  bg-btnColored text-white  p-2 w-full rounded-lg">Start Your Free Test  </Link>
                          <button className="border-2 border-btnColored text-btnColored  p-2 w-full rounded-lg"> Go To Premium </button>
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