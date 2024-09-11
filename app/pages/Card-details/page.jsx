import React from 'react';

function Page() {
  return (
    <div className="container flex flex-col py-12 max-w-full">
      <div className="max-w-md mx-auto md:max-w-xl p-6">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:p-8 bg-white shadow-lg">
            <p className="mt-4 mb-6 text-gray-700">Payment</p>
            
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Card Number</label>
                <input 
                  type="text" 
                  name="cardNumber" 
                  className="w-full p-2 shadow-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:ring-opacity-20" 
                  placeholder="0000 00000 0000 0000" 
                />
              </div>
              
              <div className="flex mb-6 gap-4 w-full">
                <div className="w-1/2">
                  <label className="text-gray-700">Expiration Date</label>
                  <input 
                    type="text" 
                    name="expiryDate" 
                    className="w-full p-2 shadow-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:ring-opacity-20" 
                    placeholder="MM/YY" 
                  />
                </div>

                <div className="w-1/2 mb-6">
                  <label className="text-gray-700">CVV</label>
                  <input 
                    type="text" 
                    name="cvv" 
                    className="w-full p-2 shadow-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:ring-opacity-20" 
                    placeholder="123" 
                  />
                </div>
              </div>

              <div>
                <button className="w-full bg-green-500 p-3 text-gray-100 font-bold">
                  Pay $500
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
