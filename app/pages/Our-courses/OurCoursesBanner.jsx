import Image from "next/image";
import Link from "next/link";

function OurCoursesBanner({ bg1, bg2 }) {
  return (
    <div className="relative bg-gray-300 p-2 flex items-center justify-center h-[330px] ">
      <div className="absolute inset-0 bg-bgBanner opacity-90 z-10"></div>
      <Image
        src="/Banner.jpg"
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        className="z-2"
      />
      <div className="z-10 text-center max-w-5xl max-md:max-w-md mx-auto mt-20">
        <div>
          <h2 className="lg:text-4xl font-bold sm:text-lg text-fontColor">
            My Courses
          </h2>

          <div className="mt-6 flex items-center justify-center max-sm:flex-col gap-4 my-6 z-50">
            {/* My Joined Courses button */}
            <Link href="/pages/Our-courses"
               style={{backgroundColor:bg2}}
             className="cursor-pointer text-white text-lg font-normal py-2 px-2  rounded-3xl">
              My Joined Courses
            </Link>

            {/* My Uploaded Courses button with bg as a prop */}
            <Link
              href="/pages/Upload-courses"
              className="cursor-pointer text-white text-lg font-normal py-2 px-2 rounded-3xl"
              style={{ backgroundColor: bg1 }} // Dynamically set the background color
            >
              My Uploaded Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCoursesBanner;
