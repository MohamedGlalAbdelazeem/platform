
function Page() {
  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
    <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
      <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
       image
      </div>

      <div className="sm:p-8 my-16 w-full">
        <div className="text-center my-10 w-full mx-auto">
          <h3 className="text-blue-500 text-2xl font-extrabold max-md:text-center">Reset Your Password!</h3>
        </div>
        <div className="mt-6 ">
          <button type="button" className="w-full py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
          Go to Homepage
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Page;
