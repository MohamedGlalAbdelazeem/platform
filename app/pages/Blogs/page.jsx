import BlogCards from "@/app/_components/BlogCards";
import Banner from "../../_components/Banner";
import { FaSearch } from "react-icons/fa";
function Page() {
  return (
    <>
      {/* Banner */}
      <div className="my-5">
        <Banner 
          title={"Medical Insights & Articles"}
          body={"Explore expert articles on a wide range of medical topics. Our blog is categorized by specialty, ensuring that you can easily find the information you're interested in. Whether you're a student or a healthcare professional, these articles provide in-depth knowledge to enhance your medical expertise."}  />
      </div>
      {/* Filtering */}
      <div className="-mt-9 w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">
        <div className="w-max mx-auto bg-gray-300 border divide-x divide-white flex rounded overflow-hidden">

          {/* Category */}
          <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="categories" className="block text-sm font-medium text-gray-900">Category</label>
            <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2">
              <option defaultValue>All (225)</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>
          </div>

          {/* SubCategory */}
          <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <label htmlFor="subcategories" className="block text-sm font-medium text-gray-900">SubCategory</label>
            <select id="subcategories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2">
              <option defaultValue>All (285)</option>
              <option value="1">SubCategory 1</option>
              <option value="2">SubCategory 2</option>
            </select>
          </div>

          {/* Search */}
          <div className="gap-3 px-5 py-2.5 flex items-center text-[#333] text-sm outline-none hover:bg-gray-300 transition-all">
            <FaSearch className="text-2xl" />
          </div>
        </div>
      </div>
      {/* Blogs Display */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <BlogCards/>
        </div>
      </div>
    </>
  );
}

export default Page;
