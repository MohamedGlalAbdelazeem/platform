'use client';
import ProgressBar from "@ramonak/react-progress-bar";
import CheckModel from "@/app/_components/CheckModel";
import { useRouter } from "next/navigation";
import { useState } from "react";
function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        router.push("/pages/Payment-methods")
    } else {
        setIsModalVisible(true);
    }
  }
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="h-[80px] bg-btnColored"></div>
      <div className="container mx-auto mt-20 px-4 my-10">
        {/* Main Course Details */}
        <div className="my-10 w-full flex flex-col md:flex-row items-center justify-between ">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-bgFontColor text-center md:text-left">
            Trial Lesson: Introduction for Diagnosis and Treatment
          </h2>
          {/* Dynamic Progress */}
          <div className="relative w-full md:w-[250px] h-2 bg-[#F8EDF1] rounded-lg mb-6">
            <ProgressBar completed={80} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
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
              <ul className="p-6 w-full md:w-[440px] space-y-3 font-medium bg-gray-100">
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

          {/* Right Section: Main Video */}
          <div className="w-full md:w-1/2 p-4">
            <video controls controlsList="nodownload" width="100%" height="auto" className="rounded-2xl">
              <source src={""} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className='w-full flex justify-between my-10 gap-6'>
            <div>
                <button  onClick={getToken}  className='text-lg bg-secondary text-white p-1 rounded-lg w-28'>Enroll Now</button>
                {isModalVisible && (
                    <CheckModel mainMess={"Please Log In or Sign Up to Enroll"} closeModal={closeModal} />
                  )}
            </div>
              <div>
                <button className='text-lg mx-1 border-2 border-gray-40 p-1 w-28 rounded-lg'>Prev</button>
                <button className='text-lg mx-1 bg-bgFontColor text-white p-1 rounded-lg w-28'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
