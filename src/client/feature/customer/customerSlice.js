import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCustomer, getCustomer } from "./customerAPI";

const initialState = {
  customerList: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchCustomerList = createAsyncThunk(
  "customer/fetchCustomerList",
  async () => {
    const customer = await getCustomer();
    return customer;
  }
);

// create

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (data) => {
    const customer = await addCustomer(data);
    return customer;
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCustomerList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customerList = action.payload;
      })
      .addCase(fetchCustomerList.rejected, (state, action) => {
        state.isLoading = false;
        state.customerList = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createCustomer.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customerList.push(action.payload);
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default customerSlice.reducer;
