'use client'
import React, { useState } from 'react';
import RelatedCoures from "./RelatedCoures";
import CoursePreview from "./CoursePreview";
import { FaResearchgate } from "react-icons/fa6";
import RegisterModel from "./RegisterModel";

function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Manage login state
  const [showModal, setShowModal] = useState(false);   // Manage modal visibility
  // Function to handle modal display based on login status
  const handleRegister = () => {
    if (!isLoggedIn) {
      setShowModal(true); // Show modal if user is not logged in
    } else {
      // Handle enroll action for logged-in users
      console.log("User enrolled");
    }
  };
  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row-reverse justify-around flex-wrap mt-14">
        {/* course video */}
        <div className="w-[335px] px-4 mb-8">
          <div className="rounded-2xl bg-gray-300 overflow-hidden shadow-lg p-3">
            <div className="relative">
              <div className="flex justify-center">
                <div className="shadow-lg max-w-sm">
                  <video controlsList="nodownload" poster="https://via.placeholder.com/320x240.png?text=Video+Preview" width="320" height="240" controls className="w-full rounded-lg">
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="px-3 py-5">
              <p className="my-2 text-sm font-bold"> Advanced Cardiology: Diagnosis and Treatment</p>
            </div>
            <div className="flex justify-between items-center px-3 py-2">
              <FaResearchgate />
              <span className="-ml-8">25 $</span>
              <FaResearchgate />
              <span className="-ml-8">4.7</span>
              <FaResearchgate />
              <span className="-ml-8">245</span>
            </div>
            <div className="flex gap-3 items-center px-3 py-2">
              <FaResearchgate />
              <span>Beginner level</span>
            </div>
            <div className="px-6 py-2 flex flex-col gap-3 items-center">
              <button onClick={handleRegister} className="bg-gray-500 text-white p-3 w-full rounded-3xl">Enroll Now</button>
              <button className="border-2 border-black p-3 w-full rounded-3xl"> Watch a trial lesson</button>
            </div>
          </div>
        </div>
        {/* Course video: */}

        {/* Course Content: */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Advanced Cardiology: Diagnosis and Treatment</h2>
          <h3 className="font-bold mb-4">What You Will Learn:</h3>
          <p className="text-sm leading-8">Experience premium sound quality and industry-leading noise cancellation
            Gain in-depth knowledge of cardiovascular diseases, diagnostic techniques, and treatment methods. This course is designed for medical professionals looking to specialize in cardiology or enhance their understanding of heart-related conditions.
          </p>

          <div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Understand the anatomy and physiology of the heart</li>
              <li>Learn how to interpret ECGs and other diagnostic tools</li>
              <li>Explore treatment options for common cardiovascular diseases</li>
              <li>Speak-to-chat technology</li>
            </ul>
          </div>

          <div className="mt-11">
            <h2 className="leading-10 mt-5 font-bold text-2xl">Course Requirements:</h2>
            <p>Basic knowledge of human anatomy and physiology
              Familiarity with medical terminology
              Access to ECG reading tools (recommended but not mandatory)
            </p>
          </div>

          <div className="my-9">
            <h1 className="font-bold text-2xl my-6">Course Content:</h1>
            <ol className="list-decimal">
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
        <CoursePreview />
        <RelatedCoures />
      </div>
      <RegisterModel isLoggedIn={isLoggedIn} onClose={handleCloseModal} />
    </div>
  );
}

export default Page;
