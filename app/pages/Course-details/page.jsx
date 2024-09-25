'use client'
import RelatedCoures from "./RelatedCoures";
import { FaResearchgate } from "react-icons/fa6";
import CourseDetails from './CourseDetails';
import useCheckUser from '@/app/(auth)/ChekUser';
function Page() {
  const handleAction = useCheckUser({
    alertTitle: 'Please Log In or Sign Up to Enroll',
    alertText: 'You need to be logged in to enroll in this course. If you don’t have an account yet, creating one is quick and easy!',
    confirmButtonText: 'Log In',
    cancelButtonText: 'Sign Up',
    redirectToUpload: '/pages/Checkout'
  });
  
  return (
    <>
    <div className="bg-[#1F0C30E5] w-full h-[221px]"></div>
      <div className="container mx-auto px-4 -mt-[50px]">
      <div className="flex flex-row-reverse justify-around flex-wrap">
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
              <button type="button" onClick={handleAction} className="bg-gray-500 text-center text-white p-3 w-full rounded-3xl" >
                    Enroll Now
             </button>
              <button className="border-2 border-black p-3 w-full rounded-3xl"> Watch a trial lesson</button>
            </div>
          </div>
        </div>
        {/* Course video: */}
         <CourseDetails/>
        <RelatedCoures />
      </div>
    </div>
    </>
  
  );
}

export default Page;
