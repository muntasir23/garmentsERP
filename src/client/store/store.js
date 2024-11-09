import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../pages/dashboardSlice";
import appReducer from "../AppSlice";
import supplierReducer from "../feature/supplier/supplierSlice";
import customerReducer from "../feature/customer/customerSlice";
import sidebarReducer from '../feature/sidebar/sideBarSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
    sidebar:sidebarReducer,
    supplier: supplierReducer,
    customer: customerReducer,
  },
});

export default store;
