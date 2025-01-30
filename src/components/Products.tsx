"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useState, useEffect } from "react";
import { IProduct } from "@/redux/productsSlice";

const INITIAL_LOAD = 10; // İlk açılışta gösterilecek ürün sayısı
const LOAD_MORE = 5; // Butona tıklandıkça yüklenecek ürün sayısı

const Products = () => {
  const allProducts = useSelector(
    (state: RootState) => state.products.products
  );

  // Ürünleri sayfada göstermek için state tanımlıyoruz
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  // Tüm ürünlerin ilk açılışta gösterilmesi için useEffect kullanıyoruz
  useEffect(() => {
    setVisibleProducts(allProducts.slice(0, visibleCount));
  }, [visibleCount, allProducts]);


  // Load More butonuna tıklandığında çalışacak fonksiyon
  const handleLoadMore = () => {
    if (visibleCount >= allProducts.length) {
      alert("Daha fazla ürün yok!");
      return;
    }
    setVisibleCount((prevCount) => prevCount + LOAD_MORE);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Ürünleri göstermek için grid oluşturuyoruz */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
        {visibleProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {/* Load More butonu */}
      <button
        onClick={handleLoadMore}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        disabled={visibleCount >= allProducts.length}
      >
        {visibleCount >= allProducts.length
          ? "Tüm Ürünler Yüklendi"
          : "Load More"}
      </button>
    </div>
  );
};

export default Products;
