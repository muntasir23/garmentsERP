import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItem, getItem } from "./itemAPI";

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchItem = createAsyncThunk("item/fetchItem", async () => {
  const item = await getItem();
  return item;
});

// create

export const createItem = createAsyncThunk("item/createItem", async (data) => {
  const item = await addItem(data);
  return item;
});

const itemSlice = createSlice({
  name: "item",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItem.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.isLoading = false;
        state.item = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createItem.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item.push(action.payload);
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default itemSlice.reducer;
