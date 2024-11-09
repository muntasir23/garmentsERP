import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Mainbar from '../mainbar'
import { Link, useNavigate } from 'react-router-dom'
import { Accordion, AccordionItem, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { VscOrganization } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiFactory } from "react-icons/gi";
// import SidebarModal from './sidebarModal';
const SidebarOne = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const sidebarToggle = useSelector((state) => state.sidebar.toggleSidebar)
    const toggleTheme = useSelector((state) => state.app.toggleTheme)
    const navigate = useNavigate()

    const handleNavigate = (route) => {
        navigate(`/${route}`)
    }
    useEffect(() => {
        console.log(window.innerWidth)
    }, [window.innerWidth])


    return (
        <div className={`${!sidebarToggle ? 'hidden' : ''} bg-secondary-${toggleTheme ? 'dark' : 'light'} transition transform duration-500 ease-in-out xl:w-3/12 md:w-5/12 sm:w-6/12 border-r-1`}>
            <div className={`bg-info-${toggleTheme ? 'dark' : 'light'} p-3 border-b-1 mb-4`}>
                <h1 className='text-md'>Garments ERP</h1>
            </div>
            {/* <div>
                <SidebarModal/>
            </div> */}
            <Accordion variant="splitted">
                <AccordionItem
                    classNames={{
                        base: `text-info-${toggleTheme ? 'dark' : 'light'} bg-secondary-${toggleTheme ? 'dark' : 'light'}`,
                    }} key="ogranization-list" aria-label="Anchor" indicator={<VscOrganization />} title="Organization List">
                    <div className="w-full max-w-[260px]  px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                        <Listbox
                            onAction={(key) => (handleNavigate(key))}
                            variant="faded" aria-label="Listbox menu with icons">
                            <ListboxItem textValue='supplier'
                                key="supplier"
                                startContent={<FaShippingFast className={iconClasses} />}
                            >

                                Supplier
                            </ListboxItem>
                            <ListboxItem
                                textValue='customer'
                                key="customer"
                                startContent={<RiCustomerService2Fill className={iconClasses} />}
                            >
                                Customer
                            </ListboxItem>
                            <ListboxItem
                                textValue='factory'
                                key="factory"
                                startContent={<GiFactory className={iconClasses} />}
                            >
                                Factory
                            </ListboxItem>
                            <ListboxItem
                                textValue='item'
                                key="item"
                                startContent={<GiFactory className={iconClasses} />}
                            >
                                Item
                            </ListboxItem>


                        </Listbox>
                    </div>
                </AccordionItem>
                <AccordionItem key="manage-order" aria-label="Anchor" indicator={<VscOrganization />} title="Manage Order">
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
                                startContent={<RiCustomerService2Fill className={iconClasses} />}
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

            </Accordion>

        </div>
    )
}

export default SidebarOne