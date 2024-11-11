// sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isOpen: true },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.isOpen = true;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
