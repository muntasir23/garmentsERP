import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Supplier from "../pages/supplier";
import Customer from "../pages/customer";
import Factory from "../pages/factory";
import Item from "../pages/item";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, toggleSidebar } from "../feature/sidebar/sideBarSlice";
import { IoIosMoon } from "react-icons/io";
import { setToggleTheme } from "../AppSlice";
import { RxCrossCircled } from "react-icons/rx";
import {
  Accordion,
  AccordionItem,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { VscOrganization } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const Layout = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const toggleTheme = useSelector((state) => state.app.toggleTheme);

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
          } sticky flex-col top-0 h-[100vh] bg-zinc-100 dark:bg-zinc-950`}
        >
          <div className="p-2 flex justify-between">
            <h1 className="text-left font-bold text-[22px]">Dashboard</h1>
            <h1 onClick={handleCloseSidebar} className="cross text-left font-bold text-[22px]"><RxCrossCircled /></h1>
          </div>
          <Accordion variant="splitted">
            <AccordionItem
              classNames={{
                base: `text-info-${
                  toggleTheme ? "dark" : "light"
                } bg-secondary-${toggleTheme ? "dark" : "light"}`,
              }}
              key="ogranization-list"
              aria-label="Anchor"
              indicator={<VscOrganization />}
              title="Organization List"
            >
              <div className="w-full px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                <Listbox>
                <ListboxItem
                    textValue="supplier"
                    key="supplier"
                    // startContent={<FaShippingFast className={iconClasses} />}
                    startContent={<FaShippingFast />}
                  >
                    Supplier
                  </ListboxItem>
                <ListboxItem
                    textValue="supplier"
                    key="supplier"
                    // startContent={<FaShippingFast className={iconClasses} />}
                    startContent={<FaShippingFast />}
                  >
                    Supplier
                  </ListboxItem>
                <ListboxItem
                    textValue="supplier"
                    key="supplier"
                    // startContent={<FaShippingFast className={iconClasses} />}
                    startContent={<FaShippingFast />}
                  >
                    Supplier
                  </ListboxItem>
                </Listbox>
              </div>
            </AccordionItem>
          </Accordion>
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
