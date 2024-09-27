"use client";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
import axiosClient from "@/app/_utils/axiosClient";
import { toast } from "react-toastify";
import { useState } from "react";
import { SignupValidation } from "../Validation";
import Image  from "next/image";

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupValidation),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);  
    try {
      const response = await axiosClient.post("/User/register", {
        ...data,  
      });
      if (response?.data?.isSuccess) {
        swal("Congratulations!", "Account created and a confirmation email has been sent successfully", "success");
        console.log("Success:", response?.data);
      } else {
        if (response?.data?.status === 106) {
          toast.error("Invalid Phone Number. Format: +[country code][number] (e.g., +1234567890)");
        } else if (response?.data?.status === 101) {
          toast.error("Username 'mohamed_galal' is already taken.");
        }
        toast.error(response?.data?.message || "An error occurred, please try again.");
        console.log("Error:", response?.data);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed. Please try again or contact support.";
      toast.error(errorMessage);
      console.log("Error:", err);
    } finally {
      setIsLoading(false);  
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 p-3 ">
      <div className="rounded-3xl grid md:grid-cols-2 items-center p-5 bg-white max-w-7xl w-full">
        <div className="rounded-3xl  max-md:order-1 flex flex-col justify-center items-center sm:p-8 p-4 bg-gradient-to-b from-bgFontColor to-[#AC59FF] w-full h-full">
        <Image
              src="/signup.svg"
              alt="hero image" 
              srcSet="/signup-2x.png 2x, /signup-3x.png 3x" 
              width={"400"}
              height={"400"}
             />  
        </div>
        <form className="sm:p-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Link href={"/"} className="font-bold text-sm flex items-center gap-2 hover:opacity-65">
            <FaAnglesLeft />
            Back to home
          </Link>
          <div className="text-center w-full mx-auto">
            <span className="text-secondary">Welcome to</span>
            <h3 className="text-bgFontColor text-[24px] font-bold max-md:text-center">MedLearn Hub</h3>
          </div>

          {/* First Name and Last Name */}
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">First Name *</label>
              <input
                {...register("firstName")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div className="mb-6">
              <label className="text-base font-normal mb-2 block text-bgFontColor">Last Name *</label>
              <input
                {...register("lastName")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Job Title & Phone Number */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">Job Title *</label>
              <input
                {...register("role")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder="Ex: Instructor"
              />
            </div>
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">Phone Number *</label>
              <input
                {...register("phoneNumber")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder=" +[country code][number] (e.g.,+1234567890)"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="my-5">
            <label className="text-base font-normal mb-2 block text-bgFontColor">Email *</label>
            <input
              {...register("email")}
              type="email"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
              placeholder="Your Email here"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password & Confirm Password */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">Password *</label>
              <input
                {...register("password")}
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder="***************"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">Confirm Password *</label>
              <input
                {...register("confirmPassword")}
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor"
                placeholder="***************"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          {/* Privacy & Submit */}
          <div className="flex items-center mt-4">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              By creating an account on MedLearn Hub, you agree to our <span className="font-bold text-bgColor underline">Privacy Policy</span>. Please read these terms carefully.
            </label>
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-6 text-lg tracking-wide font-bold rounded-md text-white bg-[#984D9F]"
            >
              {isLoading ? "Signing up..." : "Join Now"}
            </button>
          </div>
          <div className="w-full flex justify-center mt-2">
              <span className="font-bold">
                Do you have an account? 
                <Link
                  href={"/sign-in"}
                  className="ml-2 font-bold underline text-bgColor" >
                     Sign in
                </Link>
              </span>
            </div>
        </form>
      </div>
    </div>
  );
}
export default Page;
