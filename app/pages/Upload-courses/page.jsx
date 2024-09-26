import OurCoursesBanner from "../Our-courses/OurCoursesBanner";
import Image from "next/image";
function page() {
return (
   <>
  <div className="bg-gray-200">
      <OurCoursesBanner  bg2="#301a45" bg1="#984D9F"/> 
  </div>
  <div className="p-12 max-w-3xl items-center gap-6 max-md:max-w-md mx-auto flex flex-col justify-center">
    <Image
          src="/upload.svg"
          alt="upload image"
          width={"400"}
          height={"300"}
        />
     <span className="font-normal text-secondary">Nothing here yet</span>
    <button className="bg-[#984D9F] text-white p-2 rounded-2xl">Upload Your Course Now</button>
  </div>
   </>
  )
}
export default page;