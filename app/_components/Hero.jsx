import Image from "next/image";
function Hero() {
  return (
    <div
    className="w-full"
    style={{
      backgroundImage: `
        radial-gradient(circle at left, #AC59FF4D 10%, transparent 20%),
        radial-gradient(circle at right, #AC59FF4D 10%, transparent 20%),
        radial-gradient(circle at center bottom, #AC59FF4D 10%, transparent 20%)`,
      backgroundColor: "#1E0C2F",
    }}
  >
      <div className="h-[700px]  flex-col-reverse px-3  items-center w-full lg:w-10/12 grid grid-cols-1 lg:grid-cols-2 mx-auto  py-10 md:py-14">
          <div className=" pr-2 mb-8 lg:mb-0 py-10 md:py-0">
            <p className="text-[16px] text-white mb-3">
              Boost Your Medical Career with Expert-Led Courses and Insights!
            </p>
            <h1 className="mb-6 text-white  text-[32px]">
              Access a wide range of  
              <span className="p-1 text-[40px] w-full text-[#C29CE8] font-bold">
                   medical <br /> courses, research materials, and <br /> industry
                insights
              </span>
              to help you excel in your career.
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <a  href="#contact"  className="px-5 py-3 mx-1 text-sm md:text-[20px]  text-white bg-[#7548A1] rounded-lg md:px-8group"   >
              Join Our Community
              </a>
              <button type="button" 
                className="px-5 py-3 mx-1 text-sm md:text-[20px]  text-white rounded-lg md:px-8 border-2 border-white"  >
              Browse Courses
              </button>
            </div>
          </div>
          <div className="mt-3 hidden  lg:block  sm:hidden">
            <div>
              <Image
                src="/hero1.svg"
                alt="hero image" 
                srcSet="/hero1-2x.png 2x, /hero1-3x.png 3x" 
                width={"337" }
                height={"464"}
                className="relative bottom-2 z-40"
             />  
            </div>
              <div>
              <Image
                src="/hero2.svg"
                alt="hero image" 
                srcSet="/hero1-2x.png 2x, /hero1-3x.png 3x" 
                width={"293" }
                height={"247"}
                className="absolute z-10 bottom-[130px] right-[310px]"
             />  
              </div>
           </div>
        </div>
    </div>
    
  );
}

export default Hero;
