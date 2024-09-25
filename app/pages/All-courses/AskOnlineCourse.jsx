"use client";
import { useState } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";

function AskOnlineCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <div
        onClick={openModal}
        className="fixed bottom-20 text-[50px] right-2 cursor-pointer font-bold text-[#984D9F] p-3 rounded-full"
      >
        <RxQuestionMarkCircled />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 p-4 flex flex-wrap justify-end items-end w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto"
          onClick={handleOverlayClick}  // This will close modal on clicking outside
        >
          <div className="w-full bottom-0 right-0  lg:bottom-20 lg:right-20 z-[1000] max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            <div className="flex items-center pb-3  border-gray-300">
              <h3 className="text-[#E2508D] text-center text-xl font-bold flex-1">Ask For Private Online Courses</h3>
            </div>
            <div className="my-6 text-center">
              <p className="text-black  text-base font-normal leading-7">
                Looking for a course that you can't find on our website? No worries! Feel free to contact our admin at 
              </p>
              <span className="font-bold text-[#E2508D] mt-6 text-lg">00201015800248</span>
              <p className="m-4">We’re here to help you find the materials you need!</p>
            </div>

            <div className="border-gray-300 pt-3 flex justify-center">
              <button
                onClick={closeModal}
                type="button"
                className="px-4 py-2 rounded-lg text-white text-base font-bold border-none outline-none tracking-wide bg-[#984D9F]">
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AskOnlineCourse;