import { IProduct } from "@/redux/productsSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/productsSlice";
import {  toast } from 'react-toastify';

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddBasket = (product: IProduct) => {

    dispatch(addToBasket(product));

    toast.success(`${product.name} added to cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  };

  return (
    <div className="w-full h-full min-h-[400px] flex flex-col justify-center items-center border border-gray-300 shadow-sm rounded-md py-2 hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="w-full h-1/2 flex justify-center items-center">
        <Image
          src={`/assets/${product.imageFile}/${product.image}`}
          alt={product.name}
          className="object-contain w-full h-full max-w-[200px] max-h-[200px]"
          layout="intrinsic"
          width={200}
          height={200}
        />
      </div>

      <div className="w-full h-1/2 p-3 flex flex-col justify-between items-start gap-2 mt-4">
        <p className="text-base font-medium line-clamp-1">{product.name}</p>
        <p className="text-sm text-gray-500 line-clamp-1">
          {product.description}
        </p>

        <div className="flex justify-between items-start flex-col gap-2 w-full">
          <p className="text-sm font-bold text-gray-700">
            Basket Price: ${product.price}
          </p>
          <button
            onClick={() => handleAddBasket(product)}
            className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors duration-200 w-full flex justify-center items-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
