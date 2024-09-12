import OurCoursesBanner from "../Our-courses/OurCoursesBanner"
function page() {
// in this code if uploaded course show this if not shawo another

  return (
   <>
  <div className="bg-gray-200 ">
    <div className="text-center max-w-3xl p-28 h-[406px]   max-md:max-w-md mx-auto">
      <OurCoursesBanner/>
    </div>
  </div>
  <div className="-mt-28 p-12 max-w-3xl items-center gap-6 max-md:max-w-md mx-auto flex flex-col justify-center">
    <img width={"350px"} height={"350px"} src="https://media.licdn.com/dms/image/D5610AQFoEjuG_jxBlw/image-shrink_800/0/1700750701461?e=2147483647&v=beta&t=JuIZRQn-W4nzLtEAYosV7q5X7atKbU4QePoTiTWuzOg" alt="" />
    <span>Nothing here yet</span>
    <button className="bg-gray-200 p-2 rounded-2xl">Upload Your Course Now</button>
  </div>
  
   </>
  )
}

export default page