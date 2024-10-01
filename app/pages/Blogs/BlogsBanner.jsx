import Image from "next/image";
function BlogsBanner() {
  return (
    <div className="relative bg-gray-300 p-2 flex items-center justify-center h-[406px]">
      <div className="absolute inset-0 bg-bgBanner opacity-90 z-10"></div>
      <Image
        src="/Banner.jpg"
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        className="z-0"
      />
      <div className="z-10 text-center max-w-5xl mt-10 max-md:max-w-md mx-auto">
        <div>
          <h2 className="lg:text-4xl mt-5 font-bold sm:text-lg  text-fontColor">
          Medical Insights & Articles
          </h2>
          <p className="text-white mt-3 lg:text-lg sm:text-base leading-relaxed">
          Explore expert articles on a wide range of medical topics. Our blog is categorized by specialty, ensuring that you can easily find the information you're interested in. Whether you're a student or a healthcare professional, these articles provide in-depth knowledge to enhance your medical expertise. </p>
        </div>
      </div>
    </div>
  );
}
export default BlogsBanner;
