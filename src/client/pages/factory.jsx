import React from 'react'
import AddFactory from '../components/factory/addFactory'
import FactoryList from '../components/factory/factoryList'
import { Tab, Tabs } from '@nextui-org/react'

const Factory = () => {
    return (
        <div>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" classNames={{ base: 'justify-end', panel: '' }}>
                    <Tab key="factory_list" title="Factory List">
                        < FactoryList />
                    </Tab>
                    <Tab key="add_factory" title="Add Factory">
                        < AddFactory />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Factory