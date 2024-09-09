'use client'
import { IoCloseCircle } from "react-icons/io5";
import Link from "next/link";

function RegisterModel({ isLoggedIn, onClose }) {
  return !isLoggedIn && (
    <div className="fixed inset-0 p-5 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 relative">
        <IoCloseCircle  className="text-2xl w-14 cursor-pointer  fill-gray-400 hover:fill-red-500 float-right" onClick={onClose} />
        <div className="my-8 text-center">
          icon
          <h4 className="text-xl text-gray-800 font-semibold my-6">Please Log In or Sign Up to Enroll</h4>
          <p className="text-sm text-gray-500 leading-relaxed my-6">
            You need to be logged in to enroll in this course. If you don’t have an account yet, creating one is quick and easy!
          </p>
        </div>
        <button type="button" onClick={onClose} className="px-5 py-3  w-full rounded-3xl text-white text-lg border-none outline-none bg-gray-800 hover:bg-gray-700">Log In</button>
        <span className="my-6 flex text-center justify-center items-center gap-2">
            <p>Don’t have an account?  </p>
            <Link href="/" className="font-bold"> Join Now</Link>
        </span>
      </div>
    </div>
  );
}
export default RegisterModel;
