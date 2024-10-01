"use client"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as z from "zod";


const ResetPassSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(100, "Password must not exceed 100 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters long."),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match.",
});

function Page() {
  const baseUrl = "http://localhost:5000/api/";
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ResetPassSchema),
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailFromParams = urlParams.get("email");
    const tokenFromParams = urlParams.get("token");
    
    console.log("Email from URL:", emailFromParams); 
    console.log("Token from URL:", tokenFromParams); 
    
    setEmail(emailFromParams);
    setToken(tokenFromParams);
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
       `${baseUrl}User/reset-password`,
        {
          email: email,
          token: token,
          newPassword: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res);
        router.push("/sign-in");
        toast.success("Your password has been reset successfully!");
      }
    } catch (error) {
      console.log(error.response.data);
    } 
  };

  return (
    <div className="flex flex-col justify-center items-center lg:h-screen p-5">
      <div className="grid md:grid-cols-2 items-center gap-y-8 p-4 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
        <div className="rounded-3xl max-md:order-1 flex flex-col justify-center items-center sm:p-8 p-4 bg-gradient-to-b from-bgFontColor to-[#AC59FF] w-full h-full">
          <Image
            src="/forgetpass1.svg"
            alt="hero image"
            srcSet="/forgetpass2-2x.png 2x, /forgetpass2-3x.png 3x"
            width={"300"}
            height={"300"}
            className="absolute top-[160px] hidden lg:block"
          />
          <Image
            src="/forgetpass2.svg"
            alt="hero image"
            srcSet="/forgetpass2-2x.png 2x, /forgetpass2-3x.png 3x"
            width={"300"}
            height={"300"}
            className="relative"
          />
        </div>

        <form className="sm:p-8 my-16 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center my-10 w-full mx-auto">
            <h3 className="text-bgFontColor text-2xl font-bold max-md:text-center">
              Reset Your Password!
            </h3>
          </div>
          <div className="my-6 grid lg:grid-cols-1 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">
                New Password
              </label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("password")}
                  className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="******"
                />
              </div>
              {errors.password && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="my-6 grid lg:grid-cols-1 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">
                Confirm New Password
              </label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  placeholder="******"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 text-lg tracking-wide font-bold rounded-md text-white bg-btnColored focus:outline-none transition-all"
              disabled={!email || !token} // Disable button until email and token are set
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Page;
