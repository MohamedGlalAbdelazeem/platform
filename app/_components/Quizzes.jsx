import Image from "next/image"

function Quizzes() {
  return (
    <section class="border-t-[9px] h-[430px] lg:h-[425px] border-b-[9px] border-dashed border-white bg-[#842A8C] text-white">
        <div class="grid max-w-screen-xl px-4 py-2  pb-8 mx-auto lg:gap-8 xl:gap-24  lg:grid-cols-12 ">
            <div class="mt-10  lg:mt-10  md:mt-16  sm:mt-11 lg:col-span-7">
                <h3 className="text-[24px] text-[#FFAACE] font-bold leading-tight mb-4">Test Your Medical Knowledge with Interactive Quizzes</h3>
                <p className="text-[20px] font-normal mb-8 line-clamp-6">
                    Enhance your medical knowledge through interactive multiple-choice quizzes (MCQs) organized by subject. Test yourself on various topics with the ability to navigate between questions and reveal correct answers. Try the free plan with up to 50 questions per subject, or unlock unlimited access with our premium subscription plans.
                </p>
                <a href="#"
                        className="bg-[#E2508D] mb-6 font-bold text-white py-3 px-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-200">Get
                        Start Your Free Test Now
                    </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
                <div className="w-[347px] h-[429px] ">
                <Image
                    src="/quize.svg"
                    alt="quize image" 
                    srcSet="/quize-2x.png 2x, /quize-3x.png 3x" 
                    width={"347" }
                    height={"429"}
                    className="absolute -top-24 hidden lg:flex "
                />  
            </div>
            </div>

        </div>
    </section>
)
}

export default Quizzes