"use client"
import { useEffect, useState } from "react";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import MainHeading from "./MainHeading";
import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CheckModel from "./CheckModel"; 
import useCheckUser from "../_utils/useCheckUser";

function OurCourses() {
    const baseUrl = 'http://localhost:5000/api/';
    const { checkUser, isModalVisible, closeModal } = useCheckUser(); 
    const router = useRouter();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${baseUrl}Course`);
                const data = await response.json();
                if (data.isSuccess) {
                    setCourses(data.data);
                } 
            } catch (error) {
                setError("No books add Please Try again");
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);
    if (loading) {
        return <div className="flex justify-center relative  top-2  mx-auto items-center h-96 w-full">
        <div className=" w-20 h-20 border-[10px] border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
      </div>;
    }
    if (error) {
        return <p className="text-center my-20 font-bold text-lg text-red-500">{error}</p>;;
    }
    return (
        <div className="w-10/12 sm:w-full mx-auto my-32">
            <MainHeading title={"Our Courses"} desc={"Explore Our Top Medical Courses"} />
            <div className="max-w-screen-lg mx-auto my-6">
                <div className="flex flex-wrap gap-1 justify-center items-center">
                    {courses.map((course) => (
                        <div key={course.id}
                            className="rounded-3xl p-2 my-5 mx-1 overflow-hidden shadow-lg w-[330px] bg-slate-50" >
                            <div className="relative">
                                <Image
                                    width={"315"}
                                    height={"198"}
                                    className="w-[315px] h-[198px] rounded-b-[36px] rounded-t-[15px]"
                                    src={""}
                                    alt={course.title}/>
                                <div className="w-full h-10 flex justify-center items-center">
                                    <div className="flex w-[260px] justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4 bg-secondary text-white text-[12px] duration-500 ease-in-out">
                                        <span className="flex items-center gap-2">
                                            <p>{course.title}</p>
                                            <BsArrowDownRightCircleFill />
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <p>{course?.durationInhours} h</p>
                                            <IoTimeOutline className="text-lg" />
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <p>{course.title}</p>
                                            <BsArrowDownRightCircleFill />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6">
                                <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                                    <h2 className="text-[17px] font-normal">{course.title}</h2>
                                    <h3 className="text-[17px] text-textColor font-bold">${course.durationInhours}</h3>
                                </div>
                                <p className="text-gray-500 my-2 text-sm">
                                    descriptoin
                                </p>
                            </div>
                            <div className="px-6 py-2 flex flex-row items-center">
                            <button
                                onClick={() => checkUser("/pages/Payment-methods")} 
                                className="text-[12px] hover:opacity-40 bg-bgFontColor text-white p-3 w-full rounded-3xl"
                            >
                                Enroll Now
                            </button>
                            {isModalVisible && (
                                <CheckModel
                                mainMess={"Please Log In or Sign Up to Enroll"}
                                closeModal={closeModal}
                                />
                            )}
                            </div>
                            <div className="px-6 gap-3 py-2 flex flex-row items-center">
                                <button className="border-2 border-textColor text-[12px] text-textColor p-3 w-full rounded-3xl">See More</button> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto w-full flex justify-center">
                <Link href={"/pages/All-courses"} className="rounded-xl hover:opacity-35 flex items-center text-textColor gap-3 text-center p-2 text-lg border-2 border-textColor">
                    Show All Courses
                    <FaArrowRightLong className="text-textColor" />
                </Link>
            </div>
        </div>
    );
}
export default OurCourses;
