import React from 'react';

function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
    <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
      <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
       image
      </div>

      <form className="sm:p-8 p-4 w-full">
        <div className="mb-12">
          <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">Register</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter last name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            
            <div>
            <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
        </div>

        <div className="flex items-center mt-6">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
          <label for="remember-me" className="ml-3 block text-sm">
          By creating an account on MedLearn Hub, you agree to our Privacy Policy . Please read these terms carefully.
          </label>
        </div>

        <div className="mt-6 ">
          <button type="button" className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Page;
