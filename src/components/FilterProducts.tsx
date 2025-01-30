"use client";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { filterProducts } from "@/redux/productsSlice";
import useUpdateUrl from "@/hooks/UseUpdateUrl";

const FilterProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const searchParams = useSearchParams();

  // URL'deki mevcut parametreleri alıp state'e atıyoruz
  const [brand, setBrand] = useState(searchParams.get("brand") ?? "all");
  const [category, setCategory] = useState(
    searchParams.get("category") ?? "all"
  );

  // URL'deki fiyat aralığını alıp state'e atıyoruz
  const [price, setPrice] = useState<number[]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 10000,
  ]);

  // URL'deki sıralama parametresini alıp state'e atıyoruz
  const [sortOrderPrice, setSortOrderPrice] = useState(
    searchParams.get("sortOrderPrice") || "lowToHigh"
  );

  const updateURL = useUpdateUrl(); // Hook'u kullanıyoruz

  // Filtre değiştiğinde URL'yi güncelle ve store'a göndiyoruz
  useEffect(() => {
    updateURL({
      brand,
      category,
      minPrice: price[0].toString(),
      maxPrice: price[1].toString(),
      sortOrderPrice,
    });
    dispatch(
      filterProducts({
        brand,
        category,
        minPrice: price[0],
        maxPrice: price[1],
        sortOrderPrice,
      })
    );
  }, [brand, category, price, sortOrderPrice]);

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
      className="w-full h-auto border border-gray-200"
    >
      <Typography variant="h5" gutterBottom>
        Filter Products
      </Typography>

      {/* Filter by Brand */}
      <FormControl fullWidth margin="normal">
        <InputLabel className="bg-white" id="brand-label">
          Brand
        </InputLabel>
        <Select
          onChange={(e) => setBrand(e.target.value)}
          labelId="brand-label"
          id="brand"
          value={brand}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 250, // Menü yüksekliğini sınırlayalım
                overflowY: "auto", // Kaydırma ekleyelim
              },
            },
          }}
        >
          <MenuItem value="all">All</MenuItem>
          {[...new Set(products.map((product) => product.brand))].map(
            (brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      {/* Filter by Category */}
      <FormControl fullWidth margin="normal">
        <InputLabel className="bg-white" id="category-label">
          Category
        </InputLabel>
        <Select
          onChange={(e) => setCategory(e.target.value)}
          labelId="category-label"
          id="category"
          value={category}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 250, // Menü yüksekliğini sınırlayalım
                overflowY: "auto", // Kaydırma ekleyelim
              },
            },
          }}
        >
          <MenuItem value="all">All</MenuItem>

          {[...new Set(products.map((product) => product.category))].map(
            (category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      {/* Filter by Price */}
      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={price} // defaultValue yerine value kullan
        onChange={(_, newValue) => {
          if (Array.isArray(newValue)) {
            setPrice(newValue);
          }
        }}
        onChangeCommitted={(_, newValue) => {
          if (Array.isArray(newValue)) {
            updateURL({
              brand,
              category,
              minPrice: newValue[0].toString(),
              maxPrice: newValue[1].toString(),
              sortOrderPrice,
            });
          }
        }}
        min={0}
        max={10000}
        step={100}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: "$0" },
          { value: 10000, label: "$10000" },
        ]}
      />

      {/* Sorting price low to high and high to low */}
      <FormControl fullWidth margin="normal">
        <InputLabel className="bg-white" id="sortPrice-label">
          Sort by Price
        </InputLabel>
        <Select
          onChange={(e) => setSortOrderPrice(e.target.value)}
          labelId="sortPrice-label"
          id="sortPrice"
          value={sortOrderPrice}
        >
          <MenuItem value="lowToHigh">Low to High</MenuItem>
          <MenuItem value="highToLow">High to Low</MenuItem>
        </Select>
      </FormControl>

      {/* Reset Filter */}
      <button
        onClick={() => {
          setBrand("all");
          setCategory("all");
          setPrice([0, 10000]);
          setSortOrderPrice("lowToHigh");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterProducts;
