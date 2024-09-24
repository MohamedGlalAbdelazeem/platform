import MainHeading from "./MainHeading";
import { chooseData } from "../data/DataMenu";
function ChooseUs() {
    return (
        <div className="w-10/12 sm:w-full mx-auto my-32">
          <MainHeading  title={"Why Choose Us?"} desc={"What distinguishes MedLearn Hub"}/>
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-20 lg:gap-10 sm:gap-20 my-16">
                {chooseData.map((item, index) => (
                    <div key={index} className=" group w-64 h-[210px] bg-white  rounded-l-[40px] rounded-r-[40px] shadow-xl relative hover:ring hover:ring-shadesOfBlue transform duration-500 hover:scale-105 hover:shadow-xl">
                        <div style={{backgroundColor:item.iconColor}} className="flex justify-center items-center w-[125px] h-[125px] rounded-full absolute mx-auto right-0 left-0 -top-16  border-[13px] border-gray-100 group-hover:shadow-md transform duration-300">
                            <span  className="text-4xl md:text-[50px] text-white group-hover:text-blue-600   transform duration-300">
                                {item.icon}
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 p-4">
                            <h2 className="text-xl font-bold  my-2" style={{color:item.iconColor}}>{item.title}</h2>
                            <p className="text-center text-[16px] font-normal">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChooseUs;
