"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const OrderSummary = () => {
  // Sepetteki toplam tutarı almak için useSelector hook'unu kullanıyoruz.
  const totalAmount = useSelector(
    (state: RootState) => state.products.totalAmount
  );

  return (
    <div className="flex flex-col justify-start items-start gap-4 w-full p-4 border border-gray-300 shadow-sm rounded-md">
      {/* Sipariş özeti */}
      <p className="text-2xl font-bold border-b-2 border-black w-full pb-4 dark:text-white">
        Order Summary
      </p>

      {/* Sepet tutarı */}
      <div className="text-lg font-bold flex justify-between w-full dark:text-white">
        <p>Basket Amount :</p>
        <p>${totalAmount}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
