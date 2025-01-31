"use client";
import BasketProducts from "@/components/BasketProducts";
import OrderSummary from "@/components/OrderSummary";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Swal from "sweetalert2";

const Basket = () => {
  const router = useRouter();

  const basketProducts = useSelector(
    (state: RootState) => state.products.basketProducts
  );

  // sepeti onaylama ödeme işlemi
  const handleConfirmOrder = () => {
    if (basketProducts && basketProducts.length > 0) {
      router.push("/checkout");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Your cart is empty!",
        text: "You cannot proceed to the payment step. Please add products to your cart.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:h-[calc(100vh-64px)] lg:p-6 p-4 gap-4 dark:bg-black">
      {/* Basket Products */}
      <div className="w-full lg:w-3/4 flex justify-center items-start h-full">
        <BasketProducts />
      </div>
      {/* Order Summary */}

      <div className="w-full lg:w-1/4 flex flex-col justify-start items-start h-full">
        <OrderSummary />

        {/* Confirm Order Button */}
        <div className="w-full flex justify-center items-center h-12 mt-4">
          <button
            onClick={() => handleConfirmOrder()}
            className="w-full h-full bg-black dark:bg-white text-white dark:text-black text-lg font-bold rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 hover:text-gray-200 duration-300"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
