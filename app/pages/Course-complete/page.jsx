'use client';
import { IoArrowForwardSharp } from "react-icons/io5";

import ProgressBar from "@ramonak/react-progress-bar";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Page() {
  const score = "70%";
  return (
    <>
    <div className="h-[80px] bg-[#1f0c30f4]">
    </div>
     <div className="container mx-auto px-4 my-20">
      <div className="my-10 w-full flex items-center justify-between">
        <h2 className="text-xl font-bold mb-4 text-bgFontColor">Advanced Cardiology: Diagnosis and Treatment</h2>
        {/* Dynamic Progress */}
        <div className="relative w-[400px] h-1 bg-gray-200 rounded-lg mb-6">
          <ProgressBar completed={100}  />
        </div>
      </div>


      <div className="flex flex-col justify-around md:flex-row gap-5">
        {/* Left Section: Course Lessons and Exam */}
        <div className="w-full md:w-1/2 ">
            {/* Course lessons */}
            <div className="mb-1">
              <ul className="mt-5 p-6 w-full md:w-[440px] space-y-3 font-medium bg-gray-50">
                {["a", "f", "e", "e", "f", "a", "f", "e", "e", "f"].map((item, index) => {
                  return (
                    <li key={index} className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="#fd3fc1" d="M20.79 5.72a4.1 4.1 0 0 0-2.92-1.21H8.66a4.12 4.12 0 0 0-2.92 1.22a.3.3 0 0 0-.07.08l-3.08 4.21a3.66 3.66 0 0 0-.59 2a3.74 3.74 0 0 0 .61 2l3.06 4.17l.07.09a4.1 4.1 0 0 0 2.92 1.21h9.21A4.13 4.13 0 0 0 22 15.36V8.59a4.1 4.1 0 0 0-1.21-2.87m-3.56 4.94l-3.92 3.92c-.16.161-.35.29-.56.38a1.67 1.67 0 0 1-1.34 0a1.8 1.8 0 0 1-.57-.38L8.9 12.64a1.004 1.004 0 0 1 1.42-1.42l1.76 1.77l3.74-3.74a1 1 0 1 1 1.41 1.41" />
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-lg">Lesson one</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Course exam */}
            <div className="mb-6">
              <ul className="p-3 w-full md:w-[440px] space-y-3 font-medium bg-gray-100">
                {["a"].map((item, index) => {
                  return (
                    <li key={index} className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <g fill="none" stroke="#fd3fc1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25">
                            <path d="M21.25 12v3.38a3.38 3.38 0 0 1-3.38 3.382H8.661a3.38 3.38 0 0 1-2.389-.992L3.22 13.6a2.96 2.96 0 0 1 0-3.2l3.054-4.17a3.38 3.38 0 0 1 2.39-.992h9.206a3.38 3.38 0 0 1 3.38 3.382z" />
                            <path d="m9.61 11.905l1.946 1.946a.735.735 0 0 0 1.047 0l3.922-3.921" />
                          </g>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-lg">Course Exam</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        {
          score >= "80%" ? 
        (
        <div className="flex flex-col w-full md:w-1/2 items-start ">
            <h2 className='my-2 font-bold text-2xl text-textColor'>Congratulations on Completing the Course!</h2>
            <p className='my-2 leading-7'>Well done! You’ve successfully completed the course [Course Name]. Your dedication and effort have paid off, and we’re thrilled to see your progress. Below is your exam score and a link to download your official certificate of completion.</p>
            <span className='my-2'>You scored: 90 %</span>
            <button className='font-bold text-bgFontColor my-3 flex items-center gap-1'>
              download Your Certificate
            <FaArrowRight />
            </button>
          </div>
          ) : 
          (
        <div className="flex flex-col w-full md:w-1/2 ">
          <h2 className='my-2 font-bold text-2xl'>Keep Going!</h2>
          <p className='my-2 leading-7'>You’ve completed the course [Course Name], but don’t worry if you didn’t pass the final exam this time. Every learning journey comes with challenges, and this is just one step toward your success. Review the material and try again when you're ready — we believe in your ability to succeed!</p>
          <span className='my-2 font-bold'>You scored: 40 %</span>
          <Link href={""} className='font-bold text-[#984D9F] flex items-center gap-2'>
              Try Again
              <IoArrowForwardSharp />
            </Link>
        </div>
          )}
      </div>
    </div>
    </>  
  );
}
export default Page;
