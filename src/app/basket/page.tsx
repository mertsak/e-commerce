import BasketProducts from "@/components/BasketProducts";
import OrderSummary from "@/components/OrderSummary";
import React from "react";

const Basket = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:h-[calc(100vh-64px)] lg:p-6 p-4 gap-4">
      <div className="w-full lg:w-3/4 flex justify-center items-start h-full">
        <BasketProducts />
      </div>

      <div className="w-full lg:w-1/4 flex flex-col justify-start items-start h-full">
        <OrderSummary />

        <div className="w-full flex justify-center items-center h-12 mt-4">
          <button className="w-full h-full bg-black text-white text-lg font-bold rounded-md hover:bg-gray-800 duration-300">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
