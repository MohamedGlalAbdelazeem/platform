import { BsArrowDownRightCircleFill } from "react-icons/bs";
import FilterComponent from "./FilterComponent";
import AllCoursesBanner from "./AllCoursesBanner";
import ScrollTop from "../../_components/ScrollTop";
import AskOnlineCourse from "./AskOnlineCourse";
function page() {
   
return (
  <>
  <AllCoursesBanner/>
    <FilterComponent/>
        <div className="max-w-screen-xl mx-auto p-2 sm:p-5 md:p-16">
          <div className="flex flex-wrap justify-center items-center">
              {["A", "v", "f", "A", "v", "f"].map((item, index) => (
                 <div key={index} className="rounded-3xl p-1  shadow-xl w-[337px] my-4 mx-2">
                      <div className="relative">
                          <img
                              className="w-[315px] h-[198px] rounded-b-[36px] rounded-t-[15px]"
                              src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/101_-What-Online-Courses-Are-Most-In-Demand-In-2023_.jpg"
                              alt="Sunset in the mountains"
                          />
                            <div className="w-full h-10 flex justify-center items-center">
                            <div className="flex w-[260px]  justify-between items-center rounded-[35px] p-3 border-[8px] border-white absolute bottom-4  bg-secondary text-white text-[12px]  duration-500 ease-in-out">
                                <span className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 11V2H2v9m2-2V4h5v5m11-2.5C20 7.9 18.9 9 17.5 9S15 7.9 15 6.5S16.11 4 17.5 4S20 5.11 20 6.5M6.5 14L2 22h9m-3.42-2H5.42l1.08-1.92M22 6.5C22 4 20 2 17.5 2S13 4 13 6.5s2 4.5 4.5 4.5S22 9 22 6.5M19 17v-3h-2v3h-3v2h3v3h2v-3h3v-2Z"/></svg>
                                    <p>Category</p>
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13.5v8H3v-8zm-2 2H5v4h4zM12 2l5.5 9h-11zm0 3.86L10.08 9h3.84zM17.5 13c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>
                                    <p>Subcategory</p>
                                </span>
                            </div>
                        </div>
                      </div>
                      <div className="px-6">
                        <div className="flex justify-between font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out">
                            <h2 className="text-[17px] font-normal">Advanced Cardiology</h2>
                            <h3 className="text-[17px] text-textColor font-bold">20$</h3>
                        </div>
                        <p className="text-gray-500 my-2 text-sm">
                            Deepen your understanding of advanced cardiovascular treatments and diagnostic techniques.
                        </p>
                        <span className="text-sm">Dr. Ahmed El-Sharif</span>
                    </div>
                    <div className="px-6 py-2 flex flex-row items-center">
                        <button className="text-[12px] bg-bgFontColor text-white p-3 w-full rounded-3xl">Enroll Now</button>
                    </div>
                    <div className="px-6 gap-3 py-2 flex flex-row items-center">
                        <button className="border-2 border-textColor text-[12px] text-textColor p-3 w-full rounded-3xl">See More</button> 
                    </div>
                  </div>
              ))}
          </div>
        </div>
    <AskOnlineCourse/>
    <ScrollTop/>
   </>
  )
}
export default page