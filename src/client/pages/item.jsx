import React from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import ItemList from '../components/item/itemList'
import AddItem from '../components/item/addItem'

const Item = () => {
    return (
        <div>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" classNames={{ base: 'justify-end', panel: '' }}>
                    <Tab key="customer_list" title="Customer List">
                        <ItemList />
                    </Tab>
                    <Tab key="add_customer" title="Add Customer">
                        <AddItem />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Item