"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="bg-btnColored h-20 w-full"></div>
      <div className="p-4 m-10 flex flex-wrap justify-center items-center">
        <div className="w-[600px] bg-white rounded-lg p-8 relative">
          <div className="flex items-center pb-3 ">
            <h3 className="text-3xl text-center font-bold flex-1 text-textColor">
              Choose payment Method
            </h3>
          </div>

          <div className="my-8">
            <div className="flex flex-wrap gap-8 items-center mt-4 ">
              <Link href={"/"} className="bg-[#FFF4F8] py-2 rounded-lg  px-6">
                <Image
                  src="/paypal.svg"
                  alt="Paypal"
                  width={100}
                  height={100}
                />
              </Link>

              <Link
                href={"/"}
                className="py-5 flex flex-col items-center justify-center bg-[#FFF4F8] px-6 rounded-lg"
              >
                <Image
                  src="/card.svg"
                  alt="Card payment"
                  width={100}
                  height={100}
                />
                <h1 className="font-normal text-xl">Cards</h1>
              </Link>

              <Link
                href={"/"}
                className="py-8 flex flex-col items-center justify-center bg-[#FFF4F8] rounded-lg"
              >
                <Image
                  src="/wallet.svg"
                  alt="Wallet"
                  width={150}
                  height={200}
                />
                <h1 className="font-normal text-xl mt-">Wallet</h1>
              </Link>
            </div>

            <div className="my-8 mx-auto text-center">
              <span className="text-secondary text-lg text-center">
                Pay with
                <button
                  className="font-bold px-2 underline"
                  onClick={showModal} // Show the modal when this button is clicked
                >
                  Vodafone Cash or InstaPay
                </button>
                ?
              </span>
            </div>

            <div className="flex justify-center items-center gap-2">
              <button className="font-normal bg-bgColor text-white py-2 px-6 rounded-3xl">
                Pay 25 $
              </button>
              <button className="font-normal bg-[#FFF4F8] py-3 px-6 rounded-3xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
          onClick={hideModal} // Hide modal when clicking outside of the content
        >
          <div
            className="bg-white rounded-xl p-10  w-[600px] relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
          >
            <h2 className="text-3xl text-textColor  font-bold mb-4 text-center">
              Pay with local payment method
            </h2>
            <p className="text-center my-10 p-6 text-lg font-normal  bg-[#FFF4F8]">
              If you’d like to pay using Vodafone Cash or InstaPay, please
              contact the admin at <br /> <strong className="text-textColor my-2">00201015800248</strong> <br /> for
              assistance.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-btnColored text-white px-6 py-2 rounded-3xl"
                onClick={hideModal} // Hide the modal on "Got it" button click
              >
                Got it
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-3xl"
                onClick={hideModal} 
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
