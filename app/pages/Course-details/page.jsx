'use client'
import React, { useState } from 'react';
import RelatedCoures from "./RelatedCoures";
import CoursePreview from "./CoursePreview";
import { FaResearchgate } from "react-icons/fa6";
import Link from 'next/link';
import CourseDetails from './CourseDetails';
import { useRouter } from 'next/navigation'
function Page() {
  const router = useRouter();
  const isLoggedIn = true;  

  const handleEnroll = () => {
    if (!isLoggedIn) {
      router.push('/sign-in');
    }
  };
  
  return (
    <div className="container mx-auto mt-20 px-4 py-8">
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
              <button
                onClick={handleEnroll}
                  className="bg-gray-500 text-center text-white p-3 w-full rounded-3xl"
                >
                  {isLoggedIn ? (
                    <Link href="/pages/Checkout">
                      Enroll Now
                    </Link>
                  ) : (
                    "Enroll Now"
                  )}
             </button>
              <button className="border-2 border-black p-3 w-full rounded-3xl"> Watch a trial lesson</button>
            </div>
          </div>
        </div>
        {/* Course video: */}
         <CourseDetails/>
        <CoursePreview />
        <RelatedCoures />
      </div>
    </div>
  );
}

export default Page;
