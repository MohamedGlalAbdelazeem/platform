import { AiFillCarryOut } from "react-icons/ai";

function ChooseUs() {
    const chooseData = [
        {
            icon: <AiFillCarryOut />,
            title: "Expert-Led Courses",
            body: "Learn from industry-leading professionals and academic experts."
        },
        {
            icon: <AiFillCarryOut />,
            title: "Up-to-Date Research",
            body: "Stay ahead with the latest medical studies and reports."
        },
        {
            icon: <AiFillCarryOut />,
            title: "Career Growth",
            body: "Gain skills and certifications to advance your career in the medical field."
        },
        {
            icon: <AiFillCarryOut />,
            title: "Flexible Learning",
            body: "Study at your own pace with access to online materials anytime, anywhere."
        },
    ];

    return (
        <div className="w-10/12 sm:w-full mx-auto my-32">
            <div className="lg:w-[480px] max-w-md sm:max-w-full mx-auto my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
                <h3 className="mx-2 text-center capitalize text-2xl sm:text-xl font-normal">Why Choose Us?</h3>
            </div>
            <div className="pb-11">
                <h1 className="text-center text-3xl font-bold">What distinguishes MedLearn Hub</h1>
            </div>
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
