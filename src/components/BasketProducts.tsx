import React from "react";
import BasketProduct from "./BasketProduct";

// mock data
const basketProducts = [
  {
    id: 1,
    name: "Sony Wh-ch510",
    image: "sony.webp",
    imageFile: "HeadPhoneImage",
    description: " Black Wireless Bluetooh On-Ear HeadPhones",
    brand: "Sony",
    category: "HeadPhone",
    price: 199,
    countInStock: 86,
    numReviews: 238,
  },
  {
    id: 2,
    name: "Philips Tah4105",
    image: "philips.webp",
    imageFile: "HeadPhoneImage",
    description: "Black Wired On-Ear HeadPhones",
    brand: "Philips",
    category: "HeadPhone",
    price: 99,
    countInStock: 96,
    numReviews: 338,
  },
];

const BasketProducts = () => {
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
