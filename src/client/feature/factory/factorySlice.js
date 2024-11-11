import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addFactory, getFactory } from "./factoryAPI";

const initialState = {
  factory: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchFactory = createAsyncThunk(
  "factory/fetchFactory",
  async () => {
    const factory = await getFactory();
    return factory;
  }
);

// create

export const createFactory = createAsyncThunk(
  "factory/createFactory",
  async (data) => {
    const factory = await addFactory(data);
    return factory;
  }
);

const factorySlice = createSlice({
  name: "factory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFactory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchFactory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.factory = action.payload;
      })
      .addCase(fetchFactory.rejected, (state, action) => {
        state.isLoading = false;
        state.factory = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createFactory.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createFactory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.factory.push(action.payload);
      })
      .addCase(createFactory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default factorySlice.reducer;
