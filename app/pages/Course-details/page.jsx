'use client'
import RelatedCoures from "./RelatedCoures";
import CourseDetails from "./CourseDetails";
import { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalEnrollVisible , setIsModalEnrollVisible ] = useState(true);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);
  const handleClicked = () => {
    if (!token) {
      setIsModalVisible(true);
    } else {
      setIsModalEnrollVisible(true);
    }
  };
  const closeEnrollModal = () => {
    setIsModalEnrollVisible(false);
  };
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
              <button onClick={handleClicked} type="button" className="bg-bgFontColor text-center text-white p-3 w-full rounded-3xl" >
                    Enroll Now
             </button>
              <button className="border-2 border-textColor text-textColor p-3 w-full rounded-3xl"> Watch a trial lesson</button>
            </div>
          </div>
        </div>
        {/* Course video: */}
         <CourseDetails/>
        <RelatedCoures />
      </div>
    </div>
    {/* Enroll model */}
      {isModalEnrollVisible && (
          <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
            <div class="w-[600px] bg-white shadow-lg rounded-lg p-8 relative">
                <div class="flex items-center pb-3 ">
                    <h3 class="text-2xl text-center font-bold flex-1 text-textColor ">Choose payment Method</h3>
                </div>
                <div class="my-8">
                    <div class="flex flex-wrap gap-8 items-center mt-4 ">
                      <Link href={"/"} className="bg-[#FFF4F8] py-2 rounded-lg  px-3">
                        <Image
                            src="/paypal.svg"
                            alt="Banner image"
                            width={"100"}
                            height={"100"}/>
                      </Link>
                      <Link href={"/"} className="py-5 flex flex-col items-center justify-center bg-[#FFF4F8] px-3 rounded-lg">
                        <Image
                            src="/card.svg"
                            alt="Banner image"
                            width={"100"}
                            height={"100"} />
                            <h1 className="font-normal text-xl">Cards</h1>
                      </Link>
                      <Link href={"/"} className="py-8 flex flex-col items-center justify-center bg-[#FFF4F8]  rounded-lg">
                        <Image
                            src="/wallet.svg"
                            alt="Banner image"
                            width={"150"}
                            height={"200"}/>
                            <h1 className="font-normal text-xl mt-">Wallet</h1>
                      </Link>
                    </div>
                    <div className="my-8 mx-auto text-center">
                      <span className="text-secondary text-lg text-center">Pay with
                        <button   className="font-bold px-2 underline">
                          Vodafone cash or Instapay
                        </button>?</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2">
                      <button className="font-normal bg-bgColor text-white py-2 px-6 rounded-3xl">Pay 25 $</button>
                      <button onClick={closeEnrollModal} className="font-normal bg-[#FFF4F8]  py-3 px-6 rounded-3xl ">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        )}
      {isModalVisible && (
        <div className= " fixed inset-0 p-5 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.89)] overflow-auto">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <IoCloseCircleSharp  onClick={closeModal} className="text-secondary cursor-pointer  text-3xl float-right" />
            <div className="my-8 flex items-center justify-center flex-col text-center">
              <Image
                    src="/login.png"
                    alt="Banner image"
                    width={"140"}
                    height={"140"}
                    className="rounded-full bg-[#EC8AB3] p-5"
                />
              <h4 className="text-[20px] text-textColor font-bold mt-4">
              Please Log In or Sign Up to Enroll
              </h4>
              <p className="text-sm text-gray-900 leading-relaxed mt-4">
           You need to be logged in to enroll in this course. If you don’t have an account yet, creating one is quick and easy!
              </p>
            </div>
              <Link
                href={"/sign-in"}
                className="py-2  rounded-xl text-white text-sm border-none outline-none bg-[#984D9F]">
                 <div className="w-full bg-[#984D9F] text-center py-2 text-base font-normal rounded-xl">
                  Login 
                </div>
              </Link>
              <div>
                <span className="flex justify-center items-center text-center mt-5">
                Don’t have an account?
                 <Link href={'/sign-up'} className="font-bold ml-1 underline"> Join Now</Link>
                </span>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Page;
