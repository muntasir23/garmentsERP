import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        services: [],
    },
    reducers: {
        setDashboardServices: ((state, action) => {
            state.services = action.payload
        }),
    }
})

export const { setDashboardServices} = dashboardSlice.actions
export default dashboardSlice.reducer