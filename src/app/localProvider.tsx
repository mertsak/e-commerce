"use client"; // Client bileşeni olarak tanımla
import { setBasketProducts } from "@/redux/productsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// localStorage'dan verileri alıp redux store'a ekleyen bir bileşen bu yapılmaz ise hydrate işlemi sırasında veriler kaybolabilir
// ve bundan dolayı kullanıcıya yanıltıcı bir deneyim sunulabilir. ve hdyrete error hatası alınabilir.

const StoreInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBasket = localStorage.getItem("basketProducts");
      if (storedBasket) {
        dispatch(setBasketProducts(JSON.parse(storedBasket)));
      }
    }
  }, [dispatch]);

  return null;
};

export default StoreInitializer;
