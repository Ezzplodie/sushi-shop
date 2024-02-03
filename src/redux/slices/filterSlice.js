import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setFilters(state, action) {
      state.activeCategory = Number(action.payload.activeCategory);
    },
  },
});

export const { setActiveCategory, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
