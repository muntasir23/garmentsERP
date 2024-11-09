import React, { useState } from 'react'
import { Button, Input } from "@nextui-org/react";
import { handleError } from '../../utils/utils'

const AddItem = () => {
    const variants = ["flat", "bordered", "underlined", "faded"];
    const [item, setItem] = useState({
        artno: '',
        item: '',
        finished: '',
        std: '',
        unit: '',
        c: '',
        aPrice: '',
        supplier: '',
        contactName: '',
        email: '',
        hsCode: '',
        pc: '',
        qt: '',
        staff: '',
        remarks: ''
    })



    const handleOnChange = (e) => {
        const { name, value } = e.target
        const copyItemInfo = { ...item }
        copyItemInfo[name] = value
        setItem(copyItemInfo)
    }

    const handleSaveItem = (e) => {
        e.preventDefault()
        const { artno, item, finished, std, unit, c, aPrice, supplier, contactName, email, hsCode, pc, qt, staff, remarks } = item
        if (artno || item || finished || std || unit || c || aPrice || supplier || contactName || email || hsCode || pc || qt || staff || remarks)
            return handleError('field cant be empty')
    }

    const itemfields = [
        {
            name: 'artno',
            label: 'Art No.',
            placeholder: 'Enter art no.',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'itemName',
            label: 'Item Name',
            placeholder: 'Enter item name',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'finished',
            label: 'Finished',
            placeholder: 'Enter finished',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'std',
            label: 'Std',
            placeholder: 'Enter Std',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'unit',
            label: 'Unit',
            placeholder: 'Enter Unit',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'c',
            label: 'C',
            placeholder: 'Enter C',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'aPrice',
            label: 'A. Price',
            placeholder: 'Enter A. Price',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'supplier',
            label: 'Supplier',
            placeholder: 'Enter Supplier',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'contactName',
            label: 'Contact Name',
            placeholder: 'Enter Contact Name',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'email',
            label: 'E-mail',
            placeholder: 'Enter email',
            variant: 'flat',
            type: 'email',
        },
        {
            name: 'hsCode',
            label: 'HS Code',
            placeholder: 'Enter HS Code',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'pc',
            label: 'PC',
            placeholder: 'Enter PC',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'qt',
            label: 'QT.',
            placeholder: 'Enter QT.',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'staff',
            label: 'Staff',
            placeholder: 'Enter staff',
            variant: 'flat',
            type: 'text',
        },
        {
            name: 'remarks',
            label: 'Remarks',
            placeholder: 'Enter remarks',
            variant: 'flat',
            type: 'text',
        }
    ]

    return (
        <>
            <form onSubmit={handleSaveItem} className='flex justify-center w-full'>
                <div className='flex flex-col border-3 border-info-dark pt-5'>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {
                            itemfields.map((field) => (
                                <div className=''>
                                    <Input onChange={handleOnChange} type={field.type} name={field.name} variant={field.variant} label={field.label} placeholder={field.placeholder} />
                                </div>
                            ))
                        }

                    </div>
                    <div className='flex-1 mt-5'>
                        <Button color="primary" type='submit'>
                            Save Item
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddItem