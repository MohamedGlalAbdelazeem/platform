
import MainHeading from "./MainHeading";
import { chooseData } from "../data/DataMenu";
function ChooseUs() {
  

    return (
        <div className="w-10/12 sm:w-full mx-auto my-32">
          <MainHeading  title={"Why Choose Us?"} desc={"What distinguishes MedLearn Hub"}/>
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-20 lg:gap-10 sm:gap-20 my-16">
                {chooseData.map((item, index) => (
                    <div key={index} className=" group w-64 h-[180px] bg-gray-100 rounded-l-[40px] rounded-r-[40px] shadow-lg relative hover:ring hover:ring-shadesOfBlue transform duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="bg-gray-200 flex justify-center items-center w-24 h-24 rounded-full absolute mx-auto right-0 left-0 -top-16 border-[10px] border-white group-hover:shadow-md transform duration-300">
                            <span className="text-4xl md:text-4xl text-gray-600 group-hover:text-blue-600   transform duration-300">
                                {item.icon}
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-6 p-4">
                            <h2 className="text-xl capitalize font-semibold text-gray-800 my-2">{item.title}</h2>
                            <p className="text-center text-sm text-gray-600">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChooseUs;
