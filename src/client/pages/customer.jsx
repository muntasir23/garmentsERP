import React from 'react'
import AddCustomer from '../components/customer/addCustomer'
import CustomerList from '../components/customer/customerList'
import { Tab, Tabs } from '@nextui-org/react'

const Customer = () => {
    return (
        <div>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" classNames={{ base: 'justify-end', panel: '' }}>
                    <Tab key="customer_list" title="Customer List">
                        <CustomerList />
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