import React from 'react';

function Page() {
  return (
    <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
    <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
      <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
       image
      </div>

      <form className="sm:p-8 my-16 w-full">
        <div className="text-center my-10 w-full mx-auto">
          <h3 className="text-blue-500 text-2xl font-extrabold max-md:text-center">Reset Your Password!</h3>
        </div>
        <p>You’ve successfully verified your identity. Now you can reset your password.</p>
        {/* password */}
        <div className="my-6 grid lg:grid-cols-1 gap-6">
           <div>
            <label class="text-gray-800 text-sm mb-2 block">New Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="******" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
        </div>
       {/* password */}

         {/* password */}
        <div className="my-6 grid lg:grid-cols-1 gap-6">
           <div>
            <label class="text-gray-800 text-sm mb-2 block">Confirm New Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="******" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
        </div>
       {/* password */}


        <div className="mt-6 ">
          <button type="button" className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
             Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Page;
