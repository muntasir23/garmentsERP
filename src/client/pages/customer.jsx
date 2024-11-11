import React from 'react'
import AddCustomer from '../components/customer/addCustomer'
import CustomerList from '../components/customer/customerList'
import { Tab, Tabs } from '@nextui-org/react'
import CustomerListNew from '../components/customer/Customer'

const Customer = () => {
    return (
        <div>
            <div className="flex w-[100%] flex-col h-full p-1">
                <Tabs aria-label="Options" classNames={{ base: 'justify-end', panel: '' }}>
                    <Tab key="customer_list" title="Customer List">
                        {/* <CustomerList /> */}
                    <CustomerListNew />
                    </Tab>
                    <Tab key="add_customer" title="Add Customer">
                        <AddCustomer />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Customer