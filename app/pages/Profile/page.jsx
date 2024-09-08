import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <section className="mt-10 p-4 flex flex-col items-center">
      {/* User Info Section */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center text-center">
        <img
          className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 h-24 w-24 md:h-32 md:w-32 mb-4 md:mb-0 md:mr-5"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Hesham Hassan"
        />
        <div className="flex flex-col">
          <p className="text-indigo-900 font-bold text-xl">
            Hesham Hassan
          </p>
          <p className="text-indigo-300 font-semibold text-center md:text-left">
            UI / UX Designer
          </p>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="bg-slate-300 w-full md:w-[750px] p-6 mt-8 rounded-lg flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold">$250</h2>
          <span className="text-sm text-gray-600">Available Balance</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Link href="/" className="bg-slate-500 text-white p-2 rounded-xl font-semibold hover:underline">
            Charge Your Wallet
          </Link>
          <Link href="/" className="bg-slate-500 text-white p-2 rounded-xl font-semibold hover:underline">
            Withdraw Your Money
          </Link>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="flex flex-col items-start w-full md:w-[650px] my-11">
        <h2 className="font-bold mb-6 text-xl">Personal Information</h2>
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                Job Title
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="w-full md:w-[175px] hover:shadow-form rounded-3xl bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="flex flex-col items-start w-full md:w-[650px] my-11">
        <h2 className="font-bold mb-6 text-xl">Change Password</h2>
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-6">
              <label className="text-gray-800 text-sm mb-2 block">Password *</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
                  placeholder="***************"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <label className="text-gray-800 text-sm mb-2 block">New Password *</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
                  placeholder="***************"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <label className="text-gray-800 text-sm mb-2 block">Confirm New Password *</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600"
                  placeholder="***************"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
            </div>
            <div>
              <button className="w-full md:w-[175px] hover:shadow-form rounded-3xl bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Page;
