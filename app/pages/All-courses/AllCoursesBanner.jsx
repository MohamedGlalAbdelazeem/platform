"use client";
import {  useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CheckModel from "@/app/_components/CheckModel";
import useCheckUser from "@/app/_utils/useCheckUser";
function AllCoursesBanner() {
  const { checkUser, isModalVisible, closeModal } = useCheckUser();
  return (
    <div className="relative bg-gray-300 p-2 flex items-center justify-center h-[406px]">
      <div className="absolute inset-0 bg-[#1f0c30f4] opacity-90 z-10"></div>
      <Image
        src="/Banner.jpg"
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        className="z-0"
      />
      <div className="z-10 text-center max-w-5xl mt-10 max-md:max-w-md mx-auto">
        <div>
          <h2 className="lg:text-4xl mt-5 font-bold sm:text-lg  text-fontColor">
            Explore Our Medical Courses
          </h2>
          <p className="text-white mt-3 lg:text-lg sm:text-base leading-relaxed">
            Enhance your medical expertise with courses designed for healthcare professionals and students. Dive deeper into specific fields or explore new topics with expert-led learning experiences. Plus, you can upload your own courses to share your knowledge with others
          </p>
          <div className="mt-2 flex items-center justify-center max-sm:flex-col">
            <button
              type="button"
              onClick={() => checkUser("/pages/Upload-courses")}
              className="hover:bg-transparent text-fontColor transition-all font-bold text-lg rounded px-2 py-3"
            >
              Upload Your Course
            </button>
            {isModalVisible && (
                <CheckModel
                  mainMess={"Please Log In or Sign Up to Join"}
                  closeModal={closeModal}
                />
              )}
            <FaArrowRightLong className="text-fontColor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCoursesBanner;
