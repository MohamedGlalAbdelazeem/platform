'use client'
import RelatedCoures from "../RelatedCoures";
import {  useState } from "react";
import { useRouter } from "next/navigation";
import CheckModel from "@/app/_components/CheckModel";


function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        router.push("/pages/Payment-methods")
    } else {
        setIsModalVisible(true);
    }
  }
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
   <>
    <div className="bg-[#1F0C30E5] w-full h-[221px]"></div>
      <div className="container mx-auto px-5 -mt-[50px]">
      <div className="flex flex-wrap flex-row-reverse justify-around ">
        {/* course video */}
        <div className="w-[335px] px-4 mb-8">
          <div className="rounded-2xl bg-white  overflow-hidden shadow-lg p-3">
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
            <div className="px-3 my-8">
              <p className=" text-lg font-bold"> Advanced Cardiology: Diagnosis and Treatment</p>
            </div>
            <div className="w-full flex justify-between items-center px-2 py-4">
              <span className="flex items-center gap-1 font-normal text-sm ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20 " height="20" viewBox="0 0 24 24"><g fill="none" stroke="#cc775d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" color="#cc775d"><path d="M20.943 16.835a15.76 15.76 0 0 0-4.476-8.616c-.517-.503-.775-.754-1.346-.986C14.55 7 14.059 7 13.078 7h-2.156c-.981 0-1.472 0-2.043.233c-.57.232-.83.483-1.346.986a15.76 15.76 0 0 0-4.476 8.616C2.57 19.773 5.28 22 8.308 22h7.384c3.029 0 5.74-2.227 5.25-5.165"/><path d="M7.257 4.443c-.207-.3-.506-.708.112-.8c.635-.096 1.294.338 1.94.33c.583-.009.88-.268 1.2-.638C10.845 2.946 11.365 2 12 2s1.155.946 1.491 1.335c.32.37.617.63 1.2.637c.646.01 1.305-.425 1.94-.33c.618.093.319.5.112.8l-.932 1.359c-.4.58-.599.87-1.017 1.035S13.837 7 12.758 7h-1.516c-1.08 0-1.619 0-2.036-.164S8.589 6.38 8.189 5.8zm6.37 8.476c-.216-.799-1.317-1.519-2.638-.98s-1.53 2.272.467 2.457c.904.083 1.492-.097 2.031.412c.54.508.64 1.923-.739 2.304c-1.377.381-2.742-.214-2.89-1.06m1.984-5.06v.761m0 5.476v.764"/></g></svg>
                25$
              </span>
              <span className="flex items-center gap-1 font-normal text-sm ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#cc775d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" color="#cc775d"><path d="M20.943 16.835a15.76 15.76 0 0 0-4.476-8.616c-.517-.503-.775-.754-1.346-.986C14.55 7 14.059 7 13.078 7h-2.156c-.981 0-1.472 0-2.043.233c-.57.232-.83.483-1.346.986a15.76 15.76 0 0 0-4.476 8.616C2.57 19.773 5.28 22 8.308 22h7.384c3.029 0 5.74-2.227 5.25-5.165"/><path d="M7.257 4.443c-.207-.3-.506-.708.112-.8c.635-.096 1.294.338 1.94.33c.583-.009.88-.268 1.2-.638C10.845 2.946 11.365 2 12 2s1.155.946 1.491 1.335c.32.37.617.63 1.2.637c.646.01 1.305-.425 1.94-.33c.618.093.319.5.112.8l-.932 1.359c-.4.58-.599.87-1.017 1.035S13.837 7 12.758 7h-1.516c-1.08 0-1.619 0-2.036-.164S8.589 6.38 8.189 5.8zm6.37 8.476c-.216-.799-1.317-1.519-2.638-.98s-1.53 2.272.467 2.457c.904.083 1.492-.097 2.031.412c.54.508.64 1.923-.739 2.304c-1.377.381-2.742-.214-2.89-1.06m1.984-5.06v.761m0 5.476v.764"/></g></svg>
                Category
              </span>
              <span className="flex items-center gap-1  font-normal text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="#cc775d" d="m8.637 8.994l2.667-4.402q.13-.211.312-.295T12 4.213t.384.084t.312.295l2.667 4.402q.131.202.131.424t-.106.409t-.284.295t-.418.109H9.314q-.241 0-.422-.111t-.28-.293q-.106-.18-.106-.4t.13-.433M17.5 21.231q-1.567 0-2.649-1.082T13.769 17.5t1.082-2.649t2.649-1.082t2.649 1.082t1.082 2.649t-1.082 2.649t-2.649 1.082M3.77 19.922v-4.85q0-.343.231-.573q.233-.23.576-.23h4.85q.344 0 .574.232q.23.233.23.577v4.85q0 .343-.233.573q-.232.23-.576.23h-4.85q-.343 0-.573-.233q-.23-.232-.23-.576m13.73.309q1.147 0 1.94-.792t.792-1.939t-.792-1.939t-1.939-.792t-1.939.792t-.792 1.939t.792 1.939t1.938.792m-12.73-.5h4.462v-4.462H4.769zm4.858-10.5h4.746L12 5.427zM17.5 17.5"/></svg>
              SupCategory
              </span>
            </div>
            <div className="px-1 py-2 flex flex-col gap-3 items-center">
              <button  onClick={getToken}  type="button" className="bg-bgFontColor text-center text-white p-3 w-full rounded-3xl" >
                    Enroll Now
             </button>
              <button className="border-2 border-textColor text-textColor p-3 w-full rounded-3xl"> Watch a trial lesson</button>
            </div>
          </div>
        </div>
        {/* Course video: */}
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
        <RelatedCoures />
      </div>
      {isModalVisible && (
      <CheckModel mainMess={"Please Log In or Sign Up to Enroll"} closeModal={closeModal} />
     )}
    </div>
   </>
  );
}
export default Page;
