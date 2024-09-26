import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";

function MyUploadedCourses() {
  return (
    <div className="max-w-screen-xl mx-auto p-2 sm:p-5 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {[ "A", "v", "f"].map((item, index) => (
           <div key={index} className="rounded-3xl p-1 overflow-hidden shadow-xl w-[337px]">
                <div className="relative">
                    <img
                        className="w-[315px] h-[198px] rounded-b-[15px] rounded-t-[15px]"
                        src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg"
                        alt="Sunset in the mountains"/>
                </div>
                <div className="flex items-center justify-evenly px-6 my-2">
                <span className="flex items-center text-secondary gap-2 ">
                    <FaRegUser />
                    22
                </span>
                <span className="flex items-center text-secondary gap-2 ">
                <FaMoneyBills />
                    500$
                </span>
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
              <div className="px-6 py-2 flex flex-row items-center gap-3">
                  <button className="flex items-center justify-center gap-2 text-[13px] border-2 border-bgFontColor text-bgFontColor p-3 w-full rounded-xl">
                  <TbEdit />
                    Edit
                </button>
                <button className="flex items-center justify-center gap-2 text-[13px] border-2 border-red-600 text-red-600 p-3 w-full rounded-xl">
                <RiDeleteBin6Line />
                    Delete
                </button> 
              </div>
              <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <div class="my-4 text-center">
                      <RiDeleteBin6Line className="w-full mx-auto text-[55px] fill-red-500 " />
                    <h4 class="text-textColor text-xl font-bold mt-4">Need to Delete Your Course?</h4>
                    <p className="my-6 font-normal">If you wish to permanently delete your course, please contact us at </p>
                    <span className="w-full my-6">
                        <h1 className="mx-auto">00201015800248</h1>
                    </span>
                    <div class="text-center space-x-4 mt-8">
                        <p>Once the course is deleted, it will be removed from the platform for all users, including those currently enrolled. All enrolled users will receive a full refund. Please reach out to proceed with this action.</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        ))}
    </div>
  </div>
  )
}

export default MyUploadedCourses