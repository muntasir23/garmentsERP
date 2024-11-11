import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        toggleSidebar: true,
    },
    reducers: {
        setToggleSidebar: ((state) => {
            state.toggleSidebar = !state.toggleSidebar
        }),
    }
})

export const { setToggleSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer