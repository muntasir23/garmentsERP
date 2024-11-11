import {
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscOrganization } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../../feature/sidebar/sideBarSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const toggleTheme = useSelector((state) => state.app.toggleTheme);

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`w-[100%] relative top-0 ${
        isSidebarOpen ? "sidebar none" : "sidebarToggle displayNone open"
      } sticky flex-col top-0 h-[100vh] bg-zinc-100 dark:bg-zinc-950`}
    >
      {/* <div className="p-2 flex justify-between">
        <h1 className="text-left font-bold text-[22px]">Dashboard</h1>
        <h1
          onClick={handleCloseSidebar}
          className="cross text-left font-bold text-[22px]"
        >
          <RxCrossCircled />
        </h1>
      </div> */}

      <div className="p-2 flex justify-between">
        <h1 className="text-left font-bold text-[22px]">Dashboard</h1>
        <h1 onClick={handleCloseSidebar} className="cross text-left text-orange-400 font-bold text-[22px]">
        <RxCrossCircled />
        </h1>
      </div>

      <Accordion variant="splitted">
        <AccordionItem
          classNames={{
            base: `text-info-${toggleTheme ? "dark" : "light"} bg-secondary-${
              toggleTheme ? "dark" : "light"
            }`,
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
                startContent={<FaShippingFast />}
              >
                Supplier
              </ListboxItem>
              <ListboxItem
                textValue="customer"
                key="customer"
                startContent={<RiCustomerService2Fill />}
              >
                Customer
              </ListboxItem>
              <ListboxItem
                textValue="factory"
                key="factory"
                startContent={<GiFactory />}
              >
                Factory
              </ListboxItem>
              <ListboxItem
                textValue="item"
                key="item"
                startContent={<GiFactory />}
              >
                Item
              </ListboxItem>
            </Listbox>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
