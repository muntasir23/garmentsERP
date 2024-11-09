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
          {/* <Accordion variant="splitted">
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
              <div className="w-full max-w-[260px]  px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                <Listbox
                  onAction={(key) => handleNavigate(key)}
                  variant="faded"
                  aria-label="Listbox menu with icons"
                >
                  <ListboxItem
                    textValue="supplier"
                    key="supplier"
                    startContent={<FaShippingFast className={iconClasses} />}
                  >
                    Supplier
                  </ListboxItem>
                  <ListboxItem
                    textValue="customer"
                    key="customer"
                    startContent={
                      <RiCustomerService2Fill className={iconClasses} />
                    }
                  >
                    Customer
                  </ListboxItem>
                  <ListboxItem
                    textValue="factory"
                    key="factory"
                    startContent={<GiFactory className={iconClasses} />}
                  >
                    Factory
                  </ListboxItem>
                  <ListboxItem
                    textValue="item"
                    key="item"
                    startContent={<GiFactory className={iconClasses} />}
                  >
                    Item
                  </ListboxItem>
                </Listbox>
              </div>
            </AccordionItem>
            <AccordionItem
              key="manage-order"
              aria-label="Anchor"
              indicator={<VscOrganization />}
              title="Manage Order"
            >
              <div className="w-full max-w-[260px]  px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                <Listbox variant="faded" aria-label="Listbox menu with icons">
                  <ListboxItem
                    key="supplier"
                    startContent={<FaShippingFast className={iconClasses} />}
                  >
                    Supplier
                  </ListboxItem>
                  <ListboxItem
                    key="customer"
                    startContent={
                      <RiCustomerService2Fill className={iconClasses} />
                    }
                  >
                    Customer
                  </ListboxItem>
                  <ListboxItem
                    key="factory"
                    startContent={<GiFactory className={iconClasses} />}
                  >
                    Factory
                  </ListboxItem>
                </Listbox>
              </div>
            </AccordionItem>
          </Accordion> */}
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
