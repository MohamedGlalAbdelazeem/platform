import Image from "next/image"

function Quizzes() {
  return (
    <div className="border-t-[9px] h-[427px] border-b-[9px] border-dashed border-white bg-[#842A8C] text-white  my-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col gap-24 lg:flex-row items-center">
            <div className="w-[735px] h-[283px]">
                <h3 className="text-[24px] text-[#FFAACE] font-bold leading-tight mb-4">Test Your Medical Knowledge with Interactive Quizzes</h3>
                <p className="text-[20px] font-normal mb-8">
                 Enhance your medical knowledge through interactive multiple-choice quizzes (MCQs) organized by subject. Test yourself on various topics with the ability to navigate between questions and reveal correct answers. Try the free plan with up to 50 questions per subject, or unlock unlimited access with our premium subscription plans.
                    </p>
                <a href="#"
                    className="bg-[#E2508D] font-bold text-white py-3 px-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-200">Get
                    Start Your Free Test Now
                </a>
            </div>
            <div className="w-[347px] h-[429px] ">
            <Image
                src="/quize.svg"
                alt="quize image" 
                srcSet="/quize-2x.png 2x, /quize-3x.png 3x" 
                width={"347" }
                height={"429"}
                className="absolute bottom-16 hidden lg:flex "
             />  
         </div>
        </div>
    </div>
</div>
  )
}

export default Quizzes