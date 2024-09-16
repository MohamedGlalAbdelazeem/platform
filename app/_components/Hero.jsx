"use client"
import { useRouter } from 'next/navigation'

function Hero() {
  const router = useRouter()
  return (
    <div className="flex-col-reverse px-3 items-center w-full lg:w-10/12 grid grid-cols-1 lg:grid-cols-2 mx-auto overflow-x-hidden py-10 md:py-14 lg:py-24">
      <div className=" pr-2 mb-8 lg:mb-0 py-10 md:py-0">
        <p className="py-4 text-base md:text-lg text-black 2xl:py-8 md:py-6 2xl:pr-5">
          Boost Your Medical Career with Expert-Led Courses and Insights!
        </p>
        <h1 className="text-2xl md:text-3xl mb-1 md:mb-12 text-black xl:text-2xl lg:text-3xl">
          Access a wide range of
          <span className="w-full font-extrabold leading-relaxed">
            medical <br /> courses, research materials, and <br /> industry
            insights
          </span>
          to help you excel in your career.
        </h1>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          <a  href="#contact"  className="px-5 py-3 mx-1 text-sm md:text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"   >
           Join Our Community
          </a>
          <button type="button" onClick={() => router.push('/pages/Medical-books')}
            className="px-5 py-3 mx-1 text-sm md:text-lg tracking-wider text-black rounded-lg md:px-8 border-2 border-blue-600 group"  >
           Browse Courses
          </button>
        </div>
      </div>

      <div className="overflow-hidden md:p-10 lg:p-0">
        <img
          id="heroImg1"
          className="transition-all duration-300 ease-in-out hover:scale-105 w-full sm:w-4/6 lg:w-full mx-auto"
          src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
}

export default Hero;
