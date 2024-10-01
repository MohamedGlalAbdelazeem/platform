"use client";
import { IoCloseCircleSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

function CheckModel({ closeModal , mainMess }) {
  return (
    <div className="fixed inset-0 p-5 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.89)] overflow-auto">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        <IoCloseCircleSharp
          onClick={closeModal} // Close modal on clicking the close icon
          className="text-secondary cursor-pointer text-3xl float-right"
        />
        <div className="my-8 flex items-center justify-center flex-col text-center">
          <Image
            src="/login.png"
            alt="Banner image"
            width={"140"}
            height={"140"}
            className="rounded-full bg-[#EC8AB3] p-5"
          />
          <h4 className="text-[20px] text-textColor font-bold mt-4">
            {mainMess}
          </h4>
          <p className="text-sm text-gray-900 leading-relaxed mt-4">
            You need to be logged in to upload your courses. If you don’t have an account yet, creating one is quick and easy!
          </p>
        </div>
        <Link href="/sign-in" className="py-2 rounded-xl text-white text-sm border-none outline-none bg-btnColored">
          <div className="w-full bg-btnColored text-center py-2 text-base font-normal rounded-xl">
            Login
          </div>
        </Link>
        <div>
          <span className="flex justify-center items-center text-center mt-5">
            Don’t have an account?
            <Link href="/sign-up" className="font-bold ml-1 underline">
              Join Now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CheckModel;
