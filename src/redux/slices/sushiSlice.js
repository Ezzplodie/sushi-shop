import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создайте асинхронное действие с другим именем
export const fetchSushiItemsAsync = createAsyncThunk(
  "sushi/fetchSushiById",
  async (params) => {
    const { category } = params;
    try {
      const response = await axios.get(
        `https://65746482f941bda3f2afb0ff.mockapi.io/sushi_items/?${category}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching sushi items:", error);
      throw error;
    }
  }
);

const initialState = {
  items: [],
};

const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSushiItemsAsync.fulfilled, (state, action) => {
      // Assuming you want to set the items array here
      console.log(state, "ВСЕ ДОБРЕ");
      state.status = "succes";
      state.items = action.payload;
    });

    builder.addCase(fetchSushiItemsAsync.pending, (state) => {
      // Do any necessary actions on pending, but don't use action.payload
      console.log("Відправка запросу...");
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchSushiItemsAsync.rejected, (state) => {
      // Do any necessary actions on pending, but don't use action.payload
      state.items = [];
      state.status = "error";
      console.log("СТАЛАСЯ ПОМИЛКА ЗАПРОСУ...");
    });
  },
});

export const { setItems } = sushiSlice.actions;
export default sushiSlice.reducer;
