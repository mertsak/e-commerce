// store/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./mock/Products.js";

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

export interface ProductsState {
  products: IProduct[];
  basketProducts: IProduct[];
  totalAmount: number; // Yeni state alanı
  allProducts: IProduct[];
}

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
    setBasketProducts: (state, action) => {
      state.basketProducts = action.payload;
      state.totalAmount = action.payload.reduce(
        (acc: number, product: IProduct) =>
          acc + product.price * (product.quantity ?? 0),
        0
      );
    },
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
    searchProducts: (state, action) => {
      if (action.payload === "") {
        state.products = state.allProducts; // Eğer input boşsa orijinal listeyi geri yükle
      } else {
        state.products = state.allProducts.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        );
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
} = productsSlice.actions;
export default productsSlice.reducer;
