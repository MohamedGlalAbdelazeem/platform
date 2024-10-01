"use client";
import { useEffect, useState } from "react";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import OurCoursesBanner from "./OurCoursesBanner";
import ProgressBar from "@ramonak/react-progress-bar";
import { getUser } from "@/app/_utils/LocalStorage";

function Page() {
  const baseUrl = 'http://localhost:5000/api/'
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = getUser();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${baseUrl}Course/Instructor/${user?.id}`);
        const data = await response.json();
        if (data.isSuccess) {
          setCourses(data.data);
          console.log(data)
        } else {
          setError("Failed to load courses");
        }
      } catch (err) {
        setError("An error occurred while fetching the courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <OurCoursesBanner bg2="#984D9F" bg1="#301a45" />
      <div className="max-w-screen-xl mx-auto sm:p-10 z-[1000]">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 -pt-64">
          {courses.map((course, index) => (
            <div key={index} className="rounded-3xl p-1 overflow-hidden shadow-xl w-[337px]">
              <div className="relative">
                <img
                  className="w-[315px] h-[198px] rounded-b-[36px] rounded-t-[15px]"
                  src={course.thumbnailURL}
                  alt={course.title}
                />
                <div className="w-full h-10 flex justify-center items-center">
                  <div className="flex w-[260px] justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4 bg-secondary text-white text-[12px] duration-500 ease-in-out">
                    <span className="flex items-center gap-2">
                      <p>{course.title}</p>
                      <BsArrowDownRightCircleFill />
                    </span>
                    <span className="flex items-center gap-2">
                      <p>{course.durationInhours} hrs</p>
                      <BsArrowDownRightCircleFill />
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-6">
                <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                  <h2 className="text-[17px] font-normal">{course.title}</h2>
                  <h3 className="text-[17px] text-textColor font-bold">${course.price}</h3>
                </div>
                <p className="text-gray-500 my-2 text-sm">{course.preview}</p>
                <span className="text-sm">Instructor ID: {course.instructorId}</span>
                <div className="my-3">
                  <ProgressBar completed={80} />
                </div>
              </div>
              <div className="px-6 py-2 flex flex-row items-center">
                <button className="text-[12px] bg-textColor text-white p-3 w-full rounded-3xl">Go to Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
