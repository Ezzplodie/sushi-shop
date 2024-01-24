import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
};
console.log(initialState);

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
      console.log("action", action);
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;

export default filterSlice.reducer;
