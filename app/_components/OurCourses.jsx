import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import MainHeading from "./MainHeading";
function OurCourses() {
  return (
<div className="w-10/12 sm:w-full mx-auto my-32">
    <MainHeading title={"Our Courses"} desc={"Explore Our Top Medical Courses"}/>
    <div className="max-w-screen-lg mx-auto my-6">
        <div className="flex flex-wrap gap-1 justify-center items-center ">
            {["A", "v", "f", "A", "v", "f"].map((item, index) => (
                <div key={index} className="rounded-3xl p-2 my-5 mx-1 overflow-hidden shadow-lg w-[330px] bg-slate-50">
                    <div className="relative">
                        <img
                            className="w-[315px] h-[198px] rounded-b-[36px] rounded-t-[15px]"
                            src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Sunset in the mountains"/>
                        <div className="w-full h-10 flex justify-center items-center">
                            <div className="flex w-[260px]  justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4  bg-secondary text-white text-[12px]  duration-500 ease-in-out">
                                <span className="flex items-center gap-2">
                                    <p>Cardiology</p>
                                    <BsArrowDownRightCircleFill />
                                </span>
                                <span className="flex items-center gap-2">
                                    <p>Cardiology</p>
                                    <BsArrowDownRightCircleFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-6">
                        <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2 className="text-[17px] font-normal">Advanced Cardiology</h2>
                            <h3 className="text-[17px] text-textColor font-bold">20$</h3>
                        </div>
                        <p className="text-gray-500 my-2 text-sm">
                            Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                        </p>
                        <span className="text-sm">Dr. Ahmed El-Sharif</span>
                    </div>
                    <div className="px-6 py-2 flex flex-row items-center">
                        <button className="text-[12px] bg-bgFontColor text-white p-3 w-full rounded-3xl">Enroll Now</button>
                    </div>
                    <div className="px-6 gap-3 py-2 flex flex-row items-center">
                        <button className="border-2 border-textColor text-[12px] text-textColor p-3 w-full rounded-3xl">See More</button> 
                    </div>
                </div>
            ))}
        </div>
    </div>
    <div className="mx-auto w-full flex justify-center">
        <a href="#" className=" rounded-xl flex items-center  text-textColor gap-3 text-center p-2 text-lg border-2 border-textColor">
            Show All Courses 
            <FaArrowRightLong  className="text-textColor"/>
         </a>
    </div>
</div>
  )
}

export default OurCourses