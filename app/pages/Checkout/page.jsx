import { FaCcPaypal } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";


function page() {
  return (
    <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center  h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
            <div class="w-[500px] bg-red-300 shadow-lg rounded-lg p-8 relative">
                <div class="flex items-center pb-3 border-gray-300">
                    <h3 class="text-xl text-center font-bold flex-1 text-gray-800">Choose payment Method</h3>
                </div>
                    <div class="flex justify-center flex-wrap gap-4 my-11">
                        <button type="button"
                            class="inline-flex items-center justify-center rounded-full border-none outline-none ">
                            <FaCcPaypal className="text-[100px]" />
                        </button>
                      
                        <button type="button"
                            class="inline-flex items-center justify-center rounded-full border-none outline-none ">
                            <FaWallet  className="text-[100px]" />
                        </button>

                        <button type="button"
                            class="inline-flex items-center justify-center rounded-full border-none outline-none ">
                            <FaCcMastercard  className="text-[100px]" />
                        </button>
                    </div>
                <div className="flex justify-center items-center gap-6">
                        <button class= "px-6 py-3 text-sm bg-gray-500 rounded-3xl">Pay 25 $</button>
                        <button class=" px-6 py-3 text-sm bg-gray-400 rounded-3xl ">Cancel</button>
                </div>
            </div>
        </div>
  )
}

export default page