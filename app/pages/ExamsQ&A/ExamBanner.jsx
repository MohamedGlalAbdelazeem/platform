import Image from "next/image"

function ExamBanner() {
  return (
    <div className="relative bg-gray-300 p-2 flex items-center justify-center h-[406px]">
    <div className="absolute inset-0 bg-bgBanner opacity-90 z-10"></div>
    <Image
      src="/Banner.jpg"
      alt="Banner image"
      layout="fill"
      objectFit="cover"
      objectPosition="top left"
      className="z-0"
    />
    <div className="z-10 text-center max-w-5xl mt-10 max-md:max-w-md mx-auto">
      <div>
        <h2 className="lg:text-4xl mt-5 font-bold sm:text-lg  text-fontColor">
        Test Your Knowledge with MedLearn Hub
        </h2>
        <p className="text-white mt-3 lg:text-lg sm:text-base leading-relaxed">
          At MedLearn Hub, we believe in continuous learning and assessment to help you master your field. Our Tests and Questions section is designed to evaluate your knowledge across various medical subjects through structured multiple-choice questions (MCQs). Whether you’re a medical professional or a student, our tests help you gauge your understanding and track your progress.        
     </p>
      </div>
    </div>
  </div>
  )
}

export default ExamBanner