
function Hero() {
  return (
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
    <div className="pr-2 md:mb-14 py-14 md:py-0">
      <p className="py-4 text-lg text-black 2xl:py-8 md:py-6 2xl:pr-5">
        Boost Your Medical Career with Expert-Led Courses and Insights!
      </p>

      <h1 className="text-3xl mb-12  text-black xl:text-2xl lg:text-3xl">
       Access a wide range of  <span className="w-full font-extrabold leading-relaxed"> medical  <br /> courses, research materials, and <br />  industry insights  </span>
       to help you excel in your career.
        </h1>
      <div className="mt-4">
        <a href="#contact" className="px-5 mx-1 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Join Our Community</span> </a>
        <a href="#contact" className="px-5 py-3 mx-3 text-lg tracking-wider text-black  rounded-lg md:px-8 border-2 border-blue-600 group"><span>Browse Courses</span> </a>
      </div>
    </div>

    <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
      <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488"/>
    </div>
  </div>
  )
}

export default Hero