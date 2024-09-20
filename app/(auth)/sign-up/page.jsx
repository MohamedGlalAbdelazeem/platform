 "use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import axiosClient from "@/app/_utils/axiosClient";
import { toast } from "react-toastify";
import { useState } from "react";

// Define the validation schema using zod
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must have at least one lowercase letter")
    .regex(/[A-Z]/, "Password must have at least one uppercase letter")
    .regex(/\W/, "Password must have at least one non-alphanumeric character"), // Non-alphanumeric character rule
  confirmPassword: z.string().min(8, "Confirm password is required"),
}).superRefine((data, ctx) => {
  // Custom validation to check if password and confirmPassword match
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords must match",
      path: ["confirmPassword"], // Target confirmPassword field for error
    });
  }
});


function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Initialize the react-hook-form with validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axiosClient.post("/User/register", {
        ...data,
      });

      if (response?.data?.isSuccess) {
        toast.success("Registration successful!");
        //router.push("/");
        console.log("success",response?.data);
        
      } else {
        toast.error("Something went wrong, please try again.");
        console.log("error",response?.data);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 p-6 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          {/* Replace with actual image */}
          image
        </div>
        <form className="sm:p-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Link href={"/"} className="font-bold text-sm flex items-center gap-2 hover:opacity-65">
            <FaAnglesLeft />
            Back to home
          </Link>
          <div className="text-center my-4 w-full mx-auto">
            <span>Welcome to</span>
            <h3 className="text-blue-500 text-xl font-extrabold max-md:text-center">MedLearn Hub</h3>
          </div>

          {/* First Name and Last Name */}
          <div className="grid lg:grid-cols-2 my-6">
            <div className="mb-5">
              <label className="text-gray-800 text-sm mb-2 block">First Name *</label>
              <input
                {...register("firstName")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 my-2 block">Last Name *</label>
              <input
                {...register("lastName")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Job Title & Phone Number */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Job Title</label>
              <input
                {...register("role")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Ex: Instructor"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Phone Number *</label>
              <input
                {...register("phoneNumber")}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Ex: 010 15 800 24 8"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="my-6">
            <label className="text-gray-800 text-sm mb-2 block">Email *</label>
            <input
              {...register("email")}
              type="email"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Your Email here"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password & Confirm Password */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password *</label>
              <input
                {...register("password")}
                type="password"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="***************"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password *</label>
              <input
                {...register("confirmPassword")}
                type="password"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="***************"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          {/* Privacy & Submit */}
          <div className="flex items-center mt-6">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              By creating an account on MedLearn Hub, you agree to our Privacy Policy. Please read these terms carefully.
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
