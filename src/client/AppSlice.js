import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        toggleTheme: true,
    },
    reducers: {
        setToggleTheme: ((state) => {
            state.toggleTheme = !state.toggleTheme
        }),
    }
})

export const { setToggleTheme} = appSlice.actions
export default appSlice.reducer