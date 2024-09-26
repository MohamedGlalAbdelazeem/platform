"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from "next/link";


function AllCoursesBanner() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleUploadClick = () => {
    if (!token) {
      setIsModalVisible(true);
    } else {
      console.log("Proceed to course upload...");
    }
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

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
              onClick={handleUploadClick}
              className="hover:bg-transparent text-fontColor transition-all font-bold text-lg rounded px-2 py-3"
            >
              Upload Your Course
            </button>
            <FaArrowRightLong className="text-fontColor" />
          </div>
        </div>
      </div>
      {isModalVisible && (
        <div className= " fixed inset-0 p-5 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.89)] overflow-auto">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <IoCloseCircleSharp  onClick={closeModal} className="text-secondary cursor-pointer  text-3xl float-right" />
            <div className="my-8 flex items-center justify-center flex-col text-center">
              <Image
                    src="/login.png"
                    alt="Banner image"
                    width={"140"}
                    height={"140"}
                    className="rounded-full bg-[#EC8AB3] p-5"
                />
              <h4 className="text-[20px] text-textColor font-bold mt-4">
              Please Log In or Sign Up to Upload Courses
              </h4>
              <p className="text-sm text-gray-900 leading-relaxed mt-4">
              You need to be logged in to Upload Your Courses. If you don’t have an account yet, creating one is quick and easy!
              </p>
            </div>
              <Link
                href={"/sign-in"}
                className="py-2  rounded-xl text-white text-sm border-none outline-none bg-[#984D9F]">
                 <div className="w-full bg-[#984D9F] text-center py-2 text-base font-normal rounded-xl">
                  Login 
                </div>
              </Link>
              <div>
                <span className="flex justify-center items-center text-center mt-5">
                Don’t have an account?
                 <Link href={'/sign-up'} className="font-bold ml-1 underline"> Join Now</Link>
                </span>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllCoursesBanner;
