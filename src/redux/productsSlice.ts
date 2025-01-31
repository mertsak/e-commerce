// store/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./mock/Products.js";

// Ürünlerin tipini belirliyoruz
export interface IProduct {
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
  quantity?: number;
}

// State tipini belirliyoruz
export interface ProductsState {
  products: IProduct[];
  basketProducts: IProduct[];
  totalAmount: number; // Yeni state alanı
  allProducts: IProduct[];
}

// İlk state değerlerini belirliyoruz
const initialState: ProductsState = {
  products: ProductsData, // Filtrelenen ürünler
  allProducts: ProductsData, // Orijinal ürün listesi
  basketProducts: [], // İlk başta boş bırak
  totalAmount: 0, // İlk başta 0 bırak
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // State'i güncelleyen fonksiyonları tanımlıyoruz
    setBasketProducts: (state, action) => {
      state.basketProducts = action.payload;
      state.totalAmount = action.payload.reduce(
        (acc: number, product: IProduct) =>
          acc + product.price * (product.quantity ?? 0),
        0
      );
    },
    // Sepete ürün ekleyen fonksiyon
    addToBasket: (state, action) => {
      const existingProduct = state.basketProducts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        if (existingProduct.quantity !== undefined) {
          existingProduct.quantity += 1;
        }
      } else {
        state.basketProducts = [
          ...state.basketProducts,
          { ...action.payload, quantity: 1 },
        ];
      }

      state.totalAmount = state.basketProducts.reduce(
        (acc, item) => acc + item.price * (item.quantity || 0),
        0
      );

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "basketProducts",
          JSON.stringify(state.basketProducts)
        );
      }
    },
    // Ürün adedini artıran fonksiyon
    incrementQuantity: (state, action) => {
      const existingProduct = state.basketProducts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        if (existingProduct.quantity !== undefined) {
          existingProduct.quantity += 1;
        }
      }

      state.totalAmount = state.basketProducts.reduce(
        (acc, item) => acc + item.price * (item.quantity || 0),
        0
      );

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "basketProducts",
          JSON.stringify(state.basketProducts)
        );
      }
    },
    // Ürün adedini azaltan fonksiyon
    decrementQuantity: (state, action) => {
      const existingProduct = state.basketProducts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        if (existingProduct.quantity !== undefined) {
          existingProduct.quantity -= 1;
        }
      }

      state.totalAmount = state.basketProducts.reduce(
        (acc, item) => acc + item.price * (item.quantity || 0),
        0
      );

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "basketProducts",
          JSON.stringify(state.basketProducts)
        );
      }
    },
    // Sepetten ürün silen fonksiyon
    deleteToBasket: (state, action) => {
      state.basketProducts = state.basketProducts.filter(
        (product) => product.id !== action.payload.id
      );

      state.totalAmount = state.basketProducts.reduce(
        (acc, item) => acc + item.price * (item.quantity || 0),
        0
      );

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "basketProducts",
          JSON.stringify(state.basketProducts)
        );
      }
    },
    // Ürün arama fonksiyonu
    searchProducts: (state, action) => {
      if (action.payload === "") {
        state.products = state.allProducts; // Eğer input boşsa orijinal listeyi geri yükle
      } else {
        state.products = state.allProducts.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    // Ürünleri filtreleyen fonksiyon
    filterProducts: (state, action) => {
      const { brand, category, minPrice, maxPrice, sortOrderPrice } =
        action.payload;

      let filteredProducts = state.allProducts;

      if (brand && brand !== "all") {
        filteredProducts = filteredProducts.filter((p) => p.brand === brand);
      }

      if (category && category !== "all") {
        filteredProducts = filteredProducts.filter(
          (p) => p.category === category
        );
      }

      filteredProducts = filteredProducts.filter(
        (p) => p.price >= minPrice && p.price <= maxPrice
      );

      if (sortOrderPrice === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrderPrice === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      state.products = filteredProducts;
    },
    clearBasket: (state) => {
      state.basketProducts = [];
      state.totalAmount = 0;

      if (typeof window !== "undefined") {
        localStorage.removeItem("basketProducts");
      }
    },
  },
});

export const {
  setBasketProducts,
  addToBasket,
  incrementQuantity,
  decrementQuantity,
  deleteToBasket,
  searchProducts,
  filterProducts,
  clearBasket,
} = productsSlice.actions;
export default productsSlice.reducer;
