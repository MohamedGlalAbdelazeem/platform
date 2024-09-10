import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function Books() {
 

  return (
    <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-300 p-16 rounded-2xl my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify items-center lg:flex flex-col lg:flex-row">
        <div class="sm:text-center lg:text-left">
            <h1 class="text-xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-2xl">
               Explore Essential Medical Books!
              </h1>
            <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover a curated selection of medical books to support your learning and professional growth. Browse through detailed descriptions and download resources directly from our Telegram channel.
            </p>
           
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/pages/Medical-books"
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Show All Books
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
           
        </div>

  
        <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.pinimg.com/originals/ac/ee/6b/acee6bad92436f7c7ca99f9c6fe8fb32.png" alt=""/>
        </div>
       
    </div>

</section>
  );
}

export default Books;
