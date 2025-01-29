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
}

export interface ProductsState {
  products: IProduct[];
}

const initialState: ProductsState = { products: ProductsData };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// export const {  } = counterSlice.actions;
export default productsSlice.reducer;
