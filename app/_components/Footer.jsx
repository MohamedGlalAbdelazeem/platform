import Link from "next/link";
import { CiFacebook } from "react-icons/ci";

function Footer() {
    return (
      <div className="bg-[#1E0C2F]">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12">
            <div className="text-sm uppercase text-[#F799C0] font-bold">Quick Links:</div>
            <ul>
              <li className="my-2">
                <a className="text-white text-[16px] font-normal" href="#">Home</a>
              </li>
              <li className="my-2">
                <a className="text-white text-[16px] font-normal" href="#">Our Courses</a>
              </li>
              <li className="my-2">
                <a className="text-white text-[16px] font-normal" href="#">Exams (Q&A)</a>
              </li>
              <li className="my-2">
                <a className="text-white text-[16px] font-normal" href="#">Blogs</a>
              </li>
              <li className="my-2">
                <a className="text-white text-[16px] font-normal" href="#">Medical Books</a>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12  ">
            <h3 className="font-bold text-left text-xl text-[#F799C0] mb-4">About MedLearn Hub:</h3>
            <p className="text-white text-sm mb-10">
              MedLearn Hub is an online platform offering medical courses, tests, a blog, and a collection of medical books. The platform is designed for medical professionals and students, providing them with valuable learning resources and tools to enhance their knowledge. This documentation serves as a comprehensive guide for developers and clients, outlining the core features and functionalities of the platform.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="mx-2 bg-bgFontColor text-white p-2 rounded-sm text-[16px] ">Join Our Community</a>
              <a href="#" className="mx-2 border-2 border-white text-white p-2 rounded-lg">Browse Courses</a>
            </div>
          </div>
          <div className="p-5 sm:w-3/12">
            <ul>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">About Us</a>
              </li>
              <li className="my-2">
                <Link href="/pages/Privacy-Policy" className="hover:text-indigo-600">Privacy Policy</Link>
              </li>
              <li className="flex gap-6">
               <CiFacebook />
               <CiFacebook />
               <CiFacebook />
               <CiFacebook />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <div className="my-1">© 2024 Medlearnhub. All Rights Reserved</div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  