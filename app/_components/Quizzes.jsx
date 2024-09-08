import React from 'react'

function Quizzes() {
  return (
    <div className="border-t-8 border-b-8 border-dashed border-red-500 bg-gray-400 text-white p-11 my-32">
    <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col gap-8 lg:flex-row items-center">
            <div className="lg:w-1/2">
                <h3 className="text-xl font-extrabold leading-tight mb-4">Test Your Medical Knowledge with Interactive Quizzes</h3>
                <p className="text-lg font-normal mb-8">
                 Enhance your medical knowledge through interactive multiple-choice quizzes (MCQs) organized by subject. Test yourself on various topics with the ability to navigate between questions and reveal correct answers. Try the free plan with up to 50 questions per subject, or unlock unlimited access with our premium subscription plans.
                    </p>
                <a href="#"
                    className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Get
                    Start Your Free Test Now
                </a>
            </div>
            <div className="lg:w-1/2 lg:ml-12">
                <img src="https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png" alt="Tailwind CSS" className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Quizzes