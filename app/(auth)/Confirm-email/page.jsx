import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
    <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden">
      <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
       image
      </div>

      <div className="sm:p-8 my-16 w-full">
        <div className="text-center my-10 w-full mx-auto">
          <h3 className="text-blue-500 text-2xl font-extrabold max-md:text-center my-6">Congratulations!</h3>
          <p>Your password has been successfully changed. You can now use your new password to log in to your account and continue enjoying our services.</p>
        </div>
        <div className="mt-6 w-full flex flex-col justify-center items-center ">
        <Link href={"/"} className="font-bold flex items-center gap-2 hover:opacity-65">
           <FaAnglesLeft />
            Go To Home Page 
        </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
