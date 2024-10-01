import Image from "next/image";
function MedicalBookBanner() {
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
          Explore Our Medical Book Collection
          </h2>
          <p className="text-white mt-3 lg:text-lg sm:text-base leading-relaxed">
          Access a comprehensive collection of medical books covering various specialties. Whether you're looking for textbooks, research publications, or practical guides, our medical books section provides valuable resources for healthcare professionals and students. Download books directly through our Telegram channel for convenient access.
         </p>
        </div>
      </div>
    </div>
  );
}
export default MedicalBookBanner;
