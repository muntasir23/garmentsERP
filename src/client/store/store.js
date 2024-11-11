import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../pages/dashboardSlice";
import appReducer from "../AppSlice";
import supplierReducer from "../feature/supplier/supplierSlice";
import customerReducer from "../feature/customer/customerSlice";
import sidebarReducer from "../feature/sidebar/sideBarSlice";
import itemReducer from "../feature/item/itemSlice";
import factoryReducer from '../feature/factory/factorySlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
    sidebar: sidebarReducer,
    supplier: supplierReducer,
    customer: customerReducer,
    item: itemReducer,
    factory: factoryReducer,
  },
});

export default store;
