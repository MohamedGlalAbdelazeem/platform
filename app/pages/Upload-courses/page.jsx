import Link from "next/link"
function page() {
  return (
   <>
    <div className="bg-gray-200 ">
    <div className="text-center max-w-3xl p-40  max-md:max-w-md mx-auto">
      <div>
        <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">My Courses</h2>
        <div className="mt-2 gap-8 flex items-center justify-center max-sm:flex-col">
          <button type="button"
           className="  bg-gray-300   border transition-all  font-bold text-lg rounded-3xl px-3 py-2">
             My Joined Courses
            </button>
            <Link href={"/pages/Upload-courses"}
           className=" bg-gray-300   border transition-all  font-bold text-lg rounded-3xl px-3 py-2">
           My Uploaded Courses
          </Link>
        </div>
      </div>
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