"use client";
import Link from "next/link";
import { TbShoppingCartCode } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "@/redux/productsSlice";
import { RootState } from "@/redux/store";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const basketProducts = useSelector(
    (state: RootState) => state.products.basketProducts
  );
  const dispatch = useDispatch();

  // ürün arama fonksiyonu
  const handleSearchProducts = (searchText: string) => {
    dispatch(searchProducts(searchText));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="flex flex-col md:flex-row gap-2 md:gap-8 justify-between items-center h-auto md:h-16 py-2 md:py-0 bg-white dark:bg-black text-black shadow-sm font-mono px-4 sm:px-8 lg:px-32 xl:px-48 border-b-2 border-gray-200">
      {/* Top Section: md üstünde left - center - right hizası korunuyor */}
      <div className="w-full flex justify-between items-center md:w-auto">
        {/* Left Side (Logo) */}
        <Link
          href={`/`}
          className="text-2xl font-bold bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-md flex justify-center items-center gap-1"
        >
          <span>Mert</span>
          <span className="bg-white dark:bg-black text-black dark:text-white rounded-md text-xl px-[2px]">
            Shop
          </span>
        </Link>

        {/* Right Side (Basket) - md altında sola yaslanmasın diye hidden */}
        <Link
          href={`/basket`}
          className="flex justify-center items-center gap-1 md:hidden"
        >
          <span className="text-black dark:text-white">
            My Basket ({basketProducts.length})
          </span>
          <TbShoppingCartCode className="text-black dark:text-white text-3xl" />
        </Link>
      </div>

      {/* Center Side (Search Bar) - md altında tam genişlikte */}
      <div className="w-full flex justify-center items-center py-2 md:py-0 order-2 md:order-none">
        <div className="flex justify-center items-center gap-2 w-full md:w-auto">
          <input
            onChange={(e) => handleSearchProducts(e.target.value)}
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 dark:border-white rounded-md px-2 py-1 w-full md:w-auto md:min-w-[300px] lg:min-w-[400px] xl:min-w-[500px]"
          />
        </div>
      </div>

      {/* Right Side (Basket) - md üstünde sağda kalması için */}
      <div className="hidden md:flex justify-center items-center gap-4">
        <Link
          href={`/basket`}
          className="flex justify-center items-center gap-1"
        >
          <p className="whitespace-nowrap text-black dark:text-white">
            My Basket ({basketProducts.length})
          </p>
          <TbShoppingCartCode className="text-black dark:text-white text-2xl" />
        </Link>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-white rounded bg-indigo-600 dark:bg-indigo-700"
        >
          {darkMode ? (
            <FaSun className="text-white" />
          ) : (
            <FaMoon className="text-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
