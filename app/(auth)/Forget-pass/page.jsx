import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <div className="flex flex-col justify-center items-center   bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
    <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
      <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
       image
      </div>

      <form className="sm:p-8 my-16 w-full px-6">
        <div className="text-center my-10 w-full mx-auto ">
          <h3 className="text-blue-500 text-2xl font-extrabold max-md:text-center">Forget Password ?</h3>
           <span>Don’t Worry</span>
        </div>
        <p>
         Please enter the email address associated with your account, and we’ll send you a code to reset your password.
      </p>
       {/* email */}
       <div className="grid lg:grid-cols-1 my-6">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Address</label>
            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Your Email here" />
          </div>
        </div>
      {/* email */}
   
       <div className="flex items-center mt-6">
           <p>Forget Password?</p>
        </div>

        <div className="mt-6 ">
          <button type="button" className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
          Send Reset Code
          </button>
        <div className='w-full flex justify-center my-6'>
            <Link href='/sign-in'>Back</Link>
        </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Page;
