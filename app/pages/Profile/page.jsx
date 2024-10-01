"use client";
import { z } from 'zod';
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
import axiosClient from "@/app/_utils/axiosClient";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { profilValidation } from '@/app/(auth)/Validation';

function Page({ userId }) {
  const baseUrl = 'http://localhost:5000/api/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profilValidation),
  });

  const onSubmit = async (data) => {
    const { firstName, lastName, phone, email, newPassword, currentPassword } = data;
    try {
      const response = await fetch(`${baseUrl}User/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          currentPassword,
          newPassword,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
      // handle success (e.g., show a notification or redirect the user)
      console.log('User updated successfully');
    } catch (error) {
      // handle error (e.g., show error notification)
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      <div className="bg-bgBanner w-full h-20"></div>
      <section className="mt-16 flex flex-col items-center ">
        {/* User Info Section */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center text-center">
          <img
            className="inline-flex object-cover border-4  rounded-full  h-24 w-24 md:h-32 md:w-32 mb-4 md:mb-0 md:mr-5"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Hesham Hassan"
          />
          <div className="flex flex-col">
            <p className="text-indigo-900 font-bold text-xl">Hesham Hassan</p>
            <p className="text-indigo-300 font-semibold text-center md:text-left">UI / UX Designer</p>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="bg-white shadow-xl w-full md:w-[750px] p-6 mt-8 rounded-lg flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold">$250</h2>
            <span className="text-sm text-gray-600">Available Balance</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link href="/" className="bg-slate-500 text-white p-2 rounded-xl font-semibold">
              Charge Your Wallet
            </Link>
            <Link href="/" className="bg-slate-500 text-white p-2 rounded-xl font-semibold">
              Withdraw Your Money
            </Link>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="flex flex-col items-start w-full md:w-[660px] my-11">
          <h2 className="font-bold mb-6 ml-3 text-xl text-bgColor">Personal Information</h2>
          <div className="w-full bg-white p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="firstName" className="mb-3 block text-base font-medium text-bgColor">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  {...register('firstName')}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="mb-3 block text-base font-medium text-bgColor">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  {...register('lastName')}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-bgColor">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register('phone')}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-bgColor">
                  Job Title
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email')}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              <h2 className="font-bold mb-6 ml-3 text-xl text-bgColor">Change Password</h2>
              <div className="mb-6">
                <label className="text-bgColor text-sm mb-2 block">Current Password *</label>
                <input
                  type="password"
                  {...register('currentPassword')}
                  placeholder="***************"
                  className="bg-transparent border border-gray-400 w-full text-bgColor text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
                />
                {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}
              </div>

              <div className="mb-6">
                <label className="text-bgColor text-sm mb-2 block">New Password *</label>
                <input
                  type="password"
                  {...register('newPassword')}
                  placeholder="***************"
                  className="bg-transparent border border-gray-400 w-full text-bgColor text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
                />
                {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
              </div>

              <div className="mb-6">
                <label className="text-bgColor text-sm mb-2 block">Confirm New Password *</label>
                <input
                  type="password"
                  {...register('confirmNewPassword')}
                  placeholder="***************"
                  className="bg-transparent border border-gray-400 w-full text-bgColor text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
                />
                {errors.confirmNewPassword && <p className="text-red-500">{errors.confirmNewPassword.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full md:w-[175px] hover:shadow-form rounded-3xl bg-btnColored py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
