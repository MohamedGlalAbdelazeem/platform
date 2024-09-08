import { FaHeart } from "react-icons/fa";
import { BsArrowDownRightCircleFill } from "react-icons/bs";


function OurCourses() {
  return (
    <div className="w-10/12 sm:w-full mx-auto my-32">
    <div className="lg:w-[480px]  max-w-md sm:max-w-full mx-auto my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
        <h3 className="mx-2 text-center capitalize text-2xl sm:text-xl font-normal">Our Courses</h3>
    </div>
   
        <h1 className='text-center text-3xl font-bold'>Explore Our Top Medical Courses</h1>
    
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {
           ["A","v","f","A","v","f"].map((item, index)=>{
            return(
                <div key={index} className="rounded-t-[10px]  p-3 overflow-hidden shadow-lg">
                <div className="relative ">
                        <img className="w-full rounded-b-[50px] rounded-t-[30px] "
                            src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Sunset in the mountains" />
                        <div className="flex w-full justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-0 left-0 bg-indigo-600  text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            <span><BsArrowDownRightCircleFill /></span>
                            <p>Cardiology</p>
                            <span><BsArrowDownRightCircleFill /></span>
                            <p>Intermediate</p>
                            <span><BsArrowDownRightCircleFill /></span>
                            <p>4.7</p>
                        </div>
                </div>
                <div className="px-6 py-4">
                    <div className="flex justify-between font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                        <h2>Advanced Cardiology</h2>
                        <h3>20$</h3>
                    </div>
                    <p className="text-gray-500 my-2 text-sm">
                      Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                    </p>
                    <span className="text-sm"> Dr. Ahmed El-Sharif</span>
                </div>
                <div className="px-6 py-2 flex flex-row items-center">
                    <button className="bg-gray-500 text-white p-3 w-full rounded-3xl">Enroll Now</button>
                </div>
                <div className="px-6 gap-3 py-2 flex flex-row items-center">
                    <button className="border-2 border-black  p-3 w-full rounded-3xl">See More</button>
                    <span className="bg-slate-500 p-3 rounded-full"> <FaHeart className="text-red-500 text-2xl" /> </span>
                </div>
            </div>
            )
           })
        }
    </div>
</div>
    </div>
  )
}

export default OurCourses