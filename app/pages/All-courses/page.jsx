import Link from "next/link"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function page() {
  return (
   <>
    <div className="bg-gray-200">
      <div className="text-center max-w-2xl max-md:max-w-md mx-auto py-8 px-2">
        <div>
          <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">Explore Our Medical Courses</h2>
          <p className="text-gray-600 mt-6 text-sm leading-relaxed">
          Enhance your medical expertise with courses designed for healthcare professionals and students. Dive deeper into specific fields or explore new topics with expert-led learning experiences. Plus, you can upload your own courses to share your knowledge with others.
          </p>
          <div className="mt-12 flex gap-x-6 gap-y-4 mb-10 justify-center max-sm:flex-col">
            <button type='button'
              className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border border-blue-600 transition-all text-white font-bold text-sm rounded px-6 py-3">Upload Your Course</button>
          </div>
        </div>
      </div>
    </div>

    <div class="-mt-9 mb-20 w-max mx-auto bg-gray-100 border divide-x divide-white flex rounded overflow-hidden">
      <button type="button" class="px-5 py-4 flex items-center  text-sm outline-none hover:bg-gray-300 transition-all">
        <span className="mr-2">Category</span>
        <Link href="/" className="gap-1 flex items-center bg-white p-2 rounded-2xl">
          All (215)
          <MdOutlineKeyboardArrowRight />
        </Link>
      </button>

      <button type="button" class="px-5 py-2.5 flex items-center  text-sm outline-none hover:bg-gray-300 transition-all">
        <span className="mr-2">Sub Category</span>
        <Link href="/" className="gap-1 flex items-center bg-white p-2 rounded-2xl">
          All (805)
          <MdOutlineKeyboardArrowRight />
        </Link>
      </button>

      <button type="button" class="px-5 py-2.5 flex items-center  text-sm outline-none hover:bg-gray-300 transition-all">
        <span className="mr-2">Ratings</span>
        <Link href="/" className="gap-1 flex items-center bg-white p-2 rounded-2xl">
          (5.00)
          <MdOutlineKeyboardArrowRight />
        </Link>
      </button>

      <button type="button" class="px-5 py-2.5 flex items-center  text-sm outline-none hover:bg-gray-300 transition-all">
        <span className="mr-2">Pricing</span>
        <Link href="/" className="gap-1 flex items-center bg-white p-2 rounded-2xl">
          All (215)
          <MdOutlineKeyboardArrowRight />
        </Link>
      </button>

    </div>
    

   </>
  )
}

export default page