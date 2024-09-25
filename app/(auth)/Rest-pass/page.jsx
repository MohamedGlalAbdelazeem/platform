"use client";
import { RestPassValidation } from "../Validation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";

function Page() {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RestPassValidation),
  });

  // You can use useEffect to fetch email and token or set them manually.
  useEffect(() => {
    // Example: fetching email and token from query parameters or local storage
    const urlParams = new URLSearchParams(window.location.search);
    const emailFromParams = urlParams.get("email");
    const tokenFromParams = urlParams.get("token");

    setEmail(emailFromParams || "user@example.com"); // Replace with actual logic
    setToken(tokenFromParams || "12345"); // Replace with actual logic
  }, []);

  const onSubmit = async (data) => {
    try {
      // Ensure email and token are available
      if (email && token) {
        // Send POST request to reset password
        await axios.post("http://localhost:5000/api/User/reset-password", {
          password: data.password,
          confirmPassword: data.confirmPassword,
          email,
          token,
        });

        setSuccess("Your password has been reset successfully!");
      } else {
        console.error("Email or token is missing");
      }
    } catch (err) {
      console.error("Failed to reset the password:", err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center   lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
        <div className="rounded-3xl max-md:order-1 flex flex-col justify-center items-center sm:p-8 p-4 bg-gradient-to-b from-bgFontColor to-[#AC59FF] w-full h-full">
        <Image
              src="/forgetpass1.svg"
              alt="hero image" 
              srcSet="/forgetpass2-2x.png 2x, /forgetpass2-3x.png 3x" 
              width={"300"}
              height={"300"}
              className='absolute top-[160px] hidden lg:block'
             /> 
        <Image
              src="/forgetpass2.svg"
              alt="hero image" 
              srcSet="/forgetpass2-2x.png 2x, /forgetpass2-3x.png 3x" 
              width={"300"}
              height={"300"}
              className='relative'
             />  
        </div>

        <form className="sm:p-8 my-16 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center my-10 w-full mx-auto">
            <h3 className="text-bgFontColor text-2xl font-bold max-md:text-center">Reset Your Password!</h3>
          </div>
          <p>You’ve successfully verified your identity. Now you can reset your password.</p>

          {success && <p className="text-green-600 mt-4">{success}</p>}

          {/* New Password */}
          <div className="my-6 grid lg:grid-cols-1 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">New Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("password")}
                  className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="******"
                />
              </div>
              {errors.password && (
                <p className="text-red-600 mt-1 text-sm">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="my-6 grid lg:grid-cols-1 gap-6">
            <div>
              <label className="text-base font-normal mb-2 block text-bgFontColor">Confirm New Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-bgColor ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  placeholder="******"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600 mt-1 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 text-lg  tracking-wide font-bold rounded-md text-white bg-[#984D9F] focus:outline-none transition-all"
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
