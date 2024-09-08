import { FaHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function Blogs() {
  return (
    <div className="w-10/12 sm:w-full mx-auto my-32">
    <div className="lg:w-[480px]  max-w-md sm:max-w-full mx-auto my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
        <h3 className="mx-2 text-center capitalize text-2xl sm:text-xl font-normal">Our Blogs</h3>
    </div>
        <h1 className='text-center text-3xl font-bold'>Explore Our Top Blogs</h1>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="  grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
            ["A","v","f","A","v","f"].map((item, index)=>{
                return(
                    <div key={index} className=" rounded-3xl  p-3 overflow-hidden shadow-lg">
                    <div className="relative ">
                            <img className="w-full rounded-b-[20px] rounded-t-[30px] "
                                src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Sunset in the mountains" />
                    </div>
                    <div className="px-2 py-4">
                        <div className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2>Innovations in Medical Learning</h2>
                        </div>
                        <p className="leading-6 text-gray-500 my-1 text-sm">
                        Stay ahead in the world of medicine with expert articles, the latest research updates, and insights into cutting-edge medical advancements...                        </p>
                    </div>
                    <div className="px-6 gap-3 py-1 flex flex-row items-center">
                        <button className="border-2 border-black  p-3 w-full rounded-3xl">See More</button>
                        <span className="bg-slate-500 p-3 rounded-full"> <FaHeart className="text-red-500 text-2xl" /> </span>
                    </div>
                </div>
                )
            })
            }
        </div>
    </div>
    <div className="mx-auto w-full flex justify-center">
        <a href="#" className="flex items-center  gap-3 text-center p-2 text-lg border-2 border-black">
            Show All Blogs 
            <FaArrowRightLong />
         </a>
    </div>
    </div>
  )
}

export default Blogs