// redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    addMultipleToCart: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
  },
});

export const selectCartItems = (state) => state.cart.items;

export const { addToCart, addMultipleToCart } = cartSlice.actions;
export default cartSlice.reducer;
