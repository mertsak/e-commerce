"use client";
import React from "react";
import BasketProduct from "./BasketProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

const BasketProducts = () => {
  // Sepetteki ürünleri almak için useSelector hook'unu kullanıyoruz.
  const basketProducts = useSelector(
    (state: RootState) => state.products.basketProducts
  );

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-4">
      {/* Sepette ürün varsa BasketProduct componentine aktarıyoruz eğer yoksa sepette ürün olmadığını bilgilendiriyoruz. */}
      {basketProducts.length && basketProducts.length >= 0 ? (
        <>
          {basketProducts.map((product) => (
            <div
              key={product.id}
              className="w-full bg-white flex justify-center items-center gap-4 rounded-md"
            >
              <BasketProduct product={product} />
            </div>
          ))}
        </>
      ) : (
        <div className="w-full flex justify-center items-center h-20 rounded-md border-2 border-gray-500 gap-1 dark:border-white">
          <p className="font-semibold text-gray-600 dark:text-white">
            There are no products in your cart. Please add the product to your
            cart.
          </p>
          <Link href="/" className="text-blue-500 font-semibold">
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default BasketProducts;
