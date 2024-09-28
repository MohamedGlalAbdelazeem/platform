
import { FaArrowRightLong } from "react-icons/fa6";
import MainHeading from "./MainHeading";
import BlogCards from "./BlogCards";
import Link from "next/link";

function Blogs() {
  return (
    <div className="w-10/12 sm:w-full mx-auto">
    <MainHeading title={"Our Blogs"} desc={"Explore Our Top Blogs"}/>
    <div className="max-w-screen-lg mx-auto my-4 h-[50rem] overflow-hidden">
        <div className="flex flex-wrap justify-center items-center">
           <BlogCards/>
        </div>
    </div>
    <div className="mx-auto w-full flex justify-center my-10">
        <Link href={"/pages/Blogs"} className=" rounded-xl flex items-center text-textColor  gap-3 text-center p-2 text-lg border-2 border-textColor">
            Show All Blogs 
            <FaArrowRightLong />
         </Link>
    </div>
    </div>
  )
}

export default Blogs