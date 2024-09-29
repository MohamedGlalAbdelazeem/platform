import { CgAddR } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";
function CourseQues() {
  return (
    <div>
        <div className="flex items-center justify-between my-5">
            <h1 className="font-bold text-xl ">Course Questions</h1>
             <button className="text-textColor border-2 border-textColor p-2 rounded-lg flex items-center gap-1">
                <CgAddR />
                Add a  Questions
             </button>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap mx-auto ">
            <div className="p-3 w-[477px] h-[460px] bg-[#FFF9FB] rounded-lg overflow-y-scroll">
                <div className=" flex items-center justify-between">
                    <h3 className="font-normal text-lg">Question One</h3>
                    <RiDeleteBin6Line className="bg-red-500 text-white rounded-full p-2 text-[30px] cursor-pointer" />
                </div>
            </div>
            <div className="w-[477px] h-[460px] bg-slate-100">

            </div>
        </div>
     
    </div>
  )
}
export default CourseQues;