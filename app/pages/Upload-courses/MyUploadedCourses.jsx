import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import DeleteModel from "./DeleteModel";

function MyUploadedCourses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-screen-xl mx-auto p-2 sm:p-5 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {["A", "v", "f"].map((item, index) => (
          <div key={index} className="rounded-3xl p-1 overflow-hidden shadow-xl w-full sm:w-auto">
            <div className="relative">
              <img
                className="w-full h-[200px] sm:h-[250px] md:h-[198px] object-cover rounded-b-[15px] rounded-t-[15px]"
                src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg"
                alt="Sunset in the mountains"
              />
            </div>
            <div className="flex items-center justify-between px-4 sm:px-6 my-2">
              <span className="flex items-center text-secondary gap-2">
                <FaRegUser />
                22
              </span>
              <span className="flex items-center text-secondary gap-2">
                <FaMoneyBills />
                500$
              </span>
            </div>
            <div className="px-4 sm:px-6">
              <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                <h2 className="text-[16px] md:text-[17px] font-normal">Advanced Cardiology</h2>
                <h3 className="text-[16px] md:text-[17px] text-textColor font-bold">20$</h3>
              </div>
              <p className="text-gray-500 my-2 text-sm">
                Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
              </p>
              <span className="text-sm">Dr. Ahmed El-Sharif</span>
            </div>
            <div className="px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center gap-3">
              <button className="flex items-center justify-center gap-2 text-[13px] border-2 border-bgFontColor text-bgFontColor p-2 sm:p-3 w-full rounded-xl">
                <TbEdit />
                Edit
              </button>
              <button
                className="flex items-center justify-center gap-2 text-[13px] border-2 border-red-600 text-red-600 p-2 sm:p-3 w-full rounded-xl"
                onClick={openModal}
              >
                <RiDeleteBin6Line />
                Delete
              </button>
            </div>
          </div>
        ))}
        {isModalOpen && <DeleteModel closeModal={closeModal} />}
      </div>
    </div>
  );
}
export default MyUploadedCourses;
