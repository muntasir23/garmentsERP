import React from 'react'
import SupplierList from '../components/supplier/supplierList'
import AddSupplier from '../components/supplier/addSupplier'
import { Tab, Tabs } from '@nextui-org/react'

const Supplier = () => {
    return (
        <div>
            <div className="flex w-[100%] flex-col h-full p-1">
                <Tabs aria-label="Options" classNames={{ base: 'justify-end', panel: '' }}>
                    {/* <div className='bg-slate-300'> */}

                    <Tab key="supplier_list" title="Supplier List">
                        < SupplierList />
                    </Tab>
                    <Tab key="add_supplier" title="Add Supplier">
                        <AddSupplier />
                    </Tab>
                    {/* </div> */}
                </Tabs>
            </div>
        </div>
    )
}

export default Supplier