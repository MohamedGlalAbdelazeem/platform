"use client";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
import axiosClient from "@/app/_utils/axiosClient";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(5, "Password must be at least 5 characters")
});

function Page() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (formData) => {
    try {
      const response = await axiosClient.post("/User/login", formData);
      if (response.data.isSuccess) {
        toast.success("Login successfully");
        router.push("/"); 
        console.log("success", response);
        const token =  response?.data?.token
        localStorage.setItem('token' , token );
      } else {
        toast.error(response?.data?.message)
        console.log("error", response?.data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          image
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
            <span>Welcome to</span>
            <h3 className="text-blue-500 text-2xl font-extrabold max-md:text-center">
              MedLearn Hub
            </h3>
          </div>
          {/* Email Input */}
          <div className="grid lg:grid-cols-1 my-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
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
              <label className="text-gray-800 text-sm mb-2 block">
                Password *
              </label>
              <div className="relative flex items-center">
                <input
                  {...register("password")}
                  type="password"
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
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
              className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
              Sign In
            </button>
            <div className="w-full flex justify-center my-6">
              <span>
                Don’t have an account?{" "}
                <Link
                  href={"/sign-up"}
                  className="ml-2 font-bold border-b-2 border-black">
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
