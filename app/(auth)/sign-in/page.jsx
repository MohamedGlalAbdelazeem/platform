"use client";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
import axiosClient from "@/app/_utils/axiosClient";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signinValidation } from "../Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

function Page() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(signinValidation),
  });
  const onSubmit = async (formData) => {
    try {
      const response = await axiosClient.post("/User/login", formData);
      if (response.data.isSuccess) {
        toast.success("Login successfully");
        const token = response?.data?.token;
        const user = response?.data?.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        router.push("/"); 
      } else {
        if (response?.data?.message === "can't find this user name") {
          toast.error("Please enter the email you registered with");
        } else {
          toast.error("Wrong Password");
        }
        console.log("error", response?.data?.data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  
return (
    <div className="flex flex-col justify-center items-center  lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center items-center sm:p-8 p-4 bg-gradient-to-b from-bgFontColor to-[#AC59FF] w-full h-full">
        <Image
              src="/login.png"
              alt="hero image" 
              srcSet="/signup-2x.png 2x, /signup-3x.png 3x" 
              width={"350"}
              height={"300"}
             />  
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 my-6 w-full">
          <Link
            href={"/"}
            className="font-bold flex items-center gap-2 hover:opacity-65"
          >
            <FaAnglesLeft />
            Back to home
          </Link>
          <div className="text-center my-10 w-full mx-auto">
            <span className="text-secondary">Welcome to</span>
            <h3 className="text-bgFontColor text-2xl font-extrabold max-md:text-center">
              MedLearn Hub
            </h3>
          </div>
          {/* Email Input */}
          <div className="grid lg:grid-cols-1 my-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          {/* Password Input */}
          <div className="grid lg:grid-cols-1 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">
                Password *
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("password")}
                  type="password"
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                  placeholder="Enter Password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center mt-6">
            <Link href={"/Forget-pass"} className="font-bold">
              Forget Password?
            </Link>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-6 text-lg tracking-wide font-bold rounded-md text-white bg-[#984D9F] focus:outline-none transition-all">
              Sign In
            </button>
            <div className="w-full flex justify-center my-6 font-bold text-lg">
              <span>
                Don’t have an account?{" "}
                <Link
                  href={"/sign-up"}
                  className="ml-2 font-bold underline text-bgColor">
                  Join Now
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Page;
