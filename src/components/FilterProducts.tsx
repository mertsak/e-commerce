"use client";
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const FilterProducts = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
      className="w-full h-auto"
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
          labelId="brand-label"
          id="brand"
          defaultValue="all"
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
          labelId="category-label"
          id="category"
          defaultValue="all"
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
        defaultValue={1000}
        min={0}
        max={1000}
        step={10}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: "$0" },
          { value: 1000, label: "$1000" },
        ]}
      />

      {/* Sorting price low to high and high to low */}
      <FormControl fullWidth margin="normal">
        <InputLabel className="bg-white" id="sortPrice-label">
          Sort by Price
        </InputLabel>
        <Select
          labelId="sortPrice-label"
          id="sortPrice"
          defaultValue="lowToHigh"
        >
          <MenuItem value="lowToHigh">Low to High</MenuItem>
          <MenuItem value="highToLow">High to Low</MenuItem>
        </Select>
      </FormControl>

      {/* Sorting numReviews low to high and high to low */}
      <FormControl fullWidth margin="normal">
        <InputLabel className="bg-white" id="sortReviews-label">
          Sort by Reviews
        </InputLabel>
        <Select
          labelId="sortReviews-label"
          id="sortReviews"
          defaultValue="lowToHigh"
        >
          <MenuItem value="lowToHigh">Low to High</MenuItem>
          <MenuItem value="highToLow">High to Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterProducts;
