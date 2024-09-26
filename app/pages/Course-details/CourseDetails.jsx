import React from 'react'

function CourseDetails() {
  return (
    <>
      {/* Course Content: */}
      <div className="w-full md:w-1/2 px-2">
          <h2 className="text-2xl font-bold mb-10 text-white">Advanced Cardiology: Diagnosis and Treatment</h2>
          <h3 className="font-bold mb-3 text-2xl text-bgFontColor">What You Will Learn:</h3>
          <p className="text-lg font-normal mb-3 leading-8">Experience premium sound quality and industry-leading noise cancellation
            Gain in-depth knowledge of cardiovascular diseases, diagnostic techniques, and treatment methods. This course is designed for medical professionals looking to specialize in cardiology or enhance their understanding of heart-related conditions.
          </p>
          <div>
            <ul className="list-disc list-inside text-lg font-normal">
              <li>Understand the anatomy and physiology of the heart</li>
              <li>Learn how to interpret ECGs and other diagnostic tools</li>
              <li>Explore treatment options for common cardiovascular diseases</li>
              <li>Speak-to-chat technology</li>
            </ul>
          </div>

          <div className="mt-11">
            <h2 className="leading-10 mt-5 font-bold text-2xl text-bgFontColor">Course Requirements:</h2>
            <p className='font-normal text-lg'>Basic knowledge of human anatomy and physiology
              Familiarity with medical terminology
              Access to ECG reading tools (recommended but not mandatory)
            </p>
          </div>

          <div className="my-9">
            <h1 className="font-bold text-2xl my-6 text-bgFontColor">Course Content:</h1>
            <ol className="list-decimal">
              <li className="my-6 font-normal text-lg">
                Module 1: Introduction to Cardiovascular System
                <ul className="list-disc list-inside ">
                  <li>Understand the anatomy and physiology of the heart</li>
                  <li>Learn how to interpret ECGs and other diagnostic tools</li>
                  <li>Explore treatment options for common cardiovascular diseases</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </li>

              <li className="my-6">
                Module 1: Introduction to Cardiovascular System
                <ul className="list-disc list-inside ">
                  <li>Understand the anatomy and physiology of the heart</li>
                  <li>Learn how to interpret ECGs and other diagnostic tools</li>
                  <li>Explore treatment options for common cardiovascular diseases</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </li>

              <li className="my-6">
                Module 1: Introduction to Cardiovascular System
                <ul className="list-disc list-inside text-gray-700">
                  <li>Understand the anatomy and physiology of the heart</li>
                  <li>Learn how to interpret ECGs and other diagnostic tools</li>
                  <li>Explore treatment options for common cardiovascular diseases</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </li>
              <li className="my-6">
                Module 1: Introduction to Cardiovascular System
                <ul className="list-disc list-inside text-gray-700">
                  <li>Understand the anatomy and physiology of the heart</li>
                  <li>Learn how to interpret ECGs and other diagnostic tools</li>
                  <li>Explore treatment options for common cardiovascular diseases</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        {/* Course Content: */}
    </>
  )
}

export default CourseDetails