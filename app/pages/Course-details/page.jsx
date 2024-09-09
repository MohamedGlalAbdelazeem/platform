import MultiRangeSlider from "multi-range-slider-react";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

function page() {
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-row-reverse  justify-around flex-wrap mt-14">
        <div class="w-[335px]  px-4 mb-8">
            <div  className="rounded-3xl p-3 overflow-hidden shadow-lg">
                        <div className="relative">
                            <img
                                className="w-full rounded-b-[50px] rounded-t-[30px]"
                                src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg"
                                alt="Sunset in the mountains"
                            />
                            <div className="flex w-full justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-0 left-0 bg-indigo-600 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                <span><BsArrowDownRightCircleFill /></span>
                                <p>Cardiology</p>
                                <span><BsArrowDownRightCircleFill /></span>
                                <p>Intermediate</p>
                                <span><BsArrowDownRightCircleFill /></span>
                                <p>4.7</p>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                                <h2>Advanced Cardiology</h2>
                                <h3>20$</h3>
                            </div>
                            <p className="text-gray-500 my-2 text-sm">
                                Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                            </p>
                            <span className="text-sm">Dr. Ahmed El-Sharif</span>
                        </div>
                        <div className="px-6 py-2 flex flex-row items-center">
                            <button className="bg-gray-500 text-white p-3 w-full rounded-3xl">Enroll Now</button>
                        </div>
                        <div className="px-6 gap-3 py-2 flex flex-row items-center">
                            <button className="border-2 border-black p-3 w-full rounded-3xl">See More</button>
                            <span className="bg-slate-500 p-3 rounded-full">
                                <FaHeart className="text-red-500 text-2xl" />
                            </span>
                        </div>
            </div>
        </div>
  
        <div class="w-full md:w-1/2 ">
          <h2 class="text-2xl font-bold mb-2">Advanced Cardiology: Diagnosis and Treatment</h2>
          <h3 class="font-bold mb-4">What You Will Learn:</h3>
          <p class="text-sm leading-8 ">Experience premium sound quality and industry-leading noise cancellation
          Gain in-depth knowledge of cardiovascular diseases, diagnostic techniques, and treatment methods. This course is designed for medical professionals looking to specialize in cardiology or enhance their understanding of heart-related conditions.
        </p>

         <div>
            <ul class="list-disc list-inside text-gray-700">
              <li>Understand the anatomy and physiology of the heart</li>
              <li>Learn how to interpret ECGs and other diagnostic tools</li>
              <li>Explore treatment options for common cardiovascular diseases</li>
              <li>Speak-to-chat technology</li>
            </ul>
          </div>

          <div className="mt-11">
             <h2 className="leading-10 mt-5 font-bold text-2xl">Course Requirements:</h2>
             <p>Basic knowledge of human anatomy and physiology
                Familiarity with medical terminology
                Access to ECG reading tools (recommended but not mandatory)
            </p>
          </div>
        
                {/* Module 1 */}
                <div className="my-9">
                  <h1 className="font-bold text-2xl my-6">Course Content:</h1>
                 <ol class="list-decimal">
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
               
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
               
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
                </ol>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page