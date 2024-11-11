import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Supplier from "../pages/supplier";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../feature/sidebar/sideBarSlice";
import { IoIosMoon } from "react-icons/io";
import { setToggleTheme } from "../AppSlice";
import Sidebar from "../components/sidebar/sidebar";
import Customer from "../pages/customer";

const Layout = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  // const toggleTheme = useSelector((state) => state.app.toggleTheme);

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleTheme = () => {
    dispatch(setToggleTheme());
  };

  console.log(isSidebarOpen);

  return (
    <div>
      <div className={`${isSidebarOpen ? "appgrid" : "appGridClose"} relative`}>
        {/* sidebar */}
        <Sidebar />

        <div className="bg-zinc-100 dark:bg-zinc-950 w-full overflow-auto">
          {/* navbar */}
          <div className="bg-zinc-200 dark:bg-zinc-900 flex justify-between px-8 py-2 ">
            <p
              className="cursor-pointer text-[22px] dark:text-green-300 text-green-500"
              onClick={handleCloseSidebar}
            >
              <IoMenu />
            </p>
            <p
              className="cursor-pointer text-[22px] dark:text-green-300 text-green-500"
              onClick={handleTheme}
            >
              <IoIosMoon />
            </p>
          </div>

          {/* main */}
          <div className="mt-5 w-[100%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/customer" element={<Customer />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
