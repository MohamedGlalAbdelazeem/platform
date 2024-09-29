import { CgAddR } from "react-icons/cg";
import { GoArrowDown } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowUp } from "react-icons/go";
function CourseLessons() {
  return (
    <div>
        <div className="flex items-center justify-between my-5">
            <h1 className="font-bold text-xl ">Course Lessons</h1>
             <button className="text-textColor border-2 border-textColor p-2 rounded-lg flex items-center gap-1">
                <CgAddR />
                Add a lesson
             </button>
        </div>
        <ul>
        {["a","b","c","d","e","E","E","a","b","c","d","e","E","E"].map((item , index)=>{
                return(
                <li key={index} className="flex justify-between items-center bg-gray-100 p-2 my-3">
                    <h3>Lesson once : the title of the lesson </h3>
                    <span className="flex items-center gap-4"> 
                        <GoArrowUp  className="text-xl text-bgColor cursor-pointer"  />
                        <GoArrowDown  className="text-xl text-bgColor cursor-pointer" />
                        <RiDeleteBin6Line className="bg-red-500 text-white rounded-full p-2 text-[35px] cursor-pointer" />
                    </span>
                </li>
                )
            })}
        </ul>
    </div>
  )
}
export default CourseLessons;