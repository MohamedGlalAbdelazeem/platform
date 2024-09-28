import Image from "next/image";
function Hero() {
  return (
  <section className="w-full"
      style={{
        backgroundImage: `
          radial-gradient(circle at left, #AC59FF4D 10%, transparent 20%),
          radial-gradient(circle at right, #AC59FF4D 10%, transparent 20%),
          radial-gradient(circle at center bottom, #AC59FF4D 10%, transparent 20%)`,
        backgroundColor: "#1E0C2F",
      }}>
      <div className="h-[750px] grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
              
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
                to help you <br /> excel in your career.
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
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
                  src="/hero3.svg"
                  alt="hero image" 
                  srcSet="/hero1-2x.png 2x, /hero1-3x.png 3x" 
                  width={"130" }
                  height={"130"}
                  className="absolute z-10 bottom-[150px] right-[510px] rounded-3xl"/> 
                <Image
                  src="/hero1.svg"
                  alt="hero image" 
                  srcSet="/hero1-2x.png 2x, /hero1-3x.png 3x" 
                  width={"337" }
                  height={"464"}
                  className="relative bottom-2 z-40"/>  
                <Image
                  src="/hero2.svg"
                  alt="hero image" 
                  srcSet="/hero1-2x.png 2x, /hero1-3x.png 3x" 
                  width={"293" }
                  height={"247"}
                  className="absolute z-10 bottom-[120px] right-[200px] rounded-3xl"/>  

            </div>
      </div>
  </section>
  );
}

export default Hero;
