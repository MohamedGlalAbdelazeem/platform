import Link from 'next/link';
import { FaHeart, FaBell, FaCircleUser } from "react-icons/fa6";

const DesktopProfile = ({ isLogin }) => (
  <div className="hidden sm:flex items-center gap-6">
    <Link href={"/pages/Mywish-lest"}>
      <FaHeart className="text-2xl cursor-pointer" />
    </Link>
    <FaBell className="text-2xl cursor-pointer" />
    {isLogin ? (
      <div className="relative group">
        <FaCircleUser className="text-3xl cursor-pointer" />
        <div className="absolute -right-20 mt-5 w-28 rounded-xl bg-white dark:bg-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/pages/Profile" className="block px-4 py-2 text-gray-700 dark:text-white">My Profile</Link>
          <a href="#" className="block px-4 py-2 text-gray-700 dark:text-white">Log out</a>
        </div>
      </div>
    ) : (
      <>
        <Link href="/sign-in" className="px-5 py-3 text-xl">Sign in</Link>
        <Link href="/sign-up" className="rounded-md border-2 bg-gray-300 px-5 py-2 text-xl">Get Started</Link>
      </>
    )}
  </div>
);

export default DesktopProfile;
