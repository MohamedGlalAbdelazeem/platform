
 import Link from 'next/link'
 function OurCoursesBanner() {
   return (
    <div>
            <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">My Courses</h2>
            <div className="mt-2 gap-8 flex items-center justify-center max-sm:flex-col">
              <Link  href={"/pages/Our-courses"}
                 className="  bg-gray-300   border transition-all  font-normal text-lg rounded-xl px-3 py-2">
                My Joined Courses
                </Link>
                <Link href={"/pages/Upload-courses"}
              className=" bg-gray-300   border transition-all  font-normal text-lg rounded-xl px-3 py-2">
              My Uploaded Courses
              </Link>
            </div>
          </div>
   )
 }
 
 export default OurCoursesBanner