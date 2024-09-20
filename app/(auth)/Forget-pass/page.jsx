"use client";
import Link from 'next/link';
import { FaAnglesLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import axios from "axios";

function Page() {
  const baseUrl = "http://localhost:5000/api/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}User/forgot-password`, {
        email: data.email,
      });

      if (res.data.isSuccess) {
        toast(res.data?.message, { type: "success" });
        reset();
        console.log("success",res.data?.message);
        
      } else {
        toast(res?.data?.message, { type: "error" });
        console.log(res?.data?.message);
        console.log("error",res);
      }
    } catch (error) {
      toast("Something went wrong, please try again.", { type: "error" });
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.5)] rounded-3xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          image
        </div>
        
        {/* Form with react-hook-form */}
        <form onSubmit={handleSubmit(onSubmit)} className="sm:p-8 my-6 w-full px-6">
          <Link href={"/"} className="font-bold flex items-center gap-2 hover:opacity-65">
            <FaAnglesLeft />
            Back to home
          </Link>
          <div className="text-center my-10 w-full mx-auto ">
            <h3 className="text-blue-500 my-4 text-2xl font-extrabold max-md:text-center">
              Forget Password?
            </h3>
            <span>Don’t Worry</span>
          </div>
          <p>Please enter the email address associated with your account, and we will send you a code to your email to reset your password.</p>
          
          <div className="grid lg:grid-cols-1 my-6">
            <div>
              <label className="text-gray-800 text-base mb-4 block">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                name="email"
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="user@example.com"
              />
              {/* Show validation errors */}
              {errors.email && (
                <span className="text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center font-bold mt-6">
            <Link href={"/sign-in"}>Remember Your Password?</Link>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
            >
              Send Reset Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
