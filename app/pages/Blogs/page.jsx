import BlogCards from "@/app/_components/BlogCards";
import BlogsBanner from "./BlogsBanner";

function Page() {
  return (
    <>
    <BlogsBanner/>
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
