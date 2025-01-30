import FilterProducts from "@/components/FilterProducts";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col justify-start items-start w-full h-full p-6 gap-4 dark:bg-black">
      {/* Filter Products */}
      <div className="w-full lg:w-1/4 flex justify-center items-start h-full">
        <FilterProducts />
      </div>

      {/* Products */}
      <div className="w-full lg:w-3/4 flex justify-center items-center h-full">
        <Products />
      </div>
    </div>
  );
}
