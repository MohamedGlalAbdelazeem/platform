import BlogCards from "@/app/_components/BlogCards";
import BlogsBanner from "./BlogsBanner";

function Page() {
  return (
    <>
    <BlogsBanner/>
      {/* Blogs Display */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
       <div className="flex flex-wrap justify-center items-center">
          <BlogCards/>
        </div>
      </div>
    </>
  );
}

export default Page;
