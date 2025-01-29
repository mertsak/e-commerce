import React from "react";

const OrderSummary = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 w-full p-4 border border-gray-300 shadow-sm rounded-md">
      <p className="text-2xl font-bold border-b-2 border-black w-full pb-4">
        Order Summary
      </p>

      <div className="text-lg font-bold flex justify-between w-full">
        <p>Basket Amount :</p>
        <p>$199</p>
      </div>
    </div>
  );
};

export default OrderSummary;
