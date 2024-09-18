"use client"
import { toast } from "react-toastify";
import { z } from "zod";
import Link from 'next/link';
import { useState } from 'react';
import { FaAnglesLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import axiosClient from "@/app/_utils/axiosClient";
function Page() {
 

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
 
  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, jobTitle, phoneNumber, email, password, confirmPassword } = formData;

    // Basic validation
    if (!fullName || !phoneNumber || !email || !password || !confirmPassword) {
      setError('Please fill all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axiosClient.post('/User/register', {
        fullName,
        jobTitle,
        phoneNumber,
        email,
        password,
      });
      if (response.statusText === "OK") {
        router.push("/"); 
        console.log(response);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          {/* Replace with actual image */}
          image
        </div>
        <form className="sm:p-8 w-full" onSubmit={handleSubmit}>
          <Link href={"/"} className="font-bold text-sm flex items-center gap-2 hover:opacity-65">
            <FaAnglesLeft />
            Back to home
          </Link>
          <div className="text-center my-4 w-full mx-auto">
            <span>Welcome to</span>
            <h3 className="text-blue-500 text-xl font-extrabold max-md:text-center">MedLearn Hub</h3>
          </div>
          
          {/* Fullname */}
          <div className="grid lg:grid-cols-1 my-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Full Name *</label>
              <input 
                name="fullName" 
                type="text" 
                value={formData.fullName}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" 
                placeholder="Ex: Hisham Hassan" 
              />
            </div>
          </div>

          {/* Job Title & Phone Number */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Job Title</label>
              <input 
                name="jobTitle" 
                type="text" 
                value={formData.jobTitle}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" 
                placeholder="Ex: Instructor" 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Phone Number *</label>
              <input 
                name="phoneNumber" 
                type="text" 
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" 
                placeholder="Ex: 010 15 800 24 8" 
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid lg:grid-cols-1 my-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email *</label>
              <input 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" 
                placeholder="Your Email here" 
              />
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password *</label>
              <div className="relative flex items-center">
                <input 
                  name="password" 
                  type="password" 
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" 
                  placeholder="***************" 
                />
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password *</label>
              <div className="relative flex items-center">
                <input 
                  name="confirmPassword" 
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" 
                  placeholder="***************" 
                />
              </div>
            </div>
          </div>

          {/* Privacy & Submit */}
          <div className="flex items-center mt-6">
            <input 
              id="remember-me" 
              name="remember-me" 
              type="checkbox" 
              className="h-4 w-4 shrink-0 rounded" 
            />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              By creating an account on MedLearn Hub, you agree to our Privacy Policy. Please read these terms carefully.
            </label>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}

          {/* Submit Button */}
          <div className="mt-6">
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
            >
              {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
            <div className="w-full flex justify-center my-6">
              <span>Do You have an account? <Link href="/sign-in" className="font-bold border-b-2 border-black">Sign in</Link></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
