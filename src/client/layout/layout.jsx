import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Supplier from "../pages/supplier";
import Customer from "../pages/customer";
import Factory from "../pages/factory";
import Item from "../pages/item";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { setToggleSidebar } from "../components/sidebar/sidebarSlice";
import { closeSidebar, toggleSidebar } from "../feature/sidebar/sideBarSlice";
import { IoIosMoon } from "react-icons/io";
import { setToggleTheme } from "../AppSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

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
        <div
          className={`w-[100%] relative top-0 ${
            isSidebarOpen ? "sidebar none" : "sidebarToggle displayNone open"
          } sticky top-0 h-[100vh] bg-zinc-100 dark:bg-zinc-950`}
        >
          <div className="p-2">
            <h1 className="text-left font-bold text-[22px]">Dashboard</h1>
            <div className="mt-6 w-full text-left">
              <ul className="w-full">
                <li className="w-full">
                  <NavLink
                    className={`inline-block my-2 dark:hover:bg-lime-300 hover:bg-lime-300 w-full hover:text-black py-2 rounded px-1 dark:bg-zinc-800 bg-zinc-200 ${({
                      isActive,
                      isPending,
                    }) => (isActive ? "active" : "")}`}
                    to="/supplier"
                  >
                    Link One
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
              </Routes>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
