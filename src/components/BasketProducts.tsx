"use client";
import React from "react";
import BasketProduct from "./BasketProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const BasketProducts = () => {
  const basketProducts = useSelector(
    (state: RootState) => state.products.basketProducts
  );

  

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-4">
      {basketProducts.map((product) => (
        <div
          key={product.id}
          className="w-full bg-white flex justify-center items-center gap-4"
        >
          <BasketProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default BasketProducts;
