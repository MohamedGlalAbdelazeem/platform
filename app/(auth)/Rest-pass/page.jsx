"use client";
import { RestPassValidation } from "../Validation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

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
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          <img src="" alt="Reset password" className="w-full h-full object-cover" />
        </div>

        <form className="sm:p-8 my-16 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center my-10 w-full mx-auto">
            <h3 className="text-blue-500 text-2xl font-extrabold max-md:text-center">Reset Your Password!</h3>
          </div>
          <p>You’ve successfully verified your identity. Now you can reset your password.</p>

          {success && <p className="text-green-600 mt-4">{success}</p>}

          {/* New Password */}
          <div className="my-6 grid lg:grid-cols-1 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">New Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("password")}
                  className={`bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600 ${errors.password ? 'border-red-500' : ''}`}
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
              <label className="text-gray-800 text-sm mb-2 block">Confirm New Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className={`bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600 ${errors.confirmPassword ? 'border-red-500' : ''}`}
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
              className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
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
