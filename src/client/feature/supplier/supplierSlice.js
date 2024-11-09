import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSupplier, getSupplier } from "./supplierAPI";

const initialState = {
  supplierList: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchSupplierList = createAsyncThunk(
  "supplier/fetchSupplierList",
  async () => {
    const supplier = await getSupplier();
    return supplier;
  }
);

// create

export const createSupplier = createAsyncThunk(
  "supplier/createSupplier",
  async (data) => {
    const supplier = await addSupplier(data);
    return supplier;
  }
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupplierList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSupplierList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.supplierList = action.payload;
      })
      .addCase(fetchSupplierList.rejected, (state, action) => {
        state.isLoading = false;
        state.supplierList = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createSupplier.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createSupplier.fulfilled, (state, action) => {
        state.isLoading = false;
        state.supplierList.push(action.payload);
      })
      .addCase(createSupplier.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default supplierSlice.reducer;
