import Link from "next/link";
import { TbShoppingCartCode } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-2 md:gap-8 justify-between items-center h-auto md:h-16 py-2 md:py-0 bg-white text-black shadow-sm font-mono px-4 sm:px-8 lg:px-32 xl:px-48 border-b-2 border-gray-200">
      {/* Top Section: md üstünde left - center - right hizası korunuyor */}
      <div className="w-full flex justify-between items-center md:w-auto">
        {/* Left Side (Logo) */}
        <Link
          href={`/`}
          className="text-2xl font-bold bg-black text-white px-4 py-1 rounded-md flex justify-center items-center gap-1"
        >
          <span>Mert</span>
          <span className="bg-white text-black rounded-md text-xl px-[2px]">
            Shop
          </span>
        </Link>

        {/* Right Side (Basket) - md altında sola yaslanmasın diye hidden */}
        <Link
          href={`/basket`}
          className="flex justify-center items-center gap-1 md:hidden"
        >
          <span>My Basket (0)</span>
          <TbShoppingCartCode className="text-black text-3xl" />
        </Link>
      </div>

      {/* Center Side (Search Bar) - md altında tam genişlikte */}
      <div className="w-full flex justify-center items-center py-2 md:py-0 order-2 md:order-none">
        <div className="flex justify-center items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-200 rounded-md px-2 py-1 w-full md:w-auto md:min-w-[300px] lg:min-w-[400px] xl:min-w-[500px]"
          />
          <button className="bg-black text-white px-2 py-1 rounded-md">
            Search
          </button>
        </div>
      </div>

      {/* Right Side (Basket) - md üstünde sağda kalması için */}
      <div className="hidden md:flex justify-center items-center gap-4">
        <Link
          href={`/basket`}
          className="flex justify-center items-center gap-1"
        >
          <p className="whitespace-nowrap">My Basket (0)</p>
          <TbShoppingCartCode className="text-black text-2xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
