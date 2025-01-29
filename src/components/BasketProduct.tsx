import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

interface ProductProps {
  product: {
    id: number;
    name: string;
    image: string;
    imageFile: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    numReviews: number;
  };
}

const BasketProduct: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-start items-center gap-4 w-full border border-gray-300 shadow-sm rounded-md py-4 lg:px-8 px-4">
      <div className="border border-gray-300 shadow-sm rounded-md py-2 px-6 mr-4">
        <Image
          src={`/assets/${product.imageFile}/${product.image}`}
          alt={product.name}
          className="object-contain w-full h-full min-w-[100px] min-h-[100px] lg:min-w-[200px] lg:min-h-[200px] max-w-[200px] max-h-[200px]"
          layout="intrinsic"
          width={200}
          height={200}
        />
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center gap-6 w-full">
        <p className="lg:max-w-[450px] w-full">
          <span className="font-bold mr-[2px]">{product.name}</span>
          <span>{product.description}</span>
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1 border border-gray-300 rounded-md">
            <button className="px-3 py-1 bg-gray-300 rounded-tl-md rounded-bl-md hover:bg-gray-200 duration-300 text-lg font-semibold">
              -
            </button>
            <span className="bg-white px-3 py-1 font-bold">1</span>
            <button className="px-3 py-1 bg-gray-300 rounded-tr-md rounded-br-md hover:bg-gray-200 duration-300 text-lg font-semibold">
              +
            </button>
          </div>

          <p className="font-bold">${product.price}</p>

          <button>
            <FaTrash className="text-red-500 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
