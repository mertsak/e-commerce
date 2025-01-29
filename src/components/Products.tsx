"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full h-full ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
