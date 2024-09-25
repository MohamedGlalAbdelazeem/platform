
"use client";
import useCheckUser from "@/app/(auth)/ChekUser";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
function AllCoursesBanner() {
    const handleClicked = useCheckUser(); 
  return (
    <div className="relative bg-gray-300 flex items-center justify-center h-[406px]">
    <div className="absolute inset-0 bg-[#1f0c30f4] opacity-90 z-10"></div>
    <Image
        src="/privacyBanner.jpg"
        alt="privacyBanner image"
        layout="fill"
        objectFit="cover"  
        objectPosition="top left" 
        className="z-0"
    />
  <div className="z-10 text-center max-w-5xl mt-10 max-md:max-w-md mx-auto">
    <div>
      <h2 className=" md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px] text-fontColor">Explore Our Medical Courses</h2>
      <p className="text-white mt-6 text-lg leading-relaxed">
        Enhance your medical expertise with courses designed for healthcare professionals and students. Dive deeper into specific fields or explore new topics with expert-led learning experiences. Plus, you can upload your own courses to share your knowledge with others
      </p>
      <div className="mt-2 flex items-center justify-center max-sm:flex-col">
        <button type="button"
          onClick={handleClicked}   
          className="hover:bg-transparent  text-fontColor transition-all  font-bold text-lg rounded px-2 py-3">
            Upload Your Course
          </button>
          <FaArrowRightLong className="text-fontColor" />
      </div>
  </div>
 </div>
</div>
  )
}

export default AllCoursesBanner