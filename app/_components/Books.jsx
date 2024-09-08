"use client";
 
function Books() {
 

  return (
    <section className="bg-gray-300 rounded-2xl sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto sm:px-6 p-2 my-32">
      <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="tracking-tight font-bold text-gray-800 sm:text-5xl md:text-2xl">
            Explore Essential Medical Books!
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Discover a curated selection of medical books to support your learning and professional growth. Browse through detailed descriptions and download resources directly from our Telegram channel.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
           
         
          </div>
        </div>

        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Books Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Books;
