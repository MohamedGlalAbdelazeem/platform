import Link from "next/link";
import { PiStarThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
function CoursePreview() {
  return (
    <section className="bg-white px-4 py-10 mb-28  md:py-6">
    <div className="max-w-screen-xl mx-auto">
        <div className="my-5 flex flex-wrap justify-between items-center">
            <h3 className="text-xl font-bold">
            Course Preview:
            </h3>
            <Link href="/" className="font-bold flex items-center gap-4">
            See All Reviews <FaArrowRightLong />
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
        {["a", "f", "f", "r", "a", "f", "f", "r"].map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-5">
            <p className="mb-2 text-sm font-bold leading-7 line-clamp-5">
                I recently completed the Advanced Cardiology: Diagnosis and Treatment course, and it exceeded all my expectations. The content was detailed yet easy to follow see more
            </p>
            <PiStarThin className="mb-2" />
            <span>Hisahsm Mosa</span>
            </div>
        ))}
        </div>
    </div>
    </section>
  )
}

export default CoursePreview