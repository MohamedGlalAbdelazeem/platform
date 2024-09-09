import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";


function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row-reverse  justify-around flex-wrap mt-14">
    
      {/* course video */}
        <div className="w-[335px]  px-4 mb-8">
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
      {/* Course video: */}

        {/* Course Content: */}
        <div className="w-full md:w-1/2 ">
          <h2 className="text-2xl font-bold mb-2">Advanced Cardiology: Diagnosis and Treatment</h2>
          <h3 className="font-bold mb-4">What You Will Learn:</h3>
          <p className="text-sm leading-8 ">Experience premium sound quality and industry-leading noise cancellation
          Gain in-depth knowledge of cardiovascular diseases, diagnostic techniques, and treatment methods. This course is designed for medical professionals looking to specialize in cardiology or enhance their understanding of heart-related conditions.
        </p>

         <div>
            <ul className="list-disc list-inside text-gray-700">
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
        
            
                <div className="my-9">
                  <h1 className="font-bold text-2xl my-6">Course Content:</h1>
                 <ol className="list-decimal">
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
               
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
               
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
                        <li className="my-6">
                            Module 1: Introduction to Cardiovascular System
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Understand the anatomy and physiology of the heart</li>
                                <li>Learn how to interpret ECGs and other diagnostic tools</li>
                                <li>Explore treatment options for common cardiovascular diseases</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </li>
                </ol>
            </div>
        </div>
         {/* Course Content: */}

        {/* Course Preview: */}
        <section className="bg-white px-4 py-12 md:py-24">
            <div className="max-w-screen-xl mx-auto">
                <div className="my-5 flex flex-wrap justify-between items-center">
                    <h3 className="text-xl font-bold">
                    Course Preview:
                    </h3>
                    <Link href="/" className="font-bold flex items-center gap-4">
                    See All Reviews <FaArrowRightLong />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
                {["a", "f", "f", "r", "a", "f", "f", "r"].map((item, index) => (
                    <div key={index} className="bg-gray-200 rounded-lg p-5">
                    <p className="mb-2 text-sm font-bold leading-7 line-clamp-5">
                        I recently completed the Advanced Cardiology: Diagnosis and Treatment course, and it exceeded all my expectations. The content was detailed yet easy to follow see more
                    </p>
                    <PiStarThin className="mb-2" />
                    <span>Hisahsm Mosa</span>
                    </div>
                ))}
                </div>
            </div>
            </section>
         {/* Course Preview: */}

      </div>
    </div>
  )
}

export default page