
import { FaArrowRightLong } from "react-icons/fa6";
import MainHeading from "./MainHeading";
import BlogCards from "./BlogCards";
import Link from "next/link";

function Blogs() {
  return (
    <div className="w-10/12 sm:w-full mx-auto my-32  ">
    <MainHeading title={"Our Blogs"} desc={"Explore Our Top Blogs"}/>
    <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 ">
           <BlogCards/>
        </div>
    </div>
    <div className="mx-auto w-full flex justify-center">
        <Link href={"/pages/Blogs"} className="flex items-center  gap-3 text-center p-2 text-lg border-2 border-black">
            Show All Blogs 
            <FaArrowRightLong />
         </Link>
    </div>
    </div>
  )
}

export default Blogs