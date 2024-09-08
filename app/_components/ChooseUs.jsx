import { AiFillCarryOut } from "react-icons/ai";

function ChooseUs() {
    const chooseData = [
        {
            icon : <AiFillCarryOut />,
            title:"Expert-Led Courses",
            body:"Learn from industry-leading professionals and academic experts."
        },
        {
            icon : <AiFillCarryOut />,
            title:"Expert-Led Courses",
            body:"Learn from industry-leading professionals and academic experts."
        },
        {
            icon : <AiFillCarryOut />,
            title:"Expert-Led Courses",
            body:"Learn from industry-leading professionals and academic experts."
        },
        {
            icon : <AiFillCarryOut />,
            title:"Expert-Led Courses",
            body:"Learn from industry-leading professionals and academic experts."
        },
    ]
  return (
    <div className="w-10/12 sm:w-full mx-auto  my-32">
    <div className="lg:w-[480px]  max-w-md sm:max-w-full mx-auto my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
        <h3 className="mx-2 text-center capitalize text-2xl sm:text-xl font-normal">Why Choose Us?</h3>
    </div>
    <div className='pb-11'>
        <h1 className='text-center text-3xl font-bold'>What distinguishes MedLearn Hub</h1>
    </div>
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-12 my-16">
        {
            chooseData.map((item, index)=>{
                return(
                    <div key={index} className="group w-64 h-[225px] bg-gray-300 rounded-bl-[10px] rounded-br-[10px]  rounded-tl-[65px] rounded-tr-[65px] shadow-md relative  m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="bg-red-500 flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-[11px] border-white    hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                        <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                          {item.icon}
                        </span>
                    </div>
                    <div className="flex  mt-10 flex-col items-center justify-center absolute mx-auto inset-0 ">
                        <div>
                            <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-2">{item.title}</h2>
                        </div>
                        <div>
                            <p className="text-center text-base">{item.body}</p>
                        </div>
                    </div>
                </div>
                );
            })
        }
    </div>
    </div>
  )
}

export default ChooseUs