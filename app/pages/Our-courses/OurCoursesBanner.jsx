import Image from "next/image";
import Link from "next/link";

function OurCoursesBanner() {
  return (
    <div className="relative bg-gray-300 p-2 flex items-center justify-center -z-10 h-[406px]">
      <div className="absolute inset-0 bg-[#1f0c30f4] opacity-90 z-10"></div>
      <Image
        src="/Banner.jpg"
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        className="z-0"
      />
      <div className="z-10 text-center max-w-5xl max-md:max-w-md mx-auto">
        <div>
          <h2 className="lg:text-4xl font-bold sm:text-lg text-fontColor">
            My Courses
          </h2>

          <div className="mt-6 flex items-center justify-center max-sm:flex-col gap-4 my-6">
            {/* Apply the cursor-pointer and styles directly on Link */}
            <Link href="/" className="cursor-pointer text-white text-lg font-normal py-2 px-2 bg-[#984D9F] rounded-3xl">
              My Joined Courses
            </Link>
            <Link href="/" className="cursor-pointer text-white text-lg font-normal py-2 px-2 bg-[#301a45] rounded-3xl">
              My Uploaded Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCoursesBanner;
